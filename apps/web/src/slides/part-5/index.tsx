//* Libraries imports
import { Stack } from "@revealjs/react"
import { Link } from "@tanstack/react-router"

//* Components imports
import { Slide } from "@/components/slide"
import { PaytableTable } from "@/components/slot-machine/paytable-table"
import { CombinationsTable } from "@/components/slot-machine/combinations-table"
import { Button } from "@workspace/ui/components/button"

export function Part5() {
  return (
    <>
      <Stack>
        <Slide>
          <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
            Simulações
          </h2>
        </Slide>

        <Slide>
          <h2 className="pb-8 font-grand-casino text-5xl font-bold text-white">
            Simulação de caça-níqueis
          </h2>
        </Slide>
        <Slide className="h-[65svh]">
          <PaytableTable />
        </Slide>
        <Slide>
          <Link to="/slot-machine">
            <Button className="text-5xl h-fit p-4">Slot Machine</Button>
          </Link>
        </Slide>
        <Slide>
          <Link to="/crash">
            <Button className="text-5xl h-fit p-4">Crash</Button>
          </Link>
        </Slide>
      </Stack>
    </>
  )
}
