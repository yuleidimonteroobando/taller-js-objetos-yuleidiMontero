//1 variables básicas
let nombres = "maria";
let edad = 25;
let ciudad = "bogota";

console.log("hola esta informacion es tuya? tu nombre es?" + nombres + ", tu edad es? " + edad + ",y vives en? " + ciudad)

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

// 5  crear objecto 
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

//7 Función con objeto (SIN DESESTRUCTURACIÓN) 
function mostrarPersona(objeto) {
    return `Nombre: ${objeto.nombre}, Profesión: ${objeto.profesion}`;
}
console.log(mostrarPersona(persona)); 

//8 Objeto  
estudiante = {
    nombre: "Laura",
    notas: {
        matematicas: 4.5,
        ingles: 4.0
    }
};
console.log(estudiante.notas.matematicas);
console.log(estudiante.notas.ingles);

//9. Objeto carro 
carro = {
    marca: "Toyota",
    modelo: "2002",
    propietario: {
        nombre: "Andres",
        edad: 55
    }
};
console.log(carro.propietario.nombre);

//10 Función  (SIN DESESTRUCTURACIÓN) 
function mostrarCarro(objeto) {
    return `la marca es ${objeto.marca} y el nombre del propietario es ${objeto.propietario.nombre}`;
}
console.log(mostrarCarro(carro));

// 11  Modificar propiedad
carro.propietario.edad = 35;
console.log(carro.propietario.edad);

//12. Desestructuración  
const { nombre, profesion } = persona;
console.log(nombre);
console.log(profesion);

//13. Desestructuración de objeto carro 
const { marca, modelo } = carro;
console.log(marca);
console.log(modelo);
//14. Desestructuración  
const { propietario: { nombre: nombrePropietario, edad: edadPropietario } } = carro;

console.log(nombrePropietario);
console.log(edadPropietario);

//15. Parámetro desestructurado
function mostrarDatos({ nombre, edad }) {
    return `Nombre: ${nombre}, Edad: ${edad}`;
}
console.log(mostrarDatos(persona));
// 16. Desestructuración en función
function mostrarPropietario({ propietario: { nombre, edad } }) {
    return `Propietario: ${nombre}, Edad: ${edad}`;
}
console.log(mostrarPropietario(carro));

//17. Renombramiento
const { nombre: nombrePersona, edad: edadPersona } = persona;

console.log(nombrePersona);
console.log(edadPersona);
//18. Copia con spread
const copiaPersona = { ...persona };
copiaPersona.nombre = "Carlos";
console.log("Original:", persona.nombre);
console.log("Copia:", copiaPersona.nombre);
//19. Copiar objeto anidado 
const copiaCarro = {
    ...carro,
    propietario: {
        ...carro.propietario
    }
};
copiaCarro.propietario.nombre = "Carlos";
console.log("Original:", carro.propietario.nombre);
console.log("Copia:", copiaCarro.propietario.nombre);
//20. Desestructuración completa  
const peli = {
    titulo: "blanca nieves",
    autor: {
        nombre: "yuli",
        edad: 17
    },
    editorial: {
        nombre: "disney",
        pais: "Colombia"
    }
};
function mostrarPelicula({
    titulo,
    autor: { nombre },
    editorial: { nombre: nombredelEditorial }
}) {
    return `La película ${titulo} creada por ${nombre} y su editorial es ${nombredelEditorial}.`;
}

console.log(mostrarPelicula(peli));