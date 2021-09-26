import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CardLine from '../components/Home/CardLine'
import CarouselHero from '../components/Home/CarouselHero'
import Parralax from '../components/Home/Parralax';
import { arrayOfImages } from '../utils/WatchImgUrl';
import TitreCard from '../components/Global/TitreCard';
import BrandContainer from '../components/Global/BrandContainer';
import LogoContainer from '../components/Global/LogoContainer';








class Home extends Component {
  render() {

    var randomItem = arrayOfImages[Math.floor(Math.random()*arrayOfImages.length)];
    const imgUrl = randomItem
    return (
      <div>
        <CarouselHero />
        <TitreCard
                    titre={"Pourquoi choisir WMC"}
                    sousTitre={""}
                    cardText={"WMC est composé d'une équipe de passionnés d'horlogerie au bénéfice d' une grande expérience dans le domaine. En effet nos membres experts sont certifiés “Watch specialist” par la prestigieuse FHH Suisse (Fédération de la Haute Horlogerie). Nos connaissances approfondies de l’industrie horlogère nous permettent d’offrir à nos clients un conseil et une expertise personnalisés, ainsi que la possibilité de reprise ou d'échange. Recevez dès maintenant une évaluation gratuite de votre montre."}
                />
        <CardLine />
        
        <Parralax imgUrl={imgUrl}/>
        <BrandContainer/>
        <LogoContainer/>
        
      </div>
    );
  }
}

export default withTranslation()(Home);

