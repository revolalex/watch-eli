import React, { Component } from 'react';
import '../css/FormSell.css'
import { withTranslation } from 'react-i18next';
import { OverlayTrigger, Tooltip, Form } from 'react-bootstrap'
import TradeDetail from './TradeDetail';
import vesteVerte from '../../img/echange/3.jpeg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'






class TradeFinal extends Component {
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
            wantedModel: '',
            authorization: false,
            phone:'',
            name: '',
            email: ''
        }
        this.handleSelectSet = this.handleSelectSet.bind(this)
        this.handleCommentInput = this.handleCommentInput.bind(this)
        this.handleCondition = this.handleCondition.bind(this)
        this.handleBrandInput = this.handleBrandInput.bind(this)
        this.handleModelInput = this.handleModelInput.bind(this)
        this.handlePhoto = this.handlePhoto.bind(this)
        this.handleSendButton = this.handleSendButton.bind(this)
        this.conditionText = this.conditionText.bind(this)
        this.handleWantedPriceInput = this.handleWantedPriceInput.bind(this)
        this.handleWantedModelInput = this.handleWantedModelInput.bind(this)
        this.handleCHeckBox = this.handleCHeckBox.bind(this)
        this.resetInput = this.resetInput.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
    }
    onBrandLogoClick2(e) {
        this.setState({
            brand: e.target.attributes[1].value
        })
    }
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
    handleCHeckBox(e) {
        this.setState({
            authorization: !this.state.authorization
        })
    }
    handleSelectSet(event) {
        this.setState({
            set: event.target.value
        })
    }
    handleWantedPriceInput(e) {
        this.setState({
            wantedPrice: e.target.value
        })
    }
    handleWantedModelInput(e) {
        this.setState({
            wantedModel: e.target.value
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

    handlePhoto(e) {
        this.setState({
            photo: e.target.files
        })
    }
    handlePhone(e) {
        this.setState({
            phone: e
        })
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
            wantedModel: '',
            authorization: false,
            phone:'',
            name: '',
            email: ''
        })
    }
    handleSendButton(e) {
        const {name, email, phone, brand, modele} = this.state
        e.preventDefault();
        if(name.length< 1){
            this.notifyError('name is require min 3 characters')
        } else if (email.length < 1){
            this.notifyError('email is require')
        } 
        else if(name.length > 1 && email.length > 1){
            this.sendEmail()
        }
        
    }

    sendEmail(){
        let that = this
        emailjs.sendForm('service_jklklpo', 'template_nrwxgzo', '#my-formTrade', 'user_qVW1EQYpGrCCZBiy6lnqy')
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

    notify = () => toast.success("Votre demande d'échange à été envoyé", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
    notifyError = (message) => toast.error(message || "Something went wrong", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

    render() {
        function example() {
            // `value` will be the parsed phone number in E.164 format.
            // Example: "+12133734253".
            const [value, setValue] = useState()
            return (
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue} />
            )
        }

        const t = this.props.t
        return (
            <section className="contact">

                <div className="container-contact">
                    {/* container on left */}
                    <TradeDetail />
                    {/* container on right */}
                    <div className="contactform card" style={{ padding: "0", margin: "20px" }}>
                        <img alt="montre" src={vesteVerte} className="card-img-top" style={{ padding: "20px" }} />
                        <form style={{ padding: "20px" }} id="my-formTrade">
                            <h2 className="my-underline">{t('form-sell-your-watch')}</h2>
                            <p style={{ fontStyle: "italic", fontSize: "0.9em" }}>Nous échangeons uniquement des montres 100% certifiées authentiques </p>
                            <input type="text" name="formName" required="required" value="Trade" style={{ display: "none" }} />

                            <div className="inputBox">
                                <input type="text" name="brand" required="required" value={this.state.brand} onChange={this.handleBrandInput} />
                                <span>Marque</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="modele" required="required" value={this.state.modele} onChange={this.handleModelInput} />
                                <span>{t('form-sell-model')}</span>
                            </div>

                            {/* Wanted Price */}
                            <div className="inputBox">
                                <input type="number" name="wantedPrice" required="required" value={this.state.wantedPrice} onChange={this.handleWantedPriceInput} />
                                <span>Prix désiré</span>
                            </div>

                            {/* Wanted Model */}
                            <div className="inputBox">
                                <input type="text" name="wantedModel" required="required" value={this.state.wantedModel} onChange={this.handleWantedModelInput} />
                                <span>Modele désiré</span>
                            </div>

                            {/* Range Condition */}
                            <div className="inputBox">
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip id="button-tooltip-2">{t('form-sell-tooltip-condition')}</Tooltip>}
                                >
                                    <label className="form-label">{t('form-sell-condition')} : {this.conditionText(t)}</label>
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
                                <span>{t('form-sell-box-paper')}</span><br /><br />
                                <Form.Select value={this.state.set} onChange={this.handleSelectSet} name="set">
                                    <option name="set">{t('form-sell-box')}</option>
                                    <option name="set">{t('form-sell-paper')}</option>
                                    <option name="set">{t('form-sell-paper-and-box')}</option>
                                    <option name="set">{t('form-sell-nothing')}</option>
                                </Form.Select>
                            </div>
                            <br />
                            <h2 className="my-underline">Vos informations:</h2>
                            <br />
                            <PhoneInput
                                name="phone"
                                placeholder="Enter phone number"
                                value={this.state.phone}
                                onChange={this.handlePhone}
                            />
                            <div className="inputBox">
                                <input style={{ paddingTop: "30px" }}  type="text" name="name" required="required" value={this.state.name} onChange={this.handleName} />
                                <span>Nom</span>
                            </div>
                            <div className="inputBox">
                                <input style={{ paddingTop: "30px" }}  type="email" name="email" required="required" value={this.state.email} onChange={this.handleEmail} />
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
            </section>


        )
    }

}
export default withTranslation()(TradeFinal)