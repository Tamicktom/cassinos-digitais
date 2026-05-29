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
        <div className="flex flex-col items-center justify-center bg-background/50 border rounded-lg p-4 h-[50svh]">
        <h1 className="font-grand-casino font-bold text-primary text-7xl">
          Cassinos Digitais
        </h1>
        <p className="text-2xl">Quando o Software Quer Seu Dinheiro</p>
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
