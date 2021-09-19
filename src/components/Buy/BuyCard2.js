import { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import VvmTooltip from "../Home/VvmTooltip";




class BuyCard2 extends Component {
    state = {}
    render() {
        const t = this.props.t
        return (
            <Container>
                <div className="card col-md-12 p-3 my-horizontal-card">
                    <div className="row ">
                        <div className="col-md-4">
                            <img className="w-100" alt="montre" src="https://cdn.lesrhabilleurs.com/uploads/2018/04/Montre-Cartier-Santos-2018-17-1200x900.jpg" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-block">
                                <br/>
                                <Card.Title>
                                    {t('buy-card2-title')}
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







