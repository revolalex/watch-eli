import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar3.css'
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
        console.log('tt')
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
                                <li className="shadow-text-gold nav-link" style={{ paddingTop: "1em" }}><Link className={this.state.showNvbar ? "menu-closed" : ""} to={'/'}>{t("home")}</Link></li>
                                <li className={this.state.showNvbar ? "menu-closed" : ""}><Link to={'/buy'} className="nav-link">{t("buy")}</Link></li>
                                <li className={this.state.showNvbar ? "menu-closed" : ""}><Link to={'/sell'} className="nav-link">{t("sell")}</Link></li>
                                <li className={this.state.showNvbar ? "menu-closed" : ""}><Link to={'/service'} className="nav-link">{t("service")}</Link></li>
                                <li className={this.state.showNvbar ? "menu-closed" : ""}><Link to={'/about'} className="nav-link">{t("navbar-about")}</Link></li>
                                <li className={this.state.showNvbar ? "menu-closed" : ""}><Link to={'/contact'} className="nav-link">{t("navbar-contact")}</Link></li>
                                
                            </ul>
                            

                        </div>
                    </nav>
                    <select className="select-lang" value={this.state.lang} onChange={this.handleChange}>
                                        <option value="fr">
                                            Fr
                                        </option>
                                        <option value="en">
                                            Eng
                                        </option>
                                    </select>
                </div>
            </div>
        )
    }
}
export default withTranslation()(Navbar3)