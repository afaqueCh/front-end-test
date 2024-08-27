import React from 'react';
import arrow from '../../../assets/images/Path 41541.png';
import './index.css';

const TicketCard = () => {
  return (
    <section className="container my-5 ticketcard">
      <div className="row">
        <div className="col-12">
          <div className="p-4 text-white d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="text-center text-md-start">
              <strong className="d-block mb-2">25 SR/Guest</strong>
              <h2 className="card-title">Get your general access ticket</h2>
              <p className="card-text mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <img src={arrow} alt="Arrow" className="img-fluid mt-4 mt-md-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketCard;
