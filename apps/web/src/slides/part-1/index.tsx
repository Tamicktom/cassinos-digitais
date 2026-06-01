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
      <SomeDigitalCasinoCompanies />
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

const CASINO_COMPANY_LOGOS = [
  { name: "1xBet", src: "/assets/cassinos_brasil_logos/1xbet.png" },
  { name: "Bet365", src: "/assets/cassinos_brasil_logos/bet365.png" },
  { name: "Bet7k", src: "/assets/cassinos_brasil_logos/bet_7k.png" },
  { name: "Betano", src: "/assets/cassinos_brasil_logos/betano.png" },
  { name: "Betboom", src: "/assets/cassinos_brasil_logos/betboom.png" },
  { name: "Bet da Sorte", src: "/assets/cassinos_brasil_logos/bet_da_sorte.png" },
  { name: "Betfair", src: "/assets/cassinos_brasil_logos/betfair.png" },
  { name: "BetMGM", src: "/assets/cassinos_brasil_logos/betmgm.png" },
  { name: "Betnacional", src: "/assets/cassinos_brasil_logos/betnacional.png" },
  { name: "Blaze", src: "/assets/cassinos_brasil_logos/blaze.png" },
  { name: "Esportes da Sorte", src: "/assets/cassinos_brasil_logos/esportes_da_sorte.png" },
  { name: "KTO", src: "/assets/cassinos_brasil_logos/kto.png" },
  { name: "Multibet", src: "/assets/cassinos_brasil_logos/multibet.png" },
  { name: "Novibet", src: "/assets/cassinos_brasil_logos/novibet.png" },
  { name: "Stake", src: "/assets/cassinos_brasil_logos/stake.png" },
  { name: "Sportingbet", src: "/assets/cassinos_brasil_logos/sportingbet.png" },
  { name: "Superbet", src: "/assets/cassinos_brasil_logos/superbet.png" },
  { name: "Vbet", src: "/assets/cassinos_brasil_logos/vbet.png" },
] as const

function SomeDigitalCasinoCompanies() {
  return (
    <Slide>
      <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">
        Algumas empresas de cassinos digitais...
      </h2>
      <div className="grid grid-cols-6 gap-4">
        {CASINO_COMPANY_LOGOS.map(function (logo) {
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
