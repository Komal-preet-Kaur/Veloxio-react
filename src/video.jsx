import React from 'react';
import './cars.css';

const VideoBackground = () => {
  return (
    <section className="video-background">
      <video autoPlay loop muted>
        <source src="car-video3.mp4" type="video/mp4" />
        {/* Fallback message in case video is unsupported */}
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoBackground;
