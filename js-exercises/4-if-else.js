//4-If Else

/*
    a-Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
    si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” 
    y sino un alerta con el mensaje “Lower than 0,5”
*/

var number = Math.random();

if(number >= 0.5) {
    return alert("Greater than 0,5");
}else {
    return alert("Lower than 0,5");
}

/*
    b-Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre 
    los siguientes mensajes de alerta:
        1-“Bebe” si la edad es menor a 2 años.
        2-“Niño” si la edad es entre 2 y 12 años.
        3-“Adolescente” si la edad es entre 13 y 19 años.
        4-“Jóven” si la edad está entre 20 y 30 años.
        5-“Adulto” entre 31 y 60 años.
        6-“Adulto mayor” entre 61 y 75 años.
        7-“Anciano” si es mayor a 75 años.

*/

 
var age = 26;

 if (age < 2) {
     return alert("Bebe");
 } else if(age >= 2 && age <= 12) {
    return alert("Niño");
 } else if(age >= 13 && age <= 19) {
     return alert("Adolescente");
 } else if(age >= 20 && age <= 30) {
    return alert("Jóven");
 } else if(age >= 31 && age <= 60) {
     return alert("Adulto");
 } else if(age >= 61 && age < 75) {
     return alert("Adulto mayor");
 } else {
     return alert("Anciano");
 }