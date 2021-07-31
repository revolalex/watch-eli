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
                    <h2>{t("form-sell-contact-us")}</h2>
                    <p>{t("form-sell-help")}</p>
                </div>
                <div className="container-contact">
                    <div className="contactInfo">
                        <div className="box" data-aos="fade-right" >
                            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3>{t("form-sell-adress")}</h3>
                                <p>Malad Mumbai West 40064 Maharashtra <br /> India</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-right" >
                            <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3>{t("form-sell-phone")}</h3>
                                <p>+919321975387</p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-right" >
                            <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>contact@sitesoch.com</p>
                            </div>
                        </div>


                    </div>
                    <div className="contactform" data-aos="fade-left">
                        <form>
                            <h2>Send Message </h2>
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span>Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span>Email</span>
                            </div>
                            <div className="inputBox">

                                <textarea required="required"></textarea>
                                <span>Message</span>
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