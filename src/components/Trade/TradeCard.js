import { Component } from "react";
import { Container, Card } from "react-bootstrap";
import TradeHandImg from '../../img/echangeHands.jpg'
import { withTranslation } from "react-i18next";


class TradeCard extends Component {
    state = {}
    render() {
        // const t = this.props.t
        return (
            <Container>
                <div className="card col-md-12 p-3 my-horizontal-card">
                    <div className="row ">
                        <div className="col-md-4">
                            <img className="w-100" alt="montre" src={TradeHandImg} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-block">
                                <Card.Title>
                                    Vous ne la portez plus? Echangez-la!
                                </Card.Title>
                                <Card.Text>
                                    Envie de changement? Votre montre passe son temps au coffre fort
                                    ou dans un tiroir? Offrez-lui une seconde vie tout en vous faisant plaisir:
                                    échangez-la simplement et rapidement de manière sécurisée. Nous expertisons
                                    votre montre gratuitement, et vous proposons en échange une sélection de pièces
                                    soigneusement restaurées ou neuves. Maximisez votre temps et votre argent
                                    en une seule opération simple et rapide!
                                </Card.Text>

                                <a href="/" className="btn btn-success" style={{ backgroundColor: "var(--vert-color)" }}>read more...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default withTranslation()(TradeCard);