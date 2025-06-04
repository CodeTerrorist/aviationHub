import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Cessna172 from "../../../imagenss/ce172-removebg-preview.png";
import SvgImg from "../../../imagenss/blob.svg";
import { SCREENS } from "../../components/responsive";
import { Botao } from "../../components/botoes";
import { Link } from "react-router-dom";




const SeccaoTopoContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;        
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        lg:pl-12
        lg:pr-12    
        pl-3
        pr-3
    `};

`;

const ContainerEsq = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col    
    `};
`;

const ContainerDir = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20    
    `};
`;

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl 
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed   
    `};

`;

const Descricao = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800 
    `};


`;

const SvgContainer = styled.div`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: 5em;
    z-index: -1;
    transform: rotate(-30deg);

    img{
        width: 150%;
        height: auto;
        max-height: max-content;
    }

    @media (min-width: ${SCREENS.sm}){
        width: 40em;
        max-height: 10em;
        right: -2em;
        top: 2em;
        transform: rotate(-30deg);

    }


    @media (min-width: ${SCREENS.sm}){
        width: 40em;
        max-height: 10em;
        right: -2em;
        top: 2em;
        transform: rotate(-30deg);

    }

    @media (min-width: ${SCREENS.lg}){
        width: 40em;
        max-height: 10em;
        right: 13em;
        top: 3em;
        transform: rotate(-30deg);

    }

    @media (min-width: ${SCREENS.xl}){
        width: 30em;
        max-height: 10em;
        right: 35em;
        top: 5em;
        transform: rotate(-30deg);

    }
`;


const AviaoRender = styled.div`
    width: auto;
    height: 10em;
    right: -6em;
    top: 10em;
    position: absolute;

    img{
        width: auto;
        height: 100%;
        max-width: fit-content;

    }

    @media (min-width: ${SCREENS.sm}){
        width: 40em;
        max-height: 10em;
        right: -24em;
        top: 16em;
        

    }


    @media (min-width: ${SCREENS.lg}){
        width: 40em;
        max-height: 10em;
        right: -24em;
        top: 16em;
        

    }

    @media (min-width: ${SCREENS.xl}){
        width: -17em;
        max-height: 16em;
        right: 6em;
        top: 15em;
        

    }


`;

export function SeccaoTopo(){

    return(
        <SeccaoTopoContainer>
            <ContainerEsq>
                <Slogan>
                        Insira aqui o seu slogan!
                </Slogan>
                <Descricao>
                        Insira aqui a descrição do aerodromo!
                </Descricao>
                <Link to ='/Aeronaves'>
                <Botao text="Veja aqui todas as aeronaves presentes"/>
                </Link>
                </ContainerEsq>
                <SvgContainer>
                    <img src={SvgImg}></img>
                </SvgContainer>

                <AviaoRender>
                    <img src={Cessna172}></img>
                </AviaoRender>
            <ContainerDir>

            </ContainerDir>
        </SeccaoTopoContainer>
    )

}