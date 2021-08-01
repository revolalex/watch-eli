import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import FormSell from '../components/FormSell'


class Achat extends Component {
  render() {
    return (
      <div>
        <FormSell/>
      </div>
    );
  }
}

export default withTranslation()(Achat);