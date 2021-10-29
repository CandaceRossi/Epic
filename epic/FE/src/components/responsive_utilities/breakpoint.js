import React from "react";
import PropTypes from 'prop-types';
import MediaQuery from "react-responsive";


const breakpoints = {
    largest: '(min-width: 1281px)',
    desktop: '(min-width: 981px) and (max-width: 1280px)',
    tablet: '(min-width: 737px) and (max-width: 980px)',
    phone: '(min-width: 481px) and (max-width: 736px)',
    mini:'(max-width: 480px)'
};
const { string, object } = PropTypes;
export default function Breakpoint(props) {
    const breakpoint = breakpoints[props.name] || breakpoints.largest;
    return (  <MediaQuery {...props }
        query = { breakpoint } > { props.children } </MediaQuery>  
    );
}

React.PropTypes = {
    name: string,
    children: object,
}