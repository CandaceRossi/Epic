import React, { useEffect } from 'react';
import commercialslick from "../images/commercialslick.jpg";
import powerwashtool from "../images/powerwashtool.jpg";
import powerwash12 from "../images/powerwash12.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


const Powerwashing = () => {

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

                            <div className="bruckup" data-aos="fade-up">
                                <h3>We Pride Ourselves In Customer Satisfaction.</h3>
                                <h3>Call Today!</h3>
                            </div>
                        </div>
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
            {/* </div> */}
            <div style={{ "height": "auto", "backgroundColor": "whitesmoke" }}>
                <div className="clean">
                    <p>"Anyone Can Live In A House, But Homes Are <br />Created With Patience, Time, And Love." <br />- Jane Green</p>
                    <p>"Life Is Art, Paint Your Dreams" <br />-Unknown</p>
                    <p>"When You Want To Transform A Room Into An <br />Entirely Different Animal, Change The Color."<br />- Billy Baldwin" </p>
                </div>
                <div className="cleanbreak"></div>
            </div>
        </div>
    )
}
export default Powerwashing;