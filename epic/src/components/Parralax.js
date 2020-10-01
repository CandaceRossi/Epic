import React from 'react';
import Cards from "./Cards";
import TestimonialCards from "./TestimonialCards";


const Parralax = () => {

    return (
        <>
            <div className="parallax">
            </div> <div style={{ "height": "auto", "backgroundColor": "whitesmoke" }}>
                <Cards />
            </div>
            <div className="parallaxes">
            </div> <div style={{ "height": "300px", "backgroundColor": "whitesmoke" }}>
                <h2 className="parapara1">Don't take our word for it!</h2><h3 className="parapara2">Read testimonials from our customers</h3><a className="parapara3">Here</a>
                <TestimonialCards />
            </div>
            <div className="parallaxing">
            </div> <div style={{ "height": "300px", "backgroundColor": "whitesmoke" }}>
            </div>

        </>
    )
}
export default Parralax;