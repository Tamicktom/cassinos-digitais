//* Types imports
import type { CoinOutcome } from "@/lib/law-of-large-numbers"

//* Utils imports
import { cn } from "@workspace/ui/lib/utils"

type RecentOutcomesProps = {
  outcomes: CoinOutcome[]
}

function getOutcomeLabel(outcome: CoinOutcome) {
  return outcome === 1 ? "Cara" : "Coroa"
}

export function RecentOutcomes(props: RecentOutcomesProps) {
  if (props.outcomes.length === 0) {
    return (
      <p className="text-center text-sm text-muted-foreground">
        Nenhum lançamento ainda
      </p>
    )
  }

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {props.outcomes.map((outcome, index) => (
        <span
          key={`${index}-${outcome}`}
          className={cn(
            "flex size-9 items-center justify-center rounded-full border text-xs font-semibold",
            outcome === 1
              ? "border-chart-1 bg-chart-1/20 text-chart-1"
              : "border-muted-foreground/40 bg-muted/30 text-muted-foreground"
          )}
          title={getOutcomeLabel(outcome)}
        >
          {outcome === 1 ? "Cara" : "Coroa"}
        </span>
      ))}
    </div>
  )
}
