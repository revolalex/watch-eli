import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import i18n from '../i18n';
import watch from '../img/watch.png'
import './css/Navbar.css'
import { withTranslation } from 'react-i18next';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        i18n.changeLanguage(event.target.value)
    }

    render() {
        const t = this.props.t
        return (
            <nav id="nav-bar-desktop" className="navbar navbar-dark navbar-expand-sm bg-dark sticky-top">
                <div className="container">
                    <a href="/" className="navbar-brand logo-text">
                        <img className="logoWatch" src={watch} alt="logo watch" /> &nbsp;
                        Watchiz
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarCollapse" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto nav-fill">
                            <li><Link to={'/'} className="shadow-text-gold nav-link active">{t("navbar-home")}</Link></li>
                            <li><Link to={'/buy'} className="nav-link">{t("buy")}</Link></li>
                            <li><Link to={'/sell'} className="nav-link">{t("sell")}</Link></li>
                            <li><Link to={'/service'} className="nav-link">{t("service")}</Link></li>
                            <li><Link to={'/about'} className="nav-link">{t("navbar-about")}</Link></li>
                            <li><Link to={'/contact'} className="nav-link">{t("navbar-home")}</Link></li>
                        </ul>
                        {/* todo make to left if bigscreen */}
                        <div className="lang-switch">
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="fr">
                                    {/* 🇫🇷 */}
                                    Fr
                                </option>
                                <option value="en">
                                    Eng{/* 🇬🇧 */}
                                </option>
                            </select>
                        </div>

                    </div>

                </div>
            </nav>
        );
    }
}

export default withTranslation()(Navbar);