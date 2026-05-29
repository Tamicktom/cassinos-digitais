//* Libraries imports
import { Suspense } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Canvas } from "@react-three/fiber"

//* Components imports
import { ChipRainScene } from "@/components/chip-rain/chip-rain-scene"
import { Presentation } from "@/components/presentation"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="relative flex h-svh w-svw items-center justify-center">
      <AnimatedBackground />
      <Presentation />
    </div>
  )
}

const ANIMATED_BACKGROUND_IMAGE = "/assets/animated.svg"

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 size-full">
      <div
        className="absolute inset-0 z-0 size-full"
        style={{
          background: `
       radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
       radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
       radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
       radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
       #000000
     `,
        }}
      />

      <div
        className="absolute inset-0 size-full opacity-10"
        style={{
          backgroundImage: `url(${ANIMATED_BACKGROUND_IMAGE})`,
          backgroundSize: "auto 15%",
          backgroundPosition: "top",
          backgroundRepeat: "repeat",
        }}
      />

      <Canvas
        className="size-full"
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 12], fov: 40 }}
        dpr={[1, 1]}
      >
        <Suspense fallback={null}>
          <ChipRainScene />
        </Suspense>
      </Canvas>
    </div>
  )
}
