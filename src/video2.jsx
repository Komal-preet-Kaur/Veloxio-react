import React from 'react';
import './cars.css';

const VideoBackground2 = () => {
  return (
    <>
      <br /><br /><br />

      <section className="video-background">
        <video autoPlay loop muted>
          <source src="car-video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <br /><br />
    </>
  );
};

export default VideoBackground2;
