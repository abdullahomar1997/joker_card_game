import getCardNumber from "../utils/getCardNumber";

const cards = () => {

    const cardValues = [
        "ace",
        "king",
        "queen",
        "jack",
        "10",
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
    ];

    const cardSigns = ["spades", "clubs", "diamonds", "hearts"];

    const cards = [];

    let index = 0;

    for (let i = 0; i < cardValues.length; ++i) {

        for (let j = 0; j < cardSigns.length; ++j) {

            const card = {
                id: index,
                cardName: cardValues[i] + "_of_" + cardSigns[j] + ".png",
                cardNumber: getCardNumber(cardValues[i]),
            }

            cards.push(card)
            index += 1;
        }
    }

    const joker = {
        id: 55,
        cardName: "joker.png",
        cardNumber: 100,

    }

    cards.push(joker);

    return cards;

}

export default cards;