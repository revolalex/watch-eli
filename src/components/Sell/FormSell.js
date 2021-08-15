import React, { Component } from 'react';
import '../css/FormSell.css'
import { withTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";
import { Image, Container, Row, Col, OverlayTrigger, Tooltip, Form, Card } from 'react-bootstrap'
import breitlingLogo from "../../img/logo/breitling.png"
// import zenithLogo from "../../img/logo/zenithLogo.png"
import hubloLogo from '../../img/logo/hublot.png'
import omega from '../../img/logo2/omega.png'
import rolex from '../../img/logo2/rolex.png'
import cartier from "../../img/logo2/cartier.png"
import tagHeuerIcon from "../../img/logo2/tag-heuer.png"
import SellDetail from './SellDetail';



class FormSell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            modele: '',
            set: '',
            photo: '',
            condition: 3
        }
        this.breitlingClick = this.breitlingClick.bind(this);
        this.breguetClick = this.breguetClick.bind(this);
        this.rolexClick = this.rolexClick.bind(this);
        this.cartierClick = this.cartierClick.bind(this);
        this.hublotClick = this.hublotClick.bind(this);
        this.omegaClick = this.omegaClick.bind(this);
        this.tagHeuerClick = this.tagHeuerClick.bind(this);
        this.handleCondition = this.handleCondition.bind(this)
        this.handleBrandInput = this.handleBrandInput.bind(this)
        this.handleModelInput = this.handleModelInput.bind(this)
        this.handlePhoto = this.handlePhoto.bind(this)
        this.handleSendButton = this.handleSendButton.bind(this)
        this.conditionText = this.conditionText.bind(this)

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
    breguetClick() {
        this.setState({
            brand: 'Breguet'
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
    tagHeuerClick() {
        this.setState({
            brand: 'Tag Heuer'
        })
    }


    handleBrandInput(event) {
        this.setState({
            brand: event.target.value
        })
    }
    handleModelInput(event) {
        this.setState({
            modele: event.target.value
        })
    }

    handleCondition(event) {
        this.setState({
            condition: event.target.value
        })
        console.log(event.target.value)
    }
    /* eslint-disable */
    conditionText(t) {
        let textToreturn;
        if (this.state.condition == 0) {
            textToreturn = t('condition-0')
        }
        if (this.state.condition == 1) {
            textToreturn = t('condition-1')
        }
        if (this.state.condition == 2) {
            textToreturn = t('condition-2')
        }
        if (this.state.condition == 3) {
            textToreturn = t('condition-3')
        }
        if (this.state.condition == 4) {
            textToreturn = t('condition-4')
        }
        if (this.state.condition == 5) {
            textToreturn = t('condition-5')
        }
        if (this.state.condition == 6) {
            textToreturn = t('condition-10')
        }

        return textToreturn
    }

    handlePhoto(event) {
        this.setState({
            photo: event.target.files
        })
    }
    handleSendButton(e) {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        const t = this.props.t
        return (
            <section className="contact">
                <Card >
                    <div className="title-div">
                        <div>
                            <h1>{t('form-sell-titre')}</h1>
                            <h5>{t('form-sell-sous-titre')}</h5>
                            <p>
                                {t('form-sell-intro')}
                            </p>
                        </div>

                    </div>
                </Card>
                <div className="container-contact">
                    {/* container on left */}
                    <SellDetail/>
                 
                    {/* container on right */}
                    <div className="contactform">
                        <form>
                            <h2 className="my-underline">{t('form-sell-your-watch')}</h2>
                            <br />
                            <div className="inputBox">
                                <Container>
                                    <Row>
                                        <Col xs={6} md={4}>
                                            <Image className="brand-logo" thumbnail src={rolex} onClick={this.rolexClick} />
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <Image className="brand-logo" thumbnail src={omega} onClick={this.omegaClick} />
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <Image className="brand-logo" thumbnail src={hubloLogo} onClick={this.hublotClick} />
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <Image className="brand-logo" thumbnail src={tagHeuerIcon} onClick={this.tagHeuerClick} />
                                        </Col>
                                        <Col xs={6} md={4} >
                                            <Image className="brand-logo" thumbnail src={breitlingLogo} onClick={this.breitlingClick} />
                                        </Col>

                                        <Col xs={6} md={4}>
                                            <Image className="brand-logo" thumbnail src={cartier} onClick={this.cartierClick} />
                                        </Col>
                                    </Row>
                                    <br />
                                </Container>
                                <input type="text" name="brand" required="required" value={this.state.brand} onChange={this.handleBrandInput} />
                                <span>{t('form-sell-brand')}</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="model" required="required" value={this.state.model} onChange={this.handleModelInput} />
                                <span>{t('form-sell-model')}</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="comment" required="required" value={this.state.model} onChange={this.handleModelInput} />
                                <span>{t('form-sell-comment')}</span>
                            </div>
                            <br />
                            {/* Range Condition */}
                            <div className="inputBox">
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip id="button-tooltip-2">{t('form-sell-tooltip-condition')}</Tooltip>}
                                >
                                    <label for="customRange" className="form-label">{t('form-sell-condition')} : {this.conditionText(t)}</label>
                                </OverlayTrigger>
                                {/* <label for="customRange" className="form-label">{t('form-sell-condition')} : {this.state.condition}</label> */}
                                <input type="range" className="form-range" min="0" max="5" step="1" id="customRange" onChange={this.handleCondition} value={this.state.condition} style={{ border: "none" }} />
                            </div>
                            <br />
                            {/* Photo */}
                            <div className="inputBox">
                                <input type="file" name="photo" placeholder="photo" style={{ border: "none" }} onChange={this.handlePhoto} />
                                <span>{t('form-sell-photo')}</span>
                            </div>
                            <br />
                            {/* Select box and paper */}
                            <div>
                                <span>{t('form-sell-box-paper')}</span><br /><br />
                                <Form.Select>
                                    <option>{t('form-sell-box')}</option>
                                    <option>{t('form-sell-paper')}</option>
                                    <option>{t('form-sell-paper-and-box')}</option>
                                    <option>{t('form-sell-nothing')}</option>
                                </Form.Select>
                            </div>
                            {/* Send Button */}
                            <div className="inputBox">
                                <input type="submit" name="" value={t('send')} onClick={this.handleSendButton} />
                            </div>
                        </form>
                    </div>

                </div>
            </section>


        )
    }

}
export default withTranslation()(FormSell)