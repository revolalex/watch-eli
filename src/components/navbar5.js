import { Navbar, Nav, Container } from "react-bootstrap";
import { withRouter } from "react-router";
import watch from '../img/watch.png'
import '../components/css/navbar1.css'
import { withTranslation } from 'react-i18next';
import React, { Component } from 'react';
import i18n from '../i18n';

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
                    <Container>
                        <Nav activeKey={pathname} className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">{t("navbar-about")}</Nav.Link>
                            <Nav.Link href="/contact">{t("navbar-contact")}</Nav.Link>
                            <Nav.Link href="/buy">{t("buy")}</Nav.Link>
                            <Nav.Link href="/sell">{t("sell")}</Nav.Link>
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
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default withTranslation()(withRouter(Navbar5))