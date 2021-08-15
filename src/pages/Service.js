import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import JumbotronImage from '../components/Sell/JumbotronImage';
import TextAnimate from '../components/Service/TextAnimate';

class Service extends Component {
  render() {
    const imageSource = "https://s3-eu-west-1.amazonaws.com/poslux-wordpress/wp-content/uploads/sites/2/2019/02/06011845/IWC-Hero-21.jpg"
    return (
      <div>
        <JumbotronImage imgSrc={imageSource}/>
        <h2>Service</h2>
        <TextAnimate textOne="VVM" textTwo="emotion dealer"/>
      </div>
    );
  }
}

export default withTranslation()(Service);