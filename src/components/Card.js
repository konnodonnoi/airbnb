import React from "react";

const Card = () => {
  return (
    <div className="Card">
      <img
        src="../../images/katie.png"
        alt="imageofkatie"
        className="Card--image"
      />
      <div className="Card--stats">
        <img
          src="../../images/star.png"
          alt="starimage"
          className="Card--star"
        />
      </div>
      <div>
        <span>5.0</span>
        <span className="gray">(6) * </span>
        <span className="gray">USA</span>
        <p>Life lessons with Katie Zaferes</p>

        <p><span className="bold">From $136</span> / person</p>
        
      </div>
    </div>
  );
};

export default Card;
