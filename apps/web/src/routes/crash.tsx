//* Libraries imports
import { createFileRoute } from "@tanstack/react-router"

//* Components imports
import { Crash } from "@/components/crash"

export const Route = createFileRoute("/crash")({
  component: RouteComponent,
})

function RouteComponent() {
  return <Crash />
}
