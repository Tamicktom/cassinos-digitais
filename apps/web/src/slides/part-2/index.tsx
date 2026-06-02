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
      <Games />
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

function FullVision() {
  return (
    <Slide>
      <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
        Visão geral da arquitetura
      </h2>
      <div className="flex w-full items-center justify-center">
        <img
          src="/assets/arquitetura.svg"
          alt="Visão geral da arquitetura"
          className="w-2/3"
        />
      </div>
    </Slide>
  )
}

function TheMoneyProblem() {
  return (
    <Stack>
      <Slide>
        <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
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
        <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
          Exemplo ruim
        </h2>
        <div className="flex w-full items-center justify-center">
          <img
            src="/assets/bad-database.svg"
            alt="Diagrama do banco"
            className="w-1/2"
            data-preview-image="/assets/bad-database.svg"
          />
        </div>
      </Slide>

      <Slide>
        <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
          Exemplo bom
        </h2>
        <div className="flex w-full items-center justify-center">
          <img
            src="/assets/diagrama-do-banco.svg"
            alt="Diagrama do banco"
            className="w-2/3"
            data-preview-image="/assets/diagrama-do-banco.svg"
          />
        </div>
      </Slide>
    </Stack>
  )
}

const GAME_PROVIDER_LOGOS = [
  {
    name: "Evolution",
    src: "/assets/logos_fornecedores_cassino_online/evolution.svg",
  },
  {
    name: "Pragmatic Play",
    src: "/assets/logos_fornecedores_cassino_online/pragmatic_play.svg",
  },
  {
    name: "NetEnt",
    src: "/assets/logos_fornecedores_cassino_online/netent.png",
  },
  {
    name: "Microgaming",
    src: "/assets/logos_fornecedores_cassino_online/microgaming.svg",
  },
  {
    name: "Playtech",
    src: "/assets/logos_fornecedores_cassino_online/playtech.png",
  },
  {
    name: "Play'n GO",
    src: "/assets/logos_fornecedores_cassino_online/playngo.png",
  },
  {
    name: "Red Tiger",
    src: "/assets/logos_fornecedores_cassino_online/red_tiger.png",
  },
  {
    name: "Yggdrasil",
    src: "/assets/logos_fornecedores_cassino_online/yggdrasil.png",
  },
  {
    name: "Nolimit City",
    src: "/assets/logos_fornecedores_cassino_online/nolimit_city.png",
  },
  {
    name: "Hacksaw Gaming",
    src: "/assets/logos_fornecedores_cassino_online/hacksaw_gaming.png",
  },
] as const

function Games() {
  return (
    <Stack>
      <Slide>
        <h2 className="pb-8 font-grand-casino text-7xl font-bold text-white">
          Jogos
        </h2>
        <div className="flex w-full items-center justify-center">
          <span className="text-2xl font-bold text-white">
            Normalmente os jogos são criados por terceiros.
          </span>
        </div>
      </Slide>

      <Slide>
        <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
          Algumas empresas de jogos...
        </h2>
        <div className="grid w-full grid-cols-4 gap-4">
          {GAME_PROVIDER_LOGOS.map(function (logo) {
            return (
              <div
                key={logo.src}
                className="flex h-24 items-center justify-center rounded-lg bg-white/10 p-4"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            )
          })}
        </div>
      </Slide>
    </Stack>
  )
}
