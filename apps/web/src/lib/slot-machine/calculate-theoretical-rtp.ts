//* Types imports
import type { SlotConfig, SlotSymbol } from "./types"

function getSymbolProbabilities(strip: SlotConfig["strips"][number]) {
  const counts = new Map<SlotSymbol, number>()

  for (const symbol of strip) {
    counts.set(symbol, (counts.get(symbol) ?? 0) + 1)
  }

  const probabilities = new Map<SlotSymbol, number>()
  const stripLength = strip.length

  for (const [symbol, count] of counts) {
    probabilities.set(symbol, count / stripLength)
  }

  return probabilities
}

export function calculateTheoreticalRtp(config: SlotConfig): number {
  const reelProbabilities = config.strips.map(getSymbolProbabilities)
  const symbols = Object.keys(config.paytable) as SlotSymbol[]

  let expectedPayout = 0

  for (const symbol of symbols) {
    const matchProbability = reelProbabilities.reduce((product, probabilities) => {
      return product * (probabilities.get(symbol) ?? 0)
    }, 1)

    expectedPayout += matchProbability * config.paytable[symbol]
  }

  return expectedPayout / config.betAmount
}
