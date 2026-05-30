//* Components imports
import { Slide } from "@/components/slide"
import { GithubLogoIcon } from "@phosphor-icons/react"

//* Hooks imports
import { useGithubProfile } from "@/hooks/use-github-profile"

const USERNAME = "Tamicktom"

export function AboutMeSlide() {
  const githubProfile = useGithubProfile(USERNAME)

  return (
    <Slide className="justify-start">
      <h2 className="pb-4 font-grand-casino text-5xl font-bold text-white">
        ♣ Sobre Mim
      </h2>
      <div className="flex h-full w-full items-center justify-center text-lg text-foreground">
        <div>
          <ul className="list-item list-inside space-y-2 text-left text-2xl">
            <li className="club">
              Formado em Sistemas para Internet pela FATEC de Jales.
            </li>
            <li className="heart">Cursando Ciência de Dados pela UNIVESP.</li>
            <li className="diamond">
              Mestrando em Ciências da Computação pela UNESP.
            </li>
            <li className="spade">
              Atualmente trabalhando como Engenheiro de Software na Entersience
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  )
}
