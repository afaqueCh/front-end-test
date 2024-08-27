import React from 'react';
import btton from '../../../assets/images/button/Button.png';
import event1 from '../../../assets/images/cards/event1.png';
import event2 from '../../../assets/images/cards/event2.png';
import event3 from '../../../assets/images/cards/event3.png';

const EventSection = () => {
  const cardData = [
    { title: 'Resturants', image: event1, size: 'small' },
    { title: 'Experiences', image: event2, size: 'large' },
    { title: 'Evemts', image: event3, size: 'small' },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {/* First Column: Heading and Button */}
        <div className="col-md-6 col-lg-4 mb-4 d-flex flex-column justify-content-center">
          <h2 className="text-white" style={{ maxWidth: '256px' }}>
            Curate your experience as you like
          </h2>
          <img src={btton} width={231} height={55} alt="Button" />
        </div>

        {/* Cards */}
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`col-md-3 col-lg-${card.size === 'large' ? 4 : 2} mb-4 d-flex align-items-center justify-content-center`}
          >
            <div className={`card ${card.size === 'large' ? 'larg-card' : 'small-card'}`}>
              <img src={card.image} className="card-img-top" alt={`${card.title} Image`} />
              <div className="card-body">
                <h5 className="card-title text-center py-3 text-white">{card.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
