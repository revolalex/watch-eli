import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TextAnimate from '../components/TextAnimate';

class Achat extends Component {
  render() {
    return (
      <div>
        <h2>Achat</h2>
        <TextAnimate textOne="Watchiz" textTwo="Emotion Dealer" />
      </div>
    );
  }
}

export default withTranslation()(Achat);