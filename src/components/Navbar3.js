import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar3.css'
import { withTranslation } from 'react-i18next';

class Navbar3 extends Component {
    constructor(props) {
        super(props);
        this.state = { showNvbar: false }
        this.onNavClick = this.onNavClick.bind(this);
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
                            <li className="shadow-text-gold nav-link"><Link to={'/'}>{t("home")}</Link></li>
                            <li><Link to={'/buy'} className="nav-link">{t("buy")}</Link></li>
                            <li><Link to={'/sell'} className="nav-link">{t("sell")}</Link></li>
                            <li><Link to={'/service'} className="nav-link">{t("service")}</Link></li>
                            <li><Link to={'/about'} className="nav-link">{t("about")}</Link></li>
                            <li><Link to={'/contact'} className="nav-link">{t("contact")}</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
export default withTranslation()(Navbar3)