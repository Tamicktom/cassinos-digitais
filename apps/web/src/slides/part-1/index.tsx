//* Libraries imports
import { Slide } from "@revealjs/react";

//* Components imports
import { AboutMeSlide } from "./about-me";

export function Part1() {
  return (
    <>
      <TitleSlide />
      <AboutMeSlide />
      <DisclaimerSlide />
      <AboutPresentationSlide />
    </>
  )
}

function TitleSlide() {
  return (
    <Slide>
      <h1>Cassinos Digitais</h1>
      <p>Quando o Software Quer Seu Dinheiro</p>
    </Slide>
  )
}

function AboutPresentationSlide() {
  return (
    <Slide>
      <h2>Sobre a Apresentação</h2>

      O que é arquitetura de software?
      O que é engenharia de software?
    </Slide>
  );
}

function DisclaimerSlide() {
  return (
    <Slide>
      <h2>Disclaimer</h2>
      Não estou ensinando a criar um cassino digital real nem incentivando apostas.
    </Slide>
  );
}