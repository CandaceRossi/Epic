import React from 'react';

import CarouselComp from "./CarouselComp";
//eslint-disable-next-line 
// import Rev from "./Rev";
import Cards from "./Cards";
//eslint-disable-next-line 
// import Services from "./Services";
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