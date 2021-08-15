import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import watch from '../../img/watch.png'
import '../css/navbar.css'
import { withTranslation } from 'react-i18next';
import React, { Component } from 'react';
import i18n from '../../i18n';
import NavbarMobile from "./NavbarMobile";


class Navbar5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        i18n.changeLanguage(event.target.value)
    }
    render() {
        const pathname = window.location.pathname
        const t = this.props.t
        return (
            <div>
                <NavbarMobile/>
                <div className="sticky-top big-screen-nav">
                    <div className="logo-nav-div">
                        <span className="logo-police">
                            <img className="logo-watch" src={watch} alt="logo watch" />
                            <span className="majuscule-title">V</span>
                            endre
                            <span className="majuscule-title">M</span>
                            a
                            <span className="majuscule-title">M</span>
                            ontre.com
                        </span>
                        <span className="tel-header">
                            <i className="fas fa-phone" />
                            (+33)0600000000
                        </span>

                    </div>

                    <Navbar className="my-navbar" expand="sm">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav activeKey={pathname} className="mr-auto">
                                <Nav.Link href="/">{t('navbar-home')}</Nav.Link>
                                <Nav.Link href="/buy">{t("buy")}</Nav.Link>
                                <Nav.Link href="/trade">{t("navbar-trade")}</Nav.Link>
                                <Nav.Link href="/sell">{t("sell")}</Nav.Link>
                                <Nav.Link href="/service">{t("service")}</Nav.Link>
                                <Nav.Link href="/about">{t("navbar-about")}</Nav.Link>
                                <Nav.Link href="/contact">{t("navbar-contact")}</Nav.Link>
                            </Nav>
                            <div>
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="fr">
                                        🇫🇷
                                    </option>
                                    <option value="en">
                                        🇬🇧
                                    </option>
                                </select>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}


export default withTranslation()(withRouter(Navbar5))