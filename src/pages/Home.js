import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CardLine from '../components/Home/CardLine'
import CarouselHero from '../components/Home/CarouselHero'
import Parralax from '../components/Home/Parralax';
import { arrayOfImages } from '../utils/WatchImgUrl';







class Home extends Component {
  render() {

    var randomItem = arrayOfImages[Math.floor(Math.random()*arrayOfImages.length)];
    const imgUrl = randomItem
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

