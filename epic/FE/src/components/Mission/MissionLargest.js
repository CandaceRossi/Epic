import React, { useEffect } from 'react';
import Parallax from "../Parallax/Parallax";
import ParallaxLargest from "../Parallax/ParallaxLargest";
import ParallaxMini from "../Parallax/ParallaxMini";
import ParallaxTablet from "../Parallax/ParallaxTablet";
import ParallaxPhone from "../Parallax/ParallaxPhone";
import Aos from "aos";
import twodoor from "../../images/twodoor.jpg";
import danette from "../../images/danette.jpg";
import painter from "../../images/painter.jpg";
import apainterperson from "../../images/apainterperson.jpg";
import commercialclean2 from "../../images/commercialclean2.jpg";
import dusty2 from "../../images/dusty2.jpg";
import floridafriendly from "../../images/floridafriendly.jpg";
import "aos/dist/aos.css";
import '../../sass/mission.scss';
import Mission from "./Mission";
import MissionTablet from "./MissionTablet";
import MissionPhone from "./MissionPhone";
import MissionMini from "./MissionMini";

import LargestBreakpoint from '../responsive_utilities/largest_breakpoint';
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';
import MiniBreakpoint from '../responsive_utilities/mini_breakpoint';

const MissionLargest = ({isNeeded}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
        <div className="missioncont">
        <LargestBreakpoint>
        <div className="mission">

         <div className="overlay"> </div>
            <div className="mission-style">
                <div className="missy" data-aos="zoom-in">
                    <h1>OUR MISSION</h1>
                    <h3>Our mission is to work with our community to become a helpful and reliable painting company. </h3>
        
                </div>
                </div>
                </div>

                <div className="brickdownchitown">
                    <div className="imgcontainer">
                        <img src={twodoor} alt="" />
                        <img src={commercialclean2} alt="" />
                    </div>

                <div className="brickup" data-aos="fade-up">
                    <div className="brickup1">
                        <h1>Meet Our Team</h1>
                        <div className="line"></div> 
                    </div>
                    <div className="bruckup" data-aos="fade-up">
                        <h3>Our Mission</h3>
                        <h3> We are a family owned business. Our mission is to work with our community to become
                        a helpful and reliable painting company.</h3>
                        </div>
                        </div>
                        <div className="contaflex">
                        <div className="flexin">
                            <div className="flexflexin">
                            <div data-aos="zoom-in">
                                {/* <div className="photoop"> */}
                                <img src={painter} alt="" /> 
                                
                                <p>Andrew Charles</p>
                                <p>Owner & Contractor</p>
                                {/* </div> */}
                            </div>
                            <div data-aos="zoom-in">
                                {/* <div className="photoop"> */}
                                <img src={apainterperson} alt="" /> 
                                <p>Brad Fontaine</p>
                                <p>Paint Contractor</p>
                                {/* </div> */}
                            </div>
                            <div data-aos="zoom-in">
                                {/* <div className="photoop"> */}
                                <img src={danette} alt="" /> 
                                <p>Danette Aaron</p>
                                <p>Office Manager</p>
                                {/* </div> */}
                            </div>
        
                        </div>
                    </div>

                </div>
            </div>
            </LargestBreakpoint>
            <DesktopBreakpoint>
                <Mission />
            </DesktopBreakpoint>
            <TabletBreakpoint>
                <MissionTablet />
            </TabletBreakpoint>
            <PhoneBreakpoint>
                <MissionPhone />
            </PhoneBreakpoint>
            <MiniBreakpoint>
                <MissionMini />
            </MiniBreakpoint>
            <LargestBreakpoint>
            <ParallaxLargest  missContent= {true} featuredImage1={dusty2} featuredImage2={floridafriendly} misspar={true} isNeeded={false} />
           </LargestBreakpoint>
            <DesktopBreakpoint>
            <Parallax  missContent= {true} featuredImage1={dusty2} featuredImage2={floridafriendly} misspar={true} isNeeded={false} />
           </DesktopBreakpoint>
           <TabletBreakpoint>
                 <ParallaxTablet missContent= {true} featuredImage1={dusty2} featuredImage2={floridafriendly} homepar={true} isNeeded={false} />
            </TabletBreakpoint>
            <PhoneBreakpoint>
                 <ParallaxPhone missContent= {true} featuredImage1={dusty2} featuredImage2={floridafriendly} homepar={true} isNeeded={false} />
            </PhoneBreakpoint>  
             <MiniBreakpoint>
                 <ParallaxMini missContent= {true} featuredImage1={dusty2} featuredImage2={floridafriendly} homepar={true} isNeeded={false} />
            </MiniBreakpoint>         
          </div>
          </>
    )
}

export default MissionLargest;