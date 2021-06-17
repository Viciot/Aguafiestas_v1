/* Defino Array de posiciones */
const myTablero = [
	[1, 0, 0, 0, 0],
	[1, 0, 2, 2, 0],
	[1, 0, 0, 0, 0],
	[0, 0, 0, 3, 3],
	[0, 0, 0, 0, 0]
]
const rivalHits = []
const myShips = {
	1: 3,
	2: 2,
	3: 2
}

const tableroRival = [
	[1, 1, 1, 0, 0],
	[0, 0, 0, 2, 2],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 3],
	[0, 0, 0, 0, 3]
]
const myHits = []
const rivalShips = {
	1: 3,
	2: 2,
	3: 2
}

let turnCounter = 1
function iAmHit(event) {
	const shipId = event.target.getAttribute("data-ship-id")
	console.log("You clicked  " + shipId)
	if (shipId > 0) {
		rivalHits.push(shipId)
		event.target.classList.add("hit", "ship")
	} else {
		event.target.classList.add("hit", "water")
	}
	console.log("rivalHits: ", rivalHits)
	countRivalHits();
}

function rivalIsHit(event) {
	const shipId = event.target.getAttribute("data-ship-id")
	console.log("You clicked  " + shipId)
	if (shipId > 0) {
		myHits.push(shipId)
		event.target.classList.add("hit", "ship")
	} else {
		event.target.classList.add("hit", "water")
	}
	console.log("myHits: ", myHits)
	countMyHits();
}


// Count the number of repetitions of each number.
function countMyHits() {
	const myHitShips = {}
	myHits.forEach(hit => {
		if (myHitShips[hit]) {
			myHitShips[hit]++;
		} else {
			myHitShips[hit] = 1;
		}
	})

	for (let ship in myHitShips) {
		if (myHitShips[ship] >= rivalShips[ship]) {
			console.log(`You sunk ship number: ${ship}`)
		}
	}
}

	function countRivalHits() {
		const rivalHitShips = {}
		rivalHits.forEach(hit => {
			if (rivalHitShips[hit]) {
				rivalHitShips[hit]++;
			} else {
				rivalHitShips[hit] = 1;
			}
		})

		for (let ship in rivalHitShips) {
			if (rivalHitShips[ship] >= myShips[ship]) {
				console.log(`You sunk ship number: ${ship}`)
			}
		}
	}

/* Una vez creamos todo el codigo hacemos esto */
function Cargado() {

	/* Creo tablero de la izquierda */
	let ContenedorMiTablero = document.createElement('div');
	ContenedorMiTablero.id = 'MiTablero';
	ContenedorMiTablero.addEventListener("click", iAmHit)
	document.body.appendChild(ContenedorMiTablero);

	/* Creo tablero de la derecha */
	let ContenedorTableroRival = document.createElement('div');
	ContenedorTableroRival.id = 'TableroRival';
	ContenedorTableroRival.addEventListener("click", rivalIsHit)
	document.body.appendChild(ContenedorTableroRival);


	/* Pinto Celdas de MiTablero */
	for (let fila = 0; fila < 5; fila++) {
		for (let columna = 0; columna < 5; columna++) {

			let Celda = document.createElement('div');
			Celda.className = 'Celda';
			Celda.setAttribute("data-ship-id", myTablero[fila][columna])
			ContenedorMiTablero.append(Celda);

			let p = document.createElement('p')
			Celda.append(myTablero[fila][columna] ? "o" : "x", p);			
		}
	}

	/* Pinto Celdas de tableroRival */
	for (let fila = 0; fila < 5; fila++) {
		for (let columna = 0; columna < 5; columna++) {

			let Celda = document.createElement('div');
			Celda.className = 'Celda';
			Celda.setAttribute("data-ship-id", tableroRival[fila][columna])
			ContenedorTableroRival.append(Celda);

			let p = document.createElement('p')
			Celda.append(tableroRival[fila][columna] ? "o" : "x", p);
		}
	}
startGame()

}


function startGame() {
if (turnCounter % 2 === 0){	
	const freeCells = document.querySelectorAll("#myTablero.Celda").filter( element => !element.classList.contains("hit"))
	const randomIndex = Math.floor(Math.random() * freeCells.length)
	freeCells[randomIndex].click
}
}


	 window.addEventListener("load", Cargado)