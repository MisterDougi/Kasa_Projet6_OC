import React from "react";
import data from "../../data.json";
import Card from "../Card/Card";

const listCards = data.map((card /*un objet dans le json*/) => (
  <Card
    key={card.id}
    cardImg={card.cover}
    cardTitle={card.title}
    cardId={card.id}
    card={card}
  />
));
export default function ListCards() {
  return <div className="cardList">{listCards}</div>;
}
