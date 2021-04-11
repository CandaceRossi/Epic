import React from "react";
import paintcarousel5 from "../images/paintcarousel5.jpg";
import blurpainter from "../images/blurpainter.jpg";
import accentwall from "../images/accentwall.jpg";
import { Container, Carousel } from "react-bootstrap";
import '../sass/carousel.scss';



const CarouselComp = () => {
    return (
      
<>
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100 slidescss"  src={paintcarousel5} alt="first slide" />
                    <Carousel.Caption className="carousel-caption">
                        <h3 className="h3-responsive">Light mask</h3>
                        <p>First text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 slidescss" src={accentwall} alt="second slide" />
                    <Carousel.Caption className="carousel-caption">
                        <h3 className="h3-responsive">Strong mask</h3>
                        <p>Secondary text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 slidescss"  src={blurpainter} alt="third slide" />
                    <Carousel.Caption className="carousel-caption">
                        <h3 className="h3-responsive">Slight mask</h3>
                        <p>Third text</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

</>
      
    );
};

export default CarouselComp;

//className="carousel-fade" data-ride="carousel"