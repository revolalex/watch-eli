import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TitreCard from '../components/Global/TitreCard';
import JumbotronImage from '../components/Sell/JumbotronImage';
import TradeCard from '../components/Trade/TradeCard';
import TradeStep2 from '../components/Trade/TradeStep2';
import Parralax from '../components/Home/Parralax';
import { arrayOfImages } from '../utils/WatchImgUrl';
import BrandContainer from '../components/Global/BrandContainer';
import echangeImg from '../img/echange/1.jpeg'
import LogoContainer from '../components/Global/LogoContainer';


class Trade extends Component {
    state = {}
    render() {

        var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
        const imgUrl = randomItem
        return (
            <div>
                <JumbotronImage imgSrc={echangeImg} />
                <TitreCard
                    titre={"Echangez votre montre "}
                    sousTitre={"C'est trés simple et vous serez sastifait"}
                    cardText={"Envie de changement? Votre montre passe son temps au coffre fort ou dans un tiroir? Offrez-lui une seconde vie tout en vous faisant plaisir"}
                />
                <TradeCard />
                <TradeStep2 />
                <Parralax imgUrl={imgUrl} />
                <BrandContainer />
                <LogoContainer/>
            </div>
        );
    }
}

export default withTranslation()(Trade);