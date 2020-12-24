import React from 'react';
import bluemanroom from "../images/bluemanroom.jpg";
// import paintcarousel2 from "../images/paintcarousel2.jpg";
import classNames from "classnames";
import TestimonialCards from "./TestimonialCards";


const Parralax = props => {
    const altimageclasses = classNames("img1", "img2")
 const {isNeeded} = props;
    return (
        <>
            <div style={{ "height": "auto", "backgroundColor": "whitesmoke" }}>
                <div className="cleanbreak">
                    <div>
                        <h1>Have Confidence In Who You Hire...</h1>
                        <p>We are highly trained professionals who perform guaranteed, safe services. Fully licensed and insured. We are prepared to meet all your painting or powerwashing needs.</p>
                    </div>
                    <div className={altimageclasses}></div>
                </div>
                <div className="clean">
                    <div className={altimageclasses}></div>
                    <div>
                        <h1>Have Confidence In Who You Hire...</h1>
                        <p>We are highly trained professionals who perform guaranteed, safe services. Fully licensed and insured. We are prepared to meet all your painting or powerwashing needs.</p>
                    </div>
                </div>
            </div>
            <div className="parallax">
            </div>
           
            <div>
            {isNeeded ?
                <TestimonialCards /> : null }
            {isNeeded ?
            <div className="parallaxes"></div>
            : null }
            
             </div>
            {/* <div className="parallaxing">
            </div> <div style={{ "height": "300px", "backgroundColor": "whitesmoke" }}>
            </div> */}

        </>
    )
}
export default Parralax;