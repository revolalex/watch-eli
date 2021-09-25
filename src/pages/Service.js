import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import JumbotronImage from '../components/Sell/JumbotronImage';
// import TextAnimate from '../components/Service/TextAnimate';
import { arrayOfImages } from '../utils/WatchImgUrl';
import Parralax from '../components/Home/Parralax';
import BrandContainer2 from '../components/Global/BrandContainer2';
// import service from '../img/service2.jpeg'
import ServiceCard from '../components/Service/ServiceCard';
import ServiceTitre from '../components/Service/ServiceTitre';


class Service extends Component {
  render() {
    // const imageSource = "https://s3-eu-west-1.amazonaws.com/poslux-wordpress/wp-content/uploads/sites/2/2019/02/06011845/IWC-Hero-21.jpg"
    var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
    const imgUrl = randomItem
    return (
      <div>
        <JumbotronImage imgSrc="https://www.audemarspiguet.com/content/dam/ap/com/services/caring/setting-time-date.jpg.transform.apfw.jpg"/>
        <ServiceTitre/>
        <ServiceCard />
        {/* <TextAnimate textOne="WMC" textTwo="Emotion Dealer" /> */}
        <Parralax imgUrl={imgUrl} />
        <BrandContainer2 />
      </div>
    );
  }
}

export default withTranslation()(Service);