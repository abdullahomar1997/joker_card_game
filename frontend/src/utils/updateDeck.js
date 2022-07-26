export default function updateDeck(card, boardDeck) {
    return boardDeck
        .map((c) => (c.id === card.id ? { ...c, cardVisibility: "inline" } : c))
        .map((c) => (c.id === card.lowerCardId ? { ...c, isPlayable: true } : c))
        .map((c) => (c.id === card.upperCardId ? { ...c, isPlayable: true } : c));
};