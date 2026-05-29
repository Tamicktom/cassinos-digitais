//* Libraries imports
import { useMemo } from "react"
import { useGLTF } from "@react-three/drei"

//* Components imports
import { FallingChip } from "@/components/chip-rain/falling-chip"

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
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 8, 6]} intensity={0.8} />
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
    </>
  )
}
