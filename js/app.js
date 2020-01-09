


var TableroDef = new Tablero();
TableroDef.GenerarGrilla();

var tablero = document.getElementById('Tablero');

for (var i = 0; i < 10; i++) {

    for (var j = 0; j < 10; j++) {

        var casillero = document.createElement("div");
        casillero.className = "grillaCompleta";
        //casillero.textContent = "l"+(i+1) + " - c" + (j+1);
        tablero.appendChild(casillero);
    }
}





