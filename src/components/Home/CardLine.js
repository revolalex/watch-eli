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
                                    <h5 className="card-title">{t("buy")}</h5>
                                    <p className="card-text">
                                    <VvmTooltip/>
                                        {t("card-buy-text")}
                                    </p>
                                    <p><Link to={'/buy'} className="active cardLink">{t("card-more-info")}</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col card-shadow">
                            <div className="card h-100"
                            // data-aos="zoom-in" 
                            >
                                <img src={BreitlingImg} className="card-img-top img-from-card" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{t("sell")}</h5>
                                    <p className="card-text">{t("card-sell-text")}</p>
                                    <p><Link to={'/sell'} className="active cardLink">{t("card-more-info")}</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col card-shadow">
                            <div className="card h-100"
                            // data-aos="zoom-in" 
                            >
                                <img src={Tag} className="card-img-top img-from-card" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{t('navbar-trade')}</h5>
                                    <p className="card-text">{t('card-trade-text')}</p>
                                    <p><Link to={'/trade'} className="active cardLink">{t("card-more-info")}</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col card-shadow">
                            <div className="card h-100"
                            // data-aos="zoom-in" 
                            >
                                <img src={ServiceImg} className="card-img-top img-from-card" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{t("service")}</h5>
                                    <p className="card-text">{t("card-service-text")}</p>
                                    <p><Link to={'/service'} className="active cardLink">{t("card-more-info")}</Link></p>
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

