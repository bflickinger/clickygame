//Card component
import React from "react";
import "./Card.css";

//Render all 16 images
const Card = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".png", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default Card;