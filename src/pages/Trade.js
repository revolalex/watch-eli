import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TitreCard from '../components/Global/TitreCard';
import JumbotronImage from '../components/Sell/JumbotronImage';
import TradeCard from '../components/Trade/TradeCard';
import TradeStep2 from '../components/Trade/TradeStep2';
import Parralax from '../components/Home/Parralax';
import { arrayOfImages } from '../utils/WatchImgUrl';
import BrandContainer from '../components/Global/BrandContainer';


class Trade extends Component {
    state = {}
    render() {

        var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
        const imgUrl = randomItem
        return (
            <div>
                <JumbotronImage imgSrc=" https://i.ytimg.com/vi/NoRstEITESg/maxresdefault.jpg" />
                <TitreCard
                    titre={"Echangez votre montre "}
                    sousTitre={"C'est trés simple et vous serez sastifait"}
                    cardText={"Envie de changement? Votre montre passe son temps au coffre fort ou dans un tiroir? Offrez-lui une seconde vie tout en vous faisant plaisir"}
                />
                <TradeCard />
                <br />
                <TradeStep2 />
                <Parralax imgUrl={imgUrl} />
                <BrandContainer />
            </div>
        );
    }
}

export default withTranslation()(Trade);