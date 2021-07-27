import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Service extends Component {
  render() {
    return (
      <div>
        <h2>Service</h2>
      </div>
    );
  }
}

export default withTranslation()(Service);