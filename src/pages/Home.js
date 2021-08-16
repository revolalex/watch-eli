import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CardLine from '../components/Home/CardLine'
import CarouselHero from '../components/Home/CarouselHero'
import Parralax from '../components/Home/Parralax';






class Home extends Component {
  render() {
    const imgUrl = 'https://cdn-s-www.estrepublicain.fr/images/EB483BE0-916B-49EC-B911-310CAAC2E062/NW_raw/rolex-et-l-horlogerie-de-luxe-plus-generalement-sont-dans-l-oeil-du-cyclone-du-front-de-gauche-photo-dr-1433141154.jpg'
    return (
      <div>
        <CarouselHero />
        <CardLine />
        <Parralax imgUrl={imgUrl}/>
      </div>
    );
  }
}

export default withTranslation()(Home);

