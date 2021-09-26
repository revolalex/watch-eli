import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../css/LogoContainer.css'

//ICONES
import authentic from '../../img/iconeCo/authentic.jpeg'
import devis48H from '../../img/iconeCo/devis48H-1.jpeg'
import chrono24 from '../../img/iconeCo/chrono24seller.jpeg'
import expert from '../../img/iconeCo/expert.jpeg'
import expertise from '../../img/iconeCo/expertise.jpeg'
import FHHexpert from '../../img/iconeCo/FHHexperts.jpeg'
import freeShipping from '../../img/iconeCo/freeShipping.jpeg'
import question from '../../img/iconeCo/questions.jpeg'
import reviews from '../../img/iconeCo/reviews.jpeg'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

class LogoContainer extends Component {
    render() {
        return <div>
            <Container className="container-spacing logo-container">
                <div className="card card-logo">
                <Row className="evently">
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Devis en <strong>48H</strong>.
                                </Tooltip>
                            }
                        >
                            <img src={devis48H} className="logoIcones" alt="icone" />
                        </OverlayTrigger>
                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Des questions? N'hésitez pas à nous contacter.
                                </Tooltip>
                            }
                        >
                            <img src={question} className="logoIcones" alt="icone" />
                        </OverlayTrigger>
                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Envoie gratuit.
                                </Tooltip>
                            }
                        >
                            <img src={freeShipping} className="logoIcones" alt="icone" />
                        </OverlayTrigger>

                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Avis.
                                </Tooltip>
                            }
                        >
                            <img src={reviews} className="logoIcones" alt="icone" />
                        </OverlayTrigger>

                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Expert.
                                </Tooltip>
                            }
                        >
                            <img src={expert} className="logoIcones" alt="icone" />
                        </OverlayTrigger>

                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Montres certifiées authentiques.
                                </Tooltip>
                            }
                        >
                            <img src={authentic} className="logoIcones" alt="icone" />
                        </OverlayTrigger>
                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Achat sécurisé, protection des Acheteurs Chrono24.
                                </Tooltip>
                            }
                        >
                            <img src={chrono24} className="logoIcones" alt="icone" />
                        </OverlayTrigger>

                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Estimation.
                                </Tooltip>
                            }
                        >
                            <img src={expertise} className="logoIcones" alt="icone" />
                        </OverlayTrigger>

                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Experts certifiés par la Fondation de Haute Horlogerie (FHH).
                                </Tooltip>
                            }
                        >
                            <img src={FHHexpert} className="logoIcones" alt="icone" />
                        </OverlayTrigger>

                    </Col>
                </Row>
                </div>
            </Container>
        </div>;
    }
}

export default LogoContainer;