import React, { useEffect } from 'react';
import commercialslick from "../../images/commercialslick.jpg";
import Parallax from "../Parallax/Parallax";
import ParallaxTablet from "../Parallax/ParallaxTablet";
import ParallaxPhone from "../Parallax/ParallaxPhone";
import ParallaxMini from "../Parallax/ParallaxMini";
import commercialclean from "../../images/commercialclean.jpg";
import commercialshed from "../../images/commercialshed.jpg";
import Commercial from "./Commercial";
import CommercialTablet from "./CommercialTablet";
import CommercialPhone from "./CommercialPhone";
import CommercialMini from "./CommercialMini";
import Aos from "aos";
import "aos/dist/aos.css";
import '../../sass/commercial.scss';

import LargestBreakpoint from '../responsive_utilities/largest_breakpoint';
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';
import MiniBreakpoint from '../responsive_utilities/mini_breakpoint';

const CommercialLarge = ({isNeeded}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
<div className="commercialcont">
<LargestBreakpoint>
        <div className="commercial">

            <div className="overlay"> </div>
            <div className="commercial-style">
                <div className="commey" data-aos="zoom-in">
                    <h1>COMMERCIAL</h1>
                    <h3>LET'S GET YOUR OFFICE A FRESH LOOK!</h3>
                    <h3>WE ENSURE CLEANLINESS & SUPERIOR PROJECT SATISFACTION!</h3>

                </div>
                </div>
                </div>

                <div className="brickdownchitown">
                    <div className="imgcontainer">
                        <img src={commercialslick} alt="" />
                    </div>
                    <div className="brickup" data-aos="fade-up">
                        <div className="brickup1">
                            <h1>Commercial Painting Services</h1>
                            <div className="line"></div>
                        </div>
                        <div className="bruckup" data-aos="fade-up">
                            <h3>We work to ensure proper scheduling and minimum disruption for you and your tenants</h3>
                            <h3>We use low-odor paints for all interior projects so tenants can enjoy their newly painted offices without smelly paint fumes.</h3>
                            <div className="contaflex">
                                <div className="flexin" data-aos="fade-right">
                                    <p>Drywall, Plaster
                                    Doors, Moldings Sheetrock, Baseboard</p>
                                </div>
                                <div className="flexin" data-aos="fade-left">
                                    <p>Perimeter Fences & Walls <br /> Wood and Stucco Repair</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </LargestBreakpoint>
            <DesktopBreakpoint>
                <Commercial />
            </DesktopBreakpoint>
            <TabletBreakpoint>
                <CommercialTablet />
            </TabletBreakpoint>
            <PhoneBreakpoint>
                 <CommercialPhone />
            </PhoneBreakpoint>
            <MiniBreakpoint>
                 <CommercialMini />
            </MiniBreakpoint>
            <LargestBreakpoint>
            <Parallax featuredImage1={commercialshed} featuredImage2={commercialclean} commpar={true} isNeeded={false} />
           </LargestBreakpoint>
            <DesktopBreakpoint>
            <Parallax featuredImage1={commercialshed} featuredImage2={commercialclean} commpar={true} isNeeded={false} />
           </DesktopBreakpoint>
           <TabletBreakpoint>
                 <ParallaxTablet featuredImage1={commercialshed} featuredImage2={commercialclean} homepar={true} isNeeded={false} />
            </TabletBreakpoint>
            <PhoneBreakpoint>
                 <ParallaxPhone featuredImage1={commercialshed} featuredImage2={commercialclean} homepar={true} isNeeded={false} />
            </PhoneBreakpoint>
            <MiniBreakpoint>
                 <ParallaxMini featuredImage1={commercialshed} featuredImage2={commercialclean} homepar={true} isNeeded={false} />
            </MiniBreakpoint>
        </div>
        </>
    )
}
export default CommercialLarge;