import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css'
import { withTranslation } from 'react-i18next';
// import watch from"../../img/watch.png"
import ExternaLinks from '../../utils/socialMedia.js'

class Footer extends Component {
    
    getYear() {
        return new Date().getFullYear()
    }
    render() {
        const t = this.props.t
        return (
            <footer className="footer-section footer mt-auto" >
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            {/* <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>{t("footer-find-us")}</h4>
                                        <span>10 avennue daumesnel 75008 Paris</span>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <br/>
                                        {/* <h4>{t("footer-call-us")}</h4> */}
                                        <span className="span-footer">(+33)0600000000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <br/>
                                        {/* <h4>{t("footer-mail-us")}</h4> */}
                                        <span className="span-footer">eli@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    {/* <div className="footer-logo">
                                        <p href="index.html" id="logoText"><img src={watch} className="img-fluid logoFooterText" id="logoFooter"  alt="logo" /> Watchiz </p>
                                    </div> */}
                                    {/* <div className="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                    </div> */}
                                    <div className="footer-social-icon">
                                        <span>{t("footer-follow-us")}</span>
                                        <a href={ExternaLinks.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href={ExternaLinks.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter twitter-bg"></i></a>
                                        <a href={ExternaLinks.google} target="_blank" rel="noreferrer"><i className="fab fa-google-plus-g google-bg"></i></a>
                                        <a href={ExternaLinks.chrono24} target="_blank" rel="noreferrer"><img style={{borderRadius: "50%", height:"42px"}} src="https://play-lh.googleusercontent.com/xWvqbtU9fO6_yyJoblxvsp6-MtMRtWYgBuVRQ9JTKbERYLQ4Mk8znN0l_crr9RImTw=s180" alt="Chrono 24"/></a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>{t("footer-useful-links")}</h3>
                                    </div>
                                    <ul>
                                        <li><a href={ExternaLinks.chrono24} className="nav-link" target="_blank" rel="noreferrer"> Chrono 24 </a></li>
                                        <li><a href={ExternaLinks.instagram} className="nav-link" target="_blank" rel="noreferrer">Instagram</a></li>
                                        <li><a href={ExternaLinks.youtube} className="nav-link" target="_blank" rel="noreferrer">Youtube</a></li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>{t("footer-subscribe")}</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>{t("footer-subcribe-text")}</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder={t("footer-placeholder-email")}/>
                                            <button><i className="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; {this.getYear()}, {t("footer-copyright-text")} <a href="https://www.linkedin.com/in/alexandre-rodrigueza/">ReVoL</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link to={'/'} className="nav-link active">{t("navbar-home")}</Link></li>
                                        <li><Link to={'/buy'} className="nav-link active">{t("buy")}</Link></li>
                                        <li><Link to={'/sell'} className="nav-link active">{t("sell")}</Link></li>
                                        <li><Link to={'/service'} className="nav-link active">{t("service")}</Link></li>
                                        <li><Link to={'/about'} className="nav-link active">{t("navbar-blog")}</Link></li>
                                        <li><Link to={'/contact'} className="nav-link active">{t("navbar-contact")}</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}

export default withTranslation()(Footer);