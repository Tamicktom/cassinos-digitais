//* Libraries imports
import {Slide as SlidePrimitive, Stack} from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"
import { AboutMeSlide } from "./about-me"

export function Part1() {
  return (
    <>
      {/* Início da apresentação */}
      <TitleSlide />
      <AboutMeSlide />
      <DisclaimerSlide />

      {/* História dos Cassinos Digitais */}
      <HistoryOfCasinosSlides />

      {/* Sobre a Apresentação */}
      <AboutPresentationSlide />

      {/* Dados sobre crescimento do mercado de cassinos digitais (2018-2025) */}
      <MarketGrowthSlide />
      <WhyIsAProblemSlide />
    </>
  )
}

function TitleSlide() {
  return (
    <SlidePrimitive>
      <h1 className="font-grand-casino text-[7rem] font-bold bg-linear-to-b from-primary to-secondary bg-clip-text text-transparent">
      Cassinos Digitais
      </h1>
      <p className="text-3xl text-white font-bold">Quando o Software Quer Seu Dinheiro</p>
    </SlidePrimitive>
  )
}

function HistoryOfCasinosSlides() {
  return (
    <Stack>
      <Slide className="h-[65svh]">
      <h2 className="font-grand-casino text-4xl font-bold text-white pb-4">História dos Cassinos</h2>
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
        <h2 className="font-grand-casino text-4xl font-bold text-white pb-4">História dos Cassinos</h2>
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
        <h2 className="font-grand-casino text-4xl font-bold text-white pb-4">
          Cassinos nos séculos seguintes
        </h2>

        <div className="w-full grid grid-cols-2 gap-4">
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
        <h2 className="font-grand-casino text-4xl font-bold text-white pb-4">
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
  );
}

function AboutPresentationSlide() {
  return (
    <Slide>
      <h2 className="font-grand-casino text-4xl font-bold text-primary">
        Sobre a Apresentação
      </h2>
      <p className="text-2xl">O que é arquitetura de software? O que é engenharia de software?</p>
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
    <Slide>
      <h2>Crescimento do Mercado de Cassinos Digitais</h2>
    </Slide>
  )
}

function WhyIsAProblemSlide() {
  return (
    <Slide>
      <h2>Por que isso é um problema?</h2>
    </Slide>
  )
}
