//* Libraries imports
import { Stack } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"

export function Part3() {
  return (
    <>
      <Stack>
      <Slide>
        <h2 className="font-grand-casino text-7xl font-bold text-white pb-4">
          Dark Patterns
        </h2>
        <p className="text-2xl text-white">
          Escolhas de design que induzem usuários a fazer algo <br /> que talvez não fariam se a informação estivesse clara.
        </p>
      </Slide>

      <Slide className="h-[65svh]">
        <div className="w-full flex justify-center items-center">
        <img
          src="/assets/candy-rush.png"
          alt="Dark Patterns 3"
          className="w-full rounded-lg border"
        />
        </div>
      </Slide>

      <Slide className="h-[65svh]">
        <div className="w-full flex justify-center items-center">
        <img
          src="/assets/dragon.png"
          alt="Dark Patterns 1"
          className="w-full rounded-lg border"
        />
        </div>
      </Slide>

      <Slide className="h-[65svh]">
        <div className="w-full flex justify-center items-center">
        <img
          src="/assets/spaceman.png"
          alt="Dark Patterns 2"
          className="w-full rounded-lg border"
        />
        </div>
      </Slide>
      </Stack>
    </>
  )
}
