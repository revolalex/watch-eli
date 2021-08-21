import { Component } from "react";
import { withTranslation } from 'react-i18next';

class TradeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: undefined
        }
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
            <div className="container-contact">
                <div className="contactform">
                    <form>
                        <h2 className="my-underline">{t('form-sell-your-watch')}</h2>
                        <br />
                        <div className="inputBox">
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
                        <br />
                        {/* Photo */}
                        <div className="inputBox">
                            <input type="file" name="photo" placeholder="photo" style={{ border: "none" }} onChange={this.handlePhoto} />
                            <span>{t('form-sell-photo')}</span>
                        </div>
                        <br />
                        {/* Send Button */}
                        <div className="inputBox">
                            <input type="submit" name="" value={t('send')} onClick={this.handleSendButton} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withTranslation()(TradeForm);