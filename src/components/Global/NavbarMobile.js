import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router";
// import watch from '../../img/watch.png'
import '../css/navbar.css'
import { withTranslation } from 'react-i18next';
import React, { Component } from 'react';
import i18n from '../../i18n';
import '../css/NavBarMobile.css'
import logo2 from '../../img/logo2.png'

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
                            <Nav.Link href="/"><img className="main-logo" src={logo2} alt="logo watch" /></Nav.Link>
                        </span>
                        <span className="tel-header" style={{ fontSize: "18px" }}>

                            <a className="link-email" href="tel:+33187211381"><i className="fas fa-phone" />(+33) 1 87 21 13 81</a>
                        </span>

                    </div>
                    <div className="wmc-navbar my-police-titre">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Watch Market Club</div>

                    <Navbar className="my-navbar">
                        <Nav activeKey={pathname} className="mr-auto">
                            <Nav.Link href="/">{t('navbar-home')}</Nav.Link>
                            <Nav.Link href="/buy">{t("buy")}</Nav.Link>
                            <Nav.Link href="/sell">{t("sell")}</Nav.Link>
                            <Nav.Link href="/trade">{t("navbar-trade")}</Nav.Link>
                            <Nav.Link href="/service">{t("service")}</Nav.Link>
                            <Nav.Link href="/blog">{t("navbar-blog")}</Nav.Link>
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