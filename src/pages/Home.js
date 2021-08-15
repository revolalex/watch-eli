import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CardLine from '../components/Home/CardLine'
import CarouselHero from '../components/Home/CarouselHero'
import Parralax from '../components/Home/Parralax';






class Home extends Component {
  render() {
    return (
      <div>
        <CarouselHero />
        <CardLine />
        <Parralax/>
      </div>
    );
  }
}

export default withTranslation()(Home);

