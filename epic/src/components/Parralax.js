import React from 'react';
// import classNames from "classnames";
import TestimonialCards from "./TestimonialCards";



const Parralax = props => {
    console.log(props, "this is that shyt")
    // const altimageclasses = classNames("img1", "img2")
 const isNeeded = props.isNeeded;
const featuredImage1 = props.featuredImage1;
const featuredImage2 = props.featuredImage2;
    return (
        <>
            <div style={{ "height": "auto", "backgroundColor": "whitesmoke" }}>
                <div className="cleanbreak">
                    <div>
                        <h1>Have Confidence In Who You Hire...</h1>
                        <p>We are highly trained professionals who perform guaranteed, safe services. Fully licensed and insured. We are prepared to meet all your painting or powerwashing needs.</p>
                    </div>
                     <img src={featuredImage1} alt="" />
                </div>
                <div className="clean">
                
                    <img src={featuredImage2} alt="" />
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

// className={altimageclasses}