import React, { useEffect } from 'react';
import Parallax from "./Parallax";
import Aos from "aos";
import twodoor from "../images/twodoor.jpg";
import commercialclean2 from "../images/commercialclean2.jpg";
import "aos/dist/aos.css";

const Mission = ({isNeeded}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
        <div className="missioncont">

        <div className="mission">

         <div class="overlay"> </div>
            <div className="mission-style">
                <div className="missy" data-aos="zoom-in">
                    <h1>OUR MISSION</h1>
                    <h2>Our mission is to become the only painting company you will ever want
                    and need. </h2>
                    <h2>We will provide exceptional customer service from start to finish </h2>
                    <h2>and I will personally come out and give you an estimate for your home painting project.</h2>
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
                                <div className="photoop"></div>
                                <p>EMAIL:</p>
                            </div>
                            <div data-aos="zoom-in">
                                <div className="photoop"></div>
                                <p>EMAIL:</p>
                            </div>
                            <div data-aos="zoom-in">
                                <div className="photoop"></div>
                                <p>EMAIL:</p>
                            </div>
                            <div data-aos="zoom-in">
                                <div className="photoop"></div>
                                <p>EMAIL:</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
          
        
          <Parallax isNeeded = {false} />
          </div>
          </>
    )
}

export default Mission;