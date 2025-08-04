// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log("****************** 1 **************************")
let myName = "Angel"

if (myName == "Angel") {
    console.log(`Mi nombre es: ${myName}`)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
console.log("****************** 2 **************************")
let user = "amgelo"
let password = "pepe1234"

if (user == "amgelo" && password == "pepe1234") {
    console.log("El usuario ha sido autenticado")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
console.log("****************** 3 **************************")
let myNumber = -5

if (myNumber == 0) {
    console.log(`El numero es 0`)
} else if (myNumber > 0) {
    console.log('El número es positivo')
} else {
    console.log("El número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
console.log("****************** 4 **************************")
let age = 5
//let faltaVotar = 18-age

if (age >= 18) {
    console.log("Puede Votar")
} else {
    console.log(`No puede votar tiene ${age}, le faltan ${18-age} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
console.log("****************** 5 **************************")
const message = age >= 18 ? "Es un adulto" : " Es un menor"
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7