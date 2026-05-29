//* Libraries imports
import { Slide, Stack } from "@revealjs/react"

//* Local imports
import { Requiriments } from "./requirements"

export function Part2() {
  return (
    <>
      <Slide>
        <h2>Se eu pedir para você arquitetar um sistema, o que você faria?</h2>
      </Slide>
      <AboutArchitecture />
      <Requiriments />
    </>
  )
}

function AboutArchitecture() {
  return (
    <Slide>
      <p className="text-foreground">
        Arquitetar um sistema é essencialmente <br />
        <strong>tomar decisões</strong> sobre:
      </p>

      <div className="grid w-full grid-cols-2 gap-2 text-foreground">
        <ul className="list-inside list-disc">
          <li>Requisitos</li>
          <li>Usuários</li>
          <li>Dados</li>
          <li>Segurança</li>
          <li>Infraestrutura</li>
          <li>Escalabilidade</li>
          <li>Manutenção</li>
          <li>Implantação</li>
          <li>...</li>
        </ul>
        <div></div>
      </div>
    </Slide>
  )
}
