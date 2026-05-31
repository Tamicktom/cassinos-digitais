//* Libraries imports
import { Stack } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"
import { Requiriments } from "./requirements"

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
