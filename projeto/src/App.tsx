import React from 'react';
import './App.css';
import styled from "styled-components";
import tw from "twin.macro";
import { HomePage } from './app/containers/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MassAndBalanceCalculator from './app/components/mass_Balance/MassBalance';
import { NavItems } from './app/components/navbar/navItems';
import MetarLookup from './app/components/MetarLookUp/MetarLookUp';
import Aeronaves from './app/components/aeronaves/Aeronaves';
import CriarAeronave from './app/components/aeronaves/AdicionarAeronave';
import UpdateAeronave from './app/components/aeronaves/UpdateAeronave';
import CriarMod from './app/components/Reparos/reparos';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `};
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MassBalance" element={<MassAndBalanceCalculator />} />
          <Route path="/Metereologia" element={<MetarLookup />} />
          <Route path="/Aeronaves" element={<Aeronaves />} />
          <Route path="/AdicionarAeronaves" element={<CriarAeronave />} />
          <Route path="/updateAero/:IDAviao" element={<UpdateAeronave />} />
          <Route path="/Modificacao" element={<CriarMod />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
