import React from 'react';

const Rev = () => {

    return (
        <div className="component-list">
            <div className="revbody">
                <div className="reveal">
                    <div className="reveal-container">
                        <div className="reveal_title">
                            Epic Paint & Construction
          </div>
                        <div className="reveal_title-overlay">
                            <div className="reveal_title-overlay-value">
                                Subscribe!
            </div>
                        </div>
                    </div>
                    {/* <img src={palm} alt="palms" /> */}
                </div>
            </div>
        </div>

    )
}
export default Rev;

//     .revbody {
//     width: 100vw;
//     display: flex;
//     align - items: center;
//     justify - content: flex - start;
//     position: absolute;
//     z - index: 1;
//     left: 90px;
//     top: 2.3 %;
// }

//             .reveal {
//     width: 220px;
//     height: 85px;
//     border - radius: 3px;
//     // border: 2px solid #fff;
//     transform: scale(0.9);
//     transition: transform 0.4s cubic - bezier(0, 0, 0.3, 1);
//     position: relative;
//     cursor: pointer;
// }

//             .reveal:: before {
//     content: "";
//     display: block;
//     position: absolute;
//     left: 10px;
//     top: 12px;
//     width: calc(100 % - 20px);
//     height: calc(100 % - 20px);
//     background: #dfcdc3;
//     box - shadow: 0 0 12px 6px #000;
//     border - radius: 50 %;
//     transition: transform 0.4s cubic - bezier(0, 0, 0.3, 1), opacity 0.4s cubic - bezier(0, 0, 0.3, 1);
//     opacity: 0.4;
// }
//             /* .reveal img {
//             width: 300px;
//             height: 375px;
//             position: relative;
//         } */

//             .reveal: hover {
//     transform: scale(1);
// }
//             /* .reveal:hover::before {
//             transform: translateY(12px);
//             opacity: 0.2;
//         }
//          */

//             .reveal_title,
//             .reveal_title - overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100 %;
//     height: 100 %;
//     font - size: 18px;
//     color: #000;
//     font - family: Verdana, Geneva, Tahoma, sans - serif;
//     font - style: italic;
//     font - weight: bold;
//     z - index: 1;
//     display: flex;
//     align - items: center;
//     justify - content: center;
// }

//             .reveal_title - overlay {
//     overflow: hidden;
//     top: calc(50 % - 50px);
//     background - image: url("../src/images/palmtrees.jpg");
//     height: 105px;
//     width: 305px;
//     left: 50 %;
//     z - index: 2;
//     color: #fff;
//     font - size: 16px;
//     transition: transform 0.4s cubic - bezier(0, 0, 0.3, 1);
//     transform: translate(-150 %) skew(-30deg);
// }

//             .reveal_title - overlay - value {
//     width: 100 %;
//     text - align: center;
//     transition: transform 0.4s cubic - bezier(0, 0, 0.3, 1);
//     transform: translateX(-110 %) skew(30deg);
// }

//             .reveal: hover.reveal_title - overlay {
//     transform: translateX(-50 %) skew(-30deg);
// }

//             .reveal: hover.reveal_title - overlay - value {
//     transform: skew(30deg);
// }

//             .reveal - container {
//     width: 100 %;
//     height: 100 %;
//     overflow: hidden;
//     position: absolute;
//     top: 0;
//     left: 0;
// }
