import { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import Chrono24 from "./Chrono24";
import '../css/BuyCard.css'


class BuyCard extends Component {
    state = {}
    render() {
        // const t = this.props.t
        return (
            <Container>
                <div className="card col-md-12 p-3 my-horizontal-card">
                    <div className="row ">
                        <div className="col-md-4">
                            <img className="w-100 h-100" alt="montre" src="https://cdn.shopify.com/s/files/1/0263/1919/2169/articles/Screen_Shot_2019-08-05_at_17.36.20_1024x.png?v=1568115675" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-block">
                                <br/>
                                <Card.Title>
                                    {/* {t('buy-card-title')} */}
                                    Le modèle de vos rêves en un clic sur WMC
                                </Card.Title>
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
                                    <a href="https://www.chrono24.fr/about-us.htm#gref"> Protection des Acheteurs de Chrono24:</a>
                                    &nbsp;transaction sécurisée sur le compte d’un tiers de confiance et garantie d'authenticité.
                                </Card.Text>
                                <img className="protection-achat-img" src="https://static.chrono24.com/images/default/icons/stage-buyers-protection.svg" alt="achat potection chono24" />
                                <br />
                                <Card.Text>
                                    Toutes nos pièces “certified pre-owned” sont évaluées, authentifiées et certifiées
                                    par des experts horlogers afin de garantir une qualité irréprochable.
                                    Nos montres 100% certifiées d’origine et garanties 16mois*.
                                </Card.Text>
                                <Card.Text style={{textAlign: "center", textDecoration: "underline", fontSize: "1.2em"}}>Notre sélection de montres:</Card.Text>
                                <Chrono24 />
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