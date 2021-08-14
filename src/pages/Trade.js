import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Card } from "react-bootstrap";
import JumbotronImage from '../components/Sell/JumbotronImage';



class Trade extends Component {
    state = {}
    render() {
        return (
            <div>
                
                <JumbotronImage imgSrc=" https://i.ytimg.com/vi/NoRstEITESg/maxresdefault.jpg" />

                <div className="container py-3">
                    <Card>
                        <Card.Title>Vous ne la portez plus? Echangez-la! </Card.Title>
                        <Card.Text> Envie de changement? Votre montre passe son temps au coffre fort
                            ou dans un tiroir? Offrez-lui une seconde vie tout en vous faisant plaisir:
                            échangez-la simplement et rapidement de manière sécurisée. Nous expertisons
                            votre montre gratuitement, et vous proposons en échange une sélection de pièces
                            soigneusement restaurées ou neuves. Maximisez votre temps et votre argent
                            en une seule opération simple et rapide!
                        </Card.Text>
                        <Card.Text>Duis aute irure dolor in reprehenderit in voluptate velit esse cillu
                            m dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Card.Text>

                    </Card>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Trade);