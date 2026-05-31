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

function WhyIsAProblemSlide() {
  return (
    <Slide>
      <h2 className="font-grand-casino text-5xl font-bold text-white">
        Por que isso é um problema?
      </h2>
    </Slide>
  )
}
