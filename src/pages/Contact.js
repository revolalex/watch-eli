import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';



class Contact extends Component {
    
    render() {
        return (
            <div>
                <h1>Contact</h1>
            </div>
        );
    }
}

export default  withTranslation()(Contact);