import React, { useEffect } from 'react';
import commercialslick from "../images/commercialslick.jpg";
import Parallax from "./Parallax";
// import classNames from "classnames";
import commercialclean from "../images/commercialclean.jpg";
import commercialshed from "../images/commercialshed.jpg";

import Aos from "aos";
import "aos/dist/aos.css";


const Commercial = ({isNeeded}) => {
// const altimageclasses = classNames("img1", "img2")
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
<div className="commercialcont">
        <div className="commercial">

            <div class="overlay"> </div>
            <div className="commercial-style">
                <div className="commey" data-aos="zoom-in">
                    <h1>COMMERCIAL</h1>
                    <h3>LET'S GET YOUR OFFICE A FRESH LOOK!</h3>
                    <h3>WE ENSURE CLEANLINESS & SUPERIOR PROJECT SATISFACTION!</h3>

                </div>
                </div>
                </div>

                <div className="brickdownchitown">
                    <div className="imgcontainer">
                        <img src={commercialslick} alt="" />
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
            <Parallax featuredImage1={commercialshed} featuredImage2={commercialclean} commpar={true} isNeeded = {false} />
        </div>
        </>

    )
}
export default Commercial;