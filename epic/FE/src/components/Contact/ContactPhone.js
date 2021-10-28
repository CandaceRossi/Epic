import React, { useEffect } from 'react';
import contactimg from "../../images/contactimg.jpg";
import googlemap from "../../images/googlemap.PNG";
import Aos from "aos";
import "aos/dist/aos.css";
import '../../sass/contact.scss';


const ContactPhone = ({isNeeded}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className="contactcontphone">
                <div className="contactphone">

                    <div className="overlay"> </div>
                    <div className="contact-stylephone">
                        <div className="consty" data-aos="zoom-in">
                            <h1>SCHEDULE A FREE ESTIMATE!</h1>
                            <h2>We appreciate our customer's business.</h2>
                            <h2>We guarantee great service from professionals you can count on.</h2>
                            <h2>Contact us today to get set up with a specialist who can help.</h2>
                        </div>
                    </div>
                </div>

                <div className="brickdownchitown">
                 <div className="imgcontainer">
                    <img src={contactimg} alt="" />
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
                                <div className="flexin" data-aos="fade-right">
                                    <p>EMAIL: ANDREWCHARLES@EPIC.COM</p>
                                </div>
                                <div className="flexin" data-aos="zoom-in">
                                    <p>PHONE: (239)826-432</p>  
                                </div>
                                <div className="flexin" data-aos="fade-left">
                                    <p>HOURS OF OPERATION: <br /> Mon - Fri: 8AM - 6PM <br /> Sat & Sun: 10AM - 3PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="location" >
                    <img src={googlemap} alt="map" />
                    <div className="rightflex" >
                        <h1>Get in touch using our contact form</h1>
                        <div className="formcontainer">
                            <form action="/actionpage">
                                <div className="row">
                                    <div className="col-25">
                                        <label for="fname">First Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="lname">Last Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="email">Email</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="email" name="email" placeholder="Your email.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="country">Country</label>
                                    </div>
                                    <div className="col-75">
                                        <select id="country" name="country">
                                            <option value="usa">USA</option>
                                            <option value="canada">Canada</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="subject">Subject</label>
                                    </div>
                                    <div className="col-75 text-area">
                                        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "100px" }}></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
              
            </div>
        </>
    )
}
export default ContactPhone;