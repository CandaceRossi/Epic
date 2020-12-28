import React from "react";
import paintcarousel5 from "../images/paintcarousel5.jpg";
import blurpainter from "../images/blurpainter.jpg";
import accentwall from "../images/accentwall.jpg";
import { Container, Carousel } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';

const CarouselComp = () => {
    return (
        <Container>

            <ol className="carousel-indicators">
                <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-2" data-slide-to="1"></li>
                <li data-target="#carousel-example-2" data-slide-to="2"></li>
            </ol>


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

            <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>

        </Container>
    );
};

export default CarouselComp;
