//* Libraries imports
import { Stack } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"
import { SlotMachine } from "@/components/slot-machine"
import { PaytableTable } from "@/components/slot-machine/paytable-table"

export function Part4() {
  return (
    <>
      <Stack>
        <Slide>
          <h2>Matemática</h2>
        </Slide>


        <Slide className="h-[65svh]">
          <h2>Simulação de caça-níqueis</h2>
        </Slide>
        <Slide className="h-[65svh]">
          <div>
          <PaytableTable />
          </div>
        </Slide>
        <Slide className="h-[65svh]">
          <SlotMachine />
        </Slide>
      </Stack>
    </>
  )
}
