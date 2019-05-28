/* Código de regaño.js FOR */
/*
const numeroInicio = parseInt(prompt("Número inicial: "));
const numeroFinal = parseInt(prompt("Número final: "));
var msgOut = "";
if ((!/^([0-9])*$/.test(numeroInicio))||(!/^([0-9])*$/.test(numeroFinal))){
	alert("Algún valor introducido no es un número");
      		 
}else if(numeroFinal<numeroInicio){
	alert("El numero final debe ser mayor al inicial, intenta de nuevo...");
             
}else{
let totalDinero = 0;
for (let contador = numeroInicio; contador <= numeroFinal; contador++){
	       		
    msgOut += ("Número: " + contador + "\n");
}
}
alert(msgOut);
*/
/* Código de calcular semanas para Bajar de Peso */

const pesoActual = parseInt(prompt("Peso actual: "));
const pesoIdeal = parseInt(prompt("Peso ideal: "));
const kilosXSemana = parseInt(prompt("Cuántos kilos puedo bajar por semana: "));
let semanas = 0;
var pesoXSemana = 0;
var nuevoPeso = 0;
var moduloSemanas = 0;
var msgOut = "";
var diferenciaPeso = pesoActual - pesoIdeal;
if(diferenciaPeso < 0){
	alert("No tienes sobrepeso");
}else{
	semanas = (diferenciaPeso/kilosXSemana).toFixed(0);
	moduloSemanas = diferenciaPeso%kilosXSemana;
	for(var contador = 1; contador<=semanas;contador++){
        nuevoPeso = pesoActual - (kilosXSemana*contador);

		msgOut +=  "Después de " + contador + " semana pesarás " + nuevoPeso + "\n";
		
	}
	msgOut +=  "Total de semanas para llegar a tu peso ideal: " + semanas + " y " + moduloSemanas + " dia}(s)";
	alert(msgOut);
}

