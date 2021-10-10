import React, { Component } from 'react';
import '../css/FormSell.css'
import { withTranslation } from 'react-i18next';
import { OverlayTrigger, Tooltip, Form } from 'react-bootstrap'
import SellDetail from './SellDetail';
import BrandLogo from './BrandLogo';
import TitreCard from '../Global/TitreCard';
import emailjs from 'emailjs-com'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'





class FormSell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            modele: '',
            set: '',
            photo: undefined,
            condition: 3,
            comment: '',
            wantedPrice: '',
            authorization: false,
            phone: '',
            name: '',
            email: ''
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
        this.handleWantedPriceInput = this.handleWantedPriceInput.bind(this)
        this.handleCHeckBox = this.handleCHeckBox.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleName = this.handleName.bind(this)

    }
    handleCHeckBox(e) {
        this.setState({
            authorization: !this.state.authorization
        })

    }
    handleWantedPriceInput(e) {
        this.setState({
            wantedPrice: e.target.value
        })

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
    }
    handleCommentInput(event) {
        this.setState({
            comment: event.target.value
        })
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
        let that = this
        emailjs.sendForm('service_jklklpo', 'template_nrwxgzo', '#my-formSell', 'user_qVW1EQYpGrCCZBiy6lnqy')
            .then(function (response) {
                console.log(response.status, response.text);
                if (response.status === 200) {
                    that.resetInput()
                    that.notify()
                } else {
                    that.resetInput()
                    that.notifyError()
                }
            });
    }

    resetInput() {
        this.setState({
            brand: '',
            modele: '',
            set: '',
            photo: undefined,
            condition: 3,
            comment: '',
            wantedPrice: '',
            authorization: false,
            phone: '',
            name: '',
            email: '',
        })
    }


    notify = () => toast.success("Message envoyé, nous vous répondrons sous 48H", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
    notifyError = () => toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }
    handlePhone(e) {
        this.setState({
            phone: e
        })
    }




    render() {
        const t = this.props.t
        const notify = () => toast.success('Formulaire de vente envoyé', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        return (
            <section className="contact">
                <TitreCard
                    titre={
                        `Actualisez votre collection`
                        // t('form-sell-titre')
                    }
                    sousTitre={
                        `Vendez votre montre en trois clics`
                        // t('form-sell-sous-titre')
                    }
                    cardText={
                        `
                        Nos spécialistes vous offrent une expertise gratuite, ainsi qu’ un conseil 
                        personnalisé afin de maximiser la valeur de votre montre. Notre objectif 
                        est de vous accompagner de manière transparente à travers un processus 
                        simple, rapide et sécurisé en trois étapes. Remplissez le formulaire 
                        ci-dessous, un membre de notre équipe vous contactera dans un délai de 
                        48 heures afin d’établir un devis gratuit pour votre montre. 
                        `
                        // t('form-sell-intro')
                    }
                />
                <div className="container-contact">
                    {/* container on left */}
                    <SellDetail />
                    {/* container on right */}
                    <div className="contactform card" style={{ margin: "12px" }}>
                        <form id="my-formSell">
                            <h2 className="my-underline">{t('form-sell-your-watch')}</h2>
                            <p style={{ fontStyle: "italic", fontSize: "0.9em" }}>Nous achetons uniquement des montres 100% certifiées authentiques </p>
                            <input type="text" name="formName" required="required" value="Sell" style={{ display: "none" }} />

                            <div className="inputBox">
                                <BrandLogo onBrandLogoClick={this.onBrandLogoClick} />
                                <br />
                                <input type="text" name="brand" required="required" value={this.state.brand} onChange={this.handleBrandInput} />
                                <span>{t('form-sell-brand')}</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="modele" required="required" value={this.state.model} onChange={this.handleModelInput} />
                                <span>{t('form-sell-model')}</span>
                            </div>
                            <div className="inputBox">
                                <input type="number" name="wantedPrice" required="required" value={this.state.wantedPrice} onChange={this.handleWantedPriceInput} />
                                <span>Prix désiré</span>
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
                                <input type="range" name="condition" className="form-range" min="0" max="5" step="1" id="customRange" onChange={this.handleCondition} value={this.state.condition} style={{ border: "none" }} />
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
                                <span>{t('form-sell-box-paper')}</span><br />
                                <Form.Select value={this.state.set} onChange={this.handleSelectSet}>
                                    <option name="set">{t('form-sell-box')}</option>
                                    <option name="set">{t('form-sell-paper')}</option>
                                    <option name="set">{t('form-sell-paper-and-box')}</option>
                                    <option name="set">{t('form-sell-nothing')}</option>
                                </Form.Select>
                            </div>
                            <br />
                            <h2 className="my-underline">Vos informations:</h2>
                            <br />
                            {/* Name, Email, Phone */}
                            <PhoneInput
                                name="phone"
                                placeholder="Enter phone number"
                                value={this.state.phone}
                                onChange={this.handlePhone}
                            />
                            <div className="inputBox">
                                <input style={{ paddingTop: "30px" }} type="text" name="name" required="required" value={this.state.name} onChange={this.handleName} />
                                <span>Nom</span>
                            </div>

                            <div className="inputBox">
                                <input style={{ paddingTop: "30px" }} type="email" name="email" required="required" value={this.state.email} onChange={this.handleEmail} />
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <textarea style={{ paddingTop: "30px" }} type="textarea" rows="5" name="comment" required="required" value={this.state.comment} onChange={this.handleCommentInput} />
                                <span>{t('form-sell-comment')}</span>
                            </div>
                            <br />
                            <div>
                                <Form.Check type="checkbox" name="authorization" label="J'autorise WMC à me contacter" value={this.state.authorization} onChange={this.handleCHeckBox} />
                            </div>
                            <br />

                            {/* Send Button */}
                            <div className="inputBox">
                                <input type="submit" name="" value={t('send')} onClick={this.handleSendButton} />
                            </div>
                        </form>
                    </div>

                </div>
                {/* <img
                    style={{
                        paddingTop:"40px",
                        width:"90%",
                        margin:"auto"
                    }}
                    src="https://www.mistergoodman.fr/wp-content/uploads/2019/01/Bracelets-montres-de-luxe.jpg"
                    alt="video"
                /> */}
            </section>


        )
    }

}
export default withTranslation()(FormSell)