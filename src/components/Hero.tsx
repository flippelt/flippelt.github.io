import { useState } from 'react'
import { CRTScreen, BootSequence } from 'rpg-prop-kit'

const LINES = [
  { text: '> booting rpg.toolkit // felipe lippelt', status: 'muted' as const },
  { text: '> carregando módulos de mesa...', status: 'ok' as const },
  { text: '', status: 'muted' as const },
  { text: 'FELIPE LIPPELT', status: 'default' as const },
  { text: 'ferramentas para mestres e mesas de RPG', status: 'muted' as const },
]

/**
 * Hero da página: uma tela CRT (do rpg-prop-kit) que "dá boot" digitando a
 * apresentação. Ao terminar, revela o atalho para a grade de projetos.
 * É a própria vitrine usando a biblioteca que ela apresenta.
 */
export default function Hero() {
  const [done, setDone] = useState(false)

  return (
    <CRTScreen theme="phosphor" className="hero-crt">
      <div className="hero-inner">
        <BootSequence
          lines={LINES}
          speed={26}
          lineDelay={320}
          cursor
          onDone={() => setDone(true)}
        />
        <nav
          className={`hero-cta-row${done ? ' hero-cta-row--show' : ''}`}
          aria-label="Navegação"
          aria-hidden={!done}
        >
          <a className="hero-cta" href="#sobre" tabIndex={done ? 0 : -1}>
            ▾ sobre
          </a>
          <a className="hero-cta" href="#projetos" tabIndex={done ? 0 : -1}>
            ▾ projetos
          </a>
        </nav>
      </div>
    </CRTScreen>
  )
}
