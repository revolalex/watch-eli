import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import Service from './pages/Service'
// import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3';
import Footer from './components/Footer';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar3  />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/buy' component={Buy} />
            <Route path='/sell' component={Sell} />
            <Route path='/service' component={Service} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;