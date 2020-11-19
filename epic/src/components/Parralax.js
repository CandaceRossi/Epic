import React from 'react';
//eslint-disable-next-line 
// import Cards from "./Cards";
import bluemanroom from "../images/bluemanroom.jpg";
import paintcarousel2 from "../images/paintcarousel2.jpg"
import TestimonialCards from "./TestimonialCards";


const Parralax = () => {

    return (
        <>
            <div style={{ "height": "auto", "backgroundColor": "whitesmoke" }}>
                <div className="cleanbreak">
                    <div>
                        <h1>Have Confidence In Who You Hire...</h1>
                        <p>We are highly trained professionals who perform guaranteed, safe services. Fully licensed and insured. We are prepared to meet all your painting or powerwashing needs.</p>
                    </div>
                    <img src={bluemanroom} alt="" />
                </div>
                <div className="clean">
                    <img src={paintcarousel2} alt="" />
                    <div>
                        <h1>Have Confidence In Who You Hire...</h1>
                        <p>We are highly trained professionals who perform guaranteed, safe services. Fully licensed and insured. We are prepared to meet all your painting or powerwashing needs.</p>
                    </div>
                </div>
            </div>
            <div className="parallax">
            </div>
            <div className="parallaxes">
            </div> <div style={{ "height": "300px", "backgroundColor": "whitesmoke" }}>
                <h3 className="parapara2">Read Testimonials From Our Customers <span>Here</span></h3>
                <TestimonialCards />
            </div>
            {/* <div className="parallaxing">
            </div> <div style={{ "height": "300px", "backgroundColor": "whitesmoke" }}>
            </div> */}

        </>
    )
}
export default Parralax;