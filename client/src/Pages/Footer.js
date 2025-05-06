import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import main_log from "../Assets/mainLogo.jpeg"
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="logo-section">
            {/* <img src={main_log} width={"250px"} height={"300vh"}/> */}
          </div>
        </div>

        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li className="services">Live Trading</li>
            <li className="services">Classes</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CONTACT US</h4>
          <ul>
            <li>
              <a
              className="anchor"
                // href="https://wa.me/8886184253"
                target="_blank"
                rel="noopener noreferrer"
              >
                whatsApp
              </a>
            </li>
            <li>
              <a
              className="anchor"
                // href="mailto:royaltradercherry@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gmail
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <div style={{ textAlign: "center" }}>
        <h5 className="media-text">Follow us on:</h5>
        <a
          // href="https://www.instagram.com/royaltradercherry?igsh=ZnFoanRjdmoxeGZz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="footer-icons" />
        </a>

        <a
          // href="https://www.facebook.com/people/royaltradercherry/61564518043303/?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookRoundedIcon className="footer-icons facebook-icon" />
        </a>

        <a
          // href="https://t.me/ROYALTRADERCHERRY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon className="footer-icons" />
        </a>

        <a
          // href="https://www.youtube.com/@royaltradercherrry"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon className="footer-icons facebook-icon" />
        </a>
        {/* <div className="copyright">©Copyright. All rights reserved.</div> */}
      </div>
    </footer>
  );
};

export default Footer;
