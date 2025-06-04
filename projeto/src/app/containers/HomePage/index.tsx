import React from "react";
import styled  from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/navbar";
import { SeccaoTopo } from "./seccaoTopo";
import { AlugarCal } from "../../components/CalendarioAlugar";
import { Marginer } from "../../components/marginer";
import { PassosParaAlugar } from "../alugar";
import { Conhecanos } from "../conhecanos";
import { Footer } from "../../components/footer";
import MassAndBalanceCalculator from "../../components/mass_Balance/MassBalance";
import { Link } from "@reach/router";
import ReactDOM from "react-dom";
import App from "../../../App";

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
    `}
`;

export function HomePage(){

    return( <PageContainer>
       <NavBar />
       <SeccaoTopo/>
       <PassosParaAlugar/>
       <Conhecanos/>
       <Footer/>
    </PageContainer>
    );
}

export default HomePage;