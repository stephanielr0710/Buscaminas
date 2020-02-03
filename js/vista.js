class Vista {
    constructor(controlador){
        this.controlador = controlador;
    }
    mostrarTablero(){
        var tablero = document.getElementById('Tablero');
        for(let i = 0; i < 10; i++) {

            for (let j = 0; j < 10; j++) {

                //creamos div element
                let casillero = document.createElement("div");
                casillero.setAttribute("fil", i);
                casillero.setAttribute("col", j);
                
                let contextoVista = this; // es para que no se pise para que apunte a la vista
                casillero.className = "grillaCompleta";
                tablero.appendChild(casillero);
                casillero.addEventListener("click", function () {
                   // console.log(i,j);
                    let casillaClickeada = contextoVista.controlador.tablero.casilleros[i][j];

                    if (casillaClickeada.mina == true){
                        casillero.style.backgroundImage = "url(../imagenes/ImagenBombaExplotada.jpg)";
                        casillero.style.backgroundSize = 'cover';
                        casillero.style.backgroundRepeat = 'no-repeat';
                        
                        for (let l = 0; l < 10; l++) {
                            for (let v = 0; v < 10; v++) {
                                let hayBomba = contextoVista.controlador.tablero.casilleros[l][v].mina;
                                if (hayBomba == true){
                                   // document.querySelector('[fil="' + l + '"][col="' + v + '"]').style.backgroundColor = "#000000";// armamos un texto con variables
                                    let otraBomba = document.querySelector('[fil="' + l + '"][col="' + v + '"]');
                                   // otraBomba.style.backgroundImage = "url(../imagenes/ImagenBombaExplotada.jpg)";
                                    otraBomba.style.backgroundImage = "url(../imagenes/boom2.jpeg)";
                                    otraBomba.style.backgroundSize = 'cover';
                                    otraBomba.style.backgroundRepeat = 'no-repeat';
                                    
                                    
                                }
                            }
                        } 
                       setTimeout(()=>alert('GAME OVER!!!!!'), 200);
                    }else{
                        casillero.style.backgroundColor = "#BBBBBB";
                        casillero.innerHTML = casillaClickeada.numero;
                        casillaClickeada.mostrado = true;
                        
                    }
                    

                    

                    // switch (e.target.textContent) {
                    //     case "1":
                    //         e.target.style.backgroundColor = "#000000";
                    //         //e.target.style.background-image="imagenes/ImagenBomba.jpg";
                    //         break;
                    //     case "2":
                    //         e.target.style.backgroundColor = "#BBBBBB";
                    //         break;
                    //     default:
                    //         e.target.style.backgroundColor = "#EEEEEE";
                    //         break;
                    // }
                });

            }
        }

    }
}

