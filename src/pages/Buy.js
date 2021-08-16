import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Chrono24 from '../components/Buy/Chrono24';
import BuyComponent from '../components/Buy/BuyComponent';
import JumbotronImage from '../components/Sell/JumbotronImage';

class Buy extends Component {
  render() {
    return (
      <div>
        <JumbotronImage imgSrc="https://swisswatches-magazine.com/wp-content/uploads/2020/11/Cartier-Ballon-Bleu-de-Cartier-36mm-W6920046-Wristshot-Pocketshot.jpg" />
        <br/>
        <BuyComponent />
        <br/>
        <Chrono24 />
        
      </div>
    );
  }
}

export default withTranslation()(Buy);