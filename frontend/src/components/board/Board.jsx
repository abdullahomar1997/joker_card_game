import React, { useEffect, useState } from "react";
import "./Board.css";
import MyDeck from "./userDeck/UserDeck";
import CpuDeck from "./cpuDeck/CpuDeck";
import Played from "./played/Played";
import cards from "../../constants/cards";
import assignCards from "../../utils/assignCards";
import shuffleArray from "../../utils/shuffleArray";
import createPlayers from "../../utils/createPlayers";

const Board = () => {
  const [players, setPlayers] = useState(createPlayers(4, cards()));

  // useEffect(() => {
  //   for (let l = 0; l < players.length; ++l) {
  //     let sample = players[l];

  //     for (let i = 0; i < sample.length; ++i) {
  //       for (let j = 0; j < sample.length; ++j) {
  //         if (i !== j && sample[j] !== null) {
  //           if (sample[i].cardNumber === sample[j].cardNumber) {
  //             sample[i].cardNumber = 0;
  //             sample[j].cardNumber = 0;
  //           }
  //         }
  //       }
  //     }

  //     players[l] = sample.filter((s) => s.cardNumber === 0);
  //   }
  //   setPlayers(players);
  // }, []);

  return (
    <div className="container board__container">
      <CpuDeck
        players={players}
        setPlayers={setPlayers}
        playerCards={players[3]}
      />
      <CpuDeck
        players={players}
        setPlayers={setPlayers}
        playerCards={players[2]}
      />
      <CpuDeck
        players={players}
        setPlayers={setPlayers}
        playerCards={players[1]}
      />
      <MyDeck
        playerCards={players[0]}
        players={players}
        setPlayers={setPlayers}
      />
    </div>
  );
};

export default Board;
