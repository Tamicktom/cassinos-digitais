//* Libraries imports
import { Stack, Fragment } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"
import { MathFormula } from "@/components/math-formula"

export function Part4() {
  return (
    <>
      <Stack>
        <Slide>
          <h2 className="font-grand-casino text-7xl font-bold text-white pb-4">Matemática</h2>
          <p className="text-2xl text-white">A casa não precisa de sorte.</p>
        </Slide>

        <Slide>
          <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">
            Lei dos grandes números
          </h2>
          <p className="text-2xl text-white">
            Se uma experiência aleatória é repetida muitas vezes, <br /> a média dos resultados se aproxima da média teórica.
          </p>
        </Slide>

        <Slide>
          <h2 className="font-grand-casino text-5xl font-bold text-white pb-8">
            Lei dos grandes números
          </h2>
          <MathFormula className="pt-8 text-5xl text-white">
            {String.raw`\bar{X}_n = \frac{1}{n}\sum_{i=1}^{n} X_i \xrightarrow{n \to \infty} E[X]`}
          </MathFormula>
        </Slide>

        <Slide>
          <h2 className="font-grand-casino text-5xl">Expected Value</h2>
          <div className="grid w-full grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <MathFormula className="text-5xl">
                {String.raw`E(X) = \sum_{i=1}^{n} p_i \cdot x_i`}
              </MathFormula>
              <p className="text-lg font-bold text-white">
                Média ponderada dos resultados possíveis.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-end">
              <span className="flex items-center gap-2">
                <MathFormula className="text-5xl">
                  {String.raw`p_i`}
                </MathFormula>
                <p className="text-lg font-bold text-white">
                  Probabilidade do resultado i.
                </p>
              </span>
              <span className="flex items-center gap-2">
                <MathFormula className="text-5xl">
                  {String.raw`x_i`}
                </MathFormula>
                <p className="text-lg font-bold text-white">Resultado i.</p>
              </span>
            </div>
          </div>
        </Slide>
      </Stack>
    </>
  )
}
