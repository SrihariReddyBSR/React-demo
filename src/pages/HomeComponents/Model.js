import React from "react";
import { FaTimes } from "react-icons/fa";

const Model = ({handleClick}) => {
  return (
    <div className="overlay">
      <div className="model">
        <div className="cross">
          <FaTimes style={{color:"white"}} size={25} onClick={handleClick}/>
        </div>
        <h1>
          A galaxy is a system of stars, stellar remnants, interstellar gas,
          dust, and dark matter bound together by gravity.
        </h1>
      </div>
    </div>
  );
};

export default Model;
