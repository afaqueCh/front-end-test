import React from 'react';
import './index.css';
import icon from '../../../assets/video/Polygon 1.png';

const VideoSection = () => {
  return (
    <section className="container my-5">
      <h2 className="mb-4 text-white text-center" style={{fontSize:'50px'}}>Mall Of: Endless Possibilities</h2>
      <div className="mx-auto text-center mb-4" style={{ maxWidth: '800px' }}>
        <p className="text-white">
          This is a paragraph that provides some details below the heading. You can add more text here to describe the content. 
          This is a paragraph that provides some details below the heading. You can add more text here to describe the content.
        </p>
      </div>
      
      <div className="position-relative">
        <img src={require('../../../assets/video/videoimage.png')} alt="Video placeholder" className="w-100 h-auto" />
        <div className="play-icon">
          <img src={icon} alt="Play icon" className="w-50" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
