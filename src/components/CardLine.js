import React, { Component } from 'react';
import DaytonaImg from '../img/daytona.jpeg'
import VenteImg from '../img/achat.jpg'
import ServiceBreitling from"../img/serviceBreitling.jpg"
import SpeedmasterImg from '../img/speedmaster.jpg'
import ApService from '../img/ap_service.jpg'
import "./CardLine.css"
import { withTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";

class CardLine extends Component {
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
            // initialise with other settings
            duration: 2000
        });
    }
    render() {
        const t = this.props.t
        return (
            <div className="container card-line-container">
                <section class="container mt-5 mb-5">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100" data-aos="zoom-in" >
                                <img src={SpeedmasterImg} class="card-img-top img-from-card" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{t("buy")}</h5>
                                    <p class="card-text"> Watchiz vous propose une sélection de garde-temps neufs ou d’occasion à la fois rares et iconiques pour le plus grand bonheur des passionnés d’horlogerie mais aussi des collectionneurs. Toutes nos pièces sont authentifiées et certifiées par des experts horlogers afin de garantir à nos acheteurs une qualité irréprochable et des pièces d’origine.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100" data-aos="zoom-in" >
                                <img src={DaytonaImg} class="card-img-top img-from-card" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{t("sell")}</h5>
                                    <p class="card-text">Vous souhaitez vous séparer de votre montre afin d’en acquérir une nouvelle ou vous souhaitez tout simplement revendre une de vos montres récentes ou de collection ? Chez Watchiz, nous reprenons votre garde-temps après expertise du modèle, de sa référence, et de son état.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100" data-aos="zoom-in" >
                                <img src={ServiceBreitling} class="card-img-top img-from-card" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{t("service")}</h5>
                                    <p class="card-text"> travaille main dans la main avec les plus grandes manufactures horlogères afin de vous proposer un service de réparation et de révision à la hauteur de votre garde-temps. Montre mécanique à remontage manuel, montre automatique, ou montre avec complications, nous prenons soin de tous types de garde-temps.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
export default withTranslation()(CardLine);

