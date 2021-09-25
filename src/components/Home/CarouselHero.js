import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "../css/CarouselHero.css"
import { withTranslation } from 'react-i18next';
import slide2 from '../../img/slide/slide2.jpeg'
import slide3 from '../../img/slide/slide3.jpeg'
import slide5 from '../../img/slide/service1.jpeg'
import trade from '../../img/slide/trade.jpeg'

import GoogleAvis from './GoogleAvis';
// import AchatSlide from '../../img/carousel/achat-slide.jpeg'
// import SubmarinerImg from '../../img/submariner.jpg'
// import Echange from '../../img/carousel/echange.jpeg'
// import VenteSlide from '../../img/carousel/venteslide.jpeg'
import Collection from '../../img/carousel/collection.jpg'





class CarouselHero extends Component {
    render() {
        const t = this.props.t
        return (
            <div className="carousel-div">
                <Carousel className="carousel-hero" variant="dark">
                    {/* intro */}
                    <Carousel.Item>
                        <a href="/sell-your-watch"><img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={Collection}
                            alt="First slide"
                        /></a>
                        <Carousel.Caption>
                            <h4 className="goldText">{t('caroussel-slide1-Title')}</h4>
                            {/* <h5 className="goldText">{t('caroussel-slide1-Texte')}</h5> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Achat */}
                    <Carousel.Item>
                        <a href="/buy"><img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={slide2}
                            alt="First slide"
                        /></a>
                        <Carousel.Caption>
                            <h4 className="goldText">{t('caroussel-slide2-Title')}</h4>
                            {/* <h5 className="goldText">{t('caroussel-slide2-Texte')}</h5> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* vente */}
                    <Carousel.Item>
                        <a href="/sell"><img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={slide3}
                            alt="Second slide"
                        /></a>
                        <Carousel.Caption>
                            <h4 className="goldText">{t('caroussel-slide3-Title')}</h4>
                            {/* <h5 className="goldText">{t('caroussel-slide3-Texte')}</h5> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Echange */}
                    <Carousel.Item>
                        <a href="/sell"><img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={trade}
                            alt="Second slide"
                        /></a>
                        <Carousel.Caption>
                            <h4 className="goldText">{t('caroussel-slide3-Title')}</h4>
                            {/* <h5 className="goldText">{t('caroussel-slide3-Texte')}</h5> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                    {/* Service */}
                    <Carousel.Item>
                        <a href="service"><img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={slide5}
                            alt="Fourth slide"
                        /></a>
                        <Carousel.Caption>
                            <h4 className="goldText">{t('caroussel-slide5-Title')}</h4>
                            {/* <h5 className="goldText">{t('caroussel-slide5-Texte')}</h5> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <GoogleAvis/>
            </div>

        )
    }
}
export default withTranslation()(CarouselHero)