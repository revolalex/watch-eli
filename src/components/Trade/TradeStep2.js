import { Component } from "react";
import { Container } from "react-bootstrap";
import './TradeStep2.css'
// ICONES
import formulaireIcon from '../../img/icone/formIcon.jpeg'
import money from '../../img/icone/money.jpeg'
import watchIcon from '../../img/icone/watchIcon.jpeg'
import searchIcon from '../../img/icone/searchIcon.jpeg'
import colisIcon from '../../img/icone/colisIcon.jpeg'


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
                                        <img className="yourImage" srcset={formulaireIcon} alt="icone formulaire" width="80px" />
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
                                        <img className="yourImage" srcset={money} width="80px" alt="icone argent" />
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
                                        <img className="yourImage" srcset={watchIcon} alt="icone montre" width="80px"  />
                                        <img className="yourImage" srcset={searchIcon} alt="recherche icones" width="80px"  />
                                    </picture>
                                    <br /> <br />
                                </div>
                                <h4 >
                                    Step-3 falcutatif<br />Sélectionnez votre nouvelle montre
                                </h4>
                                <p>Indiquez nous le ou les modèles qui vous intéresse dans le commentaire, nous vous proposerons alors une sélections en adéquation avec votre gout</p>
                            </div>
                        </div>
                        <div className="trade-card-container" style={{ width: "240px" }}>
                            <div className="trade-step-card">
                                <div >
                                    <picture>
                                        <img className="yourImage" srcset={colisIcon} alt="colis icone" width="80px" />
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