import React from 'react';
import { Card } from "react-bootstrap";
import beigebasement from "../../images/beigebasement.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobile } from '@fortawesome/free-solid-svg-icons';
import '../../sass/cards.scss';


const CardsPhone = () => {

    return (
        <div className="cardscontainerphone">
            <div className="cardsstylephone">
                <Card >
                    <Card.Body >
                        <img className="firstimg" src={beigebasement} style={{ width: "370px", height: "250px", paddingTop: "15px", display: "flex" }} alt="room" />
                        <div className="imagecard" style={{ border: "none", background: "#d6cec3", color: "rgb(21, 29, 68)", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                            <Card.Title style={{ background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "0 auto", maxWidth: "395px" }}>Make Your Space What You Always Dreamed It Could Be!</Card.Title>
                            <Card.Text style={{ background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "0 auto", maxWidth: "360px", fontSize: "1.2rem", display: "flex", alignItems: "flex-start" }}>
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
export default CardsPhone;