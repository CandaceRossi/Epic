import React from 'react';

import CarouselComp from "./CarouselComp";
import Cards from "./Cards";
import Parralax from "./Parralax";


const Home = props => {
 const {isNeeded} = props;
    return (

        <div className="component-list">
            <CarouselComp />
            <Cards />
            <Parralax isNeeded={true} />
        </div>

    )
}
export default Home;