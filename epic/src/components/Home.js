import React from 'react';

import CarouselComp from "./CarouselComp";
// import Rev from "./Rev";
import Cards from "./Cards";
import Services from "./Services";
import Parralax from "./Parralax";


const Home = () => {

    return (

        <div className="component-list">
            <CarouselComp />
            <Cards />
            <Parralax />
        </div>

    )
}
export default Home;