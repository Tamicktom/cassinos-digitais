//* Libraries imports
import { Stack } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"
import { SlotMachine } from "@/components/slot-machine"

export function Part4() {
  return (
    <>
      <Stack>
        <Slide>
          <h2>Matemática</h2>
        </Slide>
        <Slide className="h-[65svh]">
          <SlotMachine />
        </Slide>
      </Stack>
    </>
  )
}
