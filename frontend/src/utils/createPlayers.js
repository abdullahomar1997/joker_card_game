import shuffleArray from "./shuffleArray";

export default function createPlayers(numPlayers, cards2) {

    let players = [];

    for (let i = 0; i < numPlayers; ++i) {
        players.push([]);
    }

    let cards = shuffleArray(cards2);
    let n = cards.length - 1;


    while (n >= 0) {
        for (let i = 0; i < players.length; ++i) {
            if (n >= 0) {
                players[i].push(cards[n])
                n -= 1;
            }
        }
    }

    for (let l = 0; l < players.length; ++l) {
        let sample = players[l];

        for (let i = 0; i < sample.length; ++i) {
            for (let j = 0; j < sample.length; ++j) {
                if (i !== j && sample[j] !== null) {
                    if (sample[i].cardNumber === sample[j].cardNumber) {
                        sample[i].cardNumber = 0;
                        sample[j].cardNumber = 0;
                    }
                }
            }
        }

        players[l] = sample.filter((s) => s.cardNumber !== 0);
    }

    return players;

}