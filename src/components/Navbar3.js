import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/Navbar3.css'
import { withTranslation } from 'react-i18next';
import i18n from '../i18n';

class Navbar3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNvbar: true,
            lang: "fr"
        }
        this.onNavClick = this.onNavClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ lang: event.target.value });
        i18n.changeLanguage(event.target.value)
    }
    onNavClick() {
        this.setState({
            showNvbar: !this.state.showNvbar
        })
    }
    render() {
        const t = this.props.t
        return (
            <div>
                <div id="menu-btn" class="menu-opened" onClick={this.onNavClick}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <div id="nav-wrapper" className={this.state.showNvbar ? "menu-closed" : ""}>


                    <nav>
                        <div id="nav-links">
                            <ul>
                                <li onClick={this.onNavClick} style={{ paddingTop: "1em" }}><Link className={this.state.showNvbar ? "menu-closed" : ""} to={'/'}>{t("navbar-home")}</Link></li>
                                <li onClick={this.onNavClick}><Link to={'/buy'} className="nav-link">{t("buy")}</Link></li>
                                <li onClick={this.onNavClick}><Link to={'/sell'} className="nav-link">{t("sell")}</Link></li>
                                <li onClick={this.onNavClick}><Link to={'/service'} className="nav-link">{t("service")}</Link></li>
                                <li onClick={this.onNavClick}><Link to={'/about'} className="nav-link">{t("navbar-about")}</Link></li>
                                <li onClick={this.onNavClick}><Link to={'/contact'} className="nav-link">{t("navbar-contact")}</Link></li>

                            </ul>
                            <select className="select-lang" value={this.state.lang} onChange={this.handleChange}>
                                <option value="fr">
                                    Fr
                                </option>
                                <option value="en">
                                    Eng
                                </option>
                            </select>


                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
export default withTranslation()(Navbar3)