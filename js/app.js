


var TableroDef = new Tablero();
TableroDef.GenerarGrilla();





// MOSTRAR TABLERO
var tablero = document.getElementById('Tablero');

for (var i = 0; i < 10; i++) {

    for (var j = 0; j < 10; j++) {

        var casillero = document.createElement("div");
        if (TableroDef.casilleros[i][j].mina == true) {
            casillero.style.backgroundColor = 'yellow';
        } 
        if(TableroDef.casilleros[i][j].numero >0){
            casillero.innerHTML = TableroDef.casilleros[i][j].numero;

        }
        casillero.className = "grillaCompleta";
        //casillero.textContent = "l"+(i+1) + " - c" + (j+1);
        tablero.appendChild(casillero);
    }
}







