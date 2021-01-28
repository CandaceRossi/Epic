import React, { Component } from "react";
import classnames from "classnames";
import TopNavComp from "./TopNavComp";
import NavbarComp from "./NavbarComp";
import Sidenav from "./Sidenav";
import {useMediaQuery} from "react-responsive";


export default class NavContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

isDesktopOrLaptop = () => { useMediaQuery(
    {minDeviceWidth: 1224},
    {deviceWidth: 1600}
)
}
 
isMobile = () => {  useMediaQuery(
    {minDeviceWidth: 300},
    {deviceWidth: 500}
)
}
    render() {
        return (
            <div className={classnames("navCont", {
                "navCont--hidden": !this.state.visible
            })}>
                <TopNavComp />
                <NavbarComp />
            </div>
        );
    }
}