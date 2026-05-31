//* Types imports
import type { Paytable, SlotSymbol } from "./types"

export function resolvePayout(reels: SlotSymbol[], paytable: Paytable): number {
  if (reels.length === 0) {
    return 0
  }

  const firstSymbol = reels[0]
  const isThreeOfAKind = reels.every((symbol) => symbol === firstSymbol)

  if (!isThreeOfAKind) {
    return 0
  }

  return paytable[firstSymbol]
}
