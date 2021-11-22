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
/* import useUser from './Helpers/Hooks/useUser'; */

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/productos'>
            <Productos />
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
