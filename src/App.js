import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <div>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    <Navigation />
  </div>
);

export default App;
