import React, { useEffect } from 'react';
import powerwash12 from "../../images/powerwash12.jpg";
import powerwashtool from "../../images/powerwashtool.jpg";
import powerwash9 from "../../images/powerwash9.jpg";
import ParallaxLargest from "../Parallax/ParallaxLargest";
import Parallax from "../Parallax/Parallax";
import ParallaxTablet from "../Parallax/ParallaxTablet";
import ParallaxPhone from "../Parallax/ParallaxPhone";
import ParallaxMini from "../Parallax/ParallaxMini";
import Powerwashing from "./Powerwashing";
import PowerwashingPhone from "./PowerwashingPhone";
import PowerwashingTablet from "./PowerwashingTablet";
import PowerwashingMini from "./PowerwashingMini";
import Aos from "aos";
import "aos/dist/aos.css";
import '../../sass/powerwashing.scss';

import LargestBreakpoint from '../responsive_utilities/largest_breakpoint';
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';
import MiniBreakpoint from '../responsive_utilities/mini_breakpoint';

const PowerwashingLargest = ({isNeeded}) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    // painting and powerwashing is Apertura Web font
    return (
        <>
        <div className="pressurewashcont">
        <LargestBreakpoint>
        <div className="pressurewash">

            <div className="overlay"> </div>
            <div className="pressurewash-style">
                <div className="pressy" data-aos="zoom-in">
                    <h1>POWERWASHING</h1>
                    <h3>Dirt? Oil? Grime? Mildew?</h3>
                    <h3>One Call Solves It All!</h3>

                </div>
                </div>
                </div>

                <div className="brickdownchitown">
                    <div className="imgcontainer">
                        <img src={powerwash12} alt="" />
                    </div>
                    <div className="brickup" data-aos="fade-up">
                        <div className="brickup1">
                            <h1>Call Us Today For A Free Quote!</h1>
                            <div className="line"></div>
                            </div>
                            <div className="bruckup" data-aos="fade-up">
                                <h3>We Pride Ourselves In Customer Satisfaction. Call Our Office Today!</h3>
                                <h3>One of our specialties is powerwashing! If your surfaces are in need of refreshening - We can make it happen!</h3>
                        <div className="contaflex">
                            <div className="flexin" data-aos="fade-right">
                                <p>Whole Houses, Awnings, Roofs, Patio Cages</p>
                            </div>
                            <div className="flexin" data-aos="fade-left">
                                <p>Pool Decks, Driveways, Pavers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </LargestBreakpoint>
             <DesktopBreakpoint>
                 <Powerwashing />
            </DesktopBreakpoint>
              <TabletBreakpoint>
                <PowerwashingTablet />
            </TabletBreakpoint>
            <PhoneBreakpoint>
                 <PowerwashingPhone />
            </PhoneBreakpoint>
            <MiniBreakpoint>
                 <PowerwashingMini />
            </MiniBreakpoint>
            <LargestBreakpoint>
            <ParallaxLargest featuredImage1={powerwash9} featuredImage2={powerwashtool} powerpar={true} isNeeded={false} />
           </LargestBreakpoint>
            <DesktopBreakpoint>
            <Parallax featuredImage1={powerwash9} featuredImage2={powerwashtool} powerpar={true} isNeeded={false} />
           </DesktopBreakpoint>
           <TabletBreakpoint>
                 <ParallaxTablet featuredImage1={powerwash9} featuredImage2={powerwashtool} homepar={true} isNeeded={false} />
            </TabletBreakpoint>
            <PhoneBreakpoint>
                 <ParallaxPhone featuredImage1={powerwash9} featuredImage2={powerwashtool} homepar={true} isNeeded={false} />
            </PhoneBreakpoint>
            <MiniBreakpoint>
                 <ParallaxMini featuredImage1={powerwash9} featuredImage2={powerwashtool} homepar={true} isNeeded={false} />
            </MiniBreakpoint>
        </div>
        </>
    )
}
export default PowerwashingLargest;