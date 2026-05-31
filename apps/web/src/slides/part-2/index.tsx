//* Libraries imports
import { Stack } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"
import { Requiriments } from "./requirements"
import Table from "@workspace/ui/components/table"

export function Part2() {
  return (
    <>
      <Slide>
        <h2 className="font-grand-casino text-5xl font-bold text-white">
          Se eu pedir para você fazer um tigrinho, <br /> como você faria?
        </h2>
      </Slide>
      <AboutArchitecture />
      <Requiriments />
      <FullVision />
      <TheMoneyProblem />
    </>
  )
}

function AboutArchitecture() {
  return (
    <Slide>
      <p className="pb-12 text-center text-3xl font-bold text-white">
        Arquitetar um sistema é essencialmente <br />
        <strong>tomar decisões</strong> sobre:
      </p>

      <div className="mx-auto grid w-1/2 grid-cols-2 gap-2 text-2xl text-foreground">
        <div className="col-span-1 flex flex-col gap-2 text-center">
          <span>Requisitos</span>
          <span>Usuários</span>
          <span>Dados</span>
          <span>Segurança</span>
        </div>
        <div className="col-span-1 flex flex-col gap-2 text-center">
          <span>Infraestrutura</span>
          <span>Escalabilidade</span>
          <span>Manutenção</span>
          <span>Implantação</span>
        </div>
        <div className="col-span-2 text-center">
          <span>...</span>
        </div>
      </div>
    </Slide>
  )
}

function FullVision(){
  return (
    <Slide>
      <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">
        Visão geral da arquitetura
      </h2>
      <div className="w-full flex justify-center items-center">
        <img src="/assets/arquitetura.svg" alt="Visão geral da arquitetura" className="w-2/3" />
      </div>
    </Slide>
  );
}

function TheMoneyProblem() {
  return (
    <Stack>
      <Slide>
        <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">
          O problema do dinheiro
        </h2>
        <div>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head></Table.Head>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row></Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </Slide>

      <Slide>
        <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">
          Exemplo ruim
        </h2>
        <div className="w-full flex justify-center items-center">
        <img src="/assets/bad-database.svg" 
        alt="Diagrama do banco" 
        className="w-1/2" 
        data-preview-image="/assets/bad-database.svg" />
      </div>
      </Slide>

      <Slide>
        <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">
          Exemplo bom
        </h2>
        <div className="w-full flex justify-center items-center">
        <img src="/assets/diagrama-do-banco.svg" 
        alt="Diagrama do banco" 
        className="w-2/3" 
        data-preview-image="/assets/diagrama-do-banco.svg" />
      </div>
      </Slide>
    </Stack>
  );
}