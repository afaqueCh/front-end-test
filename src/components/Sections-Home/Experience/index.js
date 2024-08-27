import React from 'react';
import exp1 from '../../../assets/images/cards/exp1.png';
import exp2 from '../../../assets/images/cards/exp2.png';
import exp3 from '../../../assets/images/cards/exp3.png';
import exp4 from '../../../assets/images/cards/exp4.png';
import arrow from '../../../assets/images/Path 41541.png';
import './index.css';

const ExperienceSection = () => {
  const cards = [
    { title: 'Vida Versa', badge: '100 SP Guest', image: exp1 },
    { title: 'Zama Zulu', badge: '100 SP Guest', image: exp2 },
    { title: 'Khawaja Yamni', badge: '100 SP Guest', image: exp3 },
    { title: 'Yamagata', badge: '100 SP Guest', image: exp4 },
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-4 text-white">
        <h2>Experience the Finest Cuisine</h2>
        <p className="mt-3">
          This is a paragraph that provides some details below the heading. You can add more text here to describe the
          content.
        </p>
      </div>
      <div className="row g-4">
        {cards.map((card, index) => (
          <div key={index} className="col-lg-6 col-md-12">
            <div className="card experience-card h-60">
              <img src={card.image} className="card-img-top p-3" alt={`Card ${index + 1}`} />
              <div className="card-body">
                <div className="p-3 text-white d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="text-white">{card.title}</h5>
                    <strong className="badge cardBadge me-2 text-white" style={{ lineHeight: '20px' }}>
                      {card.badge}
                    </strong>
                  </div>
                  <img src={arrow} alt="arrow icon" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
