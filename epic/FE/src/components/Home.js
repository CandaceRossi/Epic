import React from 'react';
import bluemanroom from "../images/bluemanroom.jpg";
import beigebasement from "../images/beigebasement.jpg";
import CarouselComp from "./CarouselComp";
import Cards from "./Cards";
import CardsTablet from "./CardsTablet";
import CardsPhone from "./CardsPhone";
import Parallax from "./Parallax";
import ParallaxTablet from "./ParallaxTablet";
import ParallaxPhone from "./ParallaxPhone";
import '../sass/home.scss';


import DesktopBreakpoint from '../components/responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../components/responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../components/responsive_utilities/phone_breakpoint';



const Home = props => {
 const {isNeeded, onNameChange, onPhoneChange, submitEmail, name, phone} = props;
    return (

        <div className="component-list">
            <CarouselComp />
            <DesktopBreakpoint>
             <div className="cardzindexarea"></div>
            <Cards submitEmail={submitEmail} name={name} phone={phone} onNameChange={onNameChange} onPhoneChange={onPhoneChange} />
             <Parallax featuredImage1={bluemanroom} featuredImage2={beigebasement} homepar={true} isNeeded={true} />
            </DesktopBreakpoint>
            <TabletBreakpoint>
             <div className="cardzindexareatablet"></div>
                <CardsTablet />
                 <ParallaxTablet featuredImage1={bluemanroom} featuredImage2={beigebasement} homepar={true} isNeeded={true} />
            </TabletBreakpoint>
            <PhoneBreakpoint>
             <div className="cardzindexareaphone"></div>
                <CardsPhone />
                 <ParallaxPhone featuredImage1={bluemanroom} featuredImage2={beigebasement} homepar={true} isNeeded={true} />
            </PhoneBreakpoint>
        </div>

    )
}
export default Home;