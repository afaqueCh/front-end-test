import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Logo from '../../assets/images/logo/PHOTO-2021-06-16-18-42-19_copy_2.png';
import Instagram from '../../assets/icons/instagram.png';
import Tiktok from '../../assets/icons/tiktok.png';
import Twitter from '../../assets/icons/twitter.png';
import Flag from '../../assets/icons/Flag.png';
import Snapchat from '../../assets/icons/snapchat.png';
import Select from '../../assets/icons/selection.svg';
import HeaderImage from '../../assets/images/headerimages/header.png';
import TogglerIcon from '../../assets/icons/toggler.svg';
import CloseIcon from '../../assets/icons/toggler.svg';
import registration from '../../assets/images/button/registration.png';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="navbar-section py-2 border-bottom border-light" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm d-flex justify-content-between align-items-center">
              <img src={Logo} alt='logo' style={{ width: '150px' }} />
              <button className="navbar-toggler d-lg-none" type="button" onClick={handleToggle} aria-controls="navbarNav" aria-expanded={isNavOpen} aria-label="Toggle navigation">
                <img src={isNavOpen ? CloseIcon : TogglerIcon} alt="toggle icon" />
              </button>
            </div>
            <div className="col-sm d-none d-lg-flex justify-end align-items-center">
              <ul className="d-flex list-unstyled mb-0">
                <li className="mx-2"><img src={Tiktok} alt="tiktok icon" /></li>
                <li className="mx-2"><img src={Instagram} alt="Instagram icon" /></li>
                <li className="mx-2"><img src={Twitter} alt="Twitter icon" /></li>
                <li className="mx-2"><img src={Snapchat} alt="Snapchat icon" /></li>
              </ul>
              <button type="button" className="btn mx-3 btn-small" style={{ backgroundColor: '#d2b06b', color: 'white' }}>Log in</button>
              <div className="d-flex align-items-center">
                <img src={Select} alt="select icon" className="mx-2" />
                <img src={Flag} alt="Flag icon" className="mx-2" />
                <span className="mx-2 text-white">English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className={`navbar navbar-expand-lg navbar-dark border-bottom border-light py-2 ${isNavOpen ? 'show' : ''}`} style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
        <div className="container">
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Dine with us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Plan your visit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">VIEW GROVES MAP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">OUR STORY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="header-section text-white py-5" style={{ backgroundImage: `url(${HeaderImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#0F1500', height: '500px', position: 'relative' }}>
        <div className="overlay-half-section"></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 mb-3">The new era of luxury</h1>
              <p className="lead mb-4">Discover the endless possibilities and unforgettable experiences that await you at our venue.</p>
              <img src={registration} width={299} height={55} alt="registration button" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
