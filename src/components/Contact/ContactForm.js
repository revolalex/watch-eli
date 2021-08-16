import { Component } from "react";
import './ContactForm.css'
import { withTranslation } from 'react-i18next';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
        this.handleSendButton = this.handleSendButton.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleMessage = this.handleMessage.bind(this)
    }
    handleSendButton(e) {
        e.preventDefault();
        console.log(this.state)
    }
    handleName(e) {
        this.setState({
            name: e.target.vale
        })
    }
    handleEmail(e) {
        this.setState({
            email: e.target.vale
        })
    }
    handleMessage(e) {
        this.setState({
            message: e.target.vale
        })
    }

    render() {
        const t = this.props.t
        return (
            <div className="container-contact">
                <div className="contactform">
                    <form>
                        <h2 className="my-underline">Contact</h2>
                        <br />
                        <div className="inputBox">
                            <input type="text" name="name" required="required" value={this.state.name} onChange={this.handleName} />
                            <span>Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="email" name="email" required="required" value={this.state.email} onChange={this.handleEmail} />
                            <span>Email</span>

                        </div>
                        <div className="inputBox">
                            <textarea type="textarea" rows="5"  name="message" required="required" value={this.state.message} onChange={this.handleMessage} />
                            <span>Message</span>
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