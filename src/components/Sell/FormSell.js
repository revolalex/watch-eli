import React, { Component } from 'react';
import '../css/FormSell.css'
import { withTranslation } from 'react-i18next';
import { OverlayTrigger, Tooltip, Form } from 'react-bootstrap'
import SellDetail from './SellDetail';
import BrandLogo from './BrandLogo';
import TitreCard from '../Global/TitreCard';




class FormSell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            modele: '',
            set: '',
            photo: undefined,
            condition: 3,
            comment: ''
        }
        this.handleSelectSet = this.handleSelectSet.bind(this)
        this.handleCommentInput = this.handleCommentInput.bind(this)
        this.onBrandLogoClick = this.onBrandLogoClick.bind(this);
        this.handleCondition = this.handleCondition.bind(this)
        this.handleBrandInput = this.handleBrandInput.bind(this)
        this.handleModelInput = this.handleModelInput.bind(this)
        this.handlePhoto = this.handlePhoto.bind(this)
        this.handleSendButton = this.handleSendButton.bind(this)
        this.conditionText = this.conditionText.bind(this)

    }
    onBrandLogoClick2(e) {
        this.setState({
            brand: e.target.attributes[1].value
        })
    }
    onBrandLogoClick(e) {
        console.log(e.target.id)
        this.setState({
            brand: e.target.id
        })
    }
    handleSelectSet(event) {
        this.setState({
            set: event.target.value
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
    handleCommentInput(event) {
        this.setState({
            comment: event.target.value
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
                <TitreCard
                    titre={t('form-sell-titre')}
                    sousTitre={t('form-sell-sous-titre')}
                    cardText={t('form-sell-intro')}
                />

                <div className="container-contact">
                    {/* container on left */}
                    <SellDetail />
                    {/* container on right */}
                    <div className="contactform card" style={{margin: "10vh"}}>
                        <form>
                            <h2 className="my-underline">{t('form-sell-your-watch')}</h2>
                            <p style={{fontStyle: "italic", fontSize: "0.9em"}}>Nous achetons uniquement des montres 100% certifiées authentiques </p>

                            <br />
                            <div className="inputBox">
                                <BrandLogo onBrandLogoClick={this.onBrandLogoClick} />
                                <input type="text" name="brand" required="required" value={this.state.brand} onChange={this.handleBrandInput} />
                                <span>{t('form-sell-brand')}</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="model" required="required" value={this.state.model} onChange={this.handleModelInput} />
                                <span>{t('form-sell-model')}</span>
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
                                <input type="file" name="photo" placeholder="photo" style={{ border: "none" }} value={this.state.photo} onChange={this.handlePhoto} />
                                <span>{t('form-sell-photo')}</span>
                            </div>
                            <br />
                            {/* Select box and paper */}
                            <div>
                                <span>{t('form-sell-box-paper')}</span><br /><br />
                                <Form.Select value={this.state.set} onChange={this.handleSelectSet}>
                                    <option>{t('form-sell-box')}</option>
                                    <option>{t('form-sell-paper')}</option>
                                    <option>{t('form-sell-paper-and-box')}</option>
                                    <option>{t('form-sell-nothing')}</option>
                                </Form.Select>
                            </div>
                            <div className="inputBox">
                                <textarea type="textarea" rows="5" name="comment" required="required" value={this.state.comment} onChange={this.handleCommentInput} />
                                <span>{t('form-sell-comment')}</span>
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