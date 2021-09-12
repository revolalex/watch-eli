import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CardHorizontal from '../components/Blog/CardHorizontal';
import JumbotronImage from '../components/Sell/JumbotronImage';

class Blog extends Component {
  render() {
    return (
      <div>
        <JumbotronImage imgSrc="https://www.time4diamonds.com/wp/wp-content/uploads/2020/10/5.jpg" />
        <h2>Blog</h2>
        <CardHorizontal/>
      </div>
    );
  }
}

export default withTranslation()(Blog);