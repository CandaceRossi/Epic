import React, { Component } from "react";
import classnames from "classnames";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import '../sass/navbars.scss';

export default class TopNavComp extends Component {
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
   render() {
        return (
            <div>
            
                <nav className={classnames({
                    "topNav--hidden": !this.state.visible
                }, "topNav")}>
                    <div className="navsort"> 
                    <div className="toolbartoggle-button">
                        <DrawerToggleButton click={this.props.click}/>
                    </div>
                        <a href="/" className="sortnav">
                            <div className="titlestyle"><h1>EPIC</h1></div>
                             </a>
                            <div className="sorting">
                            <div className="titlestyle2">
                                <h3>PAINTING &</h3>
                                <h3>POWERWASHING</h3>
                            </div>
                            </div>
                         <div className="spacer" />
                         <div className="titlestyle3">
                        <p>Servicing South West Florida Area</p>
                        <p>Phone: (239)-826-4326 </p>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}