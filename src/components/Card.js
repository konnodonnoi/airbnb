import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <img
        src={`../../images/${props.img}`}
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
        <span>{props.rating}</span>
        <span className="gray">{props.reviewCount} * </span>
        <span className="gray">{props.country}</span>
        <p>{props.title}</p>

        <p>
          <span className="bold">{props.price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
