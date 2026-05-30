//* Libraries imports
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing"

export function RainPostEffects() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.75}
        luminanceThreshold={0.35}
        luminanceSmoothing={0.85}
        mipmapBlur
      />
      <ChromaticAberration offset={[0.0004, 0.0008]} />
      <Vignette eskil={false} offset={0.25} darkness={0.65} />
    </EffectComposer>
  )
}
