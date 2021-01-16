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
    drawerIsOpen && closeDrawerHandler();
    !drawerIsOpen && openDrawerHandler();
  };
  return (
    <React.Fragment>
      <Button onClick={buttonHandler} id='user-button'>
        <img src={userIconImg} id="user-icon"></img>
      </Button>
      {drawerIsOpen && <UserDrawer closeDrawer={closeDrawerHandler} />}
    </React.Fragment>
  );
};
export default UserIcon;
