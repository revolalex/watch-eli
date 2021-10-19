
import { OverlayTrigger, Tooltip, Card } from "react-bootstrap";
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TitreCard from '../Global/TitreCard';


class BuyTitre extends Component {
    state = {}
    render() {
        // const t = this.props.t
        return (


            <Card >
                <div className="title-div">
                    <div className="title-setting">
                        <h1 className="my-police-titre">Trouvez la montre de vos rêves</h1>
                        <br />
                        <h5>
                            WMC vous propose une sélection de montres neuves ou d’occasion pour le plus grand bonheur des amateurs d’horlogerie et des collectionneurs passionnés. Toutes nos pièces “certified pre-owned” sont contrôlées, authentifiées et certifiées par des experts horlogers afin de garantir une qualité irréprochable.
                        </h5>
                        <h5>
                            Nos montres sont 100% certifiées d’origine et garanties 18mois&nbsp;
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id="tooltip-disabled">
                                        {`Avec WMC vous êtes sécurisé: tous nos produits sont garantis pour une période de 18 mois. Pour plus d'information, veuillez consulter nos garanties légales`}
                                    </Tooltip>
                                }>
                                <span className="d-inline-block"
                                    style={{
                                        color: "var(--vert-color)",
                                        fontWeight: "900"
                                    }}
                                >
                                    <i className="fal fa-info-circle" />
                                </span>
                            </OverlayTrigger>
                        </h5>
                        <br />
                        <h3 style={{ fontWeight: "bold", color: "black !impoortant", }} className="my-link-titre-card">
                            <a className="titre-link" href="/sell"> {this.props.cardText2}</a>
                        </h3>
                        <br />
                    </div>

                </div>
            </Card>
        );
    }
}

export default withTranslation()(BuyTitre);