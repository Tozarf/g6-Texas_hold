class Deck {
  numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  suits = ["♣", "♦", "♥", "♠"];

  cards = [];

  constructor() {
    this.createNewDeck();
  }

  dispatchCards = (size, playersNumber = 5) => {
    if (size * playersNumber > this.cards.length) {
      this.createNewDeck();
    }

    return new Array(size)
      .fill()
      .map(
        () =>
          this.cards.splice(parseInt(Math.random() * this.cards.length), 1)[0]
      );
  };

  createNewDeck = () => {
    this.cards = [];
    this.suits.forEach((suit) => {
      this.numbers.forEach((face) => {
        this.cards.push(face + suit);
      });
    });
  };
}

class Hand {
  cards = [];
  constructor(deck, size) {
    this.cards = deck.dispatchCards(size);
  }
}

module.exports = { Deck, Hand };
