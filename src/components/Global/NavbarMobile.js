import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import watch from '../../img/watch.png'
import '../css/navbar.css'
import { withTranslation } from 'react-i18next';
import React, { Component } from 'react';
import i18n from '../../i18n';
import '../css/NavBarMobile.css'

class NavbarMobile extends Component {
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
            <div className="my-mobile-nav">
                <div className="sticky-top">
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

                    <Navbar className="my-navbar">
                        <Nav activeKey={pathname} className="mr-auto">
                            <Nav.Link href="/">{t('navbar-home')}</Nav.Link>
                            <Nav.Link href="/buy">{t("sell")}</Nav.Link>
                            <Nav.Link href="/sell">{t("buy")}</Nav.Link>
                            <Nav.Link href="/trade">{t("navbar-trade")}</Nav.Link>
                            <Nav.Link href="/service">{t("service")}</Nav.Link>
                            <Nav.Link href="/about">{t("navbar-blog")}</Nav.Link>
                            {/* <NavDropdown title="Link" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/service">{t("service")}</NavDropdown.Item>
                                <NavDropdown.Item href="/about">{t("navbar-about")}</NavDropdown.Item>
                                <NavDropdown.Item href="/contact">{t("navbar-contact")}</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <div className="tel-header">
                            <select value={this.state.value} onChange={this.handleChange} className="select-lang">
                                <option value="fr">
                                    🇫🇷
                                </option>
                                <option value="en">
                                    🇬🇧
                                </option>
                            </select>
                        </div>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default withTranslation()(withRouter(NavbarMobile))