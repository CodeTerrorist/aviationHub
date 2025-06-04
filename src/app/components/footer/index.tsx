import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const FooterContainer = styled.div`
    min-height: 20em;
    background-color: rgb(14, 38, 80);
    ${tw`
        min-w-full
        pt-7
        pb-1
        flex
        flex-wrap
    `};

`;

const ContainerDentroFooter = styled.div`

    ${tw`
        flex
        flex-col

    `};

`;


export function Footer(){

    return(

       <FooterContainer></FooterContainer>

    )

}