import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./css/CarouselHero.css"

import SubmarinerImg from '../img/submariner.jpg'
import BachelorImg from '../img/bachelor.jpg'
import PatekImg from '../img/patek.jpg'
import ApImg from '../img/ap.jpg'
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
                            <h5>First slide label</h5>
                            <p>Watchiz la passion horlogère</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={ApImg}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Vous ne la porter plus, vendez la</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={PatekImg}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Achat</h5>
                            <p>Watchiz le spécialiste CPO</p>
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
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <GoogleAvis/>
            </div>

        )
    }
}
export default CarouselHero