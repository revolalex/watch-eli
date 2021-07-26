import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Counter from "../components/Counter"

class Contact extends Component {
    
    render() {
        return (
            <div>
                <h2>Contact</h2>
                <p>{this.props.t("welcome")}</p>
                <Counter to= "2555"/>
            </div>
        );
    }
}

export default  withTranslation()(Contact);