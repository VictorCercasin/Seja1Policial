import React from "react";
import ReactDOM from "react-dom";

import Facebook from "../../assets/images/facebook-icon.png";
import Whatsapp from "../../assets/images/whatsapp-icon.png";
import Instagram from "../../assets/images/instagram-icon.png";
import Youtube from "../../assets/images/youtube-icon.png";
import "./PageFooter.css";

const PageFooter = (props) => {
  return ReactDOM.createPortal(
    <div class="footer-basic">
      <footer>
        <div class="social">
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
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Menu Inicial</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Serviços</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Sobre</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Termos de uso</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Politica de privacidade</a>
          </li>
        </ul>
        <p class="copyright">Developed by Codifica Jr</p>
      </footer>
    </div>,
    document.getElementById("footer-hook")
  );
};

export default PageFooter;
