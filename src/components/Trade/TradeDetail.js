import { Component } from "react";
import { withTranslation } from 'react-i18next';
import TooltipPerso from '../Global/TooltipPerso'
import { Card } from "react-bootstrap";
import '../css/TradeDetail.css'


// ICONES
import formulaireIcon from '../../img/icone/formIcon.jpeg'
import money from '../../img/icone/money.jpeg'
import watchIcon from '../../img/icone/watchIcon.jpeg'
import searchIcon from '../../img/icone/searchIcon.jpeg'
import colisIcon from '../../img/icone/colisIcon.jpeg'
import zenithMontre from '../../img/echange/11.jpeg'
import ExternaLinks from "../../utils/socialMedia";




class TradeDetail extends Component {
    state = {}
    render() {
        const t = this.props.t
        const iconWidth = "60px"
        return (
            <div className="contactInfo">
                <img alt="montre" src={zenithMontre}
                    style={{
                        paddingBottom: "40px",
                        width: "100%",
                        height: "auto",
                        margin: "auto"
                    }} />
                <Card>
                    <br />
                    <div className="box" >
                        <div className="icon">
                            <img src={formulaireIcon} alt="icones" width={iconWidth} />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon info"></i>
                        </div>
                        <div className="text">
                            <h5>{t("form-sell-step1")}
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={"Nous vous contacterons à votre convenance afin de vous assister dans la vérification des informations "}
                                />
                            </h5>
                            <p>Un expert WMC vous contactera dans un délai de 48h</p>
                        </div>
                    </div>
                    <br />
                    <div className="box" >
                        <div className="icon">
                            <img src={money} alt="icones" width={iconWidth} />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h5>
                                {t("form-sell-step2.1")}
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={"Un membre de notre équipe vous contactera dans un délai de 48 heures"}
                                />
                            </h5>
                            <p>Pre-évaluation de votre montre </p>
                        </div>
                    </div>
                    <br />
                    <div className="box">
                        <div className="icon">
                            <img src={searchIcon} alt="icones" width={iconWidth} />
                            <img src={watchIcon} alt="icones" width="20px" />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h5>
                                Visitez notre boutique en ligne
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={"Nos experts vous conseillent avec plaisir"}
                                />
                            </h5>
                            <a href={ExternaLinks.chrono24} target='blank'>Chrono24</a>
                        </div>
                    </div>
                    <br />
                    <div className="box">
                        <div className="icon">
                            <img src={colisIcon} alt="icones" width={iconWidth} />
                        </div>
                        <div className="text">
                            <h5>Expedition / Reception
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={"Programmez la collecte de votre montre et obtenez votre nouvelle montre"}
                                />
                            </h5>
                            <p>Envoi gratuit 100% assuré 100% sécurisé</p>
                        </div>
                    </div>
                    <br />
                </Card>
                <img
                    style={{
                        paddingTop: "80px",
                        paddingBottom: "40px",
                        width: "100%",
                        height: "auto",
                        margin: "auto"
                    }}
                    src="https://www.europeenne-de-conseil.com/wp-content/uploads/2019/02/eviter-un-proces-en-signant-une-transaction-k4_13522933.jpg"
                    alt="serrage de main, deal"
                />

            </div >

        );
    }
}

export default withTranslation()(TradeDetail);