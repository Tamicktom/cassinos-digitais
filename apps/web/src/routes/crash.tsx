//* Libraries imports
import { createFileRoute } from "@tanstack/react-router"

//* Components imports
import { Crash } from "@/components/crash"

export const Route = createFileRoute("/crash")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-full max-w-7xl p-4">
        <Crash />
      </div>
    </div>
  )
}
