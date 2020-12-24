import React, { useEffect } from 'react';
import powerwash12 from "../images/powerwash12.jpg";
import Parallax from "./Parralax";
import Aos from "aos";
import "aos/dist/aos.css";


const Powerwashing = ({isNeeded}) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    //Epic is Capital Poster font
    // painting and powerwashing is Apertura Web font
    return (

        <div className="pressurewash">
            <div class="overlay"> </div>
            <div className="pressurewash-style">
                <div className="pressy" data-aos="zoom-in">
                    <h1>POWERWASHING</h1>
                    <h3>Dirt? Oil? Grime? Mildew?</h3>
                    <h3>One Call Solves It All!</h3>
                </div>
                <div className="brickdownchitown">
                    <div className="imgcontainer">
                        <img src={powerwash12} alt="" />
                    </div>
                    <div className="brickup" data-aos="fade-up">
                        <div className="brickup1">
                            <h1>Call Us Today For A Free Quote!</h1>
                            <div className="line"></div>
                            </div>
                            <div className="bruckup" data-aos="fade-up">
                                <h3>We Pride Ourselves In Customer Satisfaction.</h3>
                                <h3>Call Our Office Today!</h3>
                            {/* </div>
                        </div> */}
                        <div className="contaflex">
                            <div className="flexin" data-aos="fade-right">
                                <p>Whole Houses, Awnings, Roofs, Patio Cages</p>
                            </div>
                            <div className="flexin" data-aos="fade-left">
                                <p>Pool Decks, Driveways, Pavers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
             <Parallax isNeeded = {false} />
        </div>
    )
}
export default Powerwashing;