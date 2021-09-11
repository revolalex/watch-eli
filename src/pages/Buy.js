import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import JumbotronImage from '../components/Sell/JumbotronImage';
import BuyCard from '../components/Buy/BuyCard';
import BuyCard2 from '../components/Buy/BuyCard2';
import BuyTitre from '../components/Buy/BuyTitre';
import Parralax from '../components/Home/Parralax';
import { arrayOfImages } from '../utils/WatchImgUrl';
import BrandContainer from '../components/Global/BrandContainer';




class Buy extends Component {
  render() {


    var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
    const imgUrl = randomItem
    return (

      <div>
        <JumbotronImage imgSrc="https://swisswatches-magazine.com/wp-content/uploads/2020/11/Cartier-Ballon-Bleu-de-Cartier-36mm-W6920046-Wristshot-Pocketshot.jpg" />
        <br />
        <BuyTitre />
        <BuyCard />
        <BuyCard2 />
        <BrandContainer/>
        <Parralax imgUrl={imgUrl} />
      </div>
    );
  }
}

export default withTranslation()(Buy);