import Player from './Player.mjs';
import Collectible from './Collectible.mjs';

const socket = io();
const canvas = document.getElementById('game-window');
const context = canvas.getContext('2d');

//

const BG_COLOR = '#231f20';

function init() {
  // context.fillStyle = BG_COLOR;
  // context.fillRect(0, 0, canvas.width, canvas.height)
  document.addEventListener('keydown', keydown);
}

function keydown(e) {
  console.log('hi');
  console.log(e.keyCode);
}

init();
