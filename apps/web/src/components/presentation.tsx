//* Libraries imports
import { Deck } from "@revealjs/react"
import "reveal.js/reveal.css"
import "reveal.js/theme/moon.css"

//* Components imports
import { Part1 } from "@/slides/part-1"

export function Presentation() {
  return (
    <Deck>
      <Part1 />
    </Deck>
  )
}
