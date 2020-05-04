import React from 'react';
import { Card } from "react-bootstrap";

const Cards = () => {

    return (

        <div className="testimon-card-container" >
            <div className="testimonial-cards">
                <Card>
                    <Card.Body>
                        <div className="elipse-testimonial">
                        </div>
                        <br />
                        <Card.Text>
                            Some quick example text to build on the card title
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <div className="elipse-testimonial">
                        </div>
                        <br />

                        <Card.Text>
                            Some quick example text to build on the card title
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}
export default Cards;