    let valorDelproducto = 0;
    let cantidadDeCuotas = 0;

    function obtenerValoresCompra (){ 
        valorDelproducto = prompt("Ingresar el monto de la compra 💰");
        cantidadDeCuotas = prompt("Ingresar la cantidad de cuotas (3, 6, 12)");
    }
    function calcularMonto( valorDelproducto, cantidadDeCuotas ){
        
        let procentajeInteres;
        let valorFinal;
        let valorDeLasCuotas;

        if( cantidadDeCuotas == 1) {
            procentajeInteres = 0;
        } else if (cantidadDeCuotas == 3){
            procentajeInteres = 0.25;
        } else if (cantidadDeCuotas == 6){
            procentajeInteres = 0.45;
        } else if (cantidadDeCuotas == 12){
            procentajeInteres = 0.80;
        }
        
        valorFinal = ( parseFloat(procentajeInteres) * parseInt(valorDelproducto) ) + parseInt(valorDelproducto);
        valorDeLasCuotas =  valorFinal / cantidadDeCuotas;
        
        console.log("% Interes: ",procentajeInteres);
        console.log("Valor Final: ",valorFinal);
        console.log("Valor de las cuotas ", valorDeLasCuotas);
        
        alert("Elegiste pagarlo en " + cantidadDeCuotas + " cuotas de $ " + valorDeLasCuotas.toFixed(2) + ", por lo tanto el valor final del producto te quedo en : $ " + valorFinal.toFixed(2) );
    }

    obtenerValoresCompra();
    calcularMonto(valorDelproducto, cantidadDeCuotas);

function reiniciarProceso() {
    let reiniciar = confirm("¿Deseas reiniciar el proceso para ingresar nuevos valores?");
    if (reiniciar) {
        valorDelproducto = 0;
        cantidadDeCuotas = 0;
        obtenerValoresCompra();
        calcularMonto(valorDelproducto, cantidadDeCuotas);
        reiniciarProceso();
        alert("Gracias por utilizar nuestro servicio.");
    }
}

obtenerValoresCompra();
calcularMonto(valorDelproducto, cantidadDeCuotas);

reiniciarProceso();