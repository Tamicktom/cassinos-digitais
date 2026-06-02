//* Libraries imports
import { Stack } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"
import Table from "@workspace/ui/components/table";

export function Part3() {
  return (
    <>
      <Stack>
      <Slide>
        <h2 className="font-grand-casino text-7xl font-bold text-white pb-4">
          Dark Patterns
        </h2>
        <p className="text-2xl text-white">
          Escolhas de design que induzem usuários a fazer algo <br /> que talvez não fariam se a informação estivesse clara.
        </p>
      </Slide>

      <Slide className="h-[65svh]">
        <div className="w-full flex justify-center items-center">
        <img
          src="/assets/candy-rush.png"
          alt="Dark Patterns 3"
          className="w-full rounded-lg border"
        />
        </div>
      </Slide>

      <Slide className="h-[65svh]">
        <div className="w-full flex justify-center items-center">
        <img
          src="/assets/dragon.png"
          alt="Dark Patterns 1"
          className="w-full rounded-lg border"
        />
        </div>
      </Slide>

      <Slide className="h-[65svh]">
        <div className="w-full flex justify-center items-center">
        <img
          src="/assets/spaceman.png"
          alt="Dark Patterns 2"
          className="w-full rounded-lg border"
        />
        </div>
      </Slide>

      <Slide>
        <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">
          O Ciclo da Aposta
        </h2>
        <div className="w-full flex justify-center items-center">
        <img
          src="/assets/fluxo.svg"
          alt="O Ciclo da Aposta"
          className="w-full rounded-lg border"
        />
        </div>
      </Slide>

      <Slide>
        <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">
          Algoritmos de Personalização
        </h2>
        <div className="w-full">
          <Table.Root className="w-full table-fixed">
            <Table.Header>
              <Table.Row>
                <Table.Head className="w-28 text-center text-white">Dado observado</Table.Head>
                <Table.Head className="w-28 text-center text-white">Uso possível</Table.Head>
                <Table.Head className="w-28 text-center text-white">Risco ético</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="text-center">Horário de uso</Table.Cell>
                <Table.Cell className="text-center">Enviar notificações no <br /> momento de maior retorno</Table.Cell>
                <Table.Cell className="text-center">Invadir rotina e <br /> vulnerabilidade.</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="text-center">Histórico de perdas</Table.Cell>
                <Table.Cell className="text-center">Oferecer bônus de recuperação</Table.Cell>
                <Table.Cell className="text-center">Estimular tentativa de <br /> recuperar prejuízo.</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="text-center">Frequência de depósitos</Table.Cell>
                <Table.Cell className="text-center">Sugerir valores maiores</Table.Cell>
                <Table.Cell className="text-center">Normalizar aumento de gasto.</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="text-center">Abandono no saque</Table.Cell>
                <Table.Cell className="text-center">Mostrar pop-up de retenção</Table.Cell>
                <Table.Cell className="text-center">Dificultar saída financeira.</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="text-center">Resposta a promoções</Table.Cell>
                <Table.Cell className="text-center">Segmentar campanhas</Table.Cell>
                <Table.Cell className="text-center">Explorar perfil impulsivo.</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </Slide>
      </Stack>
    </>
  )
}
