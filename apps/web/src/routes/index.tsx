//* Libraries imports
import { createFileRoute } from "@tanstack/react-router"

//* Components imports
import { Presentation } from "@/components/presentation"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return <Presentation />
}
