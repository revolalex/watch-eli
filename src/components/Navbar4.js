import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import watch from '../img/watch.png'
import i18n from '../i18n';
import './Navbar4.css'
import Button from 'react-bootstrap/Button'



class Navbar4 extends Component {
    constructor(props) {
        super(props);
        this.state = { lang: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeClick = this.handleChangeClick.bind(this);
    }
    handleChange(event) {
        this.setState({ lang: event.target.value });
        i18n.changeLanguage(event.target.value)
    }
    handleChangeClick(lang) {
        this.setState({ lang: lang });
        i18n.changeLanguage(lang)
    }
    render() {
        const t = this.props.t
        return (
            <div>
                <div id="wrapper-navbar">
                    <header>
                        <div className="navbar navbar-expand-md">
                            <div className="container">
                                <a href="/" className="navbar-brand" style={{ color: "var(--gold-color)" }}>
                                    <img className="logoWatch" src={watch} alt="logo watch" style={{ height: "35px" }} /> &nbsp;
                                    Watchiz
                                </a>
                                <button className="navbar-toggler collapsed"
                                    type="button" data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <div id="nav-icon">
                                        <span></span><span></span><span></span><span></span><span></span><span></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <nav>
                            <div id="navbarNavDropdown" className="navbar-collapse collapse text-center">
                                <ul id="main-menu" className="navbar-nav">
                                    <li data-toggle="collapse"
                                        data-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown">
                                        <Link to={'/'} className="shadow-text-gold nav-link active">{t("navbar-home")}</Link>
                                    </li>
                                    <li data-toggle="collapse"
                                        data-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown">
                                        <Link to={'/buy'} className="nav-link">{t("buy")}</Link>
                                    </li>
                                    <li data-toggle="collapse"
                                        data-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown">
                                        <Link to={'/sell'} className="nav-link">{t("sell")}</Link>
                                    </li>
                                    <li data-toggle="collapse"
                                        data-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown">
                                        <Link to={'/service'} className="nav-link">{t("service")}</Link>
                                    </li>
                                    <li data-toggle="collapse"
                                        data-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown">
                                        <Link to={'/about'} className="nav-link">{t("navbar-about")}</Link>
                                    </li>
                                    <li data-toggle="collapse"
                                        data-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown">
                                        <Link to={'/contact'} className="nav-link">{t("navbar-contact")}</Link>
                                    </li>
                                    <li style={{ color: "var(--gold-color)", fontSize: "30px" }}>
                                        <Button className="lang-button" variant="outline-primary" value='fr' onClick={this.handleChange}>🇫🇷 Fra</Button> /
                                        <Button className="lang-button" variant="outline-primary" value='en' onClick={this.handleChange}>🇬🇧 Eng</Button>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </header>
                </div>
            </div>

        );
    }
}

export default withTranslation()(Navbar4);