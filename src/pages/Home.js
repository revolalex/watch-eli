import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CardLine from '../components/Home/CardLine'
import CarouselHero from '../components/Home/CarouselHero'
import "./Home.css"





class Home extends Component {
  render() {
    return (
      <div>
        <CarouselHero />
        <CardLine />
        <div className="parallax"></div>
      </div>
    );
  }
}

export default withTranslation()(Home);

