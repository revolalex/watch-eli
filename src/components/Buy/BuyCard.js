import { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import Chrono24 from "./Chrono24";
import VvmTooltip from "../Home/VvmTooltip";


class BuyCard extends Component {
    state = {}
    render() {
        const t = this.props.t
        return (
            <Container>
                <div className="card col-md-12 p-3 my-horizontal-card">
                    <div className="row ">
                        <div className="col-md-4">
                            <img className="w-100" alt="montre" src="https://www.lecalibre.com/wp-content/uploads/2018/07/prix-montres-de-luxe.jpg" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-block">
                                <Card.Title>
                                    {t('buy-card-title')}
                                </Card.Title>
                                <Card.Text>
                                    <VvmTooltip />
                                    &nbsp;
                                    {t('buy-card-text')}
                                </Card.Text>
                                <Card.Text>
                                    {t('buy-card-text2')}
                                </Card.Text>
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