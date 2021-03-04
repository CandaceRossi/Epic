import React from 'react';
import bluemanroom from "../images/bluemanroom.jpg";
import beigebasement from "../images/beigebasement.jpg";
import CarouselComp from "./CarouselComp";
import Cards from "./Cards";
import Parallax from "./Parallax";
import '../sass/home.scss';


const Home = props => {
 const isNeeded = props;
    return (

        <div className="component-list">
            <CarouselComp />
            <div className="cardzindexarea"></div>
            <Cards />
            <Parallax featuredImage1={bluemanroom} featuredImage2={beigebasement} homepar={true} isNeeded={true} />
        </div>

    )
}
export default Home;