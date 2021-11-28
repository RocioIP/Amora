import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Global comps
import { Home } from './Components/Global/Home';
import NavBar from './Components/Global/NavBar';

import ContactUs from './Components/Forms/ContactUs';

import Footer from './Components/Global/Footer';

import Colecciones from './Components/Productos/Colecciones';
import Productos from './Components/Productos/Productos';
import Nosotros from './Components/Global/Nosotros';
import Carteras from './Components/Productos/Carteras';
import Llaveros from './Components/Productos/Llaveros';
import Pasaportes from './Components/Productos/Pasaportes';
import Fundas from './Components/Productos/Fundas';
/* import useUser from './Helpers/Hooks/useUser'; */

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/productos' exact>
            <Productos />
          </Route>
          <Route path='/productos/carteras' exact>
            <Carteras />
          </Route>
          <Route path='/productos/llaveros' exact>
            <Llaveros />
          </Route>
          <Route path='/productos/pasaportes' exact>
            <Pasaportes />
          </Route>
          <Route path='/productos/fundas' exact>
            <Fundas />
          </Route>
          <Route path='/colecciones'>
            <Colecciones />
          </Route>

          <Route path='/contacto'>
            <ContactUs />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/taller'>
            <Nosotros />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
