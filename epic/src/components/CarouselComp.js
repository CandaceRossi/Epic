import React from "react";
import painting from "../images/painting.jpg";
import paintingpainters from "../images/paintingpainters.jpg";
import greenexterior from "../images/greenexterior.jpg";
import 'bootstrap/dist/css/bootstrap.css';

const CarouselComp = () => {
    return (

        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={painting} alt="first slide" />

                    <div className="animation-one">
                        <p>Commercial Siding and Painting</p>
                    </div>
                    <div className="two-animation">
                        <p>We've Got the Team!</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={paintingpainters} alt="second slide" />
                    <div className="animation-one">
                        <p>Residential Siding and Painting</p>
                    </div>
                    <div className="two-animation">
                        <p>We've Get the Job Done Right!</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={greenexterior} alt="third slide" />
                    <div className="animation-one">
                        <p>Skill and Detail</p>
                    </div>
                    <div className="two-animation">
                        <p>We Make It Happen!</p>
                    </div>
                </div>
            </div>
            {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a> */}
        </div>

    );
};

export default CarouselComp;
