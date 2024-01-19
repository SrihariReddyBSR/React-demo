import React from "react";
import AboutImg from "../../assets/About-img.jpg";
import "./HeroStyles.css";

const About = ({heading}) => {
  return (
    <>
      <h1 className="heading">{heading}</h1>

      <section className="about">
        <img src={AboutImg} alt="" />
        <div className="about-cont">
          <h2>Explore the entire Galaxy</h2>
          <p>
            Motion Background Stock Video Footage - 24,382 royalty free stock
            videos matching motion background Motion Background Stock Video
            Footage - 24,382 royalty free stock videos matching motion
            background
          </p>
          <p>
            Motion Background Stock Video Footage - 24,382 royalty free stock
            videos matching motion background Motion Background Stock Video
            Footage - 24,382 royalty free stock videos matching motion
            background Motion Background Stock Video Footage - 24,382 royalty
            free stock videos matching motion background
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
