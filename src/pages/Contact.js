import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import JumbotronImage from '../components/Sell/JumbotronImage';
import ContactForm from '../components/Contact/ContactForm';
import SocialMedia from '../components/Contact/SocialMedia';




class Contact extends Component {

    render() {
        return (
            <div>
                <JumbotronImage imgSrc="https://hodinkee.imgix.net/uploads/images/bcd1cea4-58d3-4412-9800-8d4b1cfa269a/Audemars-piguet-royal-oak-offshore-diver-4.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&ch=Width%2CDPR%2CSave-Data&fit=crop&w=1200" />
                <ContactForm/>
                <SocialMedia/>
            </div>
        );
    }
}

export default withTranslation()(Contact);