import type { MouseEvent } from "react"

export function stopRevealNavigation(event: MouseEvent) {
  event.stopPropagation()
}
