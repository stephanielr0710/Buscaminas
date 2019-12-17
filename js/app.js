var Tablero = function(casilleros){
      this.casilleros = casilleros;
}

var Casilla = function(mina, numero, vacio){
    this.mina = mina;
    this.numero = numero;
    this.vacio = vacio;
}

var casilla1 = new Casilla(true, 0, false);




var array = [[casilla1, casilla1, casilla1],[casilla1, casilla1, casilla1], [casilla1, casilla1, casilla1]];

var tablero1 = new Tablero(array)

// var recorrerArray = function(){
//     for(i=0; i < array.length; i++){
//         console.log(array[i]);
//     }
    
// }




