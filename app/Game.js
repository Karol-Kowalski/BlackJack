import { Deck } from './Deck.js'
import { Player } from './Player.js';

class Game {
  constructor({playerCards, dealerCards, player}) {
    this.player = player;
    this.dealer = new Player('Krupier');

    this.playerCards = playerCards;
    this.dealerCards = dealerCards;
    this.deck = new Deck();
    this.deck.shuffle();
  }

  run() {
    this.dealCards();
  }

  dealCards() {
    for (let n=0; n<2; n++) {
      let playerCard = this.deck.pickOne();
      this.player.hand.addCard(playerCard);
      this.playerCards.appendChild(playerCard.render());
      
      let dealerCard = this.deck.pickOne();
      this.dealer.hand.addCard(dealerCard);
      this.dealerCards.appendChild(dealerCard.render());
    }
  }
}

const player = new Player('Karol');
const game = new Game({
  player,
  playerCards: document.getElementById('playerCards'),
  dealerCards: document.getElementById('dealerCards'),
});

game.run();