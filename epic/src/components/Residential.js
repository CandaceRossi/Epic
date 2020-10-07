import React, { useEffect } from 'react';
import brick from "../images/brick.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


const Residential = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (

        <div className="contact">
            <div className="contact-style">
                <div className="consty" data-aos="zoom-in">
                    <h1>SCHEDULE A FREE ESTIMATE TODAY!</h1>
                    <h2>We appreciate our customer's business.</h2>
                    <h2>We guarantee great service from professionals you can count on.</h2>
                    <h2>Contact us today to get set up with a specialist who can help.</h2>
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