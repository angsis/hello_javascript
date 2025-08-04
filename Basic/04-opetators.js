// Operadores
let a = 5
let b = 10

// Operadores Aritméticos
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

console.log(a % b)
console.log(a ** b)

a++  // Incremento
console.log(a)  //6

b--  // Decremento
console.log(b)  //9

// Operadores de Asignación
let miVariable = 2
console.log(miVariable)
miVariable += 5
console.log(miVariable)

miVariable -= 5
console.log(miVariable)
miVariable *= 5
console.log(miVariable)
miVariable /= 5
console.log(miVariable)
miVariable %= 5
console.log(miVariable)
miVariable **= 5
console.log(miVariable)

// Operadores de comparación
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == a) // Igualdad por valor
console.log(999 === 999n) // Igualdad por identidad (por tipo y valor). Por eso da falso
console.log(a != b) // negacion o diferente
console.log(0 == false)  // True
console.log(1 == false) // cualquier numero diferente a cero es true
console.log(0 == "")   // True
console.log(0 == " ") // True
console.log(0 == 'Hola') // Falso
console.log(0 === "") // Falso
console.log(undefined == null)  // True
console.log(undefined === null) // False

// Truthy values (valores verdaderos)
/*
 - Todos los numeros positivos y negaticos menos el cero
 - Todas las cadena de toxto menos las vacias
 - El boolean true
*/
// falsy values (Valores Falsos)
/* 
 - 0
 - 0n
 - null
 - undefined
 - NaN
 - El bolean false
 */

// Operadores Lógicos
// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 50 > 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 < 10 || 15 < 20))

// Operadores Ternarios
let isRaining = false 

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")