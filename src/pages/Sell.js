import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import FormSell from '../components/Sell/FormSell'
import JumbotronImage from '../components/Sell/JumbotronImage';
import Parralax from '../components/Home/Parralax';
import { arrayOfImages } from '../utils/WatchImgUrl';
import BrandContainer2 from '../components/Global/BrandContainer2';
import venteDjumbo from '../img/vente/ventejumbo.jpeg'




class Achat extends Component {
  render() {
    const imageSource = venteDjumbo
    var randomItem = arrayOfImages[Math.floor(Math.random()*arrayOfImages.length)];
    const imgUrl = randomItem
    return (
      <div>
        <JumbotronImage imgSrc={imageSource} />
        <FormSell />
        <Parralax imgUrl={imgUrl}/>
        <BrandContainer2/>
      </div>
    );
  }
}

export default withTranslation()(Achat);