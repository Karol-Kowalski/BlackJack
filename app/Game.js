import { Deck } from './Deck.js'
import { Player } from './Player.js';
import { Table } from './Table.js';

class Game {
  constructor({player, table}) {
    this.player = player;
    this.dealer = new Player('Krupier');

    this.table = table,
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
      this.table.showPlayerCard(playerCard.render());
      
      let dealerCard = this.deck.pickOne();
      this.dealer.hand.addCard(dealerCard);
      this.table.showDealerCard(dealerCard.render());
    }
  }
}

const table = new Table({
  playerCards: document.getElementById('playerCards'),
  dealerCards: document.getElementById('dealerCards'),
})
const player = new Player('Karol');
const game = new Game({
  player,
  table
});

game.run();