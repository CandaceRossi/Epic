import React from "react";
import PropTypes from 'prop-types';
import MediaQuery from "react-responsive";


const breakpoints = {
    desktop: '(min-width: 1025px)',
    tablet: '(min-width: 718px) and (max-width: 1024px)',
    phone: '(max-width: 717px)',
};
const { string, object } = PropTypes;
export default function Breakpoint(props) {
    const breakpoint = breakpoints[props.name] || breakpoints.desktop;
    return (  <MediaQuery {...props }
        query = { breakpoint } > { props.children } </MediaQuery>  
    );
}

React.PropTypes = {
    name: string,
    children: object,
}