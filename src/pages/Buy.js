import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import JumbotronImage from '../components/Sell/JumbotronImage';
import BuyCard from '../components/Buy/BuyCard';
import BuyCard2 from '../components/Buy/BuyCard2';
import BuyTitre from '../components/Buy/BuyTitre';
import Parralax from '../components/Home/Parralax';



class Buy extends Component {
  render() {
    const imgUrl = "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTUyMDJTVC5PTy4xMjQwU1QuMDE=/importer/watch.png.transform.apfw.jpg"
    return (
      <div>
        <JumbotronImage imgSrc="https://swisswatches-magazine.com/wp-content/uploads/2020/11/Cartier-Ballon-Bleu-de-Cartier-36mm-W6920046-Wristshot-Pocketshot.jpg" />
        <br />
        <BuyTitre/>
        <BuyCard />
        <BuyCard2 />
        <Parralax imgUrl={imgUrl}/>
      </div>
    );
  }
}

export default withTranslation()(Buy);