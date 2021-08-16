import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import JumbotronImage from '../components/Sell/JumbotronImage';
import ContactForm from '../components/Contact/ContactForm';
import SocialMedia from '../components/Contact/SocialMedia';




class Contact extends Component {

    render() {
        return (
            <div>
                <JumbotronImage imgSrc="https://secure-journal.hautehorlogerie.org/wp-content/uploads/2021/04/IWC-Pilots-Watch-Chronograph-41-e.jpg" />
                <ContactForm/>
                <SocialMedia/>
            </div>
        );
    }
}

export default withTranslation()(Contact);