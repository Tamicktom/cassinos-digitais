//* Libraries imports
import { Slide } from "@revealjs/react";

//* Hooks imports
import { useGithubProfile } from "@/hooks/use-github-profile";

const USERNAME = "Tamicktom";

export function AboutMeSlide() {
  const githubProfile = useGithubProfile(USERNAME);

  return (
    <Slide>
      <h2>Sobre Mim</h2>
      <img src={githubProfile.data?.avatar_url} alt="Avatar" />
    </Slide>
  )
}