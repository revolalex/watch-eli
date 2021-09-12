import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import JumbotronImage from '../components/Sell/JumbotronImage';
import TextAnimate from '../components/Service/TextAnimate';
import { arrayOfImages } from '../utils/WatchImgUrl';
import Parralax from '../components/Home/Parralax';
import BrandContainer from '../components/Global/BrandContainer';
import service from '../img/service2.jpeg'


class Service extends Component {
  render() {
    // const imageSource = "https://s3-eu-west-1.amazonaws.com/poslux-wordpress/wp-content/uploads/sites/2/2019/02/06011845/IWC-Hero-21.jpg"
    var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
    const imgUrl = randomItem
    return (
      <div>
        <JumbotronImage imgSrc={service} />
        <h2>Service</h2>
        <p>
          Nous travaillons main dans la main avec les plus grandes manufactures
          horlogères afin de vous proposer un service de réparation et de
          révision et entretien à la hauteur de vos attentes.
          Montres mécaniques à remontage manuel, montres automatiques,
          modèles à complications ou simples échanges de piles,
          nos techniciens horlogers assurent la maintenance de tous types de montres.
        </p>
        <TextAnimate textOne="VVM" textTwo="emotion dealer" />
        <Parralax imgUrl={imgUrl} />
        <BrandContainer/>
      </div>
    );
  }
}

export default withTranslation()(Service);