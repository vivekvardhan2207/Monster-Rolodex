import React from "react";
import "./cardlist.style.css";
import { Card } from "../Card/card.component.jsx";

export const CardList = props => {
  return (
    <div className="cardlist">
      {props.monsters.map(monster => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};
