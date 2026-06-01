//* Libraries imports
import { Stack } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"
import { SlotMachine } from "@/components/slot-machine"
import { PaytableTable } from "@/components/slot-machine/paytable-table"
import { CombinationsTable } from "@/components/slot-machine/combinations-table"
import { Crash } from "@/components/crash"

export function Part4() {
  return (
    <>
      <Stack>
        <Slide>
          <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">Simulações</h2>
        </Slide>

        <Slide className="h-[65svh]">
          <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">Simulação de caça-níqueis</h2>
        </Slide>
        <Slide className="h-[65svh]">
          <PaytableTable />
        </Slide>
        <Slide className="h-[70svh]">
          <CombinationsTable />
        </Slide>
        <Slide className="h-[65svh]">
          <SlotMachine />
        </Slide>
        <Slide className="h-[65svh]">
          <Crash />
        </Slide>
      </Stack>
    </>
  )
}
