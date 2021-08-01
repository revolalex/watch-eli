import React, { Component } from 'react';
import './css/FormSell.css'
import { withTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";

class FormSell extends Component {
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
            <section className="contact">
                <div className="content">
                    <h2>{t("form-sell-title")}</h2>
                    <p>{t("form-sell-sub-title")}</p>
                </div>
                <div className="container-contact">
                    <div className="contactInfo">
                        <div className="box" data-aos="fade-right" >
                            <div className="icon"><i className="far fa-file-image" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3>{t("form-sell-step1")}</h3>
                                <p>{t("form-sell-step1.1")}</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-right" >
                            <div className="icon"><i className="far fa-file-signature" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3>{t("form-sell-step2")}</h3>
                                <p>{t("form-sell-step2.1")}</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-right" >
                            <div className="icon"><i className="fab fa-ups" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3>{t("form-sell-step3")}</h3>
                                <p>{t("form-sell-step3.1")}</p>
                            </div>
                        </div>


                    </div>
                    <div className="contactform" data-aos="fade-left">
                        <form>
                            <h2>Send Message </h2>
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span>Brand</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span>Model</span>
                            </div>
                            <div className="inputBox">

                                <input required="required"></input>
                                <span>Condition</span>
                            </div>
                            <div className="inputBox">

                                <input required="required"></input>
                                <span>Original box & paper</span>
                            </div>
                            {/* ICI ALEX TEST FILE INPUT */}
                            <div className="inputBox">
                                <input type="file" name="" required="required" placeholder="photo" />
                            </div>

                            <div className="inputBox">
                                <input type="submit" name="" value="Send" />
                            </div>


                        </form>
                    </div>
                </div>
            </section>


        )
    }

}
export default withTranslation()(FormSell)