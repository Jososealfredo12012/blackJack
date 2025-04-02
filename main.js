const A = [1, 11];
const literal = ["J", "Q", "K"];
let deck = [
  "A",
  "A",
  "A",
  "A",
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  6,
  6,
  6,
  6,
  7,
  7,
  7,
  7,
  8,
  8,
  8,
  8,
  9,
  9,
  9,
  9,
  10,
  10,
  10,
  10,
  "J",
  "J",
  "J",
  "J",
  "Q",
  "Q",
  "Q",
  "Q",
  "K",
  "K",
  "K",
  "K",
];

const crupier = {
  cDeck: deck,
  cHand: [],
  shuffle() {
    let currentIndex = this.cDeck.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [this.cDeck[currentIndex], this.cDeck[randomIndex]] = [
        this.cDeck[randomIndex],
        this.cDeck[currentIndex],
      ];
    }
    return this.cDeck;
  },
  cDraw(){
    this.cHand = this.cDeck.pop()
  },
  give(){
    return this.cDeck.pop()
  }
};

const player = {
  pHand: [],
  hit(){
    pHand = this.pHand.push(crupier.give())
  }
}

crupier.shuffle()

player.hit()
player.hit()
player.hit()
player.hit()
console.log(player.pHand);
