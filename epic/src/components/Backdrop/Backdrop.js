import React from "react";

const Backdrop = props =>  {
    console.log("backdrop is runnin n all")
    return (
<div onClick={props.bdclick} className="backdrop" /> 

)}

export default Backdrop;