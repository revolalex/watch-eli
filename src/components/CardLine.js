import React, { Component } from 'react';
import DaytonaImg from '../img/daytona.jpeg'
import ServiceBreitling from"../img/serviceBreitling.jpg"
import SpeedmasterImg from '../img/speedmaster.jpg'
import "./CardLine.css"
import { withTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

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
                                    <p class="card-text">{t("card-buy-text")}</p>
                                    <p><Link to={'/buy'} className="active cardLink">{t("card-more-info")}</Link></p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100" data-aos="zoom-in" >
                                <img src={DaytonaImg} class="card-img-top img-from-card" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{t("sell")}</h5>
                                    <p class="card-text">{t("card-sell-text")}</p>
                                    <p><Link to={'/sell'} className="active cardLink">{t("card-more-info")}</Link></p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100" data-aos="zoom-in" >
                                <img src={ServiceBreitling} class="card-img-top img-from-card" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{t("service")}</h5>
                                    <p class="card-text">{t("card-service-text")}</p>
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

