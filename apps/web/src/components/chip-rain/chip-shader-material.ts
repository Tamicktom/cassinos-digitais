//* Libraries imports
import * as THREE from "three"

import { chipRainUniforms } from "@/components/chip-rain/shared-uniforms"

const fallbackTexture = new THREE.DataTexture(
  new Uint8Array([255, 255, 255, 255]),
  1,
  1,
  THREE.RGBAFormat
)
fallbackTexture.needsUpdate = true

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uBaseColor;
  uniform sampler2D uMap;
  uniform bool uHasMap;
  uniform float uOpacity;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;

  void main() {
    vec4 texColor = uHasMap ? texture2D(uMap, vUv) : vec4(uBaseColor, 1.0);
    vec3 baseColor = texColor.rgb;

    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float fresnel = pow(1.0 - max(dot(viewDirection, vNormal), 0.0), 2.6);

    float wave = sin(vWorldPosition.y * 4.5 - uTime * 2.8 + vWorldPosition.x * 1.8);
    float shimmer = wave * 0.5 + 0.5;
    shimmer = mix(0.35, 1.0, shimmer);

    float pulse = sin(uTime * 1.4 + vWorldPosition.y * 0.6) * 0.5 + 0.5;

    vec3 rimPurple = vec3(0.576, 0.204, 0.918);
    vec3 rimPink = vec3(0.925, 0.282, 0.600);
    vec3 rimBlue = vec3(0.231, 0.510, 0.965);
    vec3 rimColor = mix(rimPurple, rimPink, pulse);
    rimColor = mix(rimColor, rimBlue, sin(uTime * 0.6 + vWorldPosition.x * 0.4) * 0.5 + 0.5);

    vec3 glow = rimColor * fresnel * shimmer * 0.9;
    vec3 specular = vec3(1.0) * pow(fresnel, 5.0) * 0.35;
    vec3 iridescence = mix(baseColor, rimColor, fresnel * shimmer * 0.25);

    vec3 finalColor = iridescence * (0.65 + shimmer * 0.35) + glow + specular;

    gl_FragColor = vec4(finalColor, texColor.a * uOpacity);
  }
`

function createChipShaderMaterial(
  original: THREE.Material
): THREE.ShaderMaterial {
  let baseColor = new THREE.Color(1, 1, 1)
  let map: THREE.Texture | null = null
  let opacity = 1

  if (
    original instanceof THREE.MeshStandardMaterial ||
    original instanceof THREE.MeshBasicMaterial ||
    original instanceof THREE.MeshPhongMaterial
  ) {
    baseColor = original.color.clone()
    map = original.map
    opacity = original.opacity
  }

  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: chipRainUniforms.uTime,
      uBaseColor: { value: baseColor },
      uMap: { value: map ?? fallbackTexture },
      uHasMap: { value: map !== null },
      uOpacity: { value: opacity },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: true,
  })
}

export function applyChipShader(object: THREE.Object3D) {
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return

    const original = child.material
    if (Array.isArray(original)) {
      child.material = original.map((material) =>
        createChipShaderMaterial(material)
      )
      return
    }

    child.material = createChipShaderMaterial(original)
  })
}
