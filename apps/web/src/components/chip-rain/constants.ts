export const CHIP_MODELS = [
  "/assets/red_chips.glb",
  "/assets/blue_chips.glb",
  "/assets/green_chips.glb",
  "/assets/black_chips.glb",
] as const

export type ChipModelPath = (typeof CHIP_MODELS)[number]

export function randomChipModel(): ChipModelPath {
  const index = Math.floor(Math.random() * CHIP_MODELS.length);
  return CHIP_MODELS[index]
}

export const CHIP_COUNT = 64;

export const CHIP_SCALE = 0.01;

export const FALL_SPEED_MIN = 1.15;
export const FALL_SPEED_MAX = 3.35;

export const SPIN_SPEED_MIN = 0.2;
export const SPIN_SPEED_MAX = 0.6;

export const SPAWN_Y_MIN = 8;
export const SPAWN_Y_MAX = 14;
export const DESPAWN_Y = -8;

export const SPAWN_X_RANGE = 10;
export const SPAWN_Z_RANGE = 5.5;

export function randomInRange(min: number, max: number) {
  return min + Math.random() * (max - min)
}

export function randomSpawnPosition(): [number, number, number] {
  return [
    randomInRange(-SPAWN_X_RANGE, SPAWN_X_RANGE),
    randomInRange(SPAWN_Y_MIN, SPAWN_Y_MAX),
    randomInRange(-SPAWN_Z_RANGE, SPAWN_Z_RANGE),
  ]
}

export function randomFallSpeed() {
  return randomInRange(FALL_SPEED_MIN, FALL_SPEED_MAX)
}

export function randomSpinSpeed(): [number, number, number] {
  return [
    randomInRange(SPIN_SPEED_MIN, SPIN_SPEED_MAX) * (Math.random() > 0.5 ? 1 : -1),
    randomInRange(SPIN_SPEED_MIN, SPIN_SPEED_MAX) * (Math.random() > 0.5 ? 1 : -1),
    randomInRange(SPIN_SPEED_MIN, SPIN_SPEED_MAX) * (Math.random() > 0.5 ? 1 : -1),
  ]
}
