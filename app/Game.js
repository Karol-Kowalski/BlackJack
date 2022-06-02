import { Deck } from './Deck.js'
import { Player } from './Player.js';
import { Table } from './Table.js';

class Game {
  constructor({player, table, hitButton, standButton}) {
    this.hitButton = hitButton;
    this.standButton = standButton;
    this.player = player;
    this.dealer = new Player('Krupier');

    this.table = table,
    this.deck = new Deck();
    this.deck.shuffle();
  }

  run() {
    this.hitButton.addEventListener('click', (event) => this.hitCard())
    this.dealCards();
  }

  dealCards() {
    for (let n=0; n<2; n++) {
      let playerCard = this.deck.pickOne();
      this.player.hand.addCard(playerCard);
      this.table.showPlayerCard(playerCard);
      
      let dealerCard = this.deck.pickOne();
      this.dealer.hand.addCard(dealerCard);
      this.table.showDealerCard(dealerCard);
    }
  }

  hitCard() {
    const playerCard = this.deck.pickOne()
    this.player.hand.addCard(playerCard);
    this.table.showPlayerCard(playerCard);
  }
}

const table = new Table({
  playerCards: document.getElementById('playerCards'),
  dealerCards: document.getElementById('dealerCards'),
})
const player = new Player('Karol');
const game = new Game({
  hitButton: document.getElementById('hit'),
  standButton: document.getElementById('stand'),
  player,
  table
});

game.run();