//* Libraries imports
import React from "react"
import { motion } from "motion/react"

//* Constants imports
import { SYMBOL_EMOJI } from "@/lib/slot-machine/config"
import { SLOT_SYMBOLS } from "@/lib/slot-machine/types"

//* Types imports
import type { SlotSymbol } from "@/lib/slot-machine/types"

type ReelProps = {
  symbol: SlotSymbol
  isSpinning: boolean
  reelIndex: number
}

export function Reel(props: ReelProps) {
  const [displaySymbol, setDisplaySymbol] = React.useState(props.symbol)

  React.useEffect(() => {
    if (!props.isSpinning) {
      setDisplaySymbol(props.symbol)
      return
    }

    const intervalId = window.setInterval(() => {
      const randomIndex = Math.floor(Math.random() * SLOT_SYMBOLS.length)
      setDisplaySymbol(SLOT_SYMBOLS[randomIndex])
    }, 80 + props.reelIndex * 40)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [props.isSpinning, props.reelIndex, props.symbol])

  return (
    <motion.div
      animate={
        props.isSpinning
          ? { y: [0, -6, 0], scale: [1, 1.02, 1] }
          : { y: 0, scale: 1 }
      }
      className="flex h-28 w-24 items-center justify-center rounded-xl border-2 border-primary/30 bg-background/80 text-5xl shadow-inner"
      transition={
        props.isSpinning
          ? { duration: 0.2, repeat: Infinity, ease: "easeInOut" }
          : { type: "spring", stiffness: 260, damping: 18 }
      }
    >
      <span aria-hidden="true">{SYMBOL_EMOJI[displaySymbol]}</span>
    </motion.div>
  )
}
