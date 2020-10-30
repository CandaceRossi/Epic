import React, { useEffect } from 'react';
import brick from "../images/brick.jpg";
import residentailclean from "../images/residentailclean.jpg";
import residentailclean2 from "../images/residentailclean2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


const Commercial = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (

        <div className="commercial">
            <div class="overlay"> </div>
            <div className="commercial-style">
                <div className="commey" data-aos="zoom-in">
                    <h1>COMMERCIAL</h1>
                    <h3>Your Home Is Important To Us Too!</h3>
                    <h3>And Our Reputation Was Built On Care and Quality!</h3>
                </div>
                <div className="brickdownchitown">
                    <div className="imgcontainer">
                        <img src={residentailclean2} alt="" />
                        <img src={residentailclean} alt="" />
                    </div>
                    <div className="brickup" data-aos="fade-up">
                        <div className="brickup1">
                            <h1>The Business Image You Are Looking For</h1>
                            <div className="line"></div>
                        </div>
                        <div className="bruckup" data-aos="fade-up">
                            <h3>Our team has been servicing the South West Florida area for nearly 10 years!</h3>
                            <h3>We look forward to providing you with excellent service.</h3>
                            <div className="contaflex">
                                <div className="flexin" data-aos="fade-right">
                                    <p>EMAIL:</p>
                                    <a>ANDREWCHARLES@EPIC.COM</a>
                                </div>
                                <div data-aos="zoom-in">
                                    <p>PHONE:</p>
                                    <a>(239)826-4326</a>
                                </div>
                                <div data-aos="fade-left">
                                    <p>HOURS OF OPERATION:</p>
                                    <a>8AM - 6PM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Commercial;