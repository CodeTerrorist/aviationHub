import { faCalendarAlt, faMapMarkedAlt, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
  `};
`;

const Titulo = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const ContainerPassos = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
  `};
`;

const ContainerPassoSingular = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    md:w-96
    items-center
    transition-colors
    hover:text-red-500
    m-3
  `};
`;

const Passo = styled.div`
  ${tw`
    flex
    flex-col
    rounded-lg
    items-center
    justify-center
    p-6
  `};
`;

const TituloPasso = styled.h4`
  ${tw`
    text-black
    text-lg
    font-semibold
    mt-4
  `};
`;

const PassoDescricao = styled.p`
  ${tw`
    w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-500
  `};
`;

const IconPasso = styled.span`
  ${tw`
    text-red-500
    text-3xl
  `};
`;

const FlexColumn = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    text-center
  `};
`;

export function PassosParaAlugar() {
  return (
    <Container>
      <Titulo>Alguns exemplos de passos</Titulo>
      <ContainerPassos>
        <ContainerPassoSingular>
          <Passo>
            <IconPasso>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </IconPasso>
            <TituloPasso>Seleção de aeronave</TituloPasso>
            <PassoDescricao>Escolhe a tua aeronave e voa!</PassoDescricao>
          </Passo>
        </ContainerPassoSingular>

        <ContainerPassoSingular>
          <Passo>
            <IconPasso>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </IconPasso>
            <TituloPasso>Entre em contacto</TituloPasso>
            <PassoDescricao>Escolha a aeronave, decida a hora e desloque-se até nós!</PassoDescricao>
          </Passo>
        </ContainerPassoSingular>

        <ContainerPassoSingular>
          <Passo>
            <IconPasso>
              <FontAwesomeIcon icon={faPlaneDeparture} />
            </IconPasso>
            <TituloPasso>Aproveita a experiência</TituloPasso>
            <PassoDescricao>voa livremente! Só não te espetes no chão lmao :D</PassoDescricao>
          </Passo>
        </ContainerPassoSingular>
      </ContainerPassos>
    </Container>
  );
}
