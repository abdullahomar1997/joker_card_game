import React from "react";
import updateDeck from "../../../utils/updateDeck";
import "./CpuDeck.css";

const CpuDeck = ({ playerCards, players, setPlayers }) => {
  const OnCardPlayedHandler = (card) => {
    let temp = [...players];

    temp = automate(0, temp, card);

    for (let i = 1; i < temp.length; ++i) {
      let index = (i + 1) % temp.length;

      console.log(index);
      let random = getRandom(temp[index].length);
      let cpuCard = temp[index][random];
      temp = automate(i, temp, cpuCard);
    }

    setPlayers(temp);
  };

  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  };

  const automate = (index, temp, card) => {
    let n = 0;

    for (let i = 0; i < temp.length; ++i) {
      if (temp[i].includes(card)) {
        break;
      }
      n += 1;
    }

    temp[index] = [...temp[index], card];

    for (let i = 0; i < temp[index].length; ++i) {
      for (let j = 0; j < temp[index].length; ++j) {
        if (
          i !== j &&
          temp[index][i].cardNumber === temp[index][j].cardNumber
        ) {
          temp[index] = [...temp[index]].filter(
            (s) => s.cardNumber !== card.cardNumber
          );
        }
      }
    }

    temp[n] = [...temp[n]].filter((s) => s !== card);

    return temp;
  };

  return (
    <div className="your__cards">
      {playerCards.map((card) => (
        <div className="card leftlap" onClick={() => OnCardPlayedHandler(card)}>
          <img
            // src={require(`../../../assets/deck/${card.cardName}`)}
            src={require(`../../../assets/deck/black_joker.png`)}
            alt="me"
          />
        </div>
      ))}
    </div>
  );
};

export default CpuDeck;
