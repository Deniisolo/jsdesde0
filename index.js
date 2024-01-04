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