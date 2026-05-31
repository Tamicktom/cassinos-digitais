//* Libraries imports
import { Slide as SlidePrimitive } from "@revealjs/react"

export function TitleSlide() {
  return (
    <SlidePrimitive>
      <h1 className="bg-linear-to-b from-primary to-secondary bg-clip-text font-grand-casino text-[7rem] font-bold text-transparent">
        Cassinos Digitais
      </h1>
      <p className="text-3xl font-bold text-white">
        Quando o Software Quer Seu Dinheiro
      </p>
    </SlidePrimitive>
  )
}
