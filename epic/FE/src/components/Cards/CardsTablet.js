import React from 'react';
import { Card } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import gorjusyep from "../../images/gorjusyep.jpg";
import beigebasement from "../../images/beigebasement.jpg";
import commercialslick from "../../images/commercialslick.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobile } from '@fortawesome/free-solid-svg-icons';
import '../../sass/cards.scss';


const CardsTablet = () => {

    return (
     

        <div className="cardscontainertablet">
            <div className="cardsstyletablet">

                <Card style={{ border: "none", margin: "0 auto" }}>
                    <Card.Body style={{
                        background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "0 auto !important", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "row"
                    }}>

                     
                        <img className="firstimg" src={beigebasement} style={{ maxWidth: "395px", height: "250px", paddingTop: "15px", display: "flex" }} alt="room" />
                        <div className="imagecard" style={{ border: "none", margin: "0 auto", background: "#d6cec3", color: "rgb(21, 29, 68)", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "20px" }}>
                            <Card.Title style={{ background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "0 auto", marginLeft: "0px", maxWidth: "395px" }}>Make Your Space What You Always Dreamed It Could Be!</Card.Title>
                            <Card.Text style={{  background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "0 auto", marginLeft: "0px", maxWidth: "395px", fontSize: "1.2rem" }}>
                                 Let us do the work for you! Our team handles every step of your project so that you don't have to. We protect all surfaces, furniture, patch holes, remove electric plates and switch covers so that the finished product is beautiful with a quality and durability that lasts. 
                            </Card.Text>

                        </div>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Body>
                        <Card.Title>We'll Call You!</Card.Title>
                        <Card.Text>
                            Fill in the form and we'll be in touch!
    </Card.Text>
                        <div className="card-style">
                            <form action="/actionpage">
                                <div className="row">
                                    <div className="col-25">
                                        <label for="name">Name</label>
                                    </div><div className="col-75">
                                        <input style={{ fontSize: "1.2em" }} type="text" id="name" name="name" placeholder="Your Full Name.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="phone">Phone</label>
                                    </div>
                                    <div className="col-75">
                                        <input style={{ fontSize: "1.2em" }} type="number" id="number" name="number" placeholder="Your Telephone Number.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <input className="landingbutton" type="Submit" value="Give Me A Call" />
                                </div>
                            </form>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    
    )
}
export default CardsTablet;