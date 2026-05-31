//* Libraries imports
import { createFileRoute } from "@tanstack/react-router"

//* Components imports
import { SlotMachine } from "@/components/slot-machine"

export const Route = createFileRoute("/slot-machine")({
  component: RouteComponent,
})

function RouteComponent() {
  return <SlotMachine />
}
