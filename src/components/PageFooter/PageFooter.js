import React from "react";
import ReactDOM from "react-dom";

import Facebook from "../../assets/images/facebook-icon.png";
import Whatsapp from "../../assets/images/whatsapp-icon.png";
import Instagram from "../../assets/images/instagram-icon.png";
import Youtube from "../../assets/images/youtube-icon.png";
import "./PageFooter.css";

const PageFooter = () => {
  return ReactDOM.createPortal(
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="#">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="#">
            <img src={Whatsapp} alt="whatsapp" />
          </a>
          <a href="#">
            <img src={Youtube} alt="youtube" />
          </a>
        </div>

        <p className="copyright">
          Seja1Policial © 2021 Todos os direitos reservados
        </p>
      </footer>
    </div>,
    document.getElementById("footer-hook")
  );
};

export default PageFooter;
