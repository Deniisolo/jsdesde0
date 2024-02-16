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


//Declaración y Tipos de Strings:
const stringPrimitivo = 'Soy un string primitivo';
console.log(typeof stringPrimitivo);
//- Se declara una variable llamada **`stringPrimitivo`** y se le asigna un valor de tipo string.
//- **`typeof`** se usa para obtener el tipo de dato de la variable.
//- Se imprime en la consola el tipo de **`stringPrimitivo`**, que debería ser "string".

// Uso del Constructor String:
const stringPrimitivoTambien = String('Soy un string primitivo también');
console.log(typeof stringPrimitivoTambien);
//- Se crea otra variable llamada **`stringPrimitivoTambien`** utilizando el constructor **`String`**.
//- **`typeof`** se utiliza nuevamente para obtener el tipo de dato de la variable.
//- Se imprime en la consola el tipo de **`stringPrimitivoTambien`**, que también debería ser "string".

//Creación de un Objeto String:
const stringObjeto = new String('Soy un string objeto');
console.log(typeof stringObjeto);
//- Se crea un objeto **`String`** utilizando la palabra clave **`new`**.
//- **`typeof`** se usa para obtener el tipo de dato de la variable.
//- Se imprime en la consola el tipo de **`stringObjeto`**, que será "object" porque es un objeto String.

//Acceso y Manipulación de Caracteres en un String:
const saludo = 'Hola. ¿Cómo estás?';
console.log(saludo[2]);
console.log(saludo.charAt(2));
//- Se declara una variable **`saludo`** que contiene una cadena de texto.
//- Se accede al tercer carácter de la cadena utilizando **`saludo[2]`** y **`saludo.charAt(2)`**.
//- Ambas líneas imprimen el tercer carácter de **`saludo`** en la consola.

//Búsqueda de Subcadenas:
// Buscar y mostrar la posición de la letra 'o' en el saludo
console.log(saludo.indexOf('o'));

// Buscar y mostrar la posición de la palabra 'Cómo' en el saludo
console.log(saludo.indexOf('Cómo'));

// Buscar y mostrar la posición de la palabra 'como' en el saludo
console.log(saludo.indexOf('como'));

// Buscar y mostrar la última posición de la letra 'o' en el saludo
console.log(saludo.lastIndexOf('o'));

//Corte (Slicing) y Longitud de una Cadena:
console.log(saludo.slice(3, 5));
console.log(saludo.length);
//- **`slice`** se usa para extraer una porción de la cadena desde la posición 3 hasta la posición 4 (sin incluir la posición 5).
//- **`length`** devuelve la longitud (número de caracteres) de la cadena.
//- Se imprimen en la consola los resultados de estas operaciones.

function sumaNumerosPares(numero) {
    let suma = 0;
    for (let i = 2; i <= numero; i += 2) {
      suma += i;
    }
    return suma;
  }
  
  console.log(sumaNumerosPares(10)); // Debería imprimir 30 (2 + 4 + 6 + 8 + 10)

  function factorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * factorial(numero - 1);
    }
  }
  
  console.log(factorial(5)); // Debería imprimir 120 (5 * 4 * 3 * 2 * 1)
  