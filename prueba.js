// let contador = 1;

// function incrementoConometro(){
//     contador++;
// }
// console.log(contador)
// incrementoConometro()
// console.log(contador)

// // OPERDORES lOGICOS

// let condicion1 = true;
// let condicion2 = true;

// let resultadoAnd = condicion1 && condicion2;
// console.log(resultadoAnd);

// // Coerción
// let number = 10;
// let texto = "10";
// let resultado = number + texto;
// console.log(resultado)

// function calculateTip (billAmount, tipPercentage){
//     console.log(billAmount * (tipPercentage / 100))
// }
// calculateTip(300, 10)

// let diaSemana = 5;
// let mensaje;
// switch (diaSemana) {
//     case 1:
//     mensaje = "Lunes";
//     break;
//     case 2:
//         mensaje = "Martes";
//         break;
//     case 3:
//         mensaje = "Miércoles";
//         break;
//     case 4:
//         mensaje = "Jueves";
//         break;
//     case 5:
//         mensaje = "Viernes";
//         break;
//     default:
//         mensaje = "Fin de semana";
// }

// console.log("Hoy es " + mensaje);

// for (let i = 0; i < 10; i++) {
//     console.log("El valor de i es:", i);
// }

// operadores de asignación
// let x = 5;
// x += 10;
// console.log(x);

// let x = 2;
// x += 2;
// console.log(x);

// for(let i = 2; i <= 10; i += 1 ){
//     console.log("2x", i, "=", i*2 );
// }

// *****

// function numberkiss(Numerodebesitos){
//     let besitos = ""
//     for(let i = 10; i <= Numerodebesitos; i += 1){
//         besitos += "😘";
//     }
//     console.log(besitos)
// }
// numberkiss(2)
//Operadores de Asignación
//Crea una variable contador inicializada en 5. Utiliza el operador de incremento para incrementar su valor en 3 y luego muestra el resultado.
// let contador = 5;
// contador += 3;
// console.log(contador)
//Crea una variable "total" inicializada en 10. Utiliza el operador compuesto de multiplicación (*=) para multiplicar total por 5, y luego muestra el resultado.

// let total = 10;
// total *= 5;
// console.log(total)
// let numero1 = 2;
// let numero2 = 2;
// if ( numero1 > numero2){
//     console.log("numero1 es mayor")
// } else if( numero1 < numero2) {
//     console.log("numero2 es mayor")
// } else {
//     console.log("tas locooo")
// }

// let numero1 = 4;
// let numero2 = 3;
// let numero3 = 10;
// if ( numero1 > numero2){
//     console.log("numero1 es mayor")
// } else if( numero1 < numero2) {
//     console.log("numero2 es mayor")
// }
// else if( numero1 < numero3) {
//     console.log("numero3 es mayor")
// }else {
//     console.log("tas locooo")
// }
// function encontrarMayor(numero1, numero2, numero3) {
//   if (numero1 > numero2 && numero1 > numero3) {
//     return numero1;
//   } else if (numero2 > numero1 && numero2 > numero3) {
//     return numero2;
//   } else if (numero3 > numero1 && numero3 > numero2) {
//     return numero3;
//   } else {
//     return "tas locooo";
//   }
// }
// let numero1 = 1;
// let numero2 = 3;
// let numero3 = 2;
// let mayor = encontrarMayor(numero1, numero2, numero3);
// console.log("El número mayor es:", mayor);
// function contarCaracteresExcluyendoEspaciosYPuntuacion(texto) {
//   const caracteresExcluidos = ['.', ',', ';', ':', '¿', '?', '!', '"', '-', '(', ')', '[', ']', '/'];
//   let contador = 0;

//   for (let i = 0; i < texto.length; i++) {
//     const caracter = texto[i];
//     if (caracter !== ' ' && !caracteresExcluidos.includes(caracter)) {
//       contador++;
//     }
//   }

//   return contador;
// }

// // Ejemplo de uso:
// const texto = "¡Hola, mundo! ¿Cómo estás?";
// const recuento = contarCaracteresExcluyendoEspaciosYPuntuacion(texto);
// console.log("Recuento de caracteres excluyendo espacios y signos de puntuación:", recuento);

//PROMESAS
// const cows = 9;

// const countCows = new Promise(function (resolve, reject) {
//   if (cows > 10) {
//     resolve(`we have ${cows} cows on the farm`);
//   } else {
//     reject("there is no cows on the farm");
//   }
// });

// countCows.then((result) => {
//     console.log(result);
// }).catch((Error)=> {
//     console.log(Error);
// }).finally(() => console.log (''))

//I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.

//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
function arrayPlusArray(arr1, arr2) {
  let sumArray =0;
  for (let i = 0; i < arr1.length; i++){
    sumArray += arr1[i];
  }
    for (let i = 0; i < arr2.length; i++){
    sumArray += arr2[i];
  }
  return sumArray;
}