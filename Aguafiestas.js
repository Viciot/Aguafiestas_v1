/* Defino Array de posiciones */
const myTablero = [
	[1, 0, 0, 0, 0],
	[1, 0, 2, 2, 0],
	[1, 0, 0, 0, 0],
	[0, 0, 0, 3, 3],
	[4, 4, 4, 4, 0]
]
const rivalHits = []
const myShips = {
	1: 3,
	2: 2,
	3: 2,
	4: 4
}

const tableroRival = [
	[1, 1, 1, 0, 0],
	[0, 4, 0, 2, 2],
	[0, 4, 0, 0, 0],
	[0, 4, 0, 0, 3],
	[0, 4, 0, 0, 3]
]
const myHits = []
const rivalShips = {
	1: 3,
	2: 2,
	3: 2,
	4: 4
}

let turnCounter = 1

function iAmHit(event) {
	const shipId = event.target.getAttribute("data-ship-id")
	console.log("You hit  " + shipId)
	if (shipId > 0) {
		rivalHits.push(shipId)
		event.target.classList.add("hit", "ship")
	} else {
		event.target.classList.add("hit", "water")
	}
	console.log("rivalHits: ", rivalHits)
	if(countMyHits() >= 4) alert("I WON THE BATTLE!!!")
}

function rivalIsHit(event) {
	const shipId = event.target.getAttribute("data-ship-id")
	console.log("You hit  " + shipId)
	if (shipId > 0) {
		myHits.push(shipId)
		event.target.classList.add("hit", "ship")
	} else {
		event.target.classList.add("hit", "water")
	}
	console.log("myHits: ", myHits)
	turnCounter++
	setTimeout(machinePlay, 1000 )
	if(countRivalHits() >= 4) alert("I LOST THE BATTLE!!!")
}


// Count the number of repetitions of each number.
function countMyHits() {
	let sunkShips = 0
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
			sunkShips++
		}
	}
	return sunkShips
}

	function countRivalHits() {
		let sunkShips = 0
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
				sunkShips++
			}
		}
		return sunkShips
	}

/* Una vez creamos todo el codigo hacemos esto */
function Cargado() {

	/* Creo tablero de  ariba */
	const contenedorTableroRival = document.createElement('div');
	contenedorTableroRival.id = 'tableroRival';
	contenedorTableroRival.addEventListener("click", rivalIsHit)
	document.body.appendChild(contenedorTableroRival);

	/* Creo tablero de abajo */
	const contenedormyTablero = document.createElement('div');
	contenedormyTablero.id = 'myTablero';
	contenedormyTablero.addEventListener("click", iAmHit)
	document.body.appendChild(contenedormyTablero);


	/* Human player shoot/paint to cells in tableroRival */
	for (let fila = 0; fila < 5; fila++) {
		for (let columna = 0; columna < 5; columna++) {
			let celda = document.createElement('div');
			celda.className = 'celda';
			celda.setAttribute("data-ship-id", myTablero[fila][columna])
			contenedormyTablero.append(celda);
			let p = document.createElement('p')
			//celda.append(myTablero[fila][columna] ? "o" : "x", p);			
		}
	}

	/* Machine shoots/paint to cells in myTablero */
	for (let fila = 0; fila < 5; fila++) {
		for (let columna = 0; columna < 5; columna++) {
			let celda = document.createElement('div');
			celda.className = 'celda';
			celda.setAttribute("data-ship-id", tableroRival[fila][columna])
			contenedorTableroRival.append(celda);
			let p = document.createElement('p')
			celda.append(tableroRival[fila][columna] ? "o" : "x", p);
		}
	}
	setTimeout(machinePlay, 1000) // Put this under a start button!
}


function machinePlay() {
 
if (turnCounter % 2 === 1){	
	const allCells = Array.from(document.querySelectorAll("#myTablero .celda"))
	const freeCells = allCells.filter( element => !element.classList.contains("hit"))
	const randomIndex = Math.floor(Math.random() * freeCells.length)
	freeCells[randomIndex].click()
}
turnCounter++
}


	 window.addEventListener("load", Cargado)