import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./css/CarouselHero.css"

import GoogleAvis from './GoogleAvis';
import AchatSlide from '../img/carousel/achat-slide.jpeg'
import SubmarinerImg from '../img/submariner.jpg'
import Echange from '../img/carousel/echange.jpeg'
import Collection from '../img/carousel/collection.jpg'
import VenteSlide from '../img/carousel/vente-slide.jpeg'


// import BachelorImg from '../img/bachelor.jpg'
// import EchangeSlide from '../img/carousel/echange-slide.jpeg'
// import ReversoImg from '../img/reversoVerte.jpg'
// import NavitimerImg from '../img/navitimer.jpg'
// import Milgauss from '../img/carousel/milgauss.jpeg'
// import EchangeSlide from '../img/carousel/echange-slide.jpeg'


class CarouselHero extends Component {
    render() {
        return (
            <div className="carousel-div">
                <Carousel className="carousel-hero" variant="dark">
                    {/* intro */}
                    <Carousel.Item>
                        <img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={Collection}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4 className="goldText">Watches Paris, le specialiste CPO</h4>
                            <h5 className="goldText">Obtenez le meilleur prix pour votre montre.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Achat */}
                    <Carousel.Item>
                        <img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={AchatSlide}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4 className="goldText">Nos modéles</h4>
                            <h5 className="goldText">Trouvez la montre de vos rêves</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* vente */}
                    <Carousel.Item>
                        <img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={VenteSlide}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h4 className="goldText">Nous rachetons votre montre</h4>
                            <h5 className="goldText">Obtenez le meilleur prix pour votre montre.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Echange */}
                    <Carousel.Item>
                        <img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={Echange}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h4 className="goldText">Echangez votre montre</h4>
                            <h5 className="goldText">Vous ne la porter plus, echangez la!</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Service */}
                    <Carousel.Item>
                        <img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={SubmarinerImg}
                            alt="Fourth slide"
                        />
                        <Carousel.Caption>
                            <h4 className="goldText">Services</h4>
                            <h5 className="goldText">Nous travaillons avec les plus grandes manufactures.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <GoogleAvis/>
            </div>

        )
    }
}
export default CarouselHero