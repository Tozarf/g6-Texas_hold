const express = require("express");
const app = express();
const { Deck, Hand } = require("./public/deck");
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
const deck = new Deck();
let table = deck.dispatchCards(5);
app.get("/table", (req, res) => {
  console.log(table);
  res.json(table);
});

app.get("/getDeck", (req, res) => {
  const hands = [];
  hands.push(new Hand(deck, +2));
  return res.json({
    hands: hands.map((hand) => hand.cards),
    deck: table.cards,
  });
});

app.listen(4001, () => {
  console.log("Server running on port 4001");
});
