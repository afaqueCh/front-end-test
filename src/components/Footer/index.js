import React from "react";
import appStore from "../../assets/images/AppStore.png";
import googleStore from "../../assets/images/GoogleStore.png";
import logo from "../../assets/images/grovelog.png";
import ball from "../../assets/icons/ball.png";
import instagram from "../../assets/icons/instagram.png";
import tiktok from "../../assets/icons/tiktok.png";
import twitter from "../../assets/icons/twitter.png";
import mask from "../../assets/icons/Mask Group.png";
import visa from "../../assets/icons/VISA.png";
import mastercard from "../../assets/icons/mastercard.png";

const Footer = () => {
  return (
    <footer
      className="text-white py-5"
      style={{ borderTop: "solid 1px #ffff" }}
    >
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <h2 style={{ maxWidth: "500px" }}>
              Join us for an unforgettable experience
            </h2>
          </div>
          <div className="col-md-6 text-md-end">
            <p>DOWNLOAD THE GROVES APP</p>
            <div className="d-flex flex-column align-items-md-end">
              <div className="d-        flex">
                <a href="#app-store" className="mb-2">
                  <img src={appStore} alt="App Store" width={148} height={49} />
                </a>
                <a href="#google-play">
                  <img
                    src={googleStore}
                    alt="Google Play Store"
                    width={148}
                    height={49}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          {/* Location Section */}
          <div className="col-md-4 mb-3 mb-md-0">
            <strong>LOCATION</strong>
            <address>
              Al Hizam Park
              <br />
              Al-Sermiri, Yanbu Al Bahr 46455
              <br />
              Riyadh, Saudi Arabia
            </address>
          </div>

          {/* Working Hours Section */}
          <div className="col-md-4 mb-3 mb-md-0">
            <strong> WORKING HOURS</strong>
            <p>
              Sun until Thurs: 4:00PM
              <br />
              Fri & Sat: 2:30PM
            </p>
            <strong>Gates Close at:</strong>
            <p>
              Sat until Wed: 12:00AM
              <br />
              Thu & Fri: 12:30AM
            </p>
          </div>

          {/* Guest Services Section */}
          <div className="col-md-4 mb-3 mb-md-0">
            <strong>GUEST SERVICE CALL</strong>
            <p>
              cc@thegroves-sa.com
              <br />
              9200001672
              <br />
              +966556631309
            </p>
          </div>
        </div>

        {/* Logo and Social Icons */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-6">
            <img src={logo} alt="Grove Logo" width={286} height={65} />
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#tiktok" className="text-white me-2">
              <img src={tiktok} alt="Grove Logo" />
            </a>
            <a href="#instagram" className="text-white me-2">
              <img src={instagram} alt="Grove Logo" />
            </a>
            <a href="#twitter" className="text-white me-2">
              <img src={twitter} alt="Grove Logo" />
            </a>
            <a href="#ball" className="text-white">
              <img src={ball} alt="Grove Logo" />
            </a>
          </div>
        </div>

        {/* Final Row */}
        <div className="row text-center text-md-start">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            <div>
              <a href="#terms" className="text-white me-3">
                Terms and Conditions
              </a>
              <a href="#privacy" className="text-white me-3">
                Privacy Policy
              </a>
              <p className="mb-0 d-inline-block">Copyright 2024</p>
            </div>
            <div className="d-flex align-items-center">
              <a href="#visa" className="text-white me-2">
                <img src={visa} alt="Visa" width={40} />
              </a>
              <a href="#mastercard" className="text-white me-2">
                <img src={mastercard} alt="Mastercard" width={40} />
              </a>
              <a href="#mask" className="text-white me-2">
                <img src={mask} alt="Mask" width={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
