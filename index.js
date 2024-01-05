// console.log("hola mundo")
//paso por valor
// let x = 1
// let y = "hola"
// let z = null

// let a = x
// let b = y
// let c = z



// a = 12
// b = "platzi"
// c = undefined
// console.log(x, y, z, a, b, c)
// //paso por referencia 

// let frutas = ["manzana"]

// frutas.push("pera")
// console.log(frutas)

let cajaA = 5;

function duplicar(numero) {
  numero = numero * 2;
  return numero;
}

let cajaB = duplicar(cajaA);

console.log(cajaA);  // Aún es 5, no cambió
console.log(cajaB);  // Es 10, porque la función trabajó con una copia


// Paso por Referencia:

let cajaC = ["oso", "pelota"];

function agregarJuguete(lista, juguete) {
  lista.push(juguete);
  return lista;
}

let cajaD = agregarJuguete(cajaC, "carro");

console.log(cajaC);  // Ahora es ["oso", "pelota", "carro"], cambió
console.log(cajaD);  // También es ["oso", "pelota", "carro"], porque comparten el mismo mapa

// Creacion de string
const primeraOpcion='Comillas simples' 
const segundaOpcion="Comillas simples"
const terceraOpcion=`Comillas simples` 

// concatenación: opción +
const direccion='Calle falsa 123'
const ciudad='Springfield'
const direccionCompleta='Mi dirección completa es '+direccion+ciudad
console.log(direccionCompleta)
const direccionCompletaConEspacio='Mi direcciÃ³n completa es '+direccion+' '+ciudad
console.log(direccionCompletaConEspacio)

// Concatenación: Template Literals
const nombre='Estefany'
const pais='ðŸ‡¨ðŸ‡´'
const presentacion=`Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

//Concatenación: join()
const primeraParte='Me encanta'
const segundaParte='la gente de'
const terceraParte='ðŸ‡²ðŸ‡½'
const pensamiento=[primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' ðŸŒ¯ '))
