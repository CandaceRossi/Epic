import React, { useEffect } from 'react';
import commercialslick from "../images/commercialslick.jpg";
//eslint-disable-next-line 
// import residentailclean2 from "../images/residentailclean2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


const Commercial = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (

        <div className="commercial">
            <div class="overlay"> </div>
            <div className="commercial-style">
                <div className="commey" data-aos="zoom-in">
                    <h1>COMMERCIAL</h1>
                    <h3>LET'S GET YOUR OFFICE A FRESH LOOK!</h3>
                    <h3>WE ENSURE CLEANLINESS AND SUPERIOR PROJECT SATISFACTION!</h3>
                </div>
                <div className="brickdownchitown">
                    <div className="imgcontainer">
                        <img src={commercialslick} alt="" />
                        {/* <img src={residentailclean} alt="" /> */}
                    </div>
                    <div className="brickup" data-aos="fade-up">
                        <div className="brickup1">
                            <h1>Commercial Painting Services</h1>
                            <div className="line"></div>
                        </div>
                        <div className="bruckup" data-aos="fade-up">
                            <h3>We work to ensure proper scheduling and minimum disruption for you and your tenants</h3>
                            <h3>We use low-odor paints for all interior projects so tenants can enjoy their newly painted offices without smelly paint fumes.</h3>
                            <div className="contaflex">
                                <div className="flexin" data-aos="fade-right">
                                    <p>Drywall, Plaster
                                    Doors, Moldings Sheetrock, Baseboard</p>
                                </div>
                                <div className="flexin" data-aos="fade-left">
                                    <p>Perimeter Fences & Walls <br /> Wood and Stucco Repair</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ "height": "auto", "backgroundColor": "whitesmoke" }}>
                <div className="clean">
                    <p>"Anyone Can Live In A House, But Homes Are <br />Created With Patience, Time, And Love." <br />- Jane Green</p>
                    <p>"Life Is Art, Paint Your Dreams" <br />-Unknown</p>
                    <p>"When You Want To Transform A Room Into An <br />Entirely Different Animal, Change The Color."<br />- Billy Baldwin" </p>
                </div>
                <div className="cleanbreak"></div>
            </div>
            <div className="parallax"></div>
        </div>

    )
}
export default Commercial;