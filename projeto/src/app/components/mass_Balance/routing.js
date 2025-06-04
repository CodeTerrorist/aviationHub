import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavItems } from './navbar/navItems';
import Home from './pages/Home';
import Aeronaves from './pages/Aeronaves';
import MassBalance from './pages/MassBalance';
import Metereologia from './pages/Metereologia';
import Briefing from './pages/Briefing';

function App() {
  return (
    <Router>
      <NavItems />

      <Route path="/" exact component={Home} />
      <Route path="/Aeronaves" component={Aeronaves} />
      <Route path="/MassBalance" component={MassBalance} />
      <Route path="/Metereologia" component={Metereologia} />
      <Route path="/Breifing" component={Briefing} />
    </Router>
  );
}

export default App;