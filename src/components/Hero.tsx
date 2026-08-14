import { useEffect, useState } from 'react'
import { CRTScreen, BootSequence } from 'rpg-prop-kit'
import type { BootLineDef } from '../i18n/ui'
import { consumeFromGate } from '../lib/gate'

export interface HeroProps {
  lines: BootLineDef[]
  navAriaLabel: string
  ctas: { href: string; label: string }[]
}

type Phase = 'wait' | 'static' | 'boot'

function initialPhase(): Phase {
  if (typeof document === 'undefined') return 'boot'
  if (document.documentElement.dataset.gate === 'show') return 'wait'
  if (consumeFromGate()) return 'static'
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'static'
  return 'boot'
}

function StaticBoot({
  lines,
  navAriaLabel,
  ctas,
}: HeroProps) {
  return (
    <CRTScreen theme="phosphor" className="hero-crt">
      <div className="hero-inner">
        <div className="rpk-boot">
          {lines.map((line, i) => (
            <div key={i} className={`rpk-boot__line rpk-boot__line--${line.status}`}>
              {line.text}
            </div>
          ))}
        </div>
        <nav className="hero-cta-row hero-cta-row--show" aria-label={navAriaLabel}>
          {ctas.map((cta) => (
            <a key={cta.href} className="hero-cta" href={cta.href}>
              {cta.label}
            </a>
          ))}
        </nav>
      </div>
    </CRTScreen>
  )
}

/**
 * Hero da página: uma tela CRT (do rpg-prop-kit) que "dá boot" digitando a
 * apresentação. Se o visitante acabou de passar no gate (ou prefere menos
 * movimento), as linhas já nascem prontas — sem teatro em dobro.
 */
export default function Hero({ lines, navAriaLabel, ctas }: HeroProps) {
  const [phase, setPhase] = useState<Phase>(initialPhase)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (phase !== 'wait') return
    const root = document.documentElement
    const reveal = () => setPhase('static')
    if (root.dataset.gate !== 'show') {
      reveal()
      return
    }
    const obs = new MutationObserver(() => {
      if (root.dataset.gate !== 'show') {
        reveal()
        obs.disconnect()
      }
    })
    obs.observe(root, { attributes: true, attributeFilter: ['data-gate'] })
    return () => obs.disconnect()
  }, [phase])

  if (phase === 'wait' || phase === 'static') {
    return <StaticBoot lines={lines} navAriaLabel={navAriaLabel} ctas={ctas} />
  }

  return (
    <CRTScreen theme="phosphor" className="hero-crt">
      <div className="hero-inner">
        <BootSequence
          lines={lines}
          speed={26}
          lineDelay={320}
          cursor
          onDone={() => setDone(true)}
        />
        <nav
          className={`hero-cta-row${done ? ' hero-cta-row--show' : ''}`}
          aria-label={navAriaLabel}
          aria-hidden={!done}
        >
          {ctas.map((cta) => (
            <a key={cta.href} className="hero-cta" href={cta.href} tabIndex={done ? 0 : -1}>
              {cta.label}
            </a>
          ))}
        </nav>
      </div>
    </CRTScreen>
  )
}
