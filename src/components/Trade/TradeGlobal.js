import { Component } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import TradeStep2 from "./TradeStep2";
import zenithMontre from '../../img/echange/1.jpeg'
import TradeForm from "./TradeForm";




class TradeGlobal extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="col-sm">
                        <Container>
                            <br/>
                            <Card style={{marginBottom:"20px"}}>
                                <img alt="montre" src={zenithMontre} class="card-img-top" />
                                <TradeStep2 />
                                <img src="https://www.europeenne-de-conseil.com/wp-content/uploads/2019/02/eviter-un-proces-en-signant-une-transaction-k4_13522933.jpg" class="card-img-bottom" alt="serrage de main, deal"/>

                            </Card>
                        </Container>
                    </Col>
                    <Col className="col-sm">
                        <br/>
                        <Container>
                            <TradeForm/>
                        </Container>
                    </Col>
                </Row>
                <br/>
            </div>
        )
    }
}

export default withTranslation()(TradeGlobal);