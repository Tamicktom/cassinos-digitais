//* Libraries imports
import { Stack } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"
import { MathFormula } from "@/components/math-formula"
import Table from "@workspace/ui/components/table";

export function Part4() {
  return (
    <>
      <Stack>
        <Slide>
          <h2 className="font-grand-casino text-7xl font-bold text-white pb-4">Matemática</h2>
          <p className="text-2xl text-white">A casa não precisa de sorte.</p>
        </Slide>

        <Slide>
          <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">
            Lei dos grandes números
          </h2>
          <p className="text-2xl text-white">
            Se uma experiência aleatória é repetida muitas vezes, <br /> a média dos resultados se aproxima da média teórica.
          </p>
        </Slide>

        <Slide>
          <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">
            Lei dos grandes números
          </h2>
          <MathFormula className="pt-8 text-5xl text-white">
            {String.raw`\bar{X}_n = \frac{1}{n}\sum_{i=1}^{n} X_i \xrightarrow{n \to \infty} E[X]`}
          </MathFormula>
        </Slide>

        <Slide>
          <h2 className="font-grand-casino text-5xl">Expected Value</h2>
          <div className="grid w-full grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <MathFormula className="text-5xl">
                {String.raw`E(X) = \sum_{i=1}^{n} p_i \cdot x_i`}
              </MathFormula>
              <p className="text-lg font-bold text-white">
                Média ponderada dos resultados possíveis.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-end">
              <span className="flex items-center gap-2">
                <MathFormula className="text-5xl">
                  {String.raw`p_i`}
                </MathFormula>
                <p className="text-lg font-bold text-white">
                  Probabilidade do resultado i.
                </p>
              </span>
              <span className="flex items-center gap-2">
                <MathFormula className="text-5xl">
                  {String.raw`x_i`}
                </MathFormula>
                <p className="text-lg font-bold text-white">Resultado i.</p>
              </span>
            </div>
          </div>
        </Slide>

        <Slide>
          <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">
            RTP e House Edge
          </h2>
          <div className="grid w-full grid-cols-2 gap-4">
            <span className="text-lg font-bold text-white">
            RPT = Return to Player (Retorno ao Jogador)
            </span>
            <span className="text-lg font-bold text-white">
              House Edge (Vantagem da Casa)
            </span>
          </div>
        </Slide>

        <Slide className="h-[70svh]">
          <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">
            RTP e House Edge
          </h2>
          <div className="w-full">
            <Table.Root className="w-full table-fixed">
              <Table.Header>
                <Table.Row>
                  <Table.Head className="w-32 text-center text-white">RTP do jogo</Table.Head>
                  <Table.Head className="w-32 text-center text-white">House Edge</Table.Head>
                  <Table.Head className="w-48 max-w-48 whitespace-normal text-left text-white">
                    Interpretação
                  </Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell className="text-center">99%</Table.Cell>
                  <Table.Cell className="text-center">1%</Table.Cell>
                  <Table.Cell className="w-48 max-w-48 whitespace-normal text-left">
                    A cada R$ 100 apostados, o retorno teórico é R$ 99.
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="text-center">96%</Table.Cell>
                  <Table.Cell className="text-center">4%</Table.Cell>
                  <Table.Cell className="w-48 max-w-48 whitespace-normal text-left">
                    A cada R$ 100 apostados, o retorno teórico é R$ 96.
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="text-center">90%</Table.Cell>
                  <Table.Cell className="text-center">10%</Table.Cell>
                  <Table.Cell className="w-48 max-w-48 whitespace-normal text-left">
                    A cada R$ 100 apostados, o retorno teórico é R$ 90.
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="text-center">80%</Table.Cell>
                  <Table.Cell className="text-center">20%</Table.Cell>
                  <Table.Cell className="w-48 max-w-48 whitespace-normal text-left">
                    A cada R$ 100 apostados, o retorno teórico é R$ 80.
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </div>
        </Slide>
      </Stack>
    </>
  )
}
