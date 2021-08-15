import { Component } from "react";
import formIcon from '../../img/icones/formIcon.png'
import estimIcon from '../../img/icones/estimIcon.png'
import shipIcon from '../../img/icones/shipIcon.png'
import checkIcon from "../../img/icones/check.png"
import { withTranslation } from 'react-i18next';



class SellDetail extends Component {
    state = {}
    render() {
        const t = this.props.t
        return (
            <div className="contactInfo">
                <div className="box" >
                    <div className="icon">
                        <img src={formIcon} alt="icones"/>
                        <i class="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                    </div>
                    <div className="text">
                        <h3>{t("form-sell-step1")}</h3>
                        <p>{t("form-sell-step1.1")}</p>
                    </div>
                </div>
                <div className="box" >
                    <div className="icon">
                        <img src={estimIcon} alt="icones"/>
                        <i class="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                    </div>
                    <div className="text">
                        <h3>{t("form-sell-step2")}</h3>
                        <p>{t("form-sell-step2.1")}</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <img src={shipIcon} alt="icones"/>
                        <i class="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                    </div>
                    <div className="text">
                        <h3>{t("form-sell-step3")}</h3>
                        <p>{t("form-sell-step3.1")}</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <img src={checkIcon} alt="icones"/>
                    </div>
                    <div className="text">
                        <h3>{t("form-sell-money-titre")}</h3>
                        <p>{t("form-sell-money")}</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default withTranslation()(SellDetail);