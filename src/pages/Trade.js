import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import JumbotronImage from '../components/Sell/JumbotronImage';
import TradeCard from '../components/Trade/TradeCard';



class Trade extends Component {
    state = {}
    render() {
        return (
            <div>
                <JumbotronImage imgSrc=" https://i.ytimg.com/vi/NoRstEITESg/maxresdefault.jpg" />
                <TradeCard/>
            </div>
        );
    }
}

export default withTranslation()(Trade);