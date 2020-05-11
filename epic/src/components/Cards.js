import React from 'react';
import { Card } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import paintroller from "../images/paintroller.png";
import brushhouse from "../images/brushhouse.png";
import paintguy from "../images/paintguy.png";

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
                        <Card.Link href="#">epicpaintandwash.com</Card.Link>
                        <Card.Link href="#">PH: 239-555-5555</Card.Link>
                    </Card.Body>
                </Card>
                <Card >

                    <Card.Body>
                        <div className="elipses">
                            <img src={brushhouse} style={{ width: "55%", height: "85%" }} alt="paint brush" />
                        </div>
                        <br />
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on
                            </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card >

                    <Card.Body>
                        <div className="elipses">
                            <img src={paintguy} style={{ width: "95%", height: "95%", paddingRight: "5px" }} alt="painter guy" />
                        </div>
                        <br />
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}
export default Cards;