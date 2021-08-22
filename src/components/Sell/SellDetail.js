import { Component } from "react";
import formIcon from '../../img/icones/formIcon.png'
import estimIcon from '../../img/icones/estimIcon.png'
import shipIcon from '../../img/icones/shipIcon.png'
import checkIcon from "../../img/icones/check.png"
import { withTranslation } from 'react-i18next';
import TooltipPerso from '../Global/TooltipPerso'
// import PopOverPerso from "../Global/PopOverPerso";




class SellDetail extends Component {
    state = {}
    render() {
        const t = this.props.t
        return (
            <div className="contactInfo">

                <div className="box">
                    <div className="text">
                        <img
                            style={{ width: "90%" }}
                            src="https://www.cresus.fr/media/wysiwyg/FORMULAIRE/Vendresamontre/vendre-sa-montre.jpg" alt="happy deal" />
                    </div>
                </div>



                <div className="box" >
                    <div className="icon">
                        <img src={formIcon} alt="icones" />
                        <i class="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                    </div>
                    <div className="text">
                        <h3>{t("form-sell-step1")}</h3>
                        <p>{t("form-sell-step1.1")}</p>
                    </div>
                </div>
                <div className="box" >
                    <div className="icon">
                        <img src={estimIcon} alt="icones" />
                        <i class="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                    </div>
                    <div className="text">
                        <h3>{t("form-sell-step2")}</h3>
                        <p>{t("form-sell-step2.1")}</p>
                    </div>
                </div>
                {/* ici */}
                {/*  */}
                <div className="box">
                    <div className="icon">
                        <img src={shipIcon} alt="icones" />
                        <i class="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                    </div>
                    <div className="text">
                        <h3>
                            {t("form-sell-step3")}&nbsp;
                            <TooltipPerso
                                abrevation={<i className="fal fa-info-circle" />}
                                traduction={"L'expédition de votre montre ne constitue en rien une obligation de votre part, et si notre devis ne devait pas vous satisfaire Watches Paris s' engage à (vous) réexpédier votre montre à nos frais."}
                            />
                            {/* <PopOverPerso
                                button={<i className="fal fa-info-circle" />}
                                titre="Expédition Information"
                                text="L'expédition de votre montre ne constitue en rien une obligation de votre part, et si notre devis ne devait pas vous satisfaire Watches Paris s' engage à (vous) réexpédier votre montre à nos frais."
                            /> */}
                        </h3>
                        <p>{t("form-sell-step3.1")}</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <img src={checkIcon} alt="icones" />
                    </div>
                    <div className="text">
                        <h3>{t("form-sell-money-titre")}</h3>
                        <p>{t("form-sell-money")}</p>
                    </div>
                </div>
                <div className="box">
                    <div className="text">
                        <img
                            style={{ width: "90%" }}
                            src="https://www.europeenne-de-conseil.com/wp-content/uploads/2019/02/eviter-un-proces-en-signant-une-transaction-k4_13522933.jpg" alt="happy deal" />
                    </div>
                </div>
            </div >

        );
    }
}

export default withTranslation()(SellDetail);