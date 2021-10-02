import { Component } from "react";
import { withTranslation } from 'react-i18next';
import '../css/TradeForm.css'
import imgMontre from '../../img/echange/5.jpeg'

class TradeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: undefined,
            brand: "",
            model:"",
            comment:""
        }
        this.handlePhoto = this.handlePhoto.bind(this)
        this.handleSendButton = this.handleSendButton.bind(this)
        this.handleBrandInput = this.handleBrandInput.bind(this)
        this.handleModelInput = this.handleModelInput.bind(this)
        this.handleCommentInput = this.handleCommentInput.bind(this)
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
    handleBrandInput(e){
        this.setState({
            brand: e.target.value
        })
    }
    handleModelInput(e){
        this.setState({
            model: e.target.value
        })
    }
    handleCommentInput(e){
        this.setState({
            comment: e.target.value
        })
    }
    render() {
        const t = this.props.t
        return (
            <div className=" card">
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
                            <textarea type="textarea" rows="5"  name="comment" required="required" value={this.state.comment} onChange={this.handleCommentInput} />
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
                <img alt="montre" src={imgMontre} class="card-img-bottom"/>
            </div>
        );
    }
}

export default withTranslation()(TradeForm);