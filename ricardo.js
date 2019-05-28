// PRIMER EJERCICIO DE ESCRITURA DE NUMEROS
let num1 = parseInt(prompt("¿A partir de qué número debes iniciar a escribir?"));
let num2 = parseInt(prompt("¿Hasta qué número debes llegar?"));

	while (num1 <= num2) {
		alert (num1);
		num1 = num1+1;
	}


//SEGUNDO EJERCICIO SOBRE EL CALCULO PARA BAJAR DE PESO
/*
let peso = parseFloat(prompt("¿Cuántos kilos pesas?"));
let pesoIdeal = parseFloat(prompt("¿Cuál es tu peso ideal?"));
let perdidaPesoSemanal = parseFloat(prompt("¿Cuántos kilos bajarás por semana?"));
let totalPorBajar = peso-pesoIdeal;
let totalSemanasParaBajar = totalPorBajar/perdidaPesoSemanal;
let pesoActualizado;

for (let contador = 1 ; contador <= totalSemanasParaBajar ; contador = contador+1) {
		pesoActualizado = peso-(perdidaPesoSemanal*contador);

		alert ("Tardarás "+totalSemanasParaBajar+" semana(s) para llegar a tu peso ideal." +"\n Después de "+contador+" semana(s) pesarás "+pesoActualizado+" kg.");
}
*/
