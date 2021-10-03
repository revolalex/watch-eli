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
                <img
                    src="https://www.cresus.fr/media/wysiwyg/FORMULAIRE/Vendresamontre/vendre-sa-montre.jpg"
                    alt="échange de montres"
                    style={{
                        paddingBottom: "40px",
                        width: "100%",
                        height: "auto",
                        margin: "auto"
                    }}
                />
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
                                    traduction={
                                        `WMC s’engage à traiter vos informations (personnelles) de manière entièrement confidentielle.
                                        Vos données personnelles ne sont exploitées que dans le cadre de votre demande d'achat, de vente ou du déroulement de votre commande.
                                        `
                                    }
                                />
                            </h3>

                            <p>
                                Un expert WMC vous contactera dans un délai de 48h
                            </p>
                        </div>
                    </div>
                    <div className="box" >
                        <div className="icon">
                            <img src={money} alt="icones" width="80px" />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h3>
                                Recevez votre offre personnalisée
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle" />}
                                    traduction={
                                        `Dès réception de votre montre, celle-ci sera inspectée par nos experts horlogers.
                                        Vous recevrez une confirmation de l’offre d'achat dans un délai d'1 à 3 jour(s) ouvrable(s). Le paiement est versé dans un délai de 1 à 3 jour(s) ouvrable(s) à compter de la date de réception/ fin de l expertise? de la montre.
                                        `
                                    }
                                />
                            </h3>

                            <p>
                                Nos experts pre-évaluent votre montre et vous font une offre. Votre offre est valable durant 48heures
                            </p>
                        </div>
                    </div>

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
                            <p> L'expédition est falcultatif, si notre devis ne devait pas vous satisfaire WMC s' engage à réexpédier votre montre, nous prenons les frais de logistique à notre charge</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <img src={argent} alt="icones" width="80px" />
                        </div>
                        <div className="text">
                            <h3>
                                Recevez votre paiement
                            </h3>
                            <p>Vous recevrez le paiement par virement bancaire dans les cinq jours ouvrés
                            </p>
                        </div>
                    </div>
                </Card>
                <img
                    src="https://www.europeenne-de-conseil.com/wp-content/uploads/2019/02/eviter-un-proces-en-signant-une-transaction-k4_13522933.jpg"
                    alt="serrage de main, deal"
                    style={{
                        paddingBottom: "40px",
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