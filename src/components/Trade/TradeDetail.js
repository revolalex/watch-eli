import { Component } from "react";
import { withTranslation } from 'react-i18next';
import TooltipPerso from '../Global/TooltipPerso'
import { Card } from "react-bootstrap";


// ICONES
import formulaireIcon from '../../img/icone/formIcon.jpeg'
import money from '../../img/icone/money.jpeg'
import watchIcon from '../../img/icone/watchIcon.jpeg'
import searchIcon from '../../img/icone/searchIcon.jpeg'
import colisIcon from '../../img/icone/colisIcon.jpeg'
import zenithMontre from '../../img/echange/11.jpeg'




class TradeDetail extends Component {
    state = {}
    render() {
        const t = this.props.t
        return (
            <div className="contactInfo">
                <img alt="montre" src={zenithMontre} />
                <Card>

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


                        </div>
                    </div>
                    <div className="box" >
                        <div className="icon">
                            <img src={money} alt="icones" width="80px" />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h3>
                                {t("form-sell-step2.1")}
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle" />}
                                    traduction={"Un membre de notre équipe vous contactera dans un délai de 48 heures"}
                                />
                            </h3>

                        </div>
                    </div>
                    {/* ici */}
                    {/*  */}
                    <div className="box">
                        <div className="icon">
                            <img src={searchIcon} alt="icones" width="60px" />
                            <img src={watchIcon} alt="icones" width="20px" />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h3>
                                Sélectionnez votre nouvelle montre
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle" />}
                                    traduction={"Etape facultatif, à utiliser dans le cas d'un échange"}
                                />
                            </h3>
                            <p>Facultatif</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <img src={colisIcon} alt="icones" width="80px" />
                        </div>
                        <div className="text">
                            <h3>Programmez la collecte</h3>
                            <p>de votre montre et obtenez votre nouvelle montre </p>
                        </div>
                    </div>
                </Card>
                <img 
                style={{paddingTop: "40px"}}
                src="https://www.europeenne-de-conseil.com/wp-content/uploads/2019/02/eviter-un-proces-en-signant-une-transaction-k4_13522933.jpg" 
                alt="serrage de main, deal" 
                />

            </div >

        );
    }
}

export default withTranslation()(TradeDetail);