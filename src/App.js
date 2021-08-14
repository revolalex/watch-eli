import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Buy from './pages/Sell'
import Sell from './pages/Buy'
import Service from './pages/Service'
import Navbar5 from './components/navbar5';
import Footer from './components/Footer';
import Trade from './pages/Trade'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar5 />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/buy' component={Buy} />
          <Route path='/sell' component={Sell} />
          <Route path='/service' component={Service} />
          <Route path='/trade' component={Trade} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;