import React from 'react';
import video1 from '../assets/banner1.mp4';

export const Bg = () => {
  return (
    <>
      <video autoPlay loop muted className="back-video">
        <source src={video1} type="video/mp4"/>
      </video>
    </>
  );
};
