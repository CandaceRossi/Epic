import React from 'react';
import classNames from "classnames";
import TestimonialCards from "./TestimonialCards";
import '../sass/parallax.scss';


const Parallax = props => {
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
            <div style={{  display: "flex", flexDirection: "column", margin: "0 auto", zIndex: "600", height:"100%", position: "relative", background: "whitesmoke"}}>
                <div className="cleanbreak">
                    <div className="cleanbreakdiv">
                        <h1>Have Confidence In Who You Hire...</h1>
                        <p>We are a family owned and family operated business
                            with highly trained professionals prepared to meet all
                            of your painting and powerwashing needs.</p>
                    </div>
                     <img src={featuredImage1} alt="" />
                </div>
                <div className="clean">
                
                    <img src={featuredImage2} alt="" />
                    <div className="cleandiv">
                        <h1>Nobody Compares In Service...</h1>
                        <p>Our experienced professionals provide the highest
                            quality service with the best products on the market to
                            make your space the place you’ve always dreamed of.</p>
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
export default Parallax;

