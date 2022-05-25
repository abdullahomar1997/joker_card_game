import shuffleArray from "./shuffleArray";

export default function assignCards(numPlayers, cards) {

    const cardIndexes = [];

    for (let i = 0; i < cards.length; ++i) {
        cardIndexes.push(i);
    }

    let shuffledCardIndexes = shuffleArray(cardIndexes);

    let n = cards.length - 1;

    while (n >= 0) {
        for (let j = 0; j < numPlayers; ++j) {
            if (n >= 0) {
                cards[shuffledCardIndexes[n]].player = j.toString();
                n -= 1;
            }
        }
    }
    return cards;

}