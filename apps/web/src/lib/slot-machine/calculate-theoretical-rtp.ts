//* Types imports
import type { SlotConfig, SlotSymbol } from "./types"
import { SLOT_SYMBOLS } from "./types"

//* Utils imports
import { resolvePayout } from "./resolve-payout"

export type OutcomeProbability = {
  symbol: SlotSymbol
  payout: number
  probability: number
}

export type ReelCombination = {
  reels: SlotSymbol[]
  payout: number
  probability: number
}

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

function getMatchProbability(
  symbol: SlotSymbol,
  reelProbabilities: Map<SlotSymbol, number>[]
) {
  return reelProbabilities.reduce((product, probabilities) => {
    return product * (probabilities.get(symbol) ?? 0)
  }, 1)
}

function getCombinationProbability(
  reels: SlotSymbol[],
  reelProbabilities: Map<SlotSymbol, number>[]
) {
  return reels.reduce((product, symbol, index) => {
    return product * (reelProbabilities[index]?.get(symbol) ?? 0)
  }, 1)
}

export function getAllReelCombinations(config: SlotConfig): ReelCombination[] {
  const reelProbabilities = config.strips.map(getSymbolProbabilities)
  const combinations: ReelCombination[] = []

  for (const firstSymbol of SLOT_SYMBOLS) {
    for (const secondSymbol of SLOT_SYMBOLS) {
      for (const thirdSymbol of SLOT_SYMBOLS) {
        const reels: SlotSymbol[] = [firstSymbol, secondSymbol, thirdSymbol]

        combinations.push({
          reels,
          payout: resolvePayout(reels, config.paytable),
          probability: getCombinationProbability(reels, reelProbabilities),
        })
      }
    }
  }

  return combinations
}

export function getOutcomeProbabilities(
  config: SlotConfig
): OutcomeProbability[] {
  const reelProbabilities = config.strips.map(getSymbolProbabilities)
  const symbols = Object.keys(config.paytable) as SlotSymbol[]

  return symbols
    .map((symbol) => ({
      symbol,
      payout: config.paytable[symbol],
      probability: getMatchProbability(symbol, reelProbabilities),
    }))
    .sort((first, second) => first.payout - second.payout)
}

export function calculateTheoreticalRtp(config: SlotConfig): number {
  const outcomes = getOutcomeProbabilities(config)

  const expectedPayout = outcomes.reduce((total, outcome) => {
    return total + outcome.probability * outcome.payout
  }, 0)

  return expectedPayout / config.betAmount
}
