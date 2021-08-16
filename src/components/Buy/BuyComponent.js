
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Card, Container } from 'react-bootstrap';


class BuyComponent extends Component {
    state = {}
    render() {
        const t = this.props.t
        return (
            <div>
                <br/>
                <Container style={{textAlign:"center"}}>
                    <Card >
                        <div className="title-div">
                            <div>
                                <h1>Trouvez la montre de vos rêves </h1>
                                <h5>Visitez notre boutique en ligne </h5>
                                <p>
                                    Watches Paris vous propose une sélection de montres neuves ou d’occasion
                                    pour le plus grand bonheur des passionnés d’horlogerie mais aussi des
                                    collectionneurs. Toutes nos pièces “certified pre-owned” sont
                                    authentifiées, certifiées et restaurées par des experts
                                    horlogers afin de garantir une qualité irréprochable.
                                    Nos montres 100% certifiées d’origine.
                                </p>
                                <p>
                                    Visitez notre boutique en ligne 
                                    via la plateforme sécurisée Chrono24 et achetez l’esprit tranquille.
                                    Nous vendons uniquement des montres 100% certifiées authentiques 
                                    et garanties minimum 12 mois.
                                    Notre sélection de montres( link chrono24)
                                </p>
                            </div>

                        </div>
                    </Card>
                </Container>
                <p>

                </p>
            </div>
        );
    }
}

export default withTranslation()(BuyComponent);