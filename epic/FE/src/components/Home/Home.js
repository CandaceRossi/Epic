import React from 'react';
import bluemanroom from "../../images/bluemanroom.jpg";
import beigebasement from "../../images/beigebasement.jpg";
import CarouselComp from "../Carousel/CarouselComp";
import Cards from "../Cards/Cards";
import CardsLargest from "../Cards/CardsLargest";
import CardsTablet from "../Cards/CardsTablet";
import CardsPhone from "../Cards/CardsPhone";
import CardsMini from "../Cards/CardsMini";
import ParallaxLargest from "../Parallax/ParallaxLargest";
import Parallax from "../Parallax/Parallax";
import ParallaxTablet from "../Parallax/ParallaxTablet";
import ParallaxPhone from "../Parallax/ParallaxPhone";
import ParallaxMini from "../Parallax/ParallaxMini";
import '../../sass/home.scss';

import LargestBreakpoint from '../responsive_utilities/largest_breakpoint';
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';
import MiniBreakpoint from '../responsive_utilities/mini_breakpoint';


const Home = ({isNeeded}) => {


    return (

        <div className="component-list">
            <CarouselComp />
            <LargestBreakpoint>
                <div className="cardzindexarea"></div>
            <CardsLargest />
             <ParallaxLargest isNeeded={true} homeContent={true} featuredImage1={bluemanroom} featuredImage2={beigebasement} homepar={true}  />
            </LargestBreakpoint>
            <DesktopBreakpoint>
             <div className="cardzindexareadesktop"></div>
            <Cards />
             <Parallax isNeeded={true} homeContent={true} featuredImage1={bluemanroom} featuredImage2={beigebasement} homepar={true}  />
            </DesktopBreakpoint>
            <TabletBreakpoint>
             <div className="cardzindexareatablet"></div>
                <CardsTablet />
                 <ParallaxTablet isNeeded={true} homeContent={true} featuredImage1={bluemanroom} featuredImage2={beigebasement} homepar={true} />
            </TabletBreakpoint>
            <PhoneBreakpoint>
             <div className="cardzindexareaphone"></div>
                <CardsPhone />
                 <ParallaxPhone isNeeded={true} homeContent={true} featuredImage1={bluemanroom} featuredImage2={beigebasement} homepar={true} />
            </PhoneBreakpoint>
            <MiniBreakpoint>
             <div className="cardzindexareamini"></div>
                <CardsMini />
                 <ParallaxMini isNeeded={true} homeContent={true} featuredImage1={bluemanroom} featuredImage2={beigebasement} homepar={true} />
            </MiniBreakpoint>
        </div>
    )
}
export default Home;