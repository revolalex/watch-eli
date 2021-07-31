import React, { Component } from 'react';
import './Navbar2.css'
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import watch from '../img/watch.png'
import i18n from '../i18n';

class Navbar2 extends Component {
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
            <div id="wrapper-navbar">
                <header>
                    <div className="navbar navbar-expand-md justify-content-start">
                        <div className="container container-nav-burger">
                            <p
                                id="burger-menu"
                                className="navbar-toggler collapsed"
                                type="button" data-toggle="collapse"
                                data-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <div id="nav-icon">
                                    <span></span><span></span><span></span><span></span><span></span><span></span>
                                </div>
                            </p>
                            <Link id="logoText" to={'/'} classNameName="nav-link">
                                <img style={{ height: "25px", marginLeft: "10px", marginRight: "10px" }} src={watch} alt="logo watch" />
                                &nbsp;Watchiz
                            </Link>

                        </div>

                    </div>


                    <nav>
                        <div id="navbarNavDropdown" className="navbar-collapse collapse text-center">
                            <ul id="main-menu" className="navbar-nav">
                                <li
                                    data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"
                                >
                                    <Link to={'/'} classNameName="nav-link">{t("home")}</Link>
                                </li>
                                <li
                                    data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"
                                >
                                    <Link to={'/buy'} classNameName="nav-link">{t("buy")}</Link>
                                </li>
                                <li
                                    data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown">
                                    <Link to={'/sell'} classNameName="nav-link">{t("sell")}
                                    </Link></li>
                                <li
                                    data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown">
                                    <Link to={'/service'} classNameName="nav-link">{t("service")}</Link>
                                </li>
                                <li
                                    data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"
                                >
                                    <Link to={'/about'} classNameName="nav-link">{t("about")}</Link>
                                </li>
                                <li
                                    data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"
                                >
                                    <Link to={'/contact'} classNameName="nav-link">{t("contact")}</Link>
                                </li>
                                <div classNameName="lang-switch">
                                    <select value={this.state.value} onChange={this.handleChange} className="select-lang" >
                                        <option value="fr">
                                            {/* 🇫🇷 */}
                                            Français
                                        </option>
                                        <option value="en">
                                            {/* 🇬🇧 */}
                                            English
                                        </option>
                                    </select>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>

        )
    }
}

export default withTranslation()(Navbar2);