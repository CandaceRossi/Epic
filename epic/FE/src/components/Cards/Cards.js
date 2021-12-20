import React, {useState} from 'react';
import axios from 'axios';
import { Card } from "react-bootstrap";
import beigebasement from "../../images/beigebasement.jpg";
import '../../sass/cards.scss';


const Cards = () => {

    return (
      <div className="cardscontainerdesktop" >
            <div className="cardsstyledesktop">

                <Card style={{ border: "none", margin: "0 auto", display: "flex !important", alignItems: "center !important"}}>
                    <Card.Body style={{
                        margin: "0 auto", height: "auto", background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "0 auto", display: "flex !important",  alignItems: "center !important", flexDirection: "row"
                    }}>
                        <img className="firstimg" src={beigebasement} style={{width: "320px", height: "200px", display: "flex !important", alignItems: "center !important" }} alt="room" />
                        <div className="imagecard" style={{ border: "none", background: "#d6cec3", color: "rgb(21, 29, 68)", display: "flex", alignContent: "center", justifyContent: "center !important", flexDirection: "column" }}>
                            <Card.Title style={{background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "0px", maxWidth: "440px", width: "auto", fontSize: "2rem" }}>Make Your Space What You Always Dreamed It Could Be!</Card.Title>
                            <Card.Text style={{ background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "0px", maxWidth: "395px", width: "auto", fontSize: "1.2rem", display: "flex", alignItems: "center !important" }}>
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
                                        <label htmlFor="name">Name</label>
                                    </div><div className="col-75">
                                        <input style={{ fontSize: "1.2em" }} type="text" id="name" name="name" placeholder="Your Full Name.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="phone">Phone</label>
                                    </div>
                                    <div className="col-75">
                                        <input style={{ fontSize: "1.2em" }} type="number" id="number" name="number" placeholder="Your Telephone Number.." />
                                    </div>
                                </div>
                                 <div>Message has been sent
                                </div>
                                <div className="row">
                                    <input className="landingbutton" type="submit" value="Give Me A Call" />
                                </div>
                            </form>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div> 
    )
}
export default Cards;