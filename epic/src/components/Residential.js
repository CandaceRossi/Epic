import React, { useEffect } from 'react';
import brick from "../images/brick.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


const Residential = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (

        <div className="residential">
            <div className="residential-style">
                <div className="residy" data-aos="zoom-in">
                    <h1>RESIDENTIAL PROJECTS</h1>
                    <h2>Your Home Is Important To Us Too!</h2>
                    <h3>Our Reputation Was Built On Care and Quality!</h3>
                    <h3>Adding A New Coat Of Paint On the Interior or Exterior </h3>
                    <h3>Of Your Home Can Do Wonders For Your Home Value </h3>
                    <h3>And Add New Character, Mood Setting, or Brightness.</h3>
                </div>
                <div className="brickup" data-aos="fade-up">
                    <div className="brickup1">
                        <h1>Contact Us!</h1>
                        <div className="line"></div>
                    </div>
                    <div className="bruckup" data-aos="fade-up">
                        <h3>Our team has been servicing the South West Florida area for nearly 10 years!</h3>
                        <h3>We look forward to providing you with excellent service.</h3>
                        <div className="contaflex">
                            <div data-aos="fade-right">
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

    )
}
export default Residential;