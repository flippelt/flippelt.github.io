/** Marcado pelo LoginGate ao escolher idioma; o Hero consome e não redigita. */
export const FROM_GATE_KEY = 'portfolio:from-gate'

export function markFromGate(): void {
  try {
    sessionStorage.setItem(FROM_GATE_KEY, '1')
  } catch {
    /* sem storage */
  }
}

export function consumeFromGate(): boolean {
  try {
    if (sessionStorage.getItem(FROM_GATE_KEY) === '1') {
      sessionStorage.removeItem(FROM_GATE_KEY)
      return true
    }
  } catch {
    /* sem storage */
  }
  return false
}

export function setPageInert(on: boolean): void {
  for (const sel of ['main', '.metro', '.dock', '.skip-link']) {
    document.querySelector(sel)?.toggleAttribute('inert', on)
  }
}
