import React from 'react';
import classNames from "classnames";
import TestimonialCards from "../Cards/TestimonialCards";
import '../../sass/parallax.scss';


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
const homeContent = props.homeContent;
const projContent = props.projContent;
const missContent = props.missContent;


    return (
        <>
        { homeContent ?
            <div >
                <div className="cleanbreakdesktop">
                    <div className="cleanbreakdiv">
                        <h1>Have Confidence In Who You Hire...</h1>
                        <p>We are a family owned and family operated business
                            with highly trained professionals prepared to meet all
                            of your painting and powerwashing needs.</p>
                    </div>
                     <img src={featuredImage1} alt="" />
                </div>
                <div className="cleandesktop">
                
                    <img src={featuredImage2} alt="" />
                    <div className="cleandiv">
                        <h1>Nobody Compares In Service...</h1>
                        <p>Our experienced professionals provide the highest
                            quality service with the best products on the market to
                            make your space the place you’ve always dreamed of.</p>
                    </div>
                </div> 
               </div> 
            : null }

                 { projContent ? 
                
        <div style={{  display: "flex", flexDirection: "column", margin: "0 auto", zIndex: "600", height:"100%", position: "relative", background: "whitesmoke"}}>
            <div className="cleanbreak">
                    <div className="cleanbreakdiv">
                        <h1>Keeping up with Advances in Technology...</h1>
                        <p>We do our utmost to stay informed in new technologies. We use color matching software to
                        make dull, fading surfaces look as bright and fresh as the first day they were painted. Choose colors that match any color anywhere, from a throw pillow to your favorite shirt.</p>
                    </div>
                     <img src={featuredImage1} alt="" />
                </div>
                <div className="clean">
                
                    <img src={featuredImage2} alt="" />
                    <div className="cleandiv">
                        <h1>Thousands of Colors to Choose From....</h1>
                        <p>We know that people change their minds when deciding on beautiful colors for their spaces, and we are happy to offer full support during your decision making process. We provide
                        an up to date fan deck of colors and paint samples in any color spectrum that you can imagine to ensure you
                        pick the right color for your project.</p>
                    </div>
                </div> 
                </div> 
                : null }

              { missContent ? 
             
                 <div>
                <div className="cleanbreak">
                    <div className="cleanbreakdiv">
                        <h1>No Matter the Size of the Project...</h1>
                        <p>We know that projects can seem overwhelming and we work hard to take the pressure of of you!
                        We work directly with you to ensure we handle all of your concerns and questions, no matter the size of the project!</p>
                    </div>
                     <img src={featuredImage1} alt="" />
                </div>
                <div className="clean">
                
                    <img src={featuredImage2} alt="" />
                    <div className="cleandiv">
                        <h1>Excellent Customer Service...</h1>
                        <p>It is our pleasure to provide you with excellent customer service and to meet your satisfaction
                        in every project we do. We never skip steps in our work and always leave the project in better condition than the way we found it!</p>
                    </div>
                </div>
            </div> 
            
            : null }

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
            <div className="parallaxes"> </div> 
            : null }
            
          
    
        </>
    )  
}

export default Parallax;

