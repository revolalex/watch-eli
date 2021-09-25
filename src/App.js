import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Sell from './pages/Sell'
import Buy from './pages/Buy'
import Service from './pages/Service'
import Navbar from './components/Global/navbar';
import Footer from './components/Global/Footer';
import Trade from './pages/Trade'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/blog' component={Blog} />
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