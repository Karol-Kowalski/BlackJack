import { Deck } from './Deck.js'
import { Player } from './Player.js';
import { Table } from './Table.js';

class Game {
  constructor({player, table, hitButton, standButton, playerPoints, dealerPoints}) {
    this.hitButton = hitButton;
    this.standButton = standButton;
    this.playerPoints = playerPoints;
    this.dealerPoints = dealerPoints;

    this.player = player;
    this.dealer = new Player('Krupier');

    this.table = table,
    this.deck = new Deck();
    this.deck.shuffle();
  }

  run() {
    this.hitButton.addEventListener('click', (event) => this.hitCard())
    this.standButton.addEventListener('click', (event) => this.dealerPlays())
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

    this.playerPoints.innerHTML = this.player.calculatePoints();
    this.dealerPoints.innerHTML = this.dealer.calculatePoints();
  }

  hitCard() {
    const playerCard = this.deck.pickOne()
    this.player.hand.addCard(playerCard);
    this.table.showPlayerCard(playerCard);

    this.playerPoints.innerHTML = this.player.calculatePoints();
  }

  dealerPlays() {
    while(this.dealer.points <= this.player.points && this.dealer.points <= 21 && this.player.points <21) {
      let dealerCard = this.deck.pickOne();
      this.dealer.hand.addCard(dealerCard);
      this.table.showDealerCard(dealerCard);
      this.dealerPoints.innerHTML = this.dealer.calculatePoints();
    }

    this.endTheGame();
  }

  endTheGame() {
    this.hitButton.removeEventListener('click', (ecent) => this.hitCard())
    this.standButton.removeEventListener('click', (ecent) => this.dealerPlays())
    
    if(this.player.points < 21 && this.player.points == this.dealer.points) {
      console.log('remis');
      return
    }

    if(this.player.points > 21) {
      console.log('wygrywa dealer');
      return
    }

    if(this.dealer.points > 21) {
      console.log('wygrywa player');
      return
    }

    if(this.player.points < this.dealer.points) {
      console.log('wygrywa dealer');
    }
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
  dealerPoints: document.getElementById('dealerPoints'),
  playerPoints: document.getElementById('playerPoints'),
  player,
  table
});

game.run();