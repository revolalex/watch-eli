import React, { Component } from 'react';
import SpeedmasterImg from '../../img/speedmaster2.jpg'
import Tag from '../../img/tag1.jpg'
import BreitlingImg from '../../img/breitlingDeus2.jpg'
import ServiceImg from '../../img/service.jpeg'
import "../css/CardLine.css"
import { withTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import VvmTooltip from './VvmTooltip';

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
                <section className="container mt-5 mb-5">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col card-shadow">
                            <div className="card h-100"
                            // data-aos="zoom-in" 
                            >
                                <img src={SpeedmasterImg} className="card-img-top img-from-card" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{t("buy-card")}</h5>
                                    <p className="card-text">
                                        <VvmTooltip />
                                        {t("card-buy-text")}
                                    </p>
                                    <p><Link to={'/buy'} className="active cardLink">{t("card-more-info")}</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col card-shadow">
                            <div className="card h-100"
                            >
                                <img src={BreitlingImg} className="card-img-top img-from-card" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{t("sell-card")}</h5>
                                    <p className="card-text">{t("card-sell-text")}</p>
                                    <p><Link to={'/sell'} className="active cardLink">{t("card-more-info")}</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col card-shadow">
                            <div className="card h-100"
                            >
                                <img src={Tag} className="card-img-top img-from-card" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {/* {t('navbar-trade')} */}
                                        Vous ne la portez plus? WMC Échange
                                    </h5>
                                    <p className="card-text">
                                        {/* {t('card-trade-text')} */}
                                        WMC vous propose d’échanger simplement, rapidement et de manière sécurisée.
                                        Nous expertisons votre montre gratuitement pour reprise et vous proposons
                                        une sélection de pièces soigneusement restaurées ou neuves.
                                        Maximisez votre temps et votre argent en une seule opération simple et rapide!

                                    </p>
                                    <p>
                                        <Link to={'/trade'} className="active cardLink">
                                            {t("card-more-info")}
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col card-shadow">
                            <div className="card h-100"
                            >
                                <img src={ServiceImg} className="card-img-top img-from-card" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {/* {t("service")} */}
                                        WMC l’expertise horlogère à votre service
                                    </h5>
                                    <p className="card-text">
                                        {/* {t("card-service-text")} */}
                                        Montres mécaniques à remontage manuel ou automatique,
                                        modèles à complications ou simple échange de pile,
                                        nos maîtres horlogers assurent la maintenance de tous
                                        types de montres dans le plus grand détail afin de vous
                                        proposer un service de réparation, révision et entretien
                                        à la hauteur de vos attentes.
                                    </p>
                                    <p>
                                        <Link to={'/service'} className="active cardLink">
                                            {t("card-more-info")}
                                        </Link>
                                    </p>
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

