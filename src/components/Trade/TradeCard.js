import { Component } from "react";
import { Container, Card } from "react-bootstrap";
import TradeHandImg from '../../img/echangeHands.jpg'
import { withTranslation } from "react-i18next";
import TradeForm from "./TradeForm";
import '../css/TradeCard.css'



class TradeCard extends Component {
    state = {}
    render() {
        // const t = this.props.t
        return (
            <Container>
                <div className="card col-md-12 p-3 my-horizontal-card">
                    <div className="row ">
                        <Card.Title className="title-card-trade">
                            Vous ne la portez plus,
                        </Card.Title>
                        <Card.Title className="title-card-trade">
                            Echangez-la !
                        </Card.Title>
                        <img style={{ objectFit: "cover", height: "30vw" }} alt="montre" src={TradeHandImg} />
                        <div className="col-md-12">
                            <br />
                            <div className="card-block">
                                <Container>
                                    <Card.Text>
                                        Envie de changement? Votre montre passe son temps au coffre fort
                                        ou dans un tiroir? Offrez-lui une seconde vie tout en vous faisant plaisir:
                                        échangez-la simplement et rapidement de manière sécurisée. Nous expertisons
                                        votre montre gratuitement, et vous proposons en échange une sélection de pièces
                                        soigneusement restaurées ou neuves. Maximisez votre temps et votre argent
                                        en une seule opération simple et rapide!
                                    </Card.Text>
                                    <Card.Text>
                                        Dès la réception et expertise de votre montre, la pièce de votre choix vous sera livrée
                                        Nos experts vous conseillent également volontiers sur les montres d’investissement du moment si vous souhaitez acheter une montre afin de la revendre (et non de la porter)
                                        Que nous ayons le modèle disponible dans notre inventaire ou non, nous nous engageons à dénicher la montre de vos rêves...
                                    </Card.Text>
                                </Container>
                            </div>
                        </div>
                        <TradeForm />
                    </div>
                </div>

            </Container>
        );
    }
}

export default withTranslation()(TradeCard);