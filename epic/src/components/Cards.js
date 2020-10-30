import React from 'react';
import { Card } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import paintroller from "../images/paintroller.png";
import brushhouse from "../images/brushhouse.png";
import paintguy from "../images/paintguy.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobile } from '@fortawesome/free-solid-svg-icons';





const Cards = () => {

    return (

        <div className="cards-container">
            <div className="cards-style">
                <Card>

                    <Card.Body>
                        <div className="elipses">
                            <img src={paintroller} style={{ width: "100%", height: "100%", paddingTop: "15px" }} alt="paint roller" />
                        </div>
                        <br />
                        <Card.Title>Get a Quote</Card.Title>
                        <Card.Text>
                            Contact our team today to learn more about our pricing
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Commercial</ListGroupItem>
                        <ListGroupItem>Residential</ListGroupItem>
                        <ListGroupItem>Graffiti</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#"><span><FontAwesomeIcon icon={faGlobe} /></span> epicpaintandwash.com/contact</Card.Link><br />
                        <Card.Link href="#"><span><FontAwesomeIcon icon={faMobile} /></span> 239-555-5555</Card.Link>
                    </Card.Body>
                </Card>
                <Card >

                    <Card.Body>
                        <div className="elipses">
                            <img src={brushhouse} style={{ width: "55%", height: "85%" }} alt="paint brush" />
                        </div>
                        <br />
                        <Card.Title>Get Design Help</Card.Title>
                        <Card.Text>
                            Our team is qualified to help! Contact our office today for a design consultation.
                            </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Exterior Design</ListGroupItem>
                        <ListGroupItem>Interior Design</ListGroupItem>
                        <ListGroupItem>Talk With An Interior Designer</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#"><span><FontAwesomeIcon icon={faGlobe} /></span> Interior Design Consultant</Card.Link><br />
                        <Card.Link href="#"><span><FontAwesomeIcon icon={faMobile} /></span> 239-555-5555</Card.Link>
                    </Card.Body>
                </Card>
                <Card >

                    <Card.Body>
                        <div className="elipses">
                            <img src={paintguy} style={{ width: "95%", height: "95%", paddingRight: "5px" }} alt="painter guy" />
                        </div>
                        <br />
                        <Card.Title>Count On Us!</Card.Title>
                        <Card.Text>
                            Learn about our team's values, read customer reviews,
                            and check out our latest projects!
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Our Mission</ListGroupItem>
                        <ListGroupItem>Customer Testimonies</ListGroupItem>
                        <ListGroupItem>Our Latest Projects</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#"><span><FontAwesomeIcon icon={faGlobe} /></span> epicpaintandwash.com/contact</Card.Link><br />
                        <Card.Link href="#"><span><FontAwesomeIcon icon={faMobile} /></span> 239-555-5555</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}
export default Cards;