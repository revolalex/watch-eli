import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import BuyComponent from '../components/BuyComponent';

class Buy extends Component {
  render() {
    return (
      <div>
        <BuyComponent/>
      </div>
    );
  }
}

export default withTranslation()(Buy);