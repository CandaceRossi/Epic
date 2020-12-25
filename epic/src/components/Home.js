import React from 'react';
import bluemanroom from "../images/bluemanroom.jpg";
import beigebasement from "../images/beigebasement.jpg";
import CarouselComp from "./CarouselComp";
import Cards from "./Cards";
import Parralax from "./Parralax";


const Home = props => {
 const isNeeded = props;
    return (

        <div className="component-list">
            <CarouselComp />
            <Cards />
            <Parralax featuredImage1={bluemanroom} featuredImage2={beigebasement} isNeeded={true} />
        </div>

    )
}
export default Home;