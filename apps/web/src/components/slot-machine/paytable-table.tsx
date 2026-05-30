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
import { getOutcomeProbabilities } from "@/lib/slot-machine/calculate-theoretical-rtp"

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

export function PaytableTable() {
  const outcomes = useMemo(() => getOutcomeProbabilities(SLOT_CONFIG), [])

  const winningProbability = useMemo(() => {
    return outcomes.reduce((total, outcome) => total + outcome.probability, 0)
  }, [outcomes])

  const losingProbability = 1 - winningProbability

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tabela de prêmios</CardTitle>
        <CardDescription>
          Valores e probabilidades de cada combinação vencedora (3 símbolos
          iguais).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.Head>Símbolo</Table.Head>
              <Table.Head>Prêmio</Table.Head>
              <Table.Head>Probabilidade</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {outcomes.map((outcome) => (
              <Table.Row key={outcome.symbol}>
                <Table.Cell>
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true">
                      {SYMBOL_EMOJI[outcome.symbol]}
                    </span>
                    <span>{SYMBOL_LABELS[outcome.symbol]}</span>
                  </span>
                </Table.Cell>
                <Table.Cell>{formatCurrency(outcome.payout)}</Table.Cell>
                <Table.Cell>
                  {formatProbability(outcome.probability)}
                </Table.Cell>
              </Table.Row>
            ))}
            <Table.Row>
              <Table.Cell>Sem combinação</Table.Cell>
              <Table.Cell>{formatCurrency(0)}</Table.Cell>
              <Table.Cell>{formatProbability(losingProbability)}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </CardContent>
    </Card>
  )
}
