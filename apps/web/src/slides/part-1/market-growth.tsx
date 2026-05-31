//* Libraries imports
import { Stack } from "@revealjs/react"

//* Components imports
import { Slide } from "@/components/slide"
import { OnlineBettorsChart } from "./online-bettors-chart"
import { SectorRevenueChart } from "./sector-revenue-chart"

//* Dados sobre crescimento do mercado de cassinos digitais (2018-2025)

export function MarketGrowthSlide() {
  return (
    <Stack>
      <Slide>
        <h2 className="pb-4 font-grand-casino text-4xl font-bold text-white">
          Crescimento do Mercado de Cassinos Digitais
        </h2>
        <div className="flex w-full flex-col items-center">
          <OnlineBettorsChart />
        </div>
      </Slide>

      <Slide className="text-4xl font-bold text-primary">
        <h2 className="pb-4 font-grand-casino text-4xl font-bold text-white">
          Crescimento do Mercado de Cassinos Digitais
        </h2>

        <div className="flex w-full flex-row items-center justify-center gap-4">
          {/* <div className="flex flex-col items-center gap-0">
            <a href="https://www.gov.br/fazenda/pt-br/assuntos/noticias/2025/agosto/no-primeiro-semestre-17-7-milhoes-de-brasileiros-realizaram-apostas-de-quota-fixa-e-ultrapassou-se-o-total-de-15-mil-sites-ilegais-bloqueados"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img
            src="/assets/brasileiros-apostas.png"
            alt="Brasileiros apostando"
              className="w-full rounded-lg border"
            />
            </a>
          </div> */}
          <div className="flex min-w-1/2 flex-col items-center gap-0">
            <SectorRevenueChart />
          </div>
        </div>
      </Slide>

      <Slide>
        <h2 className="pb-4 font-grand-casino text-4xl font-bold text-white">
          Perfil das pessoas que apostam
        </h2>

        <div className="col-span-1 flex w-full flex-col items-center gap-0">
          <a
            href="https://www.bcb.gov.br/conteudo/relatorioinflacao/EstudosEspeciais/EE119_Analise_tecnica_sobre_o_mercado_de_apostas_online_no_Brasil_e_o_perfil_dos_apostadores.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-2/3 overflow-hidden rounded-lg border"
          >
            <img
              src="/assets/perfil-das-pessoas-bet.png"
              alt="Perfil das pessoas que apostam"
            />
          </a>
        </div>
      </Slide>
    </Stack>
  )
}
