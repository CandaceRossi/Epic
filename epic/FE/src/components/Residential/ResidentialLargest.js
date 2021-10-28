import React, { useEffect } from 'react';
import residentailclean from "../../images/residentailclean.jpg";
import residentailclean2 from "../../images/residentailclean2.jpg";
import exteriorres2 from "../../images/exteriorres2.jpg";
import exteriorres from "../../images/exteriorres.jpg";
// import creamceiling from "../../images/creamceiling.jpg";
import ParallaxLargest from "../Parallax/ParallaxLargest";
import Parallax from "../Parallax/Parallax";
import ParallaxTablet from "../Parallax/ParallaxTablet";
import ParallaxPhone from "../Parallax/ParallaxPhone";
import ParallaxMini from "../Parallax/ParallaxMini";
import Residential from "./Residential";
import ResidentialTablet from "./ResidentialTablet";
import ResidentialPhone from "./ResidentialPhone";
import ResidentialMini from "./ResidentialMini";
import Aos from "aos";
import "aos/dist/aos.css";
import '../../sass/residential.scss';

import LargestBreakpoint from '../responsive_utilities/largest_breakpoint';
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';
import MiniBreakpoint from '../responsive_utilities/mini_breakpoint';



const ResidentialLargest = ({isNeeded}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
        <div className="residentialcont">
        <LargestBreakpoint>
        <div className="residential">

            <div className="overlay"> </div>
            <div className="residential-style">
                <div className="residy" data-aos="zoom-in">
                    <h1>RESIDENTIAL</h1>
                    <h3>Your Home Is Important To Us Too!</h3>
                    <h3>And Our Reputation Was Built On Care and Quality!</h3>

                </div>
                </div>
                </div>

                <div className="brickdownchitown">
                    <div className="imgcontainer">
                        <img src={residentailclean2} alt="" />
                        <img src={residentailclean} alt="" />
                    </div>
                    <div className="brickup" data-aos="fade-up">
                        <div className="brickup1">
                            <h1>Expert Painting Service In Florida</h1>
                            <div className="line"></div>
                        </div>
                        <div className="bruckup" data-aos="fade-up">
                            <h3>All our finishes are top premium grade products with a proven track record of long term beauty and durability.</h3>
                            <h3>With years of experience, we know which suppliers have the best materials for your project.</h3>
                            <div className="contaflex">
                                <div className="flexin" data-aos="fade-right">
                                    <p>Wall, Doors, Windows</p>
                                    <p>Trims, Moldings, Drywall</p>
                                </div>
                                <div className="flexin" data-aos="zoom-in">
                                    <p>Entryway, Stairwell</p>
                                    <p>Bathroom, Kitchen Ceiling Removal</p>
                                </div>
                                <div className="flexin" data-aos="fade-left">
                                    <p>Wallpaper Removal</p>
                                    <p>Cabinet Painting & Refinishing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                </LargestBreakpoint> 
                <DesktopBreakpoint>
                <Residential />
            </DesktopBreakpoint>
                <TabletBreakpoint>
                <ResidentialTablet />
            </TabletBreakpoint>
            <PhoneBreakpoint>
                <ResidentialPhone />
            </PhoneBreakpoint>   
            <MiniBreakpoint>
                <ResidentialMini />
            </MiniBreakpoint>   
            <LargestBreakpoint>
                 <ParallaxLargest featuredImage1={exteriorres} featuredImage2={exteriorres2} homepar={true} isNeeded={false} />
            </LargestBreakpoint> 
            <DesktopBreakpoint>
            <Parallax featuredImage1={exteriorres} featuredImage2={exteriorres2} respar={true} isNeeded={false} />
           </DesktopBreakpoint>
           <TabletBreakpoint>
                 <ParallaxTablet featuredImage1={exteriorres} featuredImage2={exteriorres2} homepar={true} isNeeded={false} />
            </TabletBreakpoint>
            <PhoneBreakpoint>
                 <ParallaxPhone featuredImage1={exteriorres} featuredImage2={exteriorres2} homepar={true} isNeeded={false} />
            </PhoneBreakpoint>
            <MiniBreakpoint>
                 <ParallaxMini featuredImage1={exteriorres} featuredImage2={exteriorres2} homepar={true} isNeeded={false} />
            </MiniBreakpoint>
        </div>
        </>

    )
}
export default ResidentialLargest;