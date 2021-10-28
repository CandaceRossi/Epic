import React from 'react';
import Breakpoint from './breakpoint';
export default function MiniBreakpoint(props) {
    return ( <Breakpoint name = "mini" > { props.children } </Breakpoint>);
    }
