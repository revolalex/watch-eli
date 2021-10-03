import { Component } from "react";
import { withTranslation } from 'react-i18next';
import TooltipPerso from '../Global/TooltipPerso'


// ICONES
import formulaireIcon from '../../img/icone/formIcon.jpeg'
import boxIcon from '../../img/icone/boxIcon.jpeg'
import money from '../../img/icone/money.jpeg'
import argent from '../../img/icone/argent.jpeg'
import { Card } from "react-bootstrap";




class SellDetail extends Component {
    state = {}
    render() {
        const t = this.props.t
        return (
            <div className="contactInfo">
                <Card>
                    <img src="https://www.cresus.fr/media/wysiwyg/FORMULAIRE/Vendresamontre/vendre-sa-montre.jpg" className="card-img-top" alt="échange de montres" />
                    <div className="box" >
                        <div className="icon">
                            <img src={formulaireIcon} alt="icones" width="80px" />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h3>{t("form-sell-step1")}
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle" />}
                                    traduction={"Autoriser WMC à me contacter via mes données personelles, aucune exploitation commerciale ne sera faite avec vos données"}
                                />
                            </h3>

                            <p>{t("form-sell-step1.1")}</p>
                        </div>
                    </div>
                    <div className="box" >
                        <div className="icon">
                            <img src={money} alt="icones" width="80px" />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h3>{t("form-sell-step2")}
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle" />}
                                    traduction={"Un membre de notre équipe vous contactera dans un délai de 48 heures"}
                                />
                            </h3>

                            <p>{t("form-sell-step2.1")}</p>
                        </div>
                    </div>
                    {/* ici */}
                    {/*  */}
                    <div className="box">
                        <div className="icon">
                            <img src={boxIcon} alt="icones" width="80px" />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h3>
                                {t("form-sell-step3")}&nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle" />}
                                    traduction={"L'expédition de votre montre ne constitue en rien une obligation de votre part, et si notre devis ne devait pas vous satisfaire Watches Paris s' engage à (vous) réexpédier votre montre à nos frais."}
                                />
                            </h3>
                            <p>{t("form-sell-step3.1")}</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <img src={argent} alt="icones" width="80px" />
                        </div>
                        <div className="text">
                            <h3>{t("form-sell-money-titre")}</h3>
                            <p>{t("form-sell-money")}</p>
                        </div>
                    </div>
                    <img src="https://www.europeenne-de-conseil.com/wp-content/uploads/2019/02/eviter-un-proces-en-signant-une-transaction-k4_13522933.jpg" className="card-img-bottom" alt="serrage de main, deal" />
                </Card>
            </div >

        );
    }
}

export default withTranslation()(SellDetail);