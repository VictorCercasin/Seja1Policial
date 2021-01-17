import React from "react";
import ReactDOM from "react-dom";

import Facebook from "../../assets/images/facebook-icon.png";
import Whatsapp from "../../assets/images/whatsapp-icon.png";
import Instagram from "../../assets/images/instagram-icon.png";
import Youtube from "../../assets/images/youtube-icon.png";

import "./PageFooter.css";

const PageFooter = (props) => {
  return ReactDOM.createPortal(
    <div className="page-footer">
      <ul>
        <li>
          <a href="https://www.facebook.com/Seja1GCM"><section className="icon"><img src={Facebook} alt="facebook" /></section></a>
        </li>
        <li>
          <a href="https://www.facebook.com/Seja1GCM"><section className="icon"><img src={Whatsapp} alt="whatsapp" /></section></a>
        </li>
        <li>
          <a href="https://www.facebook.com/Seja1GCM"><section className="icon"><img src={Instagram} alt="instagram" /></section></a>
        </li>
        <li>
          <a href="https://www.facebook.com/Seja1GCM"><section className="icon"><img src={Youtube} alt="youtube" /></section></a>
        </li>
      </ul>
    </div>,
    document.getElementById("Footer-hook")
  );
};

export default PageFooter;
