import React, { Component } from "react";
import classnames from "classnames";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import '../../sass/navbars.scss';
import epiclogo from "../../images/EPIClogo final.png"

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
                           <img className="logoimg"  src={epiclogo} alt="logo"/>
                             </a>
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