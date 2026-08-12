import { useState } from 'react'
import { CRTScreen, BootSequence } from 'rpg-prop-kit'
import type { BootLineDef } from '../i18n/ui'

export interface HeroProps {
  lines: BootLineDef[]
  navAriaLabel: string
  ctas: { href: string; label: string }[]
}

/**
 * Hero da página: uma tela CRT (do rpg-prop-kit) que "dá boot" digitando a
 * apresentação. Ao terminar, revela os atalhos para as seções. Textos vêm por
 * props (src/i18n/ui.ts) — a mesma ilha serve o PT-BR e o EN.
 * É a própria vitrine usando a biblioteca que ela apresenta.
 */
export default function Hero({ lines, navAriaLabel, ctas }: HeroProps) {
  const [done, setDone] = useState(false)

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
