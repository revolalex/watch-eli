import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import watch from '../img/watch.png'
import './Navbar4.css'


class Navbar4 extends Component {
    state = {}
    render() {
        const t = this.props.t
        return (
            <div>

                <div id="wrapper-navbar">
                    <header>
                        <div class="navbar navbar-expand-md">
                            <div class="container">
                                <a href="/" class="navbar-brand" style={{ color: "var(--gold-color)" }}>
                                    <img className="logoWatch" src={watch} alt="logo watch" style={{ height: "35px" }} /> &nbsp;
                                    Watchiz
                                </a>
                                <button class="navbar-toggler collapsed"
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
                            <div id="navbarNavDropdown" class="navbar-collapse collapse text-center">
                                <ul id="main-menu" class="navbar-nav">
                                    <li data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"><Link to={'/'} className="shadow-text-gold nav-link active">{t("home")}</Link></li>
                                    <li data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"><Link to={'/buy'} className="nav-link">{t("buy")}</Link></li>
                                    <li data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"><Link to={'/sell'} className="nav-link">{t("sell")}</Link></li>
                                    <li data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"><Link to={'/service'} className="nav-link">{t("service")}</Link></li>
                                    <li data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"><Link to={'/about'} className="nav-link">{t("about")}</Link></li>
                                    <li data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"><Link to={'/contact'} className="nav-link">{t("contact")}</Link></li>
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