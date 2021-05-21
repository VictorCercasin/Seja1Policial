import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Button from "./../../UIElements/Button";
import userIconImg from "./../../../assets/images/userIcon.png";
import UserDrawer from "./UserDrawer";
import { AuthContext } from "./../../context/auth-context";
import "./UserIcon.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserIcon = (props) => {
  const [drawerIsOpen, changeDrawerIsOpen] = useState(false);
  const auth = useContext(AuthContext);

  const arrowDownIcon = <FontAwesomeIcon icon={faAngleDown} className='userIcon'></FontAwesomeIcon>

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
    <div>
      {(auth.loginStatus === "logado" || auth.loginStatus === "admin") && (
        <div style={{display: 'flex',}}>
        <button onClick={buttonHandler} className="button" style={{display: 'flex', alignItems: 'center'}}> 
          <img src={userIconImg} id="user-icon"></img>
          <p id="user-text">olá usuário <br/> minha conta</p>
          {arrowDownIcon}
        </button>
        
        </div>
      )}
      {auth.loginStatus === "deslogado" && (
        <Link to="/login" style={{display: 'flex', alignItems: 'center'}}>
          <img src={userIconImg} id="user-icon"></img>
          <p id="user-text">entre ou crie<br/>uma conta</p>
          {arrowDownIcon}
        </Link>
      )}

      {drawerIsOpen && <UserDrawer closeDrawer={closeDrawerHandler} />}
    </div>
  );
};
export default UserIcon;
