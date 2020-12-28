import React from 'react';
import { Card } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import gorjusyep from "../images/gorjusyep.jpg";
import beigebasement from "../images/beigebasement.jpg";
import commercialslick from "../images/commercialslick.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobile } from '@fortawesome/free-solid-svg-icons';





const Cards = () => {

    return (

        <div className="cards-container">
            <div className="cards-style">

                <Card style={{ border: "none", margin: "0 auto" }}>
                    <Card.Body style={{
                        background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "none", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "row"
                    }}>

                        {/* <div className="imagecard"> */}
                        <img className="firstimg" src={beigebasement} style={{ width: "370px", height: "250px", paddingTop: "15px", display: "flex" }} alt="room" />
                        {/* </div> */}
                        <div className="imagecard" style={{ border: "none", background: "#d6cec3", color: "rgb(21, 29, 68)", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                            <Card.Title style={{ background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "0 auto", width: "395px" }}>Beautiful Colors To Make Your Space Feel Just Right!</Card.Title>
                            <Card.Text style={{ background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "0 auto", width: "360px", fontSize: "1.2rem", display: "flex", alignItems: "flex-start" }}>
                                Preparation is key! Our team starts by protecting all areas, removing electric plates and door handles –
                                patching holes and de-glossing trim so that the finish product is beautiful and durable.
                            </Card.Text>

                        </div>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Body>
                        <Card.Title>We'll Call You!</Card.Title>
                        <Card.Text>
                            Fill in the form and we'll Get In Touch!
    </Card.Text>
                        {/* </Card.Body> */}
                        {/* <ListGroup className="list-group-flush"> */}
                        <div className="card-style">
                            <form action="/actionpage">
                                <div className="row">
                                    <div className="col-25">
                                        <label for="name">Name</label>
                                    </div><div className="col-75">
                                        <input style={{ fontSize: "1.2em" }} type="text" id="name" name="name" placeholder="your full name.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="phone">Phone</label>
                                    </div>
                                    <div className="col-75">
                                        <input style={{ fontSize: "1.2em" }} type="number" id="number" name="number" placeholder="your phone number.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <input className="landingbutton" type="Submit" value="Give Me A Call" />
                                </div>
                            </form>
                        </div>

                        {/* </ListGroup> */}
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}
export default Cards;

// <Card>
//     <Card.Body>
//         {/* <div className="elipses">
//                             <img src={paintroller} style={{ width: "100%", height: "100%", paddingTop: "15px" }} alt="paint roller" />
//                         </div> */}
//         {/* <br /> */}
//         <div className="imagecard">
//             <img src={gorjusyep} style={{ width: "340px", height: "215px", paddingTop: "15px" }} alt="room" />
//         </div>


//         <Card.Title>Beautiful Colors To Make Your Space Feel Just Right!</Card.Title>
//         {/* <Card.Text>
//                             Contact our team today to learn more about our pricing
//     </Card.Text> */}
//         <ListGroup className="list-group-flush">
//             <ListGroupItem>Commercial - Residential</ListGroupItem>
//             {/* <ListGroupItem>Get a Quote Today!</ListGroupItem> */}
//             {/* <ListGroupItem>Graffiti</ListGroupItem> */}
//         </ListGroup>
//         {/* <Card.Body> */}
//         <Card.Text>
//             Contact our team today to learn more about our pricing
//     </Card.Text>
//         {/* <Card.Link className="link" href="#"> <span> <FontAwesomeIcon icon={faGlobe} /> </span> epicpaintandwash.com/contact</Card.Link>
//                         <Card.Link className="link" href="#"> <span> <FontAwesomeIcon icon={faMobile} /> </span> 239-555-5555</Card.Link> */}
//         {/* </Card.Body> */}
//     </Card.Body>
// </Card> 