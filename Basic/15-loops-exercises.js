// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("---------------------- 1 ----------------------")
for (i = 1; i <= 20; i++) {
    console.log(i)
}
let z = 1
while (z <= 20) {
    console.log(z)
    z += 1
}
let y = 1
do {
    console.log(y)
    y += 1
} while (y <= 20)

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("---------------------- 2 ----------------------")
let suma = 0

for (i = 1; i <=100; i++) {
    suma += i
}
console.log(`La suma de todos los numeros del 1 al 100 (for) = ${suma}`)

let suma2 = 0

while (i <= 100) {
    suma2 += i
    i += 1 
}
console.log(`La suma de todos los numeros del 1 al 100 (while) = ${suma}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("---------------------- 3 ----------------------")
for (i = 0; i <= 50; i += 2) {
    console.log(i)
}

let contador = 0
while (contador <= 50) {
    if ((contador % 2) != 0) {
        contador += 1
        continue
    }
    console.log(contador)
    contador += 1
}

let numero = 0
while (numero <= 50) {
    if (numero % 2 === 0) {
        console.log(numero)
    }
    numero++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("---------------------- 4 ----------------------")
let myArray = ["Angel", "Pedro", "Juan", "María", "Alicia", "Carmen"]

for (nombre of myArray) {
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("---------------------- 5 ----------------------")
let myCadena = "Esta es una cadena de texto donde se contaran las vocales"
let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
let countVocales =0

for (let cadena of myCadena) {
    for (let vocal of vocales)
        if (cadena == vocal) {
            countVocales++
            console.log(`vocal cadena:${cadena} vocal:${vocal} = ${countVocales}`)  
        }
}

console.log(countVocales)

let myCadena2 = "Escribe un bucle que cuente el número de vocales en una cadena de texto"
let countVocales2 = 0
const vocales2 = "aeiouáéíóú"
const myCadenaMinuscula = myCadena2.toLowerCase()

for (let i=0; i < myCadena2.length; i++) {
    let caracter = myCadenaMinuscula[i]

    if (vocales2.includes(caracter)) {
        countVocales2++
    }
}

console.log(`La cantidad de vocal(es) es: ${countVocales2} `)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("---------------------- 6 ----------------------")
const myArrayNumbers = [5, 7, 3, 2, 9]  // el resultado deberia ser 1.890
let resultado = 1 // si lo hago con cero me da como resultado 0

for (let array of myArrayNumbers) {
    resultado *= array
}

console.log(`la multiplicación de los número ${myArrayNumbers.join("x")} es: ${resultado}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("---------------------- 7 ----------------------")
const numbers = 5
let result = 0

console.log(`------ Tabla Multiplicación del ${numbers} con for ------`)
for (i = 1; i <= 10; i++) {
    result = i * numbers
    console.log(`${i} x ${numbers} = ${result}`)
}

console.log(`------ Tabla Multiplicación del ${numbers} con while ------`)
let count = 1
result = 0

while (count <= 10) {
    result = count * numbers
    console.log(`${count} x ${numbers} = ${result}`)
    count++
}

// 8. Usa un bucle para invertir una cadena de texto
console.log("---------------------- 8 ----------------------")
const myStringText = "Esto es una cadena de texto"
let myStringTextInvert = ""

for (i = myStringText.length - 1; i >= 0; i--) {
    myStringTextInvert += myStringText[i]
}

console.log(`Mi cadena de texto invertida es: ${myStringTextInvert}`)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("---------------------- 9 ----------------------")
let fibonacciResult = ""
let fibonacci = 0

for (i = 2; i < 10; i++) {
    fibonacci = i-2 + i-1
    console.log(fibonacci)
}

console.log(fibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10