// 1-Variables y Operadores

/*
    a- Crear dos variables numéricas y utilizar el operador suma para guardar 
    el valor de la suma de ambos números en una 3er variable.
*/

var numberOne = 85;
var numberTwo = 90;
var result = numberOne + numberTwo;

console.log(result);

/*
    b- Crear dos variables de tipo String y concatenarlas 
    guardando el resultado en una 3er variable.
 */

 var name = "Alfonso";
 var lastname = "Dalix";
 var fullName = name + " " + lastname;

 console.log(fullName);

 /*
    c-Crear dos variables de tipo String y sumar el largo 
    de cada variable (cantidad de letras del string) guardando 
    el resultado la suma una 3er variable (utilizar length).
 */

 var animal = "ape";
 var food = "banana";
 var combination = animal.length + food.length;

 console.log(combination);

 //2-Strings

 /*
    a-Crear una variable de tipo string con al menos 10 caracteres 
    y convertir todo el texto en mayúscula (utilizar toUpperCase).
 */

 var sentence = "once upon a time in london";
 
 console.log(sentence.toUpperCase());

 /*
    b-Crear una variable de tipo string con al menos 10 caracteres
    y generar un nuevo string con los primeros 5 caracteres 
    guardando el resultado en una nueva variable (utilizar substring).
 */

 var song = "Undercover of Darkness";
 var songShort = song.substring(0,5);

 console.log(songShort);

 /*
    c-Crear una variable de tipo string con al menos 10 caracteres y 
    generar un nuevo string con los últimos 3 caracteres guardando 
    el resultado en una nueva variable (utilizar substring).
 */

 var bandName = "the black keys";
 var bandShort = bandName.substring(11, 14);

 console.log(bandShort);

 /*
    d-Crear una variable de tipo string con al menos 10 caracteres 
    y generar un nuevo string con la primera letra en mayúscula y 
    las demás en minúscula. Guardar el resultado en una nueva variable 
    (utilizar substring, toUpperCase, toLowerCase y el operador +).
 */

 var company = "Alfonso's Company";
 var newCompany = company.substring(0,1).toUpperCase() + company.substring(1,17).toLowerCase();

 console.log(newCompany);

 /*
    e-Crear una variable de tipo string con al menos 10 caracteres y 
    algún espacio en blanco. Encontrar la posición del primer espacio
     en blanco y guardarla en una variable (utilizar indexOf).
 */

 var lyrics = "Karma Police";
 var lyricsIndex = lyrics.indexOf(" ");

 console.log(lyricsIndex);

 /*
    f-Crear una variable de tipo string con al menos 2 palabras largas
    (10 caracteres y algún espacio entre medio). Utilizar los métodos 
    de los ejercicios anteriores para generar un nuevo string que tenga 
    la primera letra de ambas palabras en mayúscula y las demás letras 
    en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
 */

 var movieName = "batman forever";
 var movieNameCorrect = movieName.substring(0,1).toUpperCase() + movieName.substring(1,6).toLowerCase() + " " + movieName.substring(7,8).toUpperCase() + movieName.substring(8,14).toLowerCase();

 console.log(movieNameCorrect);

 //3-Arrays

 