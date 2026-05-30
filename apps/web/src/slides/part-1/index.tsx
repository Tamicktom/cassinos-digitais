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
      <h1 className="font-grand-casino text-7xl font-bold text-primary">
        Cassinos Digitais
      </h1>
      <p className="text-2xl">Quando o Software Quer Seu Dinheiro</p>
    </Slide>
  )
}

function AboutPresentationSlide() {
  return (
    <Slide>
      <h2>Sobre a Apresentação</h2>
      <p>O que é arquitetura de software? O que é engenharia de software?</p>
    </Slide>
  )
}

function DisclaimerSlide() {
  return (
    <Slide>
      <h2>Disclaimer</h2>
      <p>
        Não estou ensinando a criar um cassino digital real nem incentivando
        apostas.
      </p>
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
