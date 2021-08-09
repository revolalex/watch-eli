import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import i18n from '../i18n';
import watch from '../img/watch.png'
import './css/Navbar.css'
import { withTranslation } from 'react-i18next';
import { NavDropdown, Container, Nav, NavLink } from 'react-bootstrap';




class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            buyActive: false,
            sellActive: false,
            serviceActive: false,
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        i18n.changeLanguage(event.target.value)
    }

    render() {

        const t = this.props.t
        return (
            <div className="sticky-top">
                <div className="logo-nav-div">
                    <Link to={'/'} className="navbar-brand logo-text">
                        <img className="logoWatch" src={watch} alt="logo watch" />
                        &nbsp; Watchiz
                        <span className="tel-header">
                           
                            <i className="fas fa-phone"></i>
                            &nbsp;(+33)0600000000
                        </span>
                    </Link>
                    <div className="navbar navbar-dark navbar-expand-sm sticky-top" style={{ backgroundColor: "var(--background-color) !important;" }}>
                        <Container className="container">
                            <div >
                                <Nav className="navbar-nav ml-auto nav-fill">
                                    <NavLink><Link to={'/buy'} className="nav-link">{t("buy")}</Link></NavLink>&emsp;&emsp;
                                    <NavLink><Link to={'/sell'} className="nav-link">{t("sell")}</Link></NavLink>&emsp;&emsp;
                                    <NavLink><Link to={'/service'} className="nav-link">{t("service")}</Link></NavLink>&emsp;&emsp;
                                    <NavDropdown title="Liens" style={{ padding: ".5em", fontSize: "1.1em " }}>
                                        <NavDropdown.Item><Link to={'/trade'} className="nav-link dropdown-link"> Echange</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/contact'} className="nav-link dropdown-link">{t("navbar-contact")}</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/about'} className="nav-link dropdown-link">{t("navbar-about")}</Link></NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </div>
                            <div className="lang-switch">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Navbar);