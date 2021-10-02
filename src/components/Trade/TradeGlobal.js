import { Component } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import TradeStep2 from "./TradeStep2";
import zenithMontre from '../../img/echange/4.jpeg'
import TradeForm from "./TradeForm";




class TradeGlobal extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="col-md-">
                        <Container>
                            <br/>
                            <Card style={{marginBottom:"20px"}}>
                                <img alt="montre" src={zenithMontre} class="card-img-top" />
                                <br/>
                                <TradeStep2 />
                            </Card>
                        </Container>
                    </Col>
                    <Col className="col-md-">
                        <br/>
                        <Container>
                            <TradeForm/>
                        </Container>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withTranslation()(TradeGlobal);