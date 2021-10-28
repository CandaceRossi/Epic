import React from 'react';
import Breakpoint from './breakpoint';
export default function LargestBreakpoint(props) {
    return ( <Breakpoint name = "largest" > { props.children } </Breakpoint>);
    }
