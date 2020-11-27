import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Entertainment from './components/Entertainment';
import Events from './components/Events';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/entertainment" component={Entertainment} />
      <Route path="/shop" component={Shop} />
      <Route path="/events" component={Events} />
      <Route path="/contact" component={Contact} />

      </Switch>
      <Nav />
      <Footer />


    </Router>


  );
}

export default App;
