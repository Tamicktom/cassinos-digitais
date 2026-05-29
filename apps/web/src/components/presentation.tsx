//* Libraries imports
import { Deck } from "@revealjs/react"
import "reveal.js/reveal.css"
// import "reveal.js/theme/moon.css"

//* Components imports
import { Part1 } from "@/slides/part-1"
import { Part2 } from "@/slides/part-2"

export function Presentation() {
  return (
    <Deck
      config={{
        transition: "slide",
        parallaxBackgroundImage: "/assets/background.png",
        parallaxBackgroundSize: "auto 25%",
        parallaxBackgroundRepeat: "repeat",
        parallaxBackgroundPosition: "center",
      }}
      //  className="bg-back"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <Part1 />
      <Part2 />
    </Deck>
  )
}
