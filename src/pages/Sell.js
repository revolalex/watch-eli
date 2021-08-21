import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import FormSell from '../components/Sell/FormSell'
import JumbotronImage from '../components/Sell/JumbotronImage';
import Parralax from '../components/Home/Parralax';



class Sell extends Component {
  render() {
    const imageSource = "https://i2.wp.com/www.luxsure.fr/wp-content/uploads/2021/04/jlc-reverso-tribute-small-seconds-green-stilllife-16x9-1-scaled.jpg?ssl=1"
    const imgUrl = "https://timeandtidewatches.com/wp-content/uploads/2021/04/TAG-Heuer-Monaco-Green-face-22April2021-13.jpg"
    return (
      <div>
        <JumbotronImage imgSrc={imageSource} />
        <FormSell />
        <Parralax imgUrl={imgUrl}/>
      </div>
    );
  }
}

export default withTranslation()(Sell);