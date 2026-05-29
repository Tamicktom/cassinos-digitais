//* Libraries imports
import { Slide, Stack } from "@revealjs/react"

//* Components imports
import Table from "@workspace/ui/components/table"

// Análise de requisitos funcionais e não funcionais
export function Requiriments() {
  return (
    <Stack>
      <Slide>
        <h2>Análise de requisitos</h2>
      </Slide>
      <Slide>
        <h3>Requisitos funcionais</h3>
        <p>Requisitos funcionais são aqueles que o sistema precisa fazer.</p>
        <ul>
          <li>Criar conta</li>
          <li>Fazer login</li>
          <li>Depositar dinheiro</li>
          <li>Jogar</li>
          <li>Sacar</li>
        </ul>
      </Slide>
      <Slide>
        <h3>Requisitos não funcionais</h3>
        <p>
          Requisitos não funcionais são qualidades que o sistema precisa ter.
        </p>
        <ul>
          <li>Ser seguro</li>
          <li>Ser rápido</li>
          <li>Ser escalável</li>
          <li>Ser auditável</li>
          <li>Ser disponível</li>
          <li>Ser internacionalizado</li>
        </ul>
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
          <Table.Head>Requisitos funcionais</Table.Head>
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
      </Table.Body>
    </Table.Root>
  )
}

function NonFunctionalRequirementsTable() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Requisitos não funcionais</Table.Head>
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
