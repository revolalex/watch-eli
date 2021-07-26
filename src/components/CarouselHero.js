import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./CarouselHero.css"
// import ServiceImg from '../img/service.jpg'
// import HorlogerImg from '../img/horloger.jpg'
// import WatchmakerImg from '../img/watchmaker.jpg'
// import AchatImg from '../img/achat.jpg'
import SubmarinerImg from '../img/submariner.jpg'
import BachelorImg from '../img/bachelor.jpg'
import PatekImg from '../img/patek.jpg'
import ApImg from '../img/ap.jpg'


class CarouselHero extends Component {
    render() {
        return (
            <div>
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
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
            </div>

        )
    }
}
export default CarouselHero