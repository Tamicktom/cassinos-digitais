//* Libraries imports
import { Stack } from "@revealjs/react"

//* Components imports
import Table from "@workspace/ui/components/table"
import { Slide } from "@/components/slide"

// Análise de requisitos funcionais e não funcionais
export function Requiriments() {
  return (
    <Stack>
      <Slide>
        <h2 className="font-grand-casino text-5xl font-bold text-white">
          Análise de requisitos
        </h2>
      </Slide>
      <Slide>
        <div className="mx-auto grid w-full grid-cols-2 gap-4">
          <FunctionalRequirementsTable />
          <NonFunctionalRequirementsTable />
        </div>
      </Slide>
    </Stack>
  )
}

function FunctionalRequirementsTable() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head className="text-center text-white">
            Requisitos funcionais
          </Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Criar conta</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Fazer login</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Depositar dinheiro</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jogar</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Sacar</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ver histórico</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}

function NonFunctionalRequirementsTable() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head className="text-center text-white">
            Requisitos não funcionais
          </Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Ser seguro</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ser rápido</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ser escalável</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ser auditável</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ser disponível</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ser internacionalizado</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}
