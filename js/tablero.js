var Tablero = function () {
    this.casilleros = [];
}


var mostrarArray = function (array) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }

}

Tablero.prototype.GenerarGrilla = function() {
    var array = [];
    for (i = 0; i < 10; i++) {
        array[i] = [];
        for (j = 0; j < 10; j++) {
            array[i][j] = new Casilla(false, 0, true);
        }
    }
    this.casilleros = array; 
    this.GenerarMinas();
}

Tablero.prototype.GenerarMinas = function(){ //FALTA TERMINARLA
    // como convertir una casilla en una mina manualmente this.casilleros[0][0].mina = true;

   /*Opcion hecha con el for para entender for (var i = 0; i < 10; i++){
        var randomFila = Math.floor(Math.random() * 10);
        var randomColumna = Math.floor(Math.random() * 10);
        this.casilleros[randomFila][randomColumna].mina = true;*/
    var minas = 10;

    while ( minas > 0){
        var randomFila = Math.floor(Math.random() * 10);
        var randomColumna = Math.floor(Math.random() * 10);
        if (this.casilleros[randomFila][randomColumna].mina == false) {
        this.casilleros[randomFila][randomColumna].mina = true;
        minas -= 1;
        }
    }
    console.log(this.casilleros);
}
