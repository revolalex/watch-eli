import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import TitreCard from '../components/Global/TitreCard';
import JumbotronImage from '../components/Sell/JumbotronImage';
import TradeCard from '../components/Trade/TradeCard';
import TradeStep from '../components/Trade/TradeStep';



class Trade extends Component {
    state = {}
    render() {
        return (
            <div>
                <JumbotronImage imgSrc=" https://i.ytimg.com/vi/NoRstEITESg/maxresdefault.jpg" />
                <br/>
                <Container>
                    <TitreCard
                        titre={"Echangez votre montre !"}
                        sousTitre={"C'est trés simple et vous serez sastifait"}
                        cardText={"Envie de changement? Votre montre passe son temps au coffre fort ou dans un tiroir? Offrez-lui une seconde vie tout en vous faisant plaisir"}
                    />
                </Container>
                <TradeCard />
                <TradeStep />

            </div>
        );
    }
}

export default withTranslation()(Trade);