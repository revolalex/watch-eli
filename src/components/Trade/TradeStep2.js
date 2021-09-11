import { Component } from "react";
import { Container } from "react-bootstrap";
import './TradeStep2.css'
class TradeStep2 extends Component {
    state = {}
    render() {
        return (
            <div className="trade-first-div">
                <Container>
                    <div className="trade-div-titre">
                        <h3>Comment prenons-nous en charge votre montre?</h3>
                    </div>
                    <div className="main-trade-step-div" >
                        <div className="trade-card-container" style={{ width: "240px" }}>
                            <div className="trade-step-card">
                                <div >
                                    <picture>
                                        <img srcset="https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_form-2015-03-10-04-49-19-383.png;quality=90;w=103, https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_form-2015-03-10-04-49-19-383.png;quality=55;w=206 2x" alt="echange" />
                                    </picture>
                                    <br /> <br />
                                </div>
                                <h4 >
                                    Step-1 <br />Remplissez le formulaire
                                </h4>
                                <p> Remplissez le formulaire Un membre de notre équipe vous contactera dans un délai de 48 heures</p>
                            </div>
                        </div>
                        <div className="trade-card-container" style={{ width: "240px" }}>
                            <div className="trade-step-card">
                                <div >
                                    <picture>
                                        <img srcset="https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_payment-2021-01-15-03-34-37-809.png;quality=90;w=100, https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_payment-2021-01-15-03-34-37-809.png;quality=55;w=200 2x" alt="echange" />
                                    </picture>
                                    <br /> <br />
                                </div>
                                <h4 >
                                    Step-2 <br />Recevez votre offre personnalisée
                                </h4>
                                <p>Nous vous ferons une offre en adéquation à la valeurs de votre pièce </p>
                            </div>
                        </div>
                        <div className="trade-card-container" style={{ width: "240px" }}>
                            <div className="trade-step-card">
                                <div >
                                    <picture>
                                        <img srcset="https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_inspect-2015-03-10-04-49-24-084.png;quality=90;w=99, https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_inspect-2015-03-10-04-49-24-084.png;quality=55;w=198 2x" alt="echange" />
                                    </picture>
                                    <br /> <br />
                                </div>
                                <h4 >
                                    Step-3 falcutatif<br />Sélectionnez votre nouvelle montre
                                </h4>
                                <p>Indiquez nous le ou les modèles qui vous intéresse, nous vous proposerons alors une sélections en adéquation avec votre gout</p>
                            </div>
                        </div>
                        <div className="trade-card-container" style={{ width: "240px" }}>
                            <div className="trade-step-card">
                                <div >
                                    <picture>
                                        <img srcset="https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_collection-2021-01-15-03-34-37-988.png;quality=90;w=100, https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_collection-2021-01-15-03-34-37-988.png;quality=55;w=200 2x" alt="echange" />
                                    </picture>
                                    <br /> <br />
                                </div>
                                <h4>
                                    Step-4 <br /> Collecte gratuite à domicile
                                </h4>
                                <p> Nous programmons la collecte de votre montre, Expédiez votre montre, Livraison de votre nouvelle montre</p>
                            </div>
                        </div>


                    </div>
                </Container>
            </div>
        );
    }
}

export default TradeStep2;