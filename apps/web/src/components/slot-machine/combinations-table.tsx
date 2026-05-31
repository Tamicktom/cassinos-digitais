//* Libraries imports
import { useMemo } from "react"

//* Components imports
import Table from "@workspace/ui/components/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

//* Constants imports
import {
  SLOT_CONFIG,
  SYMBOL_EMOJI,
  SYMBOL_LABELS,
} from "@/lib/slot-machine/config"
import { getAllReelCombinations } from "@/lib/slot-machine/calculate-theoretical-rtp"

//* Types imports
import type { SlotSymbol } from "@/lib/slot-machine/types"

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

function formatProbability(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  })
}

function SymbolCell(props: { symbol: SlotSymbol }) {
  return (
    <span className="flex items-center gap-2">
      <span aria-hidden="true">{SYMBOL_EMOJI[props.symbol]}</span>
      <span>{SYMBOL_LABELS[props.symbol]}</span>
    </span>
  )
}

export function CombinationsTable() {
  const combinations = useMemo(
    () => getAllReelCombinations(SLOT_CONFIG),
    []
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-5xl font-grand-casino">Combinações</CardTitle>
        <CardDescription className="text-neutral-600 text-lg">
          Todas as combinações possíveis dos 3 rolos, com prêmio e
          probabilidade de cada uma.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-h-[45svh] overflow-y-auto">
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head>#</Table.Head>
                <Table.Head>Rolo 1</Table.Head>
                <Table.Head>Rolo 2</Table.Head>
                <Table.Head>Rolo 3</Table.Head>
                <Table.Head>Prêmio</Table.Head>
                <Table.Head>Probabilidade</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {combinations.map((combination, index) => (
                <Table.Row
                  key={combination.reels.join("-")}
                  className={
                    combination.payout > 0 ? "bg-emerald-50/50" : undefined
                  }
                >
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>
                    <SymbolCell symbol={combination.reels[0]} />
                  </Table.Cell>
                  <Table.Cell>
                    <SymbolCell symbol={combination.reels[1]} />
                  </Table.Cell>
                  <Table.Cell>
                    <SymbolCell symbol={combination.reels[2]} />
                  </Table.Cell>
                  <Table.Cell>{formatCurrency(combination.payout)}</Table.Cell>
                  <Table.Cell>
                    {formatProbability(combination.probability)}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </div>
      </CardContent>
    </Card>
  )
}
