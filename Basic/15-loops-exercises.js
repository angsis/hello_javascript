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
let myCadena

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10