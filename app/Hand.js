import { Deck } from './Deck.js'

export class Hand {
  constructor() {
    this.cards = [];
  }
  
  addCard(card) {
  this.cards.push(card);
  }
}