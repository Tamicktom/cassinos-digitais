//* Constants imports
import {
  BET_AMOUNT,
  BUCKET_THRESHOLD_100K,
  BUCKET_THRESHOLD_10K,
  BUCKET_THRESHOLD_1K,
  DEFAULT_RTP,
  MERGE_FACTOR,
} from "./constants"

//* Types imports
import type { HistoryPoint, Rng, SimulationState } from "./types"

function createHistoryPoint(
  gameCount: number,
  totalWagered: number,
  totalPaid: number,
  gamesInBucket: number
): HistoryPoint {
  return {
    gameCount,
    empiricalRtp: totalWagered > 0 ? totalPaid / totalWagered : 0,
    houseProfit: totalWagered - totalPaid,
    gamesInBucket,
  }
}

export function createInitialState(rtp: number = DEFAULT_RTP): SimulationState {
  return {
    rtp,
    totalGames: 0,
    totalWagered: 0,
    totalPaid: 0,
    history: [createHistoryPoint(0, 0, 0, 0)],
  }
}

export function playRound(rtp: number, rng: Rng): number {
  return rng() < rtp ? BET_AMOUNT : 0
}

export function getBucketSize(totalGames: number): number {
  if (totalGames < BUCKET_THRESHOLD_1K) {
    return 1
  }

  if (totalGames < BUCKET_THRESHOLD_10K) {
    return 10
  }

  if (totalGames < BUCKET_THRESHOLD_100K) {
    return 100
  }

  return 1_000
}

export function compressHistory(
  points: HistoryPoint[],
  mergeFactor: number
): HistoryPoint[] {
  if (points.length <= 1 || mergeFactor < 2) {
    return points
  }

  const baseline = points[0]
  const dataPoints = points.slice(1)
  const completeGroupCount = Math.floor(dataPoints.length / mergeFactor)
  const merged: HistoryPoint[] = [baseline]

  for (let groupIndex = 0; groupIndex < completeGroupCount; groupIndex += 1) {
    const start = groupIndex * mergeFactor
    const group = dataPoints.slice(start, start + mergeFactor)
    const lastPoint = group[group.length - 1]

    if (!lastPoint) {
      continue
    }

    merged.push({
      gameCount: lastPoint.gameCount,
      empiricalRtp: lastPoint.empiricalRtp,
      houseProfit: lastPoint.houseProfit,
      gamesInBucket: group.reduce(
        (total, point) => total + point.gamesInBucket,
        0
      ),
    })
  }

  const remainderStart = completeGroupCount * mergeFactor
  merged.push(...dataPoints.slice(remainderStart))

  return merged
}

function flushPendingHistoryPoint(
  history: HistoryPoint[],
  totalGames: number,
  totalWagered: number,
  totalPaid: number
): HistoryPoint[] {
  const lastPoint = history[history.length - 1]

  if (!lastPoint || lastPoint.gameCount === totalGames) {
    return history
  }

  const gamesInBucket = totalGames - lastPoint.gameCount

  return [
    ...history,
    createHistoryPoint(totalGames, totalWagered, totalPaid, gamesInBucket),
  ]
}

function applyThresholdCompression(
  history: HistoryPoint[],
  previousTotalGames: number,
  nextTotalGames: number,
  totalWagered: number,
  totalPaid: number
): HistoryPoint[] {
  let nextHistory = history

  if (
    previousTotalGames < BUCKET_THRESHOLD_1K &&
    nextTotalGames >= BUCKET_THRESHOLD_1K
  ) {
    nextHistory = flushPendingHistoryPoint(
      nextHistory,
      nextTotalGames,
      totalWagered,
      totalPaid
    )
    nextHistory = compressHistory(nextHistory, MERGE_FACTOR)
  }

  if (
    previousTotalGames < BUCKET_THRESHOLD_10K &&
    nextTotalGames >= BUCKET_THRESHOLD_10K
  ) {
    nextHistory = flushPendingHistoryPoint(
      nextHistory,
      nextTotalGames,
      totalWagered,
      totalPaid
    )
    nextHistory = compressHistory(nextHistory, MERGE_FACTOR)
  }

  if (
    previousTotalGames < BUCKET_THRESHOLD_100K &&
    nextTotalGames >= BUCKET_THRESHOLD_100K
  ) {
    nextHistory = flushPendingHistoryPoint(
      nextHistory,
      nextTotalGames,
      totalWagered,
      totalPaid
    )
    nextHistory = compressHistory(nextHistory, MERGE_FACTOR)
  }

  return nextHistory
}

export function getEmpiricalRtp(state: SimulationState): number {
  if (state.totalWagered === 0) {
    return 0
  }

  return state.totalPaid / state.totalWagered
}

export function getHouseProfit(state: SimulationState): number {
  return state.totalWagered - state.totalPaid
}

export function getHouseEdge(rtp: number): number {
  return 1 - rtp
}

export function runBatch(
  state: SimulationState,
  count: number,
  rng: Rng
): SimulationState {
  if (count < 1) {
    return state
  }

  let totalGames = state.totalGames
  let totalWagered = state.totalWagered
  let totalPaid = state.totalPaid
  let history = state.history
  const previousTotalGames = totalGames

  for (let index = 0; index < count; index += 1) {
    const payout = playRound(state.rtp, rng)
    totalWagered += BET_AMOUNT
    totalPaid += payout
    totalGames += 1

    const bucketSize = getBucketSize(totalGames)
    const lastPoint = history[history.length - 1]
    const gamesSinceLastPoint = totalGames - (lastPoint?.gameCount ?? 0)

    if (gamesSinceLastPoint >= bucketSize) {
      history = [
        ...history,
        createHistoryPoint(
          totalGames,
          totalWagered,
          totalPaid,
          bucketSize
        ),
      ]
    }
  }

  history = applyThresholdCompression(
    history,
    previousTotalGames,
    totalGames,
    totalWagered,
    totalPaid
  )

  return {
    rtp: state.rtp,
    totalGames,
    totalWagered,
    totalPaid,
    history,
  }
}
