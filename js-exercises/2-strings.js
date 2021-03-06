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
var songShort = song.substring(0,songShort.length - 5);

console.log(songShort);

/*
   c-Crear una variable de tipo string con al menos 10 caracteres y 
   generar un nuevo string con los últimos 3 caracteres guardando 
   el resultado en una nueva variable (utilizar substring).
*/

var bandName = "the black keys";
var bandShort = bandName.substring(bandName.length - 3, bandName.length);

console.log(bandShort);

/*
   d-Crear una variable de tipo string con al menos 10 caracteres 
   y generar un nuevo string con la primera letra en mayúscula y 
   las demás en minúscula. Guardar el resultado en una nueva variable 
   (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

var company = "Alfonso's Company";
var newCompany = company.substring(0,1).toUpperCase() + company.substring(1,company.length).toLowerCase();

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
var movieNameCorrect = movieName.substring(0,1).toUpperCase() + movieName.substring(1,movieName.length).toLowerCase() + " " + movieName.substring(7,8).toUpperCase() + movieName.substring(8,movieName.length).toLowerCase();

console.log(movieNameCorrect);