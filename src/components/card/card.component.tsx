import React, { Component } from "react";
import "./card.styles.css";
import { Monster } from "../../App";

type CardMonster = {
  monster: Monster;
};
const Card = ({ monster }: CardMonster) => {
  const { name, id, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <h2>{email}</h2>
    </div>
  );
};

export default Card;
