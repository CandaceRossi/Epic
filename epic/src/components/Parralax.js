import React from 'react';
import Cards from "./Cards";
import TestimonialCards from "./TestimonialCards";


const Parralax = () => {

    return (
        <>
            <div className="parallax">
            </div> <div style={{ "height": "auto", "backgroundColor": "whitesmoke" }}>
                <div className="clean">
                    <p>"Anyone Can Live In A House, But Homes Are <br />Created With Patience, Time, And Love." <br />- Jane Green</p>
                    <p>"Life Is Art, Paint Your Dreams" <br />-Unknown</p>
                    <p>"When You Want To Transform A Room Into An <br />Entirely Different Animal, Change The Color."<br />- Billy Baldwin" </p>
                </div>
                <div className="cleanbreak"></div>
            </div>
            <div className="parallaxes">
            </div> <div style={{ "height": "300px", "backgroundColor": "whitesmoke" }}>
                <h3 className="parapara2">Read Testimonials From Our Customers <span><a className="parapara3">Here</a></span></h3>
                <TestimonialCards />
            </div>
            {/* <div className="parallaxing">
            </div> <div style={{ "height": "300px", "backgroundColor": "whitesmoke" }}>
            </div> */}

        </>
    )
}
export default Parralax;