import React, { useEffect, useRef, useState } from 'react';
// import brick from "../images/brick.jpg";
// import commercialclean from "../images/commercialclean.jpg";
import contactimg from "../images/contactimg.jpg";
import paintcarousel2 from "../images/paintcarousel2.jpg";
import bluemanroom from "../images/bluemanroom.jpg";
import googlemap from "../images/googlemap.PNG";
import Aos from "aos";
import "aos/dist/aos.css";


const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const handleScroll = e => {
        e.target = null
    }

    const foo = false;

    if (foo)
        return (<div> <h4>Loading...</h4></div>)
    return (
        <div className="contactcont">
            <div className="contact">

                <div class="overlay"> </div>
                <div className="contact-style">
                    <div className="consty" data-aos="zoom-in">
                        <h1>SCHEDULE A FREE ESTIMATE TODAY!</h1>
                        <h2>We appreciate our customer's business.</h2>
                        <h2>We guarantee great service from professionals you can count on.</h2>
                        <h2>Contact us today to get set up with a specialist who can help.</h2>
                    </div>
                </div>
            </div>

            <div className="brickdownchitown">
                <img src={contactimg} alt="" />
                <div className="brickup" data-aos="fade-up">
                    <div className="brickup1">
                        <h1>Contact Us!</h1>
                        <div className="line"></div>
                    </div>
                    <div className="bruckup" data-aos="fade-up">
                        <h3>Our team has been servicing the South West Florida area for nearly 10 years!</h3>
                        <h3>We look forward to providing you with excellent service.</h3>
                        <div className="contaflex">
                            <div className="flexin" data-aos="fade-right">
                                <p>EMAIL:</p>
                                <p>ANDREWCHARLES@EPIC.COM</p>
                            </div>
                            <div className="flexin" data-aos="zoom-in">
                                <p>PHONE:</p>
                                <p>(239)826-4326</p>
                            </div>
                            <div className="flexin" data-aos="fade-left">
                                <p>HOURS OF OPERATION:</p>
                                <p>Mon - Fri: 8AM - 6PM</p>
                                <p>Sat & Sun: 10AM - 3PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="location" >
                <img src={googlemap} alt="map" />
                <div className="rightflex" >
                    <h1>Get in touch using our contact form</h1>
                    <div class="container">
                        <form action="/actionpage">
                            <div class="row">
                                <div class="col-25">
                                    <label for="fname">First Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="lname">Last Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="email">Email</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="email" name="email" placeholder="Your email.." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="country">Country</label>
                                </div>
                                <div class="col-75">
                                    <select id="country" name="country">
                                        <option value="usa">USA</option>
                                        <option value="canada">Canada</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="subject">Subject</label>
                                </div>
                                <div class="col-75">
                                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            {/* </div> */}
            <div style={{ "height": "auto", "backgroundColor": "whitesmoke" }}>
                <div className="clean">
                    <img src={paintcarousel2} alt="" />
                    <div>
                        <h2>Have Confidence In Who You Hire...</h2>
                        <p>We are highly trained professionals who perform guaranteed, safe services. Fully licensed and insured. We are prepared to meet all your painting or powerwashing needs.</p>
                    </div>
                </div>
                <div className="cleanbreak">
                    <div>
                        <h2>Have Confidence In Who You Hire...</h2>
                        <p>We are highly trained professionals who perform guaranteed, safe services. Fully licensed and insured. We are prepared to meet all your painting or powerwashing needs.</p>
                    </div>
                    <img src={bluemanroom} alt="" />
                </div>
            </div>
            <div className="parallax"></div>
        </div>
        // </div>

    )
}
export default Contact;