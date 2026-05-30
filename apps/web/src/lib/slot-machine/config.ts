//* Types imports
import type { Paytable, SlotConfig, SlotSymbol } from "./types"

export { SLOT_SYMBOLS } from "./types"

export const BET_AMOUNT = 1
export const TARGET_RTP = 0.95
export const INITIAL_BALANCE = 1000

export const PAYTABLE: Paytable = {
  cherry: 2,
  lemon: 5,
  orange: 15,
  bell: 40,
  seven: 120,
}

const STRIP_COUNTS: Record<SlotSymbol, number> = {
  cherry: 776,
  lemon: 134,
  orange: 55,
  bell: 17,
  seven: 18,
}

function buildStrip(counts: Record<SlotSymbol, number>): SlotSymbol[] {
  const strip: SlotSymbol[] = []

  for (const symbol of Object.keys(counts) as SlotSymbol[]) {
    const count = counts[symbol]

    for (let index = 0; index < count; index += 1) {
      strip.push(symbol)
    }
  }

  return strip
}

const BASE_STRIP = buildStrip(STRIP_COUNTS)

export const SLOT_CONFIG: SlotConfig = {
  betAmount: BET_AMOUNT,
  targetRtp: TARGET_RTP,
  strips: [BASE_STRIP, BASE_STRIP, BASE_STRIP],
  paytable: PAYTABLE,
}

export const SYMBOL_LABELS: Record<SlotSymbol, string> = {
  cherry: "Cherry",
  lemon: "Lemon",
  orange: "Orange",
  bell: "Bell",
  seven: "Seven",
}

export const SYMBOL_EMOJI: Record<SlotSymbol, string> = {
  cherry: "🍒",
  lemon: "🍋",
  orange: "🍊",
  bell: "🔔",
  seven: "7️⃣",
}
