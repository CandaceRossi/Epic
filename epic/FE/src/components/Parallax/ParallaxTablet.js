import React from 'react';
import classNames from "classnames";
import TestimonialCards from "../Cards/TestimonialCards";
import '../../sass/parallax.scss';


const ParallaxTablet = props => {
    console.log(props, "this is that shyt")
    const altimageclasses = classNames("parallaxhome", "parallaxres", "parallaxcomm", "parallaxpower", "parallaxmiss", "parallaxproj")
 const isNeeded = props.isNeeded;
const featuredImage1 = props.featuredImage1;
const featuredImage2 = props.featuredImage2;
const homepar = props.homepar;
const respar = props.respar;
const commpar = props.commpar;
const powerpar = props.powerpar;
const misspar = props.misspar;
const projpar = props.projpar;

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", margin: "0 auto", zIndex: "600", height:"auto !important", position: "relative", background: "whitesmoke"}}>
                <div className="cleanbreaktablet">
                    <div className="cleanbreakdivtablet">
                        <h1>Have Confidence In Who You Hire...</h1>
                        <p>We are highly trained professionals who perform guaranteed, safe services. Fully licensed and insured. We are prepared to meet all your painting or powerwashing needs.</p>
                    </div>
                     <img src={featuredImage1} alt="" />
                </div>
                <div className="cleantablet">
                
                    <img src={featuredImage2} alt="" />
                    <div className="cleandivtablet">
                        <h1>Have Confidence In Who You Hire...</h1>
                        <p>We are highly trained professionals who perform guaranteed, safe services. Fully licensed and insured. We are prepared to meet all your painting or powerwashing needs.</p>
                    </div>
                </div>
            </div>
            {homepar ?
            <div className="parallaxhome"></div> :
            respar ? 
            <div className="parallaxres"></div> : 
            commpar ?
             <div className="parallaxcomm"></div> : 
            powerpar ?
            <div className="parallaxpower"></div> :
            misspar ?
           <div className="parallaxmiss"></div> : 
            projpar ?
           <div className="parallaxproj"></div> : null }
            
           
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
export default ParallaxTablet;