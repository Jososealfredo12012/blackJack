const A = [1,11]
const literal = ['J','Q','K']
let deck = ['A','A','A','A',2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,'J','J','J','J','Q','Q','Q','Q','K','K','K','K']

const crupier = {
  cDeck: deck,
  shuffle(){
  let currentIndex = this.cDeck.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [this.cDeck[currentIndex], this.cDeck[randomIndex]] = [
      this.cDeck[randomIndex], this.cDeck[currentIndex]];
  }
  return this.cDeck
}
}

console.log(crupier.cDeck);
console.log(crupier.shuffle());
console.log(crupier.cDeck);




