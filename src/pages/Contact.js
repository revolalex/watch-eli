import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Alex from '../components/alex';



class Contact extends Component {
    
    render() {
        return (
            <div>
                <Alex/>
            </div>
        );
    }
}

export default  withTranslation()(Contact);