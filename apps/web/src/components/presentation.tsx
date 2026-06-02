//* Libraries imports
import { Deck } from "@revealjs/react"
import "reveal.js/reveal.css"
import 'reveal.js/plugin/highlight/monokai.css';
import RevealHighlight from 'reveal.js/plugin/highlight';

//* Components imports
import { Part1 } from "@/slides/part-1"
import { Part2 } from "@/slides/part-2"
import { Part3 } from "@/slides/part-3"
import { Part4 } from "@/slides/part-4"
import { Conclusion } from "@/slides/conclusion"

export function Presentation() {
  return (
    <Deck
      config={{
        transition: "slide",
      }}
      plugins={[RevealHighlight]}
      onSlideChange={(props) => {
        console.log(props)
      }}
    >
      {/* Introduction */}
      <Part1 />

      {/* Software Architecture */}
      <Part2 />

      {/* UI/UX */}
      <Part3 />

      {/* Mathematics */}
      <Part4 />

      {/* Conclusion */}
      <Conclusion />
    </Deck>
  )
}
