export function resolvePayout(params: {
  bet: number
  crashPoint: number
  cashoutMultiplier: number | null
}): number {
  if (params.cashoutMultiplier === null) {
    return 0
  }

  if (params.cashoutMultiplier > params.crashPoint) {
    return 0
  }

  return params.bet * params.cashoutMultiplier
}
