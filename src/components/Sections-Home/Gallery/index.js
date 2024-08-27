import React from 'react';
import './index.css';
import cardImg1 from '../../../assets/images/cards/gallery1.png';
import cardImg2 from '../../../assets/images/cards/gallery2.png';
import cardImg3 from '../../../assets/images/cards/gallery3.png';
import cardImg4 from '../../../assets/images/cards/gallery4.png';
import button1 from '../../../assets/images/Button.png';

const CardLayout = () => {
  const cardData = [
    { title: 'Tittle Krazy', image: cardImg1, size: 'large' },
    { title: 'Hawanim', image: cardImg2, size: 'small' },
    { title: 'Picnic Market', image: cardImg3, size: 'large' },
    { title: 'Lucawo', image: cardImg4, size: 'small' },
  ];

  return (
    <section className="container mt-4">
      <div className="row mb-5">
        <div className="col-12 text-white">
          <h2 style={{maxWidth:'750px'}}>Book General Access ticket and enjoy the attractions for free</h2>
        </div>
        <div className="col-12">
          <img src={button1} alt="Book Now" className="img-fluid" />
        </div>
      </div>
      <div className="row">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`col-md-6 col-lg-${card.size === 'large' ? 4 : 2} mb-4 d-flex align-items-center justify-content-center`}
          >
            <div className={`card ${card.size === 'large' ? 'larg-card' : 'small-card'}`}>
              <img src={card.image} className="card-img-top img-fluid" alt={`${card.title} Image`} />
              <div className="card-body text-center">
                <h5 className="card-title text-white">{card.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardLayout;
