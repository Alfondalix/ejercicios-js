//3-Arrays

/*
   a-Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", 
   "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
   mostrar por consola los meses 5 y 11 (utilizar console.log).
*/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(months[5], months[11]);

/*
   b-Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

var monthSorted = months.sort();

console.log(monthSorted);

/*
   c-Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

months.unshift("January");
months.push("December");

console.log(months);

/*
   d-Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

months.shift();
months.pop();

console.log(months);

/*
   e-Invertir el orden del array (utilizar reverse).
*/

months.reverse();

console.log(months);

/*
   f-Unir todos los elementos del array en un único string donde cada mes esté 
   separado por un guión - (utilizar join).
*/

var monthsStr = months.join("-");

console.log(monthsStr);

/*
   g-Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var monthsSliced = months.slice(4, 11);

console.log(monthsSliced);