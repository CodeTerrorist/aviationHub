import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ContainerSobreNos = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    2xl:justify-center
    pt-4
    pb-4
    pl-7
    pr-7
    md:pl-0
    md:pr-0
    bg-white
  `};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContainerAviao = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;
  ${tw`
    sm:pl-3
  `};

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const ContainerInformacao = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16    
  `};

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const Titulo = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TextoInformativo = styled.p`
  ${tw`
    text-sm
    md:text-base
    max-w-2xl
    text-gray-500
    font-normal
    mt-4
  `};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export function Conhecanos() {
  return (
    <ContainerSobreNos>
      <ContainerAviao>
        <img src="/imagens/ce172nobg-removebg-preview-removebg-preview.png" alt="CE172" />
      </ContainerAviao>
      <ContainerInformacao>
        <Titulo>Insira aqui um titulo</Titulo>
        <TextoInformativo>
          Insira aqui um texto informativo sobre o aeródromo :D
        </TextoInformativo>
      </ContainerInformacao>
    </ContainerSobreNos>
  );
}
