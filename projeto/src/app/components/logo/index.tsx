import React from "react";
import styled from "styled-components";
import LogoCessna from "../../../imagenss/logo23.jpg";
import tw from "twin.macro";

const LogoContainer = styled.div`
 ${tw`
    flex
    items-center
 `};
`;

const TextoLogo = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
    `};
`;

const Image = styled.div`
    width: auto;
    ${tw`
        h-6
        md:h-9
    `};
    img{
        width: auto;
        height: 100%;
    }
`;

export function Logo(){

    return(
        <LogoContainer>
            <Image>
                <img src={LogoCessna}/>
            </Image>
        <TextoLogo>Aerodrómo.</TextoLogo>
        </LogoContainer>
    )

}