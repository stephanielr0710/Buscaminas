var Tablero = function () {
    this.casilleros = [];
}


var mostrarArray = function (array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }

}

Tablero.prototype.GenerarGrilla = function() {
    var array = [];
    for (var i = 0; i < 10; i++) {
        array[i] = [];
        for (var j = 0; j < 10; j++) {
            array[i][j] = new Casilla(false, 0, true);
        }
    }
    this.casilleros = array; 
    this.GenerarMinas();
    this.GenerarNumeros();
}

Tablero.prototype.GenerarMinas = function(){ 
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

Tablero.prototype.GenerarNumeros = function () {

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            this.casilleros[i][j].numero = this.obtenerNumero(i, j);


        }
    }
}

Tablero.prototype.obtenerNumero = function (k, m) {
    var cantidadMinasAlrededor = 0;
    var filaDesde = k-1;
    var filaHasta = k+1;
    var columnaDesde = m-1;
    var columnaHasta = m+1;
    
    if(filaDesde<=0){
        filaDesde=0;
    }
    if (filaHasta >= 9) {
        filaHasta = 9;
    }

    if (columnaDesde <= 0) {
        columnaDesde = 0;
    }
    if (columnaHasta >= 9) {
        columnaHasta = 9;
    }

    for (var i = filaDesde; i <= filaHasta; i++) {// recorro la fila
        for (var j = columnaDesde; j <= columnaHasta; j++) {// recorro la columna alrededor de la posicion recibida
            if(this.casilleros[i][j].mina){
                cantidadMinasAlrededor++;
            }

        }
    }
    return cantidadMinasAlrededor;
}

