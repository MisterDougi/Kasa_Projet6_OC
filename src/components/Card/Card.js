import React from "react";
import { Link } from "react-router-dom";
export default function Card({ card }) {
  return (
    <div className="cardContainer">
      <Link to={"/logement/" + card.id}>
        <div className="cardImg">
          <img src={card.cover} alt={card.title} />
        </div>
        <h3>{card.title}</h3>
      </Link>
    </div>
  );
}
