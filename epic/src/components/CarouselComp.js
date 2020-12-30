import React from "react";
import paintcarousel5 from "../images/paintcarousel5.jpg";
import blurpainter from "../images/blurpainter.jpg";
import accentwall from "../images/accentwall.jpg";
import { Container, Carousel } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';

const CarouselComp = () => {
    return (
      
<>
            <Carousel className="carousel-fade" data-ride="carousel">
                <Carousel.Item className="carousel-item active">
                    {/* <div className="slidescss" style={{ backgroundImage: "url({paintcarousel5})", repeat: "no-repeat", position: "fixed", float: "center" }}>
                        <div className="mask rgba-black-light"></div>
                    </div> */}
                    <img className="slidescss" style={{ backgroundImage: "url({paintcarousel5})", repeat: "no-repeat", position: "fixed", float: "center" }} src={paintcarousel5} alt="first slide" />
                    <Carousel.Caption className="carousel-caption">
                        <h3 className="h3-responsive">Light mask</h3>
                        <p>First text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">

                    {/* <div className="slidescss" style={{ backgroundImage: "url({paintcarousel5})", repeat: "no-repeat", position: "fixed", float: "center" }}>
                        <div className="mask rgba-black-light"></div>
                    </div> */}
                    <img className="slidescss" style={{ backgroundImage: "url({paintcarousel5})", repeat: "no-repeat", position: "fixed", float: "center" }} src={accentwall} alt="second slide" />
                    <Carousel.Caption className="carousel-caption">
                        <h3 className="h3-responsive">Strong mask</h3>
                        <p>Secondary text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">

                    {/* <div className="slidescss" style={{ backgroundImage: "url({accentwall})", repeat: "no-repeat", position: "fixed", float: "center" }} >
                        <div className="mask rgba-black-light"></div>
                    </div> */}
                    <img className="slidescss" style={{ backgroundImage: "url({paintcarousel5})", repeat: "no-repeat", position: "fixed", float: "center" }} src={blurpainter} alt="third slide" />
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
