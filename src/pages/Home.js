import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CardLine from '../components/CardLine'
import CarouselHero from '../components/CarouselHero'
import "./Home.css"
import { Parallax } from 'react-parallax';


class Home extends Component {
  Container = () => (
    <Parallax blur={10} bgImage="../img/rolex-para.jpg" bgImageAlt="the cat" strength={200}>
    </Parallax>
);
  render() {
    return (
      <div>
        <CarouselHero/>
        <CardLine/>
        {/* <div class="parallax"></div> */}
        {this.Container()}
      </div>
    );
  }
}

export default withTranslation()(Home);

