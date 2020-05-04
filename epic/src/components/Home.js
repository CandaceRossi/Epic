import React from 'react';

import CarouselComp from "./CarouselComp";
import Rev from "./Rev";
import Cards from "./Cards";
import TestimonialCards from "./TestimonialCards";
import Parralax from "./Parralax";


const Home = () => {
   
    return (

        <div className="component-list">
            <div className="comp-list-carousel">
                <CarouselComp />
            </div>
            <Rev />
            <TestimonialCards />
            <Cards />
            <Parralax />
    </div>

    )
    }
    export default Home;