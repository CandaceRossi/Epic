import React from "react";
import paintcarousel5 from "../images/paintcarousel5.jpg";
import blurpainter from "../images/blurpainter.jpg";
import bluemanroom from "../images/bluemanroom.jpg";
import accentwall from "../images/accentwall.jpg";
import { Container, Carousel } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';

const CarouselComp = () => {
    return (

        <Container>
            <Carousel className="carousel-fade">
                <Carousel.Item className="item active">

                    <img src={paintcarousel5} alt="first slide" />
                    <Carousel.Caption>
                        <div className="animation-one">
                            <p>Commercial Siding and Painting</p>
                        </div>
                        <div className="two-animation">
                            <p>We've Got the Team!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="item">
                    <img src={accentwall} alt="second slide" />
                    <Carousel.Caption>
                        <div className="animation-one">
                            <p>Residential Siding and Painting</p>
                        </div>
                        <div className="two-animation">
                            <p>We've Get the Job Done Right!</p>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="item">
                    <img src={blurpainter} alt="third slide" />
                    <Carousel.Caption>
                        <div className="animation-one">
                            <p>Skill and Detail</p>
                        </div>
                        <div className="two-animation">
                            <p>We Make It Happen!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>


    );
};

export default CarouselComp;


// <div id="carouselExampleIndicators" className="carousel slide carousel-fade"data-interval="4000">
//     <ol className="carousel-indicators">
//         <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//     </ol>
//     <div className="carousel-inner">
//         <div className="active carousel-item">
//             <img src={paintcarousel5} alt="first slide" />

//             <div className="animation-one">
//                 <p>Commercial Siding and Painting</p>
//             </div>
//             <div className="two-animation">
//                 <p>We've Got the Team!</p>
//             </div>
//         </div>

//         <div className="carousel-item">
//             <img src={accentwall} alt="second slide" />
//             <div className="animation-one">
//                 <p>Residential Siding and Painting</p>
//             </div>
//             <div className="two-animation">
//                 <p>We've Get the Job Done Right!</p>
//             </div>
//         </div>
//         <div className="carousel-item">
//             <img src={blurpainter} alt="third slide" />
//             <div className="animation-one">
//                 <p>Skill and Detail</p>
//             </div>
//             <div className="two-animation">
//                 <p>We Make It Happen!</p>
//             </div>
//         </div>
//     </div>
//     {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Previous</span>
//             </a>
//             <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Next</span>
//             </a> */}
// </div>
