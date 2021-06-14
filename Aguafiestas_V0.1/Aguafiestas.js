/* Defino Array de posiciones */
const tablero = [
	["o", "x", "x", "x", "x"],
	["o", "x", "o", "o", "x"],
	["o", "x", "x", "x", "x"],
	["x", "x", "x", "o", "o"],
	["x", "x", "x", "x", "x"]
]

/* Creo tablero de la izquierda */
var ContenedorMiTablero = document.createElement('div');
ContenedorMiTablero.id = 'MiTablero';
var MiTablero = document.getElementById('MiTablero'); 
document.body.appendChild(ContenedorMiTablero); 

/* Creo tablero de la derecha */
var ContenedorTableroRival = document.createElement('div');
ContenedorTableroRival.id = 'TableroRival';
var TableroRival = document.getElementById('TableroRival'); 
document.body.appendChild(ContenedorTableroRival); 


/* Pinto Celdas de tablero */
for(var fila=0; fila<5; fila++) {
    for(var columna=0; columna<5; columna++) {

    	var Celda = document.createElement('div');
		Celda.className = 'Celda';
    	ContenedorMiTablero.append(Celda);

    	let p = document.createElement('p')
		Celda.append(tablero[fila][columna], p);
    }
}


/* Una vez creamos todo el codigo hacemos esto */
function Cargado(){

	var i=0;
	var TopeCeldas = document.getElementsByClassName('Celda');

	/* Selecciono todas la celdas */
	while(i < TopeCeldas.length ){

		/* Aqui DEBERIA añadir la variable i como clase, o como name */
		console.log(TopeCeldas[i]);

		i++;
	}
}
