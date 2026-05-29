//* Libraries imports
import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import type { Group } from "three"

//* Constants imports
import type { ChipModelPath } from "@/components/chip-rain/constants"
import {
  CHIP_SCALE,
  DESPAWN_Y,
  randomSpawnPosition,
} from "@/components/chip-rain/constants"
import { applyChipShader } from "@/components/chip-rain/chip-shader-material"

export type FallingChipProps = {
  modelPath: ChipModelPath
  initialPosition: [number, number, number]
  initialRotation: [number, number, number]
  fallSpeed: number
  spinSpeed: [number, number, number]
}

export function FallingChip(props: FallingChipProps) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF(props.modelPath)
  const clonedScene = useMemo(() => {
    const clone = scene.clone()
    applyChipShader(clone)
    return clone
  }, [scene])

  useFrame((_, delta) => {
    const group = groupRef.current
    if (!group) return

    group.position.y -= props.fallSpeed * delta
    group.rotation.x += props.spinSpeed[0] * delta
    group.rotation.y += props.spinSpeed[1] * delta
    group.rotation.z += props.spinSpeed[2] * delta

    if (group.position.y < DESPAWN_Y) {
      const [x, y, z] = randomSpawnPosition()
      group.position.set(x, y, z)
      group.rotation.set(
        props.initialRotation[0],
        props.initialRotation[1],
        props.initialRotation[2]
      )
    }
  })

  return (
    <group
      ref={groupRef}
      position={props.initialPosition}
      rotation={props.initialRotation}
      scale={CHIP_SCALE}
    >
      <primitive object={clonedScene} />
    </group>
  )
}
