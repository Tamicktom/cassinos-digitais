//* Libraries imports
import { Slide } from "@revealjs/react"

//* Components imports
import { AboutMeSlide } from "./about-me"

export function Part1() {
  return (
    <>
      {/* Início da apresentação */}
      <TitleSlide />
      <AboutMeSlide />
      <DisclaimerSlide />
      <AboutPresentationSlide />

      {/* Dados sobre crescimento do mercado de cassinos digitais (2018-2025) */}
      <MarketGrowthSlide />
      <WhyIsAProblemSlide />
    </>
  )
}

function TitleSlide() {
  return (
    <Slide>
      <div className="relative flex h-[50svh] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background/50 p-4">
        <div className="absolute inset-0 size-full bg-white/50 backdrop-blur-md" />

        <div className="relative z-10">
          <h1 className="font-grand-casino text-7xl font-bold text-primary">
            Cassinos Digitais
          </h1>
          <p className="text-2xl">Quando o Software Quer Seu Dinheiro</p>
        </div>
      </div>
    </Slide>
  )
}

function AboutPresentationSlide() {
  return (
    <Slide>
      <h2>Sobre a Apresentação</h2>O que é arquitetura de software? O que é
      engenharia de software?
    </Slide>
  )
}

function DisclaimerSlide() {
  return (
    <Slide>
      <h2>Disclaimer</h2>
      Não estou ensinando a criar um cassino digital real nem incentivando
      apostas.
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
