//6-Funciones

/*
    a-Crear una función suma que reciba dos valores numéricos y retorne 
    el resultado. Ejecutar la función y guardar el resultado en una 
    variable, mostrando el valor de dicha variable en la consola del navegador.
*/

function add(numberOne, numberTwo){
    var result = numberOne + numberTwo;
     console.log(result);
 }

 add();
 

/*
    b-A la función suma anterior, agregarle una validación para controlar si 
    alguno de los parámetros no es un número, mostrar una alerta aclarando que 
    uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/

function add(numberOne, numberTwo){
    var result = numberOne + numberTwo;
    if (typeof numberOne !== "number" || typeof nomberTwo !== "number") {
        alert("One of the two parameters is not a number");
        return NaN;
    }
    return console.log(result);
}

/*
    c-Crear una función validate integer que reciba un número como parámetro 
    y devuelva verdadero si es un número entero.
*/

function validateInteger(number){
    if (Number.isInteger(number)){
        return true;
    }else{
        return false;
    }
}
validateInteger();

/*
    d-A la función suma del ejercicio 6b) agregarle una llamada que valide 
    que los números sean enteros. En caso que haya decimales mostrar un alerta 
    con el error y retorna el número convertido a entero (redondeado).
*/
function validateInteger(number){
    if (Number.isInteger(number)){
        return true;
    }else{
        return false;
    }
}
validateInteger();

function add(numberOne, numberTwo){
    var result = numberOne + numberTwo;

    if (typeof numberOne !== "number" || typeof nomberTwo !== "number") {
        alert("One of the two parameters is not a number, value NaN");
    }else{
        var numberC = validateInteger(numberOne);
        var numberD = validateInteger(numbertwo);
    }
}
add();

/*
    e-Convertir la validación del ejercicio 6b) en una función separada y 
    llamarla dentro de la función suma probando que todo siga funcionando igual.
*/


//function exercise b
function add(numberOne, numberTwo){
    verifyInteger(numberOne);
    verifyInteger(numberTwo);

    var result = numberOne + numberTwo;

    console.log(result)
}

//creating function separately

function verifyInteger(num){
    if (typeof num !== "number") {
        alert("One of the parameters is not a number, value NaN");
    }
}

add();