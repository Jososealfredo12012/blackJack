const ps = require("prompt-sync");

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
  cDraw() {
    this.cHand.push(crupier.cDeck.pop());
  },
  give() {
    return this.cDeck.pop();
  },
};

const player = {
  pHand: [],
  hit() {
    pHand = this.pHand.push(crupier.give());
  },
};

console.log("Vamos a jugar BlackJack");
console.log("El crupier va a barajar");
crupier.shuffle();
console.log("Ahora va a entregar las cartas");
player.hit();
crupier.cDraw();
player.hit();
crupier.cDraw();

function totalValue(hand = []) {
  let total = 0
  hand.forEach(element => {
    if (literal.includes(element)) {
      total = total + 10
    } else if (typeof element === 'number') {
      total = total + element
    } else if (element === 'A') {
      if ((total + 11) <= 21) {
        total = total + 11
      } else if ((total + 11) > 21) {
        total = total + 1
      }
    }
  });
  return total
}

let playerTotal = totalValue(player.pHand);
let crupierTotal = totalValue(crupier.cHand);

console.log(`tus cartas son ${player.pHand.join(', ')} para un total de ${playerTotal}`);
console.log(`las cartas del crupier son ${crupier.cHand.join(', ')} para un total de ${crupierTotal}`);

function playerChoice() {
  console.log('1. hit');
  console.log('2 stay');
  const ps = require("prompt-sync")
  const prompt = ps()
  while (true) {
      let choice = prompt('Elige una opcion: ')   
      if (choice === '1' || choice === '2') {
          return Number(choice)
      } else{
          console.log('???');
      }
  }
}

console.log(playerChoice());
