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
}

/*Tablero.prototype.GenerarMinas = function(){//FALTA TERMINARLA
    Tablero.forEach(function(casilleros){
        [0][0] = (true, 0, false);
    }
        
    });*/