//* Libraries imports
import { Stack } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"

export function HistoryOfCasinosSlides() {
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
