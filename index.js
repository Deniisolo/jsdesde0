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

// let cajaA = 5;

// function duplicar(numero) {
//   numero = numero * 2;
//   return numero;
// }

// let cajaB = duplicar(cajaA);

// console.log(cajaA);  // Aún es 5, no cambió
// console.log(cajaB);  // Es 10, porque la función trabajó con una copia


// // Paso por Referencia:

// let cajaC = ["oso", "pelota"];

// function agregarJuguete(lista, juguete) {
//   lista.push(juguete);
//   return lista;
// }

// let cajaD = agregarJuguete(cajaC, "carro");

// console.log(cajaC);  // Ahora es ["oso", "pelota", "carro"], cambió
// console.log(cajaD);  // También es ["oso", "pelota", "carro"], porque comparten el mismo mapa

// // Creacion de string
// const primeraOpcion='Comillas simples' 
// const segundaOpcion="Comillas simples"
// const terceraOpcion=`Comillas simples` 

// // concatenación: opción +
// const direccion='Calle falsa 123'
// const ciudad='Springfield'
// const direccionCompleta='Mi dirección completa es '+direccion+ciudad
// console.log(direccionCompleta)
// const direccionCompletaConEspacio='Mi direcciÃ³n completa es '+direccion+' '+ciudad
// console.log(direccionCompletaConEspacio)

// // Concatenación: Template Literals
// const nombre='Estefany'
// const pais='ðŸ‡¨ðŸ‡´'
// const presentacion=`Hola, soy ${nombre} de ${pais}`
// console.log(presentacion)

// //Concatenación: join()
// const primeraParte='Me encanta'
// const segundaParte='la gente de'
// const terceraParte='ðŸ‡²ðŸ‡½'
// const pensamiento=[primeraParte,segundaParte,terceraParte]
// console.log(pensamiento.join(' ðŸŒ¯ '))

// //Concatenación: concat()
// const hobbie1='correr'
// const hobbie2='leer'
// const hobbie3='estudiar'
// const hobbies='Mis hobbies son: '.concat(hobbie1,', ',hobbie2,', ',hobbie3,'.')
// console.log(hobbies)

// //Escape alternativo 
// const escapeAlternativo="I'm Software Engineer"

// //Barra invertda
// const escapeBarraInvertida='I\'m Software Engineer'

// //Template literals
// const escapeComillaInvertida=`I'm Software Engineer`

// //string Largos
// const poema='Las rosas son rojas,\n'+
// 'Las violetas son azules,\n'+
// 'Caracter inesperado,\n'+
// 'En la lÃ­nea 86.'
// console.log(poema)
// const poema2='Las rosas son rojas,\n\
// Las violetas son azules,\n\
// Caracter inesperado,\n\
// En la lÃ­nea 86.'
// console.log(poema2)
// const poema3=`Las rosas son rojas,
// Las violetas son azules,
// Caracter inesperado,
// En la lÃ­nea 86.`
// console.log(poema3)

//string primitivo son inmutables o sea pas por valor
const stringPrimitivo='Soy un string primitivo'
console.log(typeof stringPrimitivo)
const stringPrimitivoTambien=String('Soy un string primitivo tambiÃ©n')
console.log(typeof stringPrimitivoTambien)

// string objeto son mutables o sea que pasa por referencia
const stringObjeto=new String('Soy un string objeto')
console.log(typeof stringObjeto)