//* Libraries imports
import { createFileRoute } from "@tanstack/react-router"

//* Components imports
import { SlotMachine } from "@/components/slot-machine"

export const Route = createFileRoute("/slot-machine")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-full max-w-7xl p-4">
        <SlotMachine />
      </div>
    </div>
  )
}
