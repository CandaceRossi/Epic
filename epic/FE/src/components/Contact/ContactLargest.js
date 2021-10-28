import React, { useEffect, useState } from 'react';
import axios from 'axios';
import contactimg from "../../images/contactimg.jpg";
import googlemap from "../../images/googlemap.PNG";
import Contact from "./Contact";
import ContactMini from "./ContactMini";
import ContactPhone from "./ContactPhone";
import ContactTablet from "./ContactTablet";
import Aos from "aos";
import "aos/dist/aos.css";
import '../../sass/contact.scss';

import LargestBreakpoint from '../responsive_utilities/largest_breakpoint';
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';
import MiniBreakpoint from '../responsive_utilities/mini_breakpoint';

const ContactLargest = ({isNeeded}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

const [data, setData] = useState({
    name: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
    sent: false
  });

const onNameChange = (event) => {
        setData({...data, name: event.target.value})
        console.log("updated name state", data)
    }
const onLNameChange = (event) => {
        setData({...data, lname: event.target.value})
        console.log("updated last name state", data)
    }
const onEmailChange = (event) => {
        setData({...data, email: event.target.value})
    }

const onPhoneChange = (event) => {
        setData({...data, phone: event.target.value})
         console.log("updated phone state", data)
    }

const onMsgChange = (event) => {
        setData({...data, message: event.target.value})
    }

const getResponse = async () => {
        try {
        await axios.get('/').then((response) => {
            const info = response.data;
            setData({sent: true})
            resetForm();
            console.log(response);
        })}
        catch (err) {
            alert("Error retreiving data!")
        };
    }


async function postData() {
    const { newData } = await axios.post(
      "http://localhost:3001/send", data
    )
    setData(data => ({...data, sent:true}));
    
  }

const submitEmail = async (e) => {
    e.preventDefault();  
    let newData = {
        ...data,
    name: data.name, 
    email: data.email,
    phone: data.phone,
    message: data.message
  }
postData();
getResponse();
  };

 

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  

 setTimeout(() => {
      setData(
        {
          sent: true,
        })
    }, 1000
      );
};

 
    return (
        <>
        
            <div className="contactcont">
            <LargestBreakpoint>
                <div className="contact">

                    <div className="overlay"> </div>
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
                        <div className="formcontainer">
                            <form action="/actionpage" onSubmit={submitEmail}>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="fname">First Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input value={data.name || ""} onChange={onNameChange} type="text" id="fname" name="firstname" placeholder="Your name.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="lname">Last Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input value={data.lname || ""} onChange={onLNameChange} type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="email">Email</label>
                                    </div>
                                    <div className="col-75">
                                        <input value={data.email || ""} onChange={onEmailChange}type="text" id="email" name="email" placeholder="Your email.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="phone">Phone</label>
                                    </div>
                                    <div className="col-75">
                                         <input value={data.phone || ""} onChange={onPhoneChange}type="text" id="phone" name="phone" placeholder="Your phone number.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="subject">Subject</label>
                                    </div>
                                    <div className="col-75 text-area">
                                        <textarea value={data.message || ""} onChange={onMsgChange} id="subject" name="subject" placeholder="Write something.." style={{ height: "100px" }}></textarea>
                                    </div>
                                </div>
                                 <div value={data.sent} className={data.sent ? 'msgAppear':'msg'}>Message has been sent
                                </div>
                                <div className="row">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
              </LargestBreakpoint>
              <DesktopBreakpoint>
                <Contact />
            </DesktopBreakpoint>
               <TabletBreakpoint>
                <ContactTablet />
            </TabletBreakpoint>
            <PhoneBreakpoint>
                 <ContactPhone />
            </PhoneBreakpoint>
            <MiniBreakpoint>
                 <ContactMini />
            </MiniBreakpoint>
            </div>
        </>
    )
}
export default ContactLargest;