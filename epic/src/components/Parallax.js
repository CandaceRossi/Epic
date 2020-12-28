import React from 'react';
// import classNames from "classnames";
import TestimonialCards from "./TestimonialCards";



const Parallax = props => {
    console.log(props, "this is that shyt")
    // const altimageclasses = classNames("img1", "img2")
 const isNeeded = props.isNeeded;
const featuredImage1 = props.featuredImage1;
const featuredImage2 = props.featuredImage2;

    return (
        <>
            <div style={{  display: "flex", flexDirection: "column", margin: "0 auto", zIndex: "600", height:"100%", position: "relative", background: "whitesmoke"}}>
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
            <div className="parallax"></div>
           
            {/* <div className="hometestimonyparallaxblock"> */}
            {isNeeded ?
                <TestimonialCards /> : null }
            {isNeeded ?
            <div className="parallaxes"></div>
            : null }
            
             {/* </div> */}
    
        </>
    )
}
export default Parallax;

