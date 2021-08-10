import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./css/CarouselHero.css"

import SubmarinerImg from '../img/submariner.jpg'
import NavitimerImg from '../img/navitimer.jpg'
import BachelorImg from '../img/bachelor.jpg'
// import PatekImg from '../img/patek.jpg'
// import ApImg from '../img/ap.jpg'
import ReversoImg from '../img/reversoVerte.jpg'
import GoogleAvis from './GoogleAvis';


class CarouselHero extends Component {
    render() {
        return (
            <div className="carousel-div">
                <Carousel className="carousel-hero" variant="dark">
                    <Carousel.Item>
                        <img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={BachelorImg}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4 className="goldText">une équipe professionnelle</h4>
                            <h5 className="goldText">Watchiz la passion horlogère.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={ReversoImg}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h4 className="goldText">Watchiz le spécialiste CPO</h4>
                            <h5 className="goldText">Trouver le modèle de vos rêves.</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={NavitimerImg}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h4 className="goldText">Echangez votre montre</h4>
                            <h5 className="goldText">Vous ne la porter plus, echangez la!</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
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