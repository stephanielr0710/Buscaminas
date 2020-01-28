const newGame = () => {
// MOSTRAR TABLERO
var tablero = document.getElementById('Tablero');
// creamos un array que contiene las posiciones de las minas
var minaPosition = [];

for (var i = 0; i < 10; i++) {

    for (var j = 0; j < 10; j++) {

        //crete div element
        var casillero = document.createElement("div");
        // creamos en el DOM, agregamos como atributo las posiciones
        casillero.setAttribute("_x", i);
        casillero.setAttribute("_y", j);
        // si es una mina
        if (TableroDef.casilleros[i][j].mina == true) {
            // enviamos la posicion para la variable mina posición
            minaPosition.push([i + 1, j + 1]);
            //agregamos el evento de click en donde hay una mina
            casillero.addEventListener("click", () => {
                // si encontramos una mina mostramos las posiciones de las otras
                minaPosition.forEach( item => {
                    try{
                        document.querySelector(`[_x="${item[0]}"][_y="${item[1]}"]`).click()
                    }catch(e){

                    }
                })
            })
        }
        casillero.addEventListener("click", function (e) {
            switch (e.target.textContent){
                case "1" :
                    e.target.style.backgroundColor = "#000000"; 
                break;
                case "2" :
                    e.target.style.backgroundColor = "#BBBBBB"; 
                break;
                default:
                    e.target.style.backgroundColor = "#EEEEEE"; 
                break;
            }
        });
        
       /*
        if (TableroDef.casilleros[i][j].mina == true) {
            //casillero.style.backgroundColor = 'yellow';
            casillero.addEventListener("click", function(e){
                e.target.style.backgroundColor = "yellow"
                e.target.style.color = "#000000";
                setTimeout(() => {
                    alert("GAME OVER!!!!!")
                    document.querySelector("#Tablero").innerHTML = "";
                    newGame() 
                }, 700);
                
            })
        } 
        */

        if(TableroDef.casilleros[i][j].numero >0){
            casillero.innerHTML = TableroDef.casilleros[i][j].numero;

        }
        casillero.className = "grillaCompleta";
        //casillero.textContent = "l"+(i+1) + " - c" + (j+1);
        tablero.appendChild(casillero);
    }
}

}





var TableroDef = new Tablero();
TableroDef.GenerarGrilla();
newGame()