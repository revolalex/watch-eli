import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';





class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}

export default withTranslation()(About);