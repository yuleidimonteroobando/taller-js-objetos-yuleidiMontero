//1 variables básicas
let nombre = "maria";
let edad = 25;
let ciudad = "bogota";

console.log("hola esta informacion es tuya? tu nombre es?" + nombre + ", tu edad es? " + edad + ",y vives en? " + ciudad)

//2 funcion con el nombre que desee

function recibirNumeros(n1, n2, n3, n4, n5) {
    return n1 - n2 + n3 + n4 + n5;
}
console.log(recibirNumeros(1, 2, 3, 4, 5));

//3 funcion con parametros 
function datos(nombre, edad) {
    return `Mi nombre es ${nombre} y tengo ${edad}`;
}

console.log(datos("Camila", 14));

// 4  crear objecto 
persona = {
    nombre: "matias",
    edad: 12,
    profesion: "ingeniero sistemas"
}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);
// 6 Agregar propiedad 
persona.telefono = 35745648;
console.log(persona.telefono);

