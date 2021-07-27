import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CardLine from '../components/CardLine'
import CarouselHero from '../components/CarouselHero'
import "./Home.css"





class Home extends Component {
  render() {
    return (
      <div>
        <CarouselHero />
        <CardLine />
        <div class="parallax"></div>
      </div>
    );
  }
}

export default withTranslation()(Home);

