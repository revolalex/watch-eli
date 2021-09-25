import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import BlogTitre from '../components/Blog/BlogTitre';
import CardHorizontal from '../components/Blog/CardHorizontal';
import SocialMedia from '../components/Contact/SocialMedia';
import BrandContainer2 from '../components/Global/BrandContainer2';
import Parralax from '../components/Home/Parralax';
import JumbotronImage from '../components/Sell/JumbotronImage';
import { arrayOfImages } from '../utils/WatchImgUrl';

class Blog extends Component {
  render() {
    var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
    const imgUrl = randomItem
    return (
      <div>
        <JumbotronImage imgSrc="https://www.time4diamonds.com/wp/wp-content/uploads/2020/10/5.jpg" />
        <BlogTitre/>
        <CardHorizontal/>
        <SocialMedia/>
        <Parralax imgUrl={imgUrl}/>
        <BrandContainer2 />
      </div>
    );
  }
}

export default withTranslation()(Blog);