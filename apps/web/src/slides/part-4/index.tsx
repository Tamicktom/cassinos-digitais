//* Libraries imports
import { Stack } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"

const formula = `\[\begin{aligned} \dot{x} &amp; = \sigma(y-x) \\ \dot{y} &amp; = \rho x - y - xz \\ \dot{z} &amp; = -\beta z + xy \end{aligned} \]`;

export function Part4() {
  return (
    <>
      <Stack>
        <Slide>
          <h2>Matemática</h2>
          <p>
            A casa não precisa de sorte.
          </p>
        </Slide>

        <Slide>
          <p>Teste de fórmula:</p>
          {formula}
        </Slide>

        <Slide>
          <h2>Valor Esperado</h2>
        </Slide>
      </Stack>
    </>
  )
}
