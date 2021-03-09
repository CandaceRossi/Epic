import React from 'react';
import bluemanroom from "../images/bluemanroom.jpg";
import beigebasement from "../images/beigebasement.jpg";
import CarouselComp from "./CarouselComp";
import Cards from "./Cards";
import CardsTablet from "./CardsTablet";
import CardsPhone from "./CardsPhone";
import Parallax from "./Parallax";
import '../sass/home.scss';


import DesktopBreakpoint from '../components/responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../components/responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../components/responsive_utilities/phone_breakpoint';



const Home = props => {
 const isNeeded = props;
    return (

        <div className="component-list">
            <CarouselComp />
            <div className="cardzindexarea"></div>
            <DesktopBreakpoint>
            <Cards />
            </DesktopBreakpoint>
            <TabletBreakpoint>
                <CardsTablet />
            </TabletBreakpoint>
            <PhoneBreakpoint>
                <CardsPhone />
            </PhoneBreakpoint>
            <Parallax featuredImage1={bluemanroom} featuredImage2={beigebasement} homepar={true} isNeeded={true} />
        </div>

    )
}
export default Home;