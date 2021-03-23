import React, { useEffect } from 'react';
import Parallax from "./Parallax";
import ParallaxTablet from "./ParallaxTablet";
import ParallaxPhone from "./ParallaxPhone";
import Aos from "aos";
import twodoor from "../images/twodoor.jpg";
import danette from "../images/danette.jpg";
import painter from "../images/painter.jpg";
import dusty2 from "../images/dusty2.jpg";
import floridafriendly from "../images/floridafriendly.jpg";
import apainterperson from "../images/apainterperson.jpg";
import commercialclean2 from "../images/commercialclean2.jpg";
import "aos/dist/aos.css";
import '../sass/mission.scss';

import DesktopBreakpoint from '../components/responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../components/responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../components/responsive_utilities/phone_breakpoint';


const Mission = ({isNeeded}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
        <div className="missioncont">

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
            <DesktopBreakpoint>
            <Parallax featuredImage1={dusty2} featuredImage2={floridafriendly} misspar={true} isNeeded={false} />
           </DesktopBreakpoint>
           <TabletBreakpoint>
                 <ParallaxTablet featuredImage1={dusty2} featuredImage2={floridafriendly} homepar={true} isNeeded={false} />
            </TabletBreakpoint>
            <PhoneBreakpoint>
                 <ParallaxPhone featuredImage1={dusty2} featuredImage2={floridafriendly} homepar={true} isNeeded={false} />
            </PhoneBreakpoint>          
          </div>
          </>
    )
}

export default Mission;