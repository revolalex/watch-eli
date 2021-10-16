import { Component } from "react";
import { withTranslation } from 'react-i18next';
import TooltipPerso from '../Global/TooltipPerso'
import img2 from '../../img/vente/sell.jpeg'


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
        const iconWidth= "60px"
        return (
            <div className="contactInfo">
                <img

                    src='https://verygoodlord.com/wp-content/uploads/2014/07/top-10-Montre-homme-mythique-luxe.jpg'
                    alt="échange de montres"
                    style={{
                        paddingBottom: "40px",
                        width: "100%",
                        height: "auto",
                        margin: "auto"
                    }}
                />
                <Card>
                    <br/>
                    <div className="box" >
                        <div className="icon">
                            <img src={formulaireIcon} alt="icones" width={iconWidth}/>
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h5>{t("form-sell-step1")}
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={
                                        `Nous vous contacterons à votre convenance afin de vous assister dans la vérification des informations `
                                        // `WMC s’engage à traiter vos informations (personnelles) de manière entièrement confidentielle.
                                        // Vos données personnelles ne sont exploitées que dans le cadre de votre demande d'achat, de vente ou du déroulement de votre commande.
                                        // `
                                    }
                                />
                            </h5>

                            <p>
                                Un expert WMC vous contactera dans un délai de 48h
                            </p>
                        </div>
                    </div>
                    <br/>
                    <div className="box" >
                        <div className="icon">
                            <img src={money} alt="icones" width={iconWidth} />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h5>
                                Recevez votre offre personnalisée
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={
                                        `Dès réception de votre montre, celle-ci sera inspectée par nos experts horlogers.
                                        Vous recevrez une confirmation de l’offre d'achat dans un délai d'1 à 3 jour(s) ouvrable(s). 
                                        `
                                    }
                                />
                            </h5>

                            <p>
                                Nos experts pre-évaluent votre montre et vous font une offre. Votre offre est valable durant 48heures
                            </p>
                        </div>
                    </div>
                    <br/>
                    <div className="box">
                        <div className="icon">
                            <img src={boxIcon} alt="icones" width={iconWidth} />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h5>
                                {t("form-sell-step3")}&nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={"Pour l'envoi de votre montre, nous vous faisons parvenir un bordereau d'expédition qu'il suffit d'imprimer et de coller sur votre colis.Votre montre est 100% assurée pour la valeur du devis pendant toute notre prise en charge"}
                                />
                            </h5>
                            <p>Envoi gratuit 100% assuré 100% sécurisé</p>
                        </div>
                    </div>
                    <br/>
                    <div className="box">
                        <div className="icon">
                            <img src={argent} alt="icones" width={iconWidth} />
                        </div>
                        <div className="text">
                            <h5>
                                Recevez votre paiement
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={
                                        `Confirmez vos informations et recevez votre paiement sécurisé en cinq jours `
                                    }
                                />
                            </h5>
                            <p>Paiement par virement bancaire dans les cinq jours ouvrés
                            </p>
                        </div>
                    </div>
                    <br/>
                </Card>
                <br/><br/>
                <img
                src={img2}
                    alt="serrage de main, deal"
                    style={{
                        paddingBottom: "40px",
                        paddingTop: "40px",
                        width: "100%",
                        height: "auto",
                        margin: "auto"
                    }}
                />
            </div >

        );
    }
}

export default withTranslation()(SellDetail);