//* Components imports
import { Slide } from "@/components/slide"
import { TitleSlide } from "./title"
import { AboutMeSlide } from "./about-me"
import { MarketGrowthSlide } from "./market-growth"
import { HistoryOfCasinosSlides } from "./history-of-cassinos-slides"

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

function DisclaimerSlide() {
  return (
    <Slide>
      <h2 className="font-grand-casino text-7xl font-bold text-white">
        Disclaimer
      </h2>
    </Slide>
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

function WhyIsAProblemSlide() {
  return (
    <Slide>
      <h2>Por que isso é um problema?</h2>
    </Slide>
  )
}
