import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import BlogTitre from '../components/Blog/BlogTitre';
import CardHorizontal from '../components/Blog/CardHorizontal';
import SocialMedia from '../components/Contact/SocialMedia';
import JumbotronImage from '../components/Sell/JumbotronImage';

class Blog extends Component {
  render() {
    return (
      <div>
        <JumbotronImage imgSrc="https://www.time4diamonds.com/wp/wp-content/uploads/2020/10/5.jpg" />
        <BlogTitre/>
        <CardHorizontal/>
        <SocialMedia/>
      </div>
    );
  }
}

export default withTranslation()(Blog);