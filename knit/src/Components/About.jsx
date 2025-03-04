import React from "react";
import vid1 from "../assets/vid1.mp4";


import "./About.css";

export const About = () => {
  return (
    <>
      <br />
      <br />
      <section className="aboutus" id="aboutus">
        <div className="row">
          <div className="col50">
            <h2 className="titletext">
              <span>A</span>
              bout us
            </h2>
            <p className="para">
              <br />
              <br /> Welcome to Knitflixx and Chill, where every stitch tells a
              story and every creation is crafted with love and dedication.
              <br /> At
              Knitflixx and Chill, we specialize in creating customized crochet
              creations that add a touch of whimsy and charm to your everyday
              life. 
              <br />From delicate crochet flowers that bloom with vibrant colors
              to adorable bag charms that make a statement, we offer a range of
              handcrafted treasures designed to bring joy and inspiration to our
              customers.
              <br />Thank you for choosing Knitflixx and Chill for all your
              crochet needs. We're honored to be a part of your story and can't
              wait to bring a little bit of handmade magic into your life.
            </p>
          </div>
          <div className="col50">
            <div className="vidBx">
              <video autoPlay loop muted className="back-video1">
                <source src={vid1} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
