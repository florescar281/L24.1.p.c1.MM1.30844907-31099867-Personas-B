/*
Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos
y reporte al final la edad promedio y la edad mayor entre las mujeres.
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), 
José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida 
requerida presenta el siguiente formato:
Edad promedio: 18.50
Edad mayor entre las mujeres: 19
*/

import Cl_Persona from "./Cl_Persona.js";
import Cl_Edad from "./Cl_Edad.js"; 

const salida = document.getElementById("salida");

let edad = new Cl_Edad();

let persona1 = new Cl_Persona("Luis", 15, "M");
let persona2 = new Cl_Persona("Ana", 19, "F");
let persona3 = new Cl_Persona("Jose", 21, "M");
let persona4 = new Cl_Persona("Carmen", 17, "F");
let persona5 = new Cl_Persona("Rosa", 18, "F");
let persona6 = new Cl_Persona("Jose", 22, "M");
let persona7 = new Cl_Persona("Maria", 17, "F");
let persona8 = new Cl_Persona("Luz", 19, "F");
let persona9 = new Cl_Persona("Rafael", 23, "M");
let persona10 = new Cl_Persona("Liz", 15, "F");
let persona11 = new Cl_Persona("Marcos", 20, "M");
let persona12 = new Cl_Persona("Leo", 16, "M");

edad.procesarPersonas(persona1);
edad.procesarPersonas(persona2);
edad.procesarPersonas(persona3);
edad.procesarPersonas(persona4);
edad.procesarPersonas(persona5);
edad.procesarPersonas(persona6);
edad.procesarPersonas(persona7);
edad.procesarPersonas(persona8);
edad.procesarPersonas(persona9);
edad.procesarPersonas(persona10);
edad.procesarPersonas(persona11);
edad.procesarPersonas(persona12);

salida.innerHTML = `
    Edad promedio: ${edad.promedio()} 
    <br> Edad mayor entre las mujeres: ${edad.mayorEdad()}
`