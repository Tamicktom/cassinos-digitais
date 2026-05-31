//* Libraries imports
import { Slide as SlidePrimitive, Stack } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"
import { AboutMeSlide } from "./about-me"
import { OnlineBettorsChart } from "./online-bettors-chart"
import { SectorRevenueChart } from "./sector-revenue-chart"

export function Part1() {
  return (
    <>
      {/* Início da apresentação */}
      <TitleSlide />
      <AboutMeSlide />
      <DisclaimerSlide />

      {/* História dos Cassinos Digitais */}
      <HistoryOfCasinosSlides />

      {/* Dados sobre crescimento do mercado de cassinos digitais (2018-2025) */}
      <MarketGrowthSlide />
      <WhyIsAProblemSlide />

      {/* Sobre a Apresentação */}
      <AboutPresentationSlide />
    </>
  )
}

function TitleSlide() {
  return (
    <SlidePrimitive>
      <h1 className="bg-linear-to-b from-primary to-secondary bg-clip-text font-grand-casino text-[7rem] font-bold text-transparent">
        Cassinos Digitais
      </h1>
      <p className="text-3xl font-bold text-white">
        Quando o Software Quer Seu Dinheiro
      </p>
    </SlidePrimitive>
  )
}

function HistoryOfCasinosSlides() {
  return (
    <Stack>
      <Slide className="h-[65svh]">
        <h2 className="pb-4 font-grand-casino text-4xl font-bold text-white">
          História dos Cassinos
        </h2>
        <div className="flex flex-col items-center gap-0">
          <img
            src="/assets/British_Museum_Royal_Game_of_Ur.jpg"
            alt="Royal Game of Ur"
            className="w-2/3 rounded-lg border"
          />
          <span className="text-sm text-muted-foreground">
            Jogo de Ur, um dos primeiros jogos de azar conhecidos
          </span>
        </div>
      </Slide>

      <Slide className="h-[65svh]">
        <h2 className="pb-4 font-grand-casino text-4xl font-bold text-white">
          História dos Cassinos
        </h2>
        <div className="flex flex-col items-center gap-0">
          <img
            src="/assets/ridotto.jpg"
            alt="Ridotto foi o primeiro cassino mercantil do ocidente"
            className="w-full rounded-lg border"
          />
          <span className="text-sm text-muted-foreground">
            Il Ridotto di palazzo Dandolo a San Moise by Francesco Guardi
          </span>
        </div>
      </Slide>

      <Slide className="h-[65svh]">
        <h2 className="pb-4 font-grand-casino text-4xl font-bold text-white">
          Cassinos nos séculos seguintes
        </h2>

        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-0">
            <img
              src="/assets/casino-de-monte-carlo.jpeg"
              alt="Casino de Monte Carlo"
              className="w-full rounded-lg border"
            />
            <span className="text-sm text-muted-foreground">
              Casino de Monte Carlo (1865)
            </span>
          </div>
          <div className="flex flex-col items-center gap-0">
            <img
              src="/assets/freemont-street.png"
              alt="Freemont Street"
              className="w-full rounded-lg border"
            />
            <span className="text-sm text-muted-foreground">
              Fremont Street (1952)
            </span>
          </div>
        </div>
      </Slide>

      <Slide className="h-[65svh]">
        <h2 className="pb-4 font-grand-casino text-4xl font-bold text-white">
          Primeiro cassino digital
        </h2>
        <div className="flex flex-col items-center gap-0">
          <img
            src="/assets/InterCasino_logo.png"
            alt="InterCasino foi o primeiro cassino digital"
            className="w-full rounded-lg border bg-white"
          />
          <span className="text-sm text-muted-foreground">
            Logo do InterCasino
          </span>
        </div>
      </Slide>
    </Stack>
  )
}

function AboutPresentationSlide() {
  return (
    <Slide>
      <h2 className="font-grand-casino text-4xl font-bold text-primary">
        Sobre a Apresentação
      </h2>
      <p className="text-2xl">
        O que é arquitetura de software? O que é engenharia de software?
      </p>
    </Slide>
  )
}

function DisclaimerSlide() {
  return (
    <Slide>
      <h2 className="font-grand-casino text-7xl font-bold text-white">
        Disclaimer
      </h2>
    </Slide>
  )
}

//* Dados sobre crescimento do mercado de cassinos digitais (2018-2025)

function MarketGrowthSlide() {
  return (
    <Stack>
      <Slide>
        <h2 className="pb-4 font-grand-casino text-4xl font-bold text-white">
          Crescimento do Mercado de Cassinos Digitais
        </h2>
        <div className="flex w-full flex-col items-center">
          <OnlineBettorsChart />
        </div>
      </Slide>

      <Slide className="text-4xl font-bold text-primary">
        <h2 className="pb-4 font-grand-casino text-4xl font-bold text-white">
          Crescimento do Mercado de Cassinos Digitais
        </h2>

        <div className="flex w-full flex-row items-center justify-center gap-4">
          {/* <div className="flex flex-col items-center gap-0">
            <a href="https://www.gov.br/fazenda/pt-br/assuntos/noticias/2025/agosto/no-primeiro-semestre-17-7-milhoes-de-brasileiros-realizaram-apostas-de-quota-fixa-e-ultrapassou-se-o-total-de-15-mil-sites-ilegais-bloqueados"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img
            src="/assets/brasileiros-apostas.png"
            alt="Brasileiros apostando"
              className="w-full rounded-lg border"
            />
            </a>
          </div> */}
          <div className="flex min-w-1/2 flex-col items-center gap-0">
            <SectorRevenueChart />
          </div>
        </div>
      </Slide>

      <Slide>
        <h2 className="pb-4 font-grand-casino text-4xl font-bold text-white">
          Perfil das pessoas que apostam
        </h2>

        <div className="col-span-1 flex w-full flex-col items-center gap-0">
          <a
            href="https://www.bcb.gov.br/conteudo/relatorioinflacao/EstudosEspeciais/EE119_Analise_tecnica_sobre_o_mercado_de_apostas_online_no_Brasil_e_o_perfil_dos_apostadores.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-2/3 overflow-hidden rounded-lg border"
          >
            <img
              src="/assets/perfil-das-pessoas-bet.png"
              alt="Perfil das pessoas que apostam"
            />
          </a>
        </div>
      </Slide>
    </Stack>
  )
}

function WhyIsAProblemSlide() {
  return (
    <Slide>
      <h2>Por que isso é um problema?</h2>
    </Slide>
  )
}
