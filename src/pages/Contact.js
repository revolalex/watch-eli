import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import JumbotronImage from '../components/Sell/JumbotronImage';
import ContactForm from '../components/Contact/ContactForm';
import SocialMedia from '../components/Contact/SocialMedia';
import SocialMediaSmallScreen from '../components/Contact/SocialMediaSmallScreen';



class Contact extends Component {

    render() {
        return (
            <div>
                <JumbotronImage imgSrc="https://secure-journal.hautehorlogerie.org/wp-content/uploads/2021/04/IWC-Pilots-Watch-Chronograph-41-e.jpg" />
                <ContactForm/>
                <SocialMedia/>
                <SocialMediaSmallScreen/>
                <br />
               

            </div>
        );
    }
}

export default withTranslation()(Contact);