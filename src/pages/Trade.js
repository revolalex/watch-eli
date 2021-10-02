import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TitreCard from '../components/Global/TitreCard';
import JumbotronImage from '../components/Sell/JumbotronImage';
// import TradeCard from '../components/Trade/TradeCard';
// import TradeStep2 from '../components/Trade/TradeStep2';
import Parralax from '../components/Home/Parralax';
import { arrayOfImages } from '../utils/WatchImgUrl';
import BrandContainer from '../components/Global/BrandContainer';
import echangeImg from '../img/echange/1.jpeg'
import LogoContainer from '../components/Global/LogoContainer';
import TradeGlobal from '../components/Trade/TradeGlobal';


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
                    cardText={`WMC vous propose la solution echange. Comment ca marche:
                    WCM vous assiste en proposant une reprise de votre montre en
                    l’état au profit du nouveau modèle de votre choix.
                    WMC évalue votre montre et vous offre un devis gratuit afin
                    de vous faire profiter d’une offre financièrement attractive
                    et d’un gain de temps en réalisant deux opérations en une.`}
                />
                {/* <TradeCard />
                <TradeStep2 /> */}
                <TradeGlobal/>
                <Parralax imgUrl={imgUrl} />
                <BrandContainer />
                <LogoContainer/>
            </div>
        );
    }
}

export default withTranslation()(Trade);