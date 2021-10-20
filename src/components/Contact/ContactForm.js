import { Component } from "react";
import './ContactForm.css'
import { withTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            validEmail: true,
            validName: true,
            validMessage: true,
            message: '',
            input: ''
        }
        this.handleSendButton = this.handleSendButton.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleMessage = this.handleMessage.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.resetInput = this.resetInput.bind(this)
    }
    resetInput() {
        this.setState({
            name: "",
            validName: true,
            email: "",
            validEmail: true,
            message: "",
            input: "",
            validMessage: true

        })
    }
    handleSendButton(e) {
        e.preventDefault();
        let that = this
        console.log(this.state)
        const {name, email, message} = that.state
        if(name.length<1){
            that.notifyError('name is required')
            that.setState({validName: false})
        } else if(email.length<1){
            that.setState({validName: true})
            that.notifyError('email is required')
            that.setState({validEmail: false})
        }else if (message.length<1){
            that.setState({validEmail: true})
            that.setState({validName: true})
            that.notifyError('message is required')
            that.setState({validMessage: false})
        }else if(email.length >=1 && name.length>=1 && message.length>=1){
            that.setState({validEmail: true})
            that.setState({validName: true})
            that.setState({validMessage: true})
            emailjs.sendForm('service_jklklpo', 'template_nxcj9ms', '#my-form2', 'user_qVW1EQYpGrCCZBiy6lnqy')
            .then(function (response) {
                console.log(response.status, response.text);
                if (response.status === 200) {
                    that.resetInput()
                    that.notify()
                }else {
                    that.notifyError()
                }
            });

        }

        
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleInput(e) {
        this.setState({
            input: e.target.value
        })
    }
    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    handleMessage(e) {
        this.setState({
            message: e.target.value
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
        const t = this.props.t
        const { input } = this.props

        return (
            <div className="container-contact">
                <div className="contactform card">
                    <form id="my-form2" >
                        <h2 className="my-underline" style={{ textAlign: "center" }}>Contact</h2>
                        <br />
                        <input type="text" name="formName" required="required" value="Contact" style={{display:"none"}}/>

                        <div className="inputBox">
                            <input type="text" name="input" required="required" value={this.state.input} onChange={this.handleInput} />
                            <span>{input || "Montre desirée"}</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="name" required="required" value={this.state.name} onChange={this.handleName} />
                            <span className={this.state.validName ? "good-valid" : "wrong-valid"} >Name<i style={{ color: 'red' }}>*</i></span>
                        </div>
                        <div className="inputBox">
                            <input style={{ paddingTop: "30px" }} type="email" name="email" required="required" value={this.state.email} onChange={this.handleEmail} />
                            <span className={this.state.validEmail ? "good-valid" : "wrong-valid"}>Email<i style={{ color: 'red' }}>*</i></span>

                        </div>
                        <div className="inputBox">
                            <textarea style={{ paddingTop: "30px" }} type="textarea" rows="5" name="message" required="required" value={this.state.message} onChange={this.handleMessage} />
                            <span className={this.state.validMessage ? "good-valid" : "wrong-valid"}>Message<i style={{ color: 'red' }}>*</i></span>
                        </div>
                        <br />
                        <div className="inputBox">
                            <input type="submit" name="" value={t('send')} onClick={this.handleSendButton} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withTranslation()(ContactForm);