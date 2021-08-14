import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Alex from '../components/alex';
import JumbotronImage from '../components/Sell/JumbotronImage';



class Contact extends Component {

    render() {
        return (
            <div>
                <JumbotronImage imgSrc="https://secure-journal.hautehorlogerie.org/wp-content/uploads/2021/04/IWC-Pilots-Watch-Chronograph-41-e.jpg" />
                <br />
                <Alex />
            </div>
        );
    }
}

export default withTranslation()(Contact);