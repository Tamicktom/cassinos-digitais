//* Libraries imports
import { useCallback, useState } from "react"

//* Utils imports
import {
  createInitialState,
  getEmpiricalRtp,
  getHouseEdge,
  getHouseProfit,
  runBatch,
} from "@/lib/house-edge-simulator"
import { DEFAULT_RTP } from "@/lib/house-edge-simulator/constants"

//* Types imports
import type { HistoryPoint, SimulationState } from "@/lib/house-edge-simulator"

export function useHouseEdgeSimulator() {
  const [state, setState] = useState<SimulationState>(() =>
    createInitialState(DEFAULT_RTP)
  )

  const addGames = useCallback((count: number) => {
    if (count < 1) {
      return
    }

    setState((currentState) => runBatch(currentState, count, Math.random))
  }, [])

  const setRtp = useCallback((rtp: number) => {
    setState(createInitialState(rtp))
  }, [])

  const reset = useCallback(() => {
    setState((currentState) => createInitialState(currentState.rtp))
  }, [])

  return {
    addGames,
    empiricalRtp: getEmpiricalRtp(state),
    history: state.history as HistoryPoint[],
    houseEdge: getHouseEdge(state.rtp),
    houseProfit: getHouseProfit(state),
    reset,
    rtp: state.rtp,
    setRtp,
    totalGames: state.totalGames,
    totalPaid: state.totalPaid,
    totalWagered: state.totalWagered,
  }
}
