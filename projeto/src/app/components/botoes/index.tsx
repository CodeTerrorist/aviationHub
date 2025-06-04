import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface PropsBotao {
  theme?: "filled" | "outlined";
  text: string;
}

const BaseBotao = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
    cursor-pointer
  `};

  &:hover {
    background-color: red;
    color: white;
  }
`;

const ForaBotao = styled(BaseBotao)`
  ${tw`
    bg-red-500
  `};

  &:hover {
    background-color: transparent;
    color: red;
    border-color: red;
  }
`;

const DentroBotao = styled(BaseBotao)`
  ${tw`
    border-red-500
    text-red-500
    bg-transparent
  `};

  &:hover {
    background-color: red;
    color: white;
  }
`

export function Botao(props: PropsBotao) {
  const { theme, text } = props;

  if (theme === "filled")
    return <DentroBotao>{text}</DentroBotao>;
  else return <ForaBotao>{text}</ForaBotao>;
}
