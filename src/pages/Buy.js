import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Achat extends Component {
  render() {
    return (
      <div>
        <h2>Achat</h2>
      </div>
    );
  }
}

export default withTranslation()(Achat);