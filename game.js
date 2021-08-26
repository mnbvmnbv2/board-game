const gameWindowEl = document.getElementById('gameWindow');

const tiles = [
	'Start ->',
	'Opening road',
	'Welcome street',
	"Wendy's place",
	'Friendly place',
	'Mark V. House',
	'Expensive Boulevard',
	'Grandma',
	'Luxury Avenue',
	'Soap Fabric',
	'Upper District',
	'Christina Hills',
	'Villa Stradivari',
	'Amati',
	'Guernerius',
	'Home',
];

const player1 = {
	icon: '🚕',
	spot: 0,
};
const order = [0, 1, 2, 3, 4, 5, 7, 9, 15, 14, 13, 12, 11, 10, 8, 6];

for (el of tiles) {
	let a = document.createElement('div');
	a.classList.add('tile');
	let p = document.createElement('h4');
	p.innerHTML = el;
	a.appendChild(p);
	let occupants = document.createElement('h5');
	a.appendChild(occupants);
	gameWindowEl.appendChild(a);
}

const occSpaces = $.find('h5');
occSpaces[player1.spot].innerHTML = player1.icon;

const diceEl = document.getElementById('dice');
const diceResultEl = document.getElementById('diceResult');

function rollDice() {
	let diceNum = Math.floor(Math.random() * 3) + 1;
	diceResultEl.innerHTML = diceNum;
	let newSpot = order[(order.indexOf(player1.spot) + diceNum) % 16];
	occSpaces[player1.spot].innerHTML = '';
	player1.spot = newSpot;
	occSpaces[player1.spot].innerHTML = player1.icon;
}

diceEl.addEventListener('click', rollDice);
