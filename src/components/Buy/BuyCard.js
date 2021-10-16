import { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import Chrono24 from "./Chrono24";
import '../css/BuyCard.css'
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import achatCard from '../../img/achat/achatCard.jpeg'
import ExternaLinks from '../../utils/socialMedia.js'


class BuyCard extends Component {
    state = {}
    render() {
        // const t = this.props.t
        return (
            <Container>
                <div className="card col-md-12 p-3 my-horizontal-card">
                    <div className="row ">
                        <div className="col-md-4">
                            <img className="img-fluid" alt="montre" src={achatCard} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-block">
                                <br />
                                <Card.Title>
                                    {/* {t('buy-card-title')} */}
                                    <h4>Le modèle de vos rêves en un clic sur WMC</h4>
                                </Card.Title>
                                <br/>
                                <Card.Text>
                                    {/* {t('buy-card-text')} */}
                                    Trouvez le modèle de vos rêves en visitant notre boutique en
                                    ligne via la plateforme sécurisée Chrono24.com et procédez
                                    facilement et en toute tranquillité.
                                </Card.Text>
                                <br />
                                <Card.Text>
                                    {/* {t('buy-card-text2')} */}
                                    Sécurisez vos achats grâce à la
                                    <a href="https://www.chrono24.fr/about-us.htm#gref" target="blank"> Protection des Acheteurs de Chrono24:</a>
                                    &nbsp;transaction sécurisée sur le compte d’un tiers de confiance et garantie d'authenticité.
                                </Card.Text>
                                <br/>
                                <img className="protection-achat-img" src="https://static.chrono24.com/images/default/icons/stage-buyers-protection.svg" alt="achat potection chono24" />
                                <br />
                                <br/>
                                <Card.Text>
                                    Toutes nos pièces “certified pre-owned” sont évaluées, authentifiées et certifiées
                                    par des experts horlogers afin de garantir une qualité irréprochable.
                                    Nos montres 100% certifiées d’origine et garanties 18mois &nbsp;
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id="tooltip-disabled">
                                                {`Avec WMC, vous êtes sécurisez tous nos produits sont garanties pour une période de 18 mois, pour plus d'informations consulter nos garanties légales`}
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
                                </Card.Text>
                                <br/>
                                <a href={ExternaLinks.chrono24} target="blank"><Card.Text style={{ textAlign: "center", textDecoration: "underline", fontSize: "1.2em" }}>Visitez notre boutique en ligne</Card.Text></a>
                                <br/>
                                <Chrono24 />
                                <br/>
                                {/* <a href="/" className="btn btn-success" style={{ backgroundColor: "var(--vert-color)" }}>read more...</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default withTranslation()(BuyCard);