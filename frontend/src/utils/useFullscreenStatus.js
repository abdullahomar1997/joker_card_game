import React from "react";

export default function useFullscreenStatus(elRef) {
    const [isFullscreen, setIsFullscreen] = React.useState(
        document[getBrowserFullscreenElementProp()] != null
    );

    const setFullscreen = () => {
        if (elRef.current == null) return;

        elRef.current
            .requestFullscreen()
            .then(() => {
                setIsFullscreen(document[getBrowserFullscreenElementProp()] != null);
            })
            .catch(() => {
                setIsFullscreen(false);
            });
    };

    React.useLayoutEffect(() => {
        document.onfullscreenchange = () =>
            setIsFullscreen(document[getBrowserFullscreenElementProp()] != null);

        return () => (document.onfullscreenchange = undefined);
    });

    return [isFullscreen, setFullscreen];
}

function getBrowserFullscreenElementProp() {
    if (typeof document.fullscreenElement !== "undefined") {
        return "fullscreenElement";
    } else if (typeof document.mozFullScreenElement !== "undefined") {
        return "mozFullScreenElement";
    } else if (typeof document.msFullscreenElement !== "undefined") {
        return "msFullscreenElement";
    } else if (typeof document.webkitFullscreenElement !== "undefined") {
        return "webkitFullscreenElement";
    } else {
        throw new Error("fullscreenElement is not supported by this browser");
    }
}


// import React, { useEffect, useState } from "react";
// import "./Board.css";
// import MyDeck from "./userDeck/UserDeck";
// import Played from "./played/Played";
// import cards from "../../constants/cards";
// import assignCards from "../../utils/assignCards";
// import shuffleArray from "../../utils/shuffleArray";

// const Board = () => {
//     const [playedcards, setPlayedCards] = useState([]);
//     const [playedcards1, setPlayedCards1] = useState(
//         new Map([
//             ["player 2", null],
//             ["player 1", null],
//         ])
//     );
//     const [player1Cards, setPlayer1Cards] = useState([]);
//     const [player2Cards, setPlayer2Cards] = useState([]);
//     const [player3Cards, setPlayer3Cards] = useState([]);
//     const [player4Cards, setPlayer4Cards] = useState([]);
//     const [deck, setDeck] = useState(shuffleArray(cards()));

//     useEffect(() => {
//         let createPlayer1Cards = [];
//         let createPlayer2Cards = [];
//         let createPlayer3Cards = [];
//         let createPlayer4Cards = [];

//         for (let i = 0; i < 13; i++) {
//             createPlayer1Cards.push(deck.pop());
//             createPlayer2Cards.push(deck.pop());
//             createPlayer3Cards.push(deck.pop());
//             createPlayer4Cards.push(deck.pop());
//         }
//         // createPlayer1Cards.push(deck.pop());

//         setDeck(deck);
//         setPlayer1Cards(createPlayer1Cards);
//         setPlayer2Cards(createPlayer2Cards);
//         setPlayer3Cards(createPlayer3Cards);
//         setPlayer4Cards(createPlayer4Cards);
//         console.log(createPlayer1Cards);
//     }, []);

//     return (
//         <div className="container board__container">
//             {/* <Played playedcards={playedcards1} /> */}

//             {/* <MyDeck playerCards={player4Cards} />
//       <MyDeck playerCards={player3Cards} />
//       <MyDeck playerCards={player2Cards} /> */}

//             <MyDeck
//                 playerCards={player1Cards}
//                 player2Cards={player2Cards}
//                 playedcards={playedcards1}
//                 setPlayedCards={setPlayedCards1}
//                 setPlayerCards={setPlayer1Cards}
//                 setPlayer2Cards={setPlayer2Cards}
//                 deck={deck}
//                 setDeck={setDeck}
//             />
//         </div>
//     );
// };

// export default Board;
