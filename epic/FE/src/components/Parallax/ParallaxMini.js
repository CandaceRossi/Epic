import React from 'react';
import classNames from "classnames";
import TestimonialCards from "../Cards/TestimonialCards";
import '../../sass/parallax.scss';


const ParallaxMini = props => {
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
            <div style={{ display: "flex", flexDirection: "column", margin: "0 auto", zIndex: "600", height:"100%", position: "relative", background: "whitesmoke"}}>
                <div className="cleanbreakmini">
                    <div className="cleanbreakdiv">
                        <h1>Have Confidence In Who You Hire...</h1>
                        <p>We are highly trained professionals who perform guaranteed, safe services. Fully licensed and insured. We are prepared to meet all your painting or powerwashing needs.</p>
                    </div>
                     <img src={featuredImage1} alt="" />
                </div>
                <div className="cleanmini">
                
                    <img src={featuredImage2} alt="" />
                    <div className="cleandiv">
                        <h1>Have Confidence In Who You Hire...</h1>
                        <p>We are highly trained professionals who perform guaranteed, safe services. Fully licensed and insured. We are prepared to meet all your painting or powerwashing needs.</p>
                    </div>
                </div>
            </div>
            {homepar ?
            <div style={{width: "100%!important", height: "auto"}} className="parallaxhome"></div> :
            respar ? 
            <div style={{width: "100%!important", height: "auto"}} className="parallaxres"></div> : 
            commpar ?
             <div style={{width: "100%!important", height: "auto"}} className="parallaxcomm"></div> : 
            powerpar ?
            <div style={{width: "100%!important", height: "auto"}} className="parallaxpower"></div> :
            misspar ?
           <div style={{width: "100%!important", height: "auto"}} className="parallaxmiss"></div> : 
            projpar ?
           <div style={{width: "100%!important", height: "auto"}} className="parallaxproj"></div> : null }
            
           
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
export default ParallaxMini;