import React from 'react';
import { Card } from "react-bootstrap";
import testimony1 from "../images/testimony1.jpg";
import testimony2 from "../images/testimony2.jpg";

const TestimonialCards = () => {

    return (
        <>
    (
        <div className="testimonialblock">
        
                <h4 className="parapara2">One Aspect To Epic's Great Reputation Is Our Client Testimonials</h4>
                <h5 className="parapara2">Our Work Both Residential And Commercial Is Top Notch, Don't Believe Us -</h5>
                <h6 className="parapara2">Read Testimonials From Our Customers <span>Here</span></h6>
              
           
        <div className="testimon-card-container" >
            <div className="testimonial-cards">
                <Card>
                    <Card.Body>
                        <div>
                            <div className="elipse-testimonial">
                                <img src={testimony1} style={{ width: "160%", height: "120%", borderRadius: "50%" }} alt="man" />
                            </div>
                            <br />
                            <Card.Text>
                                Epic's paint crew did a fantastic job! Solid coat, clean edges, & ...
                        </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <div>
                            <div className="elipse-testimonial">
                                <img src={testimony2} style={{ width: "150%", height: "115%", borderRadius: "50%" }} alt="woman" />
                            </div>
                            <br />
                            <Card.Text>
                                Easily one of the best choices I made. Epic made painting my home a breeze. ...
                        </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </div>
   
</>
    )
}
export default TestimonialCards;