import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import JumbotronImage from '../components/Sell/JumbotronImage';
import TextAnimate from '../components/Service/TextAnimate';
import { arrayOfImages } from '../utils/WatchImgUrl';
import Parralax from '../components/Home/Parralax';
import BrandContainer from '../components/Global/BrandContainer';
import service from '../img/service2.jpeg'
import servCard from '../img/serv.jpeg'


class Service extends Component {
  render() {
    // const imageSource = "https://s3-eu-west-1.amazonaws.com/poslux-wordpress/wp-content/uploads/sites/2/2019/02/06011845/IWC-Hero-21.jpg"
    var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
    const imgUrl = randomItem
    return (
      <div>
        <JumbotronImage imgSrc={service} />

        <div className="container">
          <div classNameName="row">
            <div className="card col-md-12 p-3 my-horizontal-card">
              <div className="row ">
                <div className="col-md-4">
                  <img className="w-100" alt="horloger" src={servCard} />
                </div>
                <div className="col-md-8">
                  <div className="card-block">
                    <h6 className="card-title">Service</h6>
                    <p className="card-text text-justify"> Nous travaillons main dans la main avec les plus grandes manufactures
                      horlogères afin de vous proposer un service de réparation et de
                      révision et entretien à la hauteur de vos attentes.
                      Montres mécaniques à remontage manuel, montres automatiques,
                      modèles à complications ou simples échanges de piles,
                      nos techniciens horlogers assurent la maintenance de tous types de montres.</p>
                    <a href="/" className="btn btn-success">read more...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TextAnimate textOne="WMC" textTwo="Emotion Dealer" />
        <Parralax imgUrl={imgUrl} />
        <BrandContainer />
      </div>
    );
  }
}

export default withTranslation()(Service);