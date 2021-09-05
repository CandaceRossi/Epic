import React from 'react';
import { Card } from "react-bootstrap";
import testimony1 from "../images/testimony1.jpg";
import testimony2 from "../images/testimony2.jpg";
import '../sass/cards.scss';

const TestimonialCards = () => {
//<span style={{ height: "35px", display: "flex", alignItems: "baseline", paddingLeft: "10px", paddingRight: "10px", fontSize:"2.6rem", fontFamily: "CapitalPosterCdW00-Regular"}}>Epic</span> 
    return (
        <>
    
        <div className="testimonialblock">
        
                <h2 className="parapara2">Our Reputation is Impeccable! </h2>
                <h4 className="parapara2">Need Proof ? Just see what our clients have to say:</h4>
               
              
           
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
                                Epic's paint crew did a fantastic job! Solid coats brings a splash of color to workspace! <br/>-Jordan S.
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
                                Easily one of the best choices I made. Epic made painting my home a breeze. <br/>-Joselyn S.
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