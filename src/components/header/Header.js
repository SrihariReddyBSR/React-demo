import React from "react";
import headerImg from "../../assets/slide-1.jpg";
import './Header.css'

const Header = ({heading}) => {
  return (
    <>
      <section
        className="header"
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "fixed",
        }}
      >
        <h1 className="heading">{heading}</h1>
        <p>
          mars and other all planets are rotating to around the sun and these
          circulaton keeps moving until the it have gravity.
        </p>
      </section>
    </>
  );
};

export default Header;
