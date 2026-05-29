//* Libraries imports
import { createFileRoute } from "@tanstack/react-router"

//* Components imports
import { Presentation } from "@/components/presentation"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="w-svw h-svh flex justify-center items-center relative">
      <Presentation />
    </div>
  );
}
