import React from "react";
import video from "../../assets/Hero-mp4.mp4";

import "./HeroStyles.css";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div>
      <video src={video} autoPlay loop muted></video>

      <div className="content">
        <h1>Travel Galaxies</h1>
        <p>
          No one shall be subjected to arbitrary arrest, detention or exile.
          Everyone is entitled in full equality to a fair and public hearing by
          an independent and impartial tribunal, in the determination of his
          rights and obligations and of any criminal charge against him.
        </p>

        <div className="buttons">
            <Link to='/training'>Try Now!</Link>
            <Link to='/training'>Launch!</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
