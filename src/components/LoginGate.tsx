import { useEffect, useRef, useState } from 'react'
import { CRTScreen } from 'rpg-prop-kit'

export interface LoginGateProps {
  /** URL da versão em inglês (ex.: "/en/"). */
  enHref: string
}

type Status = 'default' | 'ok' | 'muted'

// Passos da encenação: linhas digitadas ('type') e barras de progresso
// ('bar', que digitam o rótulo e enchem uma barra ASCII na mesma linha).
// O BootSequence do rpg-prop-kit não anima barras, então o gate roda sua
// própria sequência (mesma estética, motor local).
type Step =
  | { kind: 'type'; text: string; status?: Status; speed?: number }
  | { kind: 'bar'; label: string }

// A tela toda é pré-idioma, então as linhas são neutras/técnicas — o "hacker"
// preenchendo as credenciais antes de liberar o acesso. Um clique (ou Enter/
// Esc) pula a animação.
const STEPS: Step[] = [
  { kind: 'type', text: '> remote access // flippelt.github.io', status: 'muted' },
  { kind: 'type', text: '> resolving host... 185.199.108.153', status: 'muted' },
  { kind: 'type', text: '> opening channel :443 ... ok', status: 'ok' },
  { kind: 'type', text: '> user: guest' },
  // Senha digitada mais devagar, como quem digita às cegas.
  { kind: 'type', text: '> passwd: ************', speed: 42 },
  // Arco do hack: entra como GUEST, burla a auth, escala até ROOT.
  { kind: 'type', text: '> access level: GUEST', status: 'muted' },
  { kind: 'bar', label: '> bypassing auth' },
  { kind: 'bar', label: '> privilege escalation' },
  { kind: 'type', text: '> access level: ROOT ▲', status: 'ok' },
  { kind: 'bar', label: '> decrypting keyring' },
  { kind: 'type', text: '> handshake 0x7F3A9C... ok', status: 'ok' },
  // Aceno ao crack/tracer do Immersive Terminal.
  { kind: 'type', text: '> tracer detected... evaded', status: 'ok' },
  { kind: 'bar', label: '> mounting /root/portfolio' },
  { kind: 'type', text: '' },
  { kind: 'type', text: 'ACESSO CONCEDIDO / ACCESS GRANTED' },
  { kind: 'type', text: 'selecione o idioma // select language:', status: 'muted' },
]

const BAR_CELLS = 18

interface RenderLine {
  text: string
  status: Status
  /** Progresso da barra (0–1); undefined = linha sem barra. */
  bar?: number
  barDone?: boolean
}

function renderBar(progress: number, done: boolean): string {
  const filled = Math.round(progress * BAR_CELLS)
  const pct = String(Math.round(progress * 100)).padStart(3, ' ')
  return `[${'█'.repeat(filled)}${'░'.repeat(BAR_CELLS - filled)}] ${pct}%${done ? ' ok' : ''}`
}

/** Estado final da sequência inteira, para o pulo e o prefers-reduced-motion. */
function finalLines(): RenderLine[] {
  return STEPS.map((s) =>
    s.kind === 'type'
      ? { text: s.text, status: s.status ?? 'default' }
      : { text: s.label + ' ', status: 'ok', bar: 1, barDone: true },
  )
}

/**
 * Overlay de "login" da primeira visita: um terminal digita as credenciais
 * sozinho, enche as barras de conexão e libera a escolha de idioma. A escolha
 * vai para localStorage ('lang') — o script inline no <head> de index.astro é
 * quem decide se o overlay aparece (html[data-gate='show']) ou se redireciona
 * para /en/.
 */
export default function LoginGate({ enHref }: LoginGateProps) {
  const [lines, setLines] = useState<RenderLine[]>([])
  const [done, setDone] = useState(false)
  const firstBtn = useRef<HTMLButtonElement>(null)
  const skipped = useRef(false)

  useEffect(() => {
    let cancelled = false
    let timer: number | undefined
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = window.setTimeout(resolve, ms)
      })
    const halted = () => cancelled || skipped.current
    const replaceLast = (line: RenderLine) =>
      setLines((ls) => [...ls.slice(0, -1), line])

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    async function run() {
      if (reduced) {
        setLines(finalLines())
        setDone(true)
        return
      }
      for (const step of STEPS) {
        if (halted()) return
        if (step.kind === 'type') {
          const status = step.status ?? 'default'
          setLines((ls) => [...ls, { text: '', status }])
          for (let i = 1; i <= step.text.length; i++) {
            await wait(step.speed ?? 14)
            if (halted()) return
            replaceLast({ text: step.text.slice(0, i), status })
          }
          await wait(step.text ? 170 : 90)
        } else {
          const label = step.label + ' '
          setLines((ls) => [...ls, { text: '', status: 'default' }])
          for (let i = 1; i <= label.length; i++) {
            await wait(12)
            if (halted()) return
            replaceLast({ text: label.slice(0, i), status: 'default' })
          }
          // Enche em incrementos irregulares — conexão "de verdade" não é linear.
          let progress = 0
          while (progress < 1) {
            await wait(45 + Math.random() * 70)
            if (halted()) return
            progress = Math.min(1, progress + 0.05 + Math.random() * 0.14)
            replaceLast({ text: label, status: 'default', bar: progress })
          }
          replaceLast({ text: label, status: 'ok', bar: 1, barDone: true })
          await wait(200)
        }
      }
      if (!halted()) setDone(true)
    }
    run()

    return () => {
      cancelled = true
      if (timer !== undefined) window.clearTimeout(timer)
    }
  }, [])

  // Clique/Enter/Esc antes do fim: pula direto para a sequência completa.
  const skip = () => {
    if (done || skipped.current) return
    skipped.current = true
    setLines(finalLines())
    setDone(true)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') skip()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done])

  // Terminou → foco no primeiro botão (teclado navega direto).
  useEffect(() => {
    if (done) firstBtn.current?.focus()
  }, [done])

  const choose = (lang: 'pt-br' | 'en') => {
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* sem storage (modo privado etc.): segue sem lembrar */
    }
    if (lang === 'en') {
      window.location.href = enHref
    } else {
      delete document.documentElement.dataset.gate
    }
  }

  return (
    <CRTScreen theme="phosphor" className="gate__crt">
      {/* Clique em qualquer lugar do terminal pula a digitação. */}
      <div className="gate__inner" onClick={skip}>
        <div className="gate__lines" aria-live="polite">
          {lines.map((line, i) => (
            <div key={i} className={`gate__line gate__line--${line.status}`}>
              {line.text}
              {line.bar !== undefined && (
                <span className={line.barDone ? 'gate__bar gate__bar--ok' : 'gate__bar'}>
                  {renderBar(line.bar, !!line.barDone)}
                </span>
              )}
              {!done && i === lines.length - 1 && (
                <span className="gate__cursor" aria-hidden="true">
                  ▮
                </span>
              )}
            </div>
          ))}
        </div>
        <div className={`gate__actions${done ? ' gate__actions--show' : ''}`} aria-hidden={!done}>
          <button
            ref={firstBtn}
            className="gate__btn"
            type="button"
            tabIndex={done ? 0 : -1}
            onClick={() => choose('pt-br')}
          >
            ▸ continuar (pt-br)
          </button>
          <button
            className="gate__btn"
            type="button"
            tabIndex={done ? 0 : -1}
            onClick={() => choose('en')}
          >
            ▸ continue (en)
          </button>
        </div>
      </div>
    </CRTScreen>
  )
}
