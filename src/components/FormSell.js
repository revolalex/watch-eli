import React, { Component } from 'react';
import './css/FormSell.css'
import { withTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";
import { Image, Container, Row, Col } from 'react-bootstrap'
import breitlingLogo from "../img/logo/breitling.png"
import zenithLogo from "../img/logo/zenithLogo.png"
import cartierLogo from '../img/logo/cartier.svg'
import hubloLogo from '../img/logo/hublot.png'
import omegaLogo from '../img/logo/omega.svg'
import rolexLogo from '../img/logo/rolex.png'

class FormSell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            modele: '',
            set: '',
            photo: '',
            condition: null
        }
        this.breitlingClick = this.breitlingClick.bind(this);
        this.rolexClick = this.rolexClick.bind(this);
        this.cartierClick = this.cartierClick.bind(this);
        this.hublotClick = this.hublotClick.bind(this);
        this.omegaClick = this.omegaClick.bind(this);
        this.apClick = this.apClick.bind(this);
        this.handleCondition = this.handleCondition.bind(this)

    }
    componentDidMount() {
        AOS.init({
            duration: 2000
        });
    }
    breitlingClick() {
        this.setState({
            brand: 'Breitling'
        })
    }
    omegaClick() {
        this.setState({
            brand: 'Omega'
        })
    }
    hublotClick() {
        this.setState({
            brand: 'Hublot'
        })
    }
    cartierClick() {
        this.setState({
            brand: 'Cartier'
        })
    }
    rolexClick() {
        this.setState({
            brand: 'Rolex'
        })
    }
    apClick() {
        this.setState({
            brand: 'Audemars piguet'
        })

    }
    handleCondition(event){
    }

    render() {
        const t = this.props.t
        return (
            <section className="contact">
                <div className="content">
                    <h2>{t("form-sell-title")}</h2>
                    <p>{t("form-sell-sub-title")}</p>
                </div>
                <div className="container-contact">
                    <div className="contactInfo">
                        <div className="box" data-aos="fade-right" >
                            <div className="icon">
                                <i className="far fa-file-image" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3>{t("form-sell-step1")}</h3>
                                <p>{t("form-sell-step1.1")}</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-right" >
                            <div className="icon">
                                <i className="far fa-file-signature" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3>{t("form-sell-step2")}</h3>
                                <p>{t("form-sell-step2.1")}</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-right" >
                            <div className="icon"><i className="fab fa-ups" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3>{t("form-sell-step3")}</h3>
                                <p>{t("form-sell-step3.1")}</p>
                            </div>
                        </div>


                    </div>
                    <div className="contactform" data-aos="fade-left">
                        <form>
                            <h2>Send Message </h2>
                            <br/>
                            <div className="inputBox">
                                <Container>
                                    <Row>
                                        <Col xs={6} md={4}>
                                            <Image src={breitlingLogo} style={{ height: "40px" }} onClick={this.breitlingClick} />
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <Image src={omegaLogo} style={{ height: "40px" }} onClick={this.omegaClick} />
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <Image src={rolexLogo} style={{ height: "58px" }} onClick={this.rolexClick} />
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col xs={6} md={4}>
                                            <Image src={cartierLogo} style={{ height: "30px" }} onClick={this.cartierClick} />
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <Image src={hubloLogo} style={{ height: "40px" }} onClick={this.hublotClick} />
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <Image src={zenithLogo} style={{ height: "40px" }} onClick={this.aplick} />
                                        </Col>
                                    </Row>
                                    <br />
                                </Container>
                                <input type="text" name="" required="required" value={this.state.brand} />
                                <span>Brand</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span>Model</span>
                            </div>
                            <br/>
                            <div className="">
                                <label for="customRange" className="form-label">Watch Conditions : {this.state.condition}</label>
                                <input type="range" className="form-range" min="0" max="10" step="1" id="customRange" onChange={this.handleCondition} value={this.state.condition}/>
                            </div>
                            <div className="inputBox">

                                <input required="required"></input>
                                <span>Original box & paper</span>
                            </div>

                            {/* ICI ALEX TEST FILE INPUT */}
                            <div className="inputBox">
                                <input type="file" name="" required="required" placeholder="photo" />
                            </div>

                            <div className="inputBox">
                                <input type="submit" name="" value="Send" />
                            </div>


                        </form>
                    </div>
                </div>
            </section>


        )
    }

}
export default withTranslation()(FormSell)