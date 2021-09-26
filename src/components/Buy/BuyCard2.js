import { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import VvmTooltip from "../Home/VvmTooltip";

// Images
import achatCard2 from "../../img/achat/achatCard2.jpeg"
import achatCard21 from "../../img/achat/1.jpeg"
import achatCard22 from "../../img/achat/3.jpeg"
import achatCard23 from "../../img/achat/4.jpeg"
import achatCard24 from "../../img/achat/5.jpeg"
import achatCard25 from "../../img/achat/8.jpeg"




class BuyCard2 extends Component {
    state = {}

    render() {
        const arrayOfImages = [achatCard21, achatCard2, achatCard22, achatCard23, achatCard24, achatCard25 ]
        var randomItem = arrayOfImages[Math.floor(Math.random()*arrayOfImages.length)];
        const imgUrl = randomItem

        const t = this.props.t
        return (
            <Container>
                <div className="card col-md-12 p-3 my-horizontal-card">
                    <div className="row ">
                        <div className="col-md-4">
                            <img className="w-100" alt="montre" src={imgUrl} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-block">
                                <br/>
                                <Card.Title>
                                    <h4>{t('buy-card2-title')}</h4>
                                </Card.Title>
                                <Card.Text>
                                    {/* {t('buy-card2-text-part1')}
                                    <TooltipPerso abrevation="C.P.O" traduction="Certified Pre Own" />
                                    {t('buy-card2-text-part2')} */}
                                    En quête d’une pièce rare ou exceptionnelle? N'hésitez pas à nous contacter directement,&nbsp;<VvmTooltip />
                                    &nbsp;s’engage à trouver votre prochaine montre grâce à notre réseau mondial de professionnels.
                                </Card.Text>
                                <a href="/contact" className="btn btn-success" style={{ backgroundColor: "var(--vert-color)" }}>Nous contacter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default withTranslation()(BuyCard2);







