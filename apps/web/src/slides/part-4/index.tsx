//* Libraries imports
import { Stack, Code } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"
import { MathFormula } from "@/components/math-formula"
import { LawOfLargeNumbersDemo } from "@/components/law-of-large-numbers"
import Table from "@workspace/ui/components/table"

export function Part4() {
  return (
    <>
      <Stack>
        <Slide>
          <h2 className="pb-4 font-grand-casino text-7xl font-bold text-white">
            Matemática
          </h2>
          <p className="text-2xl text-white">A casa não precisa de sorte.</p>
        </Slide>

        <Slide>
          <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
            Lei dos grandes números
          </h2>
          <p className="text-2xl text-white">
            Se uma experiência aleatória é repetida muitas vezes, <br /> a média
            dos resultados se aproxima da média teórica.
          </p>
        </Slide>

        <Slide>
          <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
            Lei dos grandes números
          </h2>
          <MathFormula className="pt-8 text-5xl text-white">
            {String.raw`\bar{X}_n = \frac{1}{n}\sum_{i=1}^{n} X_i \xrightarrow{n \to \infty} E[X]`}
          </MathFormula>
        </Slide>

        <Slide className="h-[65svh]">
          <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
            Lei dos grandes números
          </h2>
          <Code language="javascript" className="text-left text-lg">
            {`function jogarMoeda(): number {
  return Math.random() < 0.5 ? 1 : 0;
}

function mediaDeCaras(n: number): number {
  let soma = 0;

  for (let i = 0; i < n; i++) {
    soma += jogarMoeda();
  }

  return soma / n;
}

const resultado = mediaDeCaras(1000); // ~0.5`}
          </Code>
        </Slide>

        <Slide className="h-[70svh]">
          <h2 className="pb-4 font-grand-casino text-5xl font-bold text-white">
            Lei dos grandes números
          </h2>
          <LawOfLargeNumbersDemo />
        </Slide>

        <Slide>
          <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
            RTP e House Edge
          </h2>
          <div className="grid w-full grid-cols-2 gap-4">
            <span className="text-2xl font-bold text-white">
              RPT = Return to Player <br /> (Retorno ao Jogador)
            </span>
            <span className="text-2xl font-bold text-white">
              House Edge <br /> (Vantagem da Casa)
            </span>
          </div>
        </Slide>

        <Slide>
          <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
            RTP e House Edge
          </h2>
          <div className="w-full">
            <Table.Root className="w-full table-fixed">
              <Table.Header>
                <Table.Row>
                  <Table.Head className="w-32 text-center text-white">
                    RTP do jogo
                  </Table.Head>
                  <Table.Head className="w-32 text-center text-white">
                    House Edge
                  </Table.Head>
                  <Table.Head className="w-48 max-w-48 text-left whitespace-normal text-white">
                    Interpretação
                  </Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell className="text-center">99%</Table.Cell>
                  <Table.Cell className="text-center">1%</Table.Cell>
                  <Table.Cell className="w-48 max-w-48 text-left whitespace-normal">
                    A cada R$ 100 apostados, o retorno teórico é R$ 99.
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="text-center">96%</Table.Cell>
                  <Table.Cell className="text-center">4%</Table.Cell>
                  <Table.Cell className="w-48 max-w-48 text-left whitespace-normal">
                    A cada R$ 100 apostados, o retorno teórico é R$ 96.
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="text-center">90%</Table.Cell>
                  <Table.Cell className="text-center">10%</Table.Cell>
                  <Table.Cell className="w-48 max-w-48 text-left whitespace-normal">
                    A cada R$ 100 apostados, o retorno teórico é R$ 90.
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="text-center">80%</Table.Cell>
                  <Table.Cell className="text-center">20%</Table.Cell>
                  <Table.Cell className="w-48 max-w-48 text-left whitespace-normal">
                    A cada R$ 100 apostados, o retorno teórico é R$ 80.
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </div>
        </Slide>

        <Slide>
          <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
            O "quase justo" ainda dá lucro
          </h2>
          <div className="w-full">
            <Table.Root className="w-full table-fixed">
              <Table.Header>
                <Table.Row>
                  <Table.Head className="w-32 text-center text-white">
                    Total apostado <br /> no período
                  </Table.Head>
                  <Table.Head className="w-16 text-center text-white">
                    RTP
                  </Table.Head>
                  <Table.Head className="w-32 text-center text-white">
                    Retorno teórico <br /> aos jogadores
                  </Table.Head>
                  <Table.Head className="w-32 text-center text-white">
                    Receita teórica <br /> da casa
                  </Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell className="text-center">R$ 10.000</Table.Cell>
                  <Table.Cell className="text-center">96%</Table.Cell>
                  <Table.Cell className="text-center">R$ 9.600</Table.Cell>
                  <Table.Cell className="text-center">R$ 400</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="text-center">R$ 100.000</Table.Cell>
                  <Table.Cell className="text-center">96%</Table.Cell>
                  <Table.Cell className="text-center">R$ 96.000</Table.Cell>
                  <Table.Cell className="text-center">R$ 4.000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="text-center">R$ 1.000.000</Table.Cell>
                  <Table.Cell className="text-center">96%</Table.Cell>
                  <Table.Cell className="text-center">R$ 960.000</Table.Cell>
                  <Table.Cell className="text-center">R$ 40.000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className="text-center">R$ 10.000.000</Table.Cell>
                  <Table.Cell className="text-center">96%</Table.Cell>
                  <Table.Cell className="text-center">R$ 9.600.000</Table.Cell>
                  <Table.Cell className="text-center">R$ 400.000</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </div>
        </Slide>

        <Slide>
          <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
            RGN: aleatório não significa justo
          </h2>
          <p className="text-2xl text-white">
            Um resultado aleatório pode fazer parte de um jogo matematicamente
            desfavorável.
          </p>
        </Slide>

        <Slide>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head className="w-32 text-center text-white">
                  Faixa sorteada
                </Table.Head>
                <Table.Head className="w-32 text-center text-white">
                  Probabilidade
                </Table.Head>
                <Table.Head className="w-32 text-center text-white">
                  Pagamento ao jogador
                </Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="text-center">1 a 60</Table.Cell>
                <Table.Cell className="text-center">60%</Table.Cell>
                <Table.Cell className="text-center">R$ 0</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="text-center">61 a 90</Table.Cell>
                <Table.Cell className="text-center">30%</Table.Cell>
                <Table.Cell className="text-center">R$ 5</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="text-center">91 a 99</Table.Cell>
                <Table.Cell className="text-center">9%</Table.Cell>
                <Table.Cell className="text-center">R$ 20</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="text-center">100</Table.Cell>
                <Table.Cell className="text-center">1%</Table.Cell>
                <Table.Cell className="text-center">R$ 100</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Slide>

        <Slide>
          <h2 className="pb-8 font-grand-casino text-7xl font-bold text-white">
            Falácia de Monte Carlo
          </h2>
          <p className="text-2xl text-white">(Falácia do apostador)</p>
        </Slide>
      </Stack>
    </>
  )
}
