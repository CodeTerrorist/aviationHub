import {faCalendarAlt, faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../marginer";
import { Botao } from "../botoes";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { SCREENS } from "../responsive";

const CalendarioContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
  `};
`;

const ItemContainer = styled.div`
  ${tw`flex relative`};
`;

const Icon = styled.span`
  ${tw`
    text-red-500
      fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3
  `};
`;

const IconAbertoFechado = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
`;

const Nome = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
  `};
`;

const SeparadorLinha = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `};
`;

const Data = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 3em;
  left: -2.3em;
`;

export function AlugarCal(){
    const[selecionarData, adicionarData] = useState(new Date()); // usado para controlar o estado do calendário (retraído / completo e também a data inicial )
    const[calendarioAberto, calendarioAbrir] = useState(false)

    const[selecionarDataRetorno, adicionarDataRetorno] = useState(new Date()); // usado para selecionar a data de retorno
    const[calendarioRetornoAberto, calendarioRetornoAbrir] = useState(false)

    const abrirCalendario = () => {
        calendarioAbrir(!calendarioAberto);

    }

    const abrirRetornoCalendario = () => {
        calendarioRetornoAbrir(!calendarioRetornoAberto);

    }

    return(
        <CalendarioContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Nome onClick={abrirCalendario}>Escolha uma data</Nome>
                <IconAbertoFechado>
                    <FontAwesomeIcon icon={calendarioAberto ? faCaretUp : faCaretDown}/>
                </IconAbertoFechado>
                {calendarioAberto && <Data value={selecionarData} onChange={adicionarData as any}/>}
            </ItemContainer>
            <SeparadorLinha/>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Nome onClick={abrirRetornoCalendario}>Data de Retorno</Nome>
                <IconAbertoFechado>
                    <FontAwesomeIcon icon={calendarioRetornoAberto ? faCaretUp : faCaretDown}/>
                </IconAbertoFechado>
                {calendarioRetornoAberto && <Data value={selecionarDataRetorno} onChange={adicionarDataRetorno as any}/>}
            </ItemContainer>
            <Marginer direction="horizontal" margin="2em"/>
            <Botao text="Alugue o seu avião"/>
        </CalendarioContainer>
    )
}