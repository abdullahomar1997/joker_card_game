import React from "react";
import updateDeck from "../../../utils/updateDeck";
import "./UserDeck.css";

const UserDeck = ({ playerCards }) => {
  return (
    <div className="your__cards">
      {playerCards.map((card) => (
        <div className="card leftlap">
          <img
            src={require(`../../../assets/deck/${card.cardName}`)}
            alt="me"
          />
        </div>
      ))}
    </div>
  );
};

export default UserDeck;
