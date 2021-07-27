import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import i18n from '../i18n';
import watch from '../img/watch.png'
import './Navbar.css'
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
            <nav className="navbar navbar-dark navbar-expand-sm bg-dark sticky-top">
                <div class="container">
                    <a href="/" class="navbar-brand logo-text">
                        <img className="logoWatch" src={watch} alt="logo watch" /> &nbsp;
                        Watchiz
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarCollapse" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto nav-fill">
                            <li className="shadow-text-gold"><Link to={'/'} className="nav-link">{t("home")}</Link></li>
                            <li><Link to={'/buy'} className="nav-link">{t("buy")}</Link></li>
                            <li><Link to={'/sell'} className="nav-link">{t("sell")}</Link></li>
                            <li><Link to={'/service'} className="nav-link">{t("service")}</Link></li>
                            <li><Link to={'/about'} className="nav-link">{t("about")}</Link></li>
                            <li><Link to={'/contact'} className="nav-link">{t("contact")}</Link></li>
                        </ul>
                        {/* todo make to left if bigscreen */}
                        <div className="lang-switch"> 
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="fr">🇫🇷</option>
                                <option value="en">🇬🇧</option>
                            </select>
                        </div>

                    </div>

                </div>
            </nav>
        );
    }
}

export default withTranslation()(Navbar);