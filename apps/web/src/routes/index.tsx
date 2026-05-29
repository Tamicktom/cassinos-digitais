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

const ANIMATED_BACKGROUND_IMAGE = "/assets/animated.svg";

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 size-full from-primary to-secondary-foreground bg-linear-to-b">
      <div
        className="absolute inset-0 size-full"
        style={{
          backgroundImage: `url(${ANIMATED_BACKGROUND_IMAGE})`,
          backgroundSize: "auto 25%",
          backgroundPosition: "top",
          backgroundRepeat: "repeat",
        }}
      />

      <Canvas
        className="size-full"
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 12], fov: 40 }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ChipRainScene />
        </Suspense>
      </Canvas>
    </div>
  )
}
