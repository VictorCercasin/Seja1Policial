import React, { useState } from "react";

import Button from "./../../UIElements/Button";
import userIconImg from "./../../../assets/images/userIcon.png";
import UserDrawer from "./UserDrawer";
import "./UserIcon.css";

const UserIcon = (props) => {
  const [drawerIsOpen, changeDrawerIsOpen] = useState(false);
  const closeDrawerHandler = () => {
    changeDrawerIsOpen(false);
  };
  const openDrawerHandler = () => {
    changeDrawerIsOpen(true);
  };
  const buttonHandler = () => {
    drawerIsOpen ? closeDrawerHandler() : openDrawerHandler();
  };
  return (
    <div id='user-icon'>
      <Button onClick={buttonHandler} id='user-button'>
        <img src={userIconImg} id="user-icon"></img>
      </Button>
      {drawerIsOpen && <UserDrawer/>}
    </div>
  );
};
export default UserIcon;
