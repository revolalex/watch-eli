import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Vente extends Component {
  render() {
    return (
      <div>
        <h2>Vente</h2>
        <p>
Montes massa semper mattis himenaeos fames commodo suspendisse curae; arcu eget. Laoreet ultrices convallis nec integer. Congue nec purus quisque sem volutpat fames massa, eleifend proin ultrices dui cursus. Leo varius taciti penatibus sociis suspendisse ut lacus. Laoreet est commodo ultrices aptent elementum, auctor libero. Praesent maecenas metus elit et ligula praesent placerat habitasse pellentesque feugiat gravida id. Tellus nulla integer taciti magna semper aenean viverra. Etiam parturient rutrum eros ipsum ut egestas est vulputate. Ac, tristique metus montes id tellus volutpat leo netus tempor. Est, suscipit orci senectus vulputate lobortis.</p>
      </div>
    );
  }
}

export default withTranslation()(Vente);