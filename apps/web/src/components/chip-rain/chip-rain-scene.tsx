//* Libraries imports
import { useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"

//* Components imports
import { FallingChip } from "@/components/chip-rain/falling-chip"
import { RainPostEffects } from "@/components/chip-rain/rain-post-effects"
import { chipRainUniforms } from "@/components/chip-rain/shared-uniforms"

//* Constants imports
import {
  CHIP_COUNT,
  CHIP_MODELS,
  randomChipModel,
  randomFallSpeed,
  randomSpawnPosition,
  randomSpinSpeed,
} from "@/components/chip-rain/constants"

for (const modelPath of CHIP_MODELS) {
  useGLTF.preload(modelPath)
}

export function ChipRainScene() {
  useFrame((_, delta) => {
    chipRainUniforms.uTime.value += delta
  })

  const chips = useMemo(
    () =>
      Array.from({ length: CHIP_COUNT }, (_, index) => ({
        id: index,
        modelPath: randomChipModel(),
        initialPosition: randomSpawnPosition(),
        initialRotation: [
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
        ] as [number, number, number],
        fallSpeed: randomFallSpeed(),
        spinSpeed: randomSpinSpeed(),
      })),
    []
  )

  return (
    <>
      <fog attach="fog" args={["#000000", 6, 16]} />
      <ambientLight intensity={0.15} />
      <directionalLight position={[4, 8, 6]} intensity={0.5} />
      <pointLight position={[-3, 4, 2]} intensity={0.4} color="#9333ea" />
      <pointLight position={[3, -2, 4]} intensity={0.3} color="#3b82f6" />
      {chips.map((chip) => (
        <FallingChip
          key={chip.id}
          modelPath={chip.modelPath}
          initialPosition={chip.initialPosition}
          initialRotation={chip.initialRotation}
          fallSpeed={chip.fallSpeed}
          spinSpeed={chip.spinSpeed}
        />
      ))}
      <RainPostEffects />
    </>
  )
}
