import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import locationImage from '../../../assets/images/map.png'
import openButton from '../../../assets/images/button/OpenButton.png'

const LocationSection = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img
            src={locationImage}
            alt="Location or Earth Path"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column h-100 justify-content-center text-white">
            <strong className="d-block mb-3">Experience with Grove</strong>
            <h2 className="mb-3">Find Your Place</h2>
            <p className="mb-4">
              Discover the perfect spot for you with our detailed maps and guides. Whether you're exploring new locations or finding your way around, we provide the tools you need to make the most of your experience.
            </p>
            <img
            src={openButton}
            width={232}
            height={55} 

          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
