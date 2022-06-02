import { Card } from './Card.js'

const card = new Card('A', 'hearts');
document.getElementById('playerCards').appendChild(card.render());