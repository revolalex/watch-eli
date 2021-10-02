import { Component } from "react";
import { withTranslation } from 'react-i18next';
import TooltipPerso from '../Global/TooltipPerso'

import '../css/FormSell.css'


// ICONES
import formulaireIcon from '../../img/icone/formIcon.jpeg'
import money from '../../img/icone/money.jpeg'
import watchIcon from '../../img/icone/watchIcon.jpeg'
import searchIcon from '../../img/icone/searchIcon.jpeg'
import colisIcon from '../../img/icone/colisIcon.jpeg'




class TradeStep2 extends Component {
    state = {}
    render() {
        const t = this.props.t
        return (
            <div className="container-contact">
            <div className="contactInfo" style={{width:"100%"}}>
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
                            <h3>Recevez notre offre personnalisée
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle" />}
                                    traduction={"Un membre de notre équipe vous contactera dans un délai de 48 heures"}
                                />
                            </h3>

                            <p>{t("form-sell-step2.1")}</p>
                        </div>
                    </div>

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
                                    traduction={"L'expédition de votre montre ne constitue en rien une obligation de votre part, et si notre devis ne devait pas vous satisfaire Watches Paris s' engage à (vous) réexpédier votre montre à nos frais."}
                                />
                            </h3>
                            <p>Facultatif, Indiquez nous le ou les modèles qui vous intéresse dans le commentaire, nous vous proposerons alors une sélections en adéquation avec votre gout</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <img src={colisIcon} alt="icones" width="80px" />
                        </div>
                        <div className="text">
                            <h3>Collecte gratuite à domicile</h3>
                            <p> Nous programmons la collecte de votre montre - Expédiez votre montre - Livraison de votre nouvelle montre</p>
                        </div>
                    </div>
            </div >
            </div>
        );
    }
}

export default withTranslation()(TradeStep2);