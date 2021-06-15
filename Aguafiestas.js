/* Defino Array de posiciones */
const myTablero = [
	[1, 0, 0, 0, 0],
	[1, 0, 2, 2, 0],
	[1, 0, 0, 0, 0],
	[0, 0, 0, 3, 3],
	[0, 0, 0, 0, 0]
]
const rivalHits = []

const tableroRival = [
	[1, 1, 1, 0, 0],
	[0, 0, 0, 2, 2],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1],
	[0, 0, 0, 0, 1]
]
const myHits = []


function iAmHit(event) {
	const shipId = event.target.getAttribute("data-ship-id")
	console.log("You clicked  " + shipId)
	if (shipId > 0) {
		rivalHits.push(shipId)
	}
	console.log("rivalHits: ", rivalHits)
}

function rivalIsHit(event) {
	const shipId = event.target.getAttribute("data-ship-id")
	console.log("You clicked  " + shipId)
	if (shipId > 0) {
		myHits.push(shipId)
	}
	event.target.classList.add("hit")
	console.log("myHits: ", myHits)
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

			let p = document.createElement('p')
			Celda.append(myTablero[fila][columna] ? "o" : "x", p);
			ContenedorMiTablero.append(Celda);
		}
	}

	/* Pinto Celdas de tableroRival */
	for (let fila = 0; fila < 5; fila++) {
		for (let columna = 0; columna < 5; columna++) {

			let Celda = document.createElement('div');
			Celda.className = 'Celda';
			Celda.setAttribute("data-ship-id", myTablero[fila][columna])
			ContenedorTableroRival.append(Celda);

			let p = document.createElement('p')
			Celda.append(tableroRival[fila][columna] ? "o" : "x", p);
		}
	}

}

window.addEventListener("load", Cargado)