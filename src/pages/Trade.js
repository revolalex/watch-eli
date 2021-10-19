import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TitreCard from '../components/Global/TitreCard';
import JumbotronImage from '../components/Sell/JumbotronImage';

import Parralax from '../components/Home/Parralax';
import { arrayOfImages } from '../utils/WatchImgUrl';
import BrandContainer from '../components/Global/BrandContainer';
import echangeImg from '../img/echange/1.jpeg'
import LogoContainer from '../components/Global/LogoContainer';
import TradeFinal from '../components/Trade/TradeFinal';


class Trade extends Component {
    state = {}
    render() {

        var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
        const imgUrl = randomItem
        return (
            <div>
                <JumbotronImage imgSrc={echangeImg} />
                <TitreCard
                    titre={`WMC vous propose la solution échange`}
                    cardText={`Comment ca marche: WMC vous assiste en proposant une reprise de votre 
                    montre en l’état au profit du nouveau modèle de votre choix. 
                    WMC évalue votre montre et vous offre un devis gratuit afin 
                    de vous faire profiter d’une offre financièrement attractive 
                    et d’un gain de temps en réalisant deux opérations en une. 
                    
                    `}
                    cardTextPart2={`Remplissez le formulaire ci-dessous, un membre de notre équipe 
                    vous contactera dans un délai de 48 heures afin d’établir 
                    un devis gratuit pour procéder à l’échange de votre montre.`}
                />
                <TradeFinal/>
                <Parralax imgUrl={imgUrl} />
                <BrandContainer />
                <LogoContainer/>
            </div>
        );
    }
}

export default withTranslation()(Trade);