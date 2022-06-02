import { Deck } from './Deck.js'
import { Player } from './Player.js';

const player = new Player();
const deck = new Deck();
deck.shuffle();
console.log(deck);
