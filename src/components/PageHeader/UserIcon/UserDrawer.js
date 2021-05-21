import React, { useContext } from "react";

import DrawerLinks from "./DrawerLinks";
import "./UserDrawer.css";


const UserDrawer = props => {
    return (
        <div id='user-drawer' onClick={props.closeDrawer} onMouseLeave={props.closeDrawer} >
            <DrawerLinks/>
        </div>
    )
}
export default UserDrawer;