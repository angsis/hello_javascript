// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
console.log('-------------------- 1 ---------------------------')
function suma(numA, numB) {   // funcion simple
    return numA + numB
}
console.log(suma(100, 25))    

const sumar = function(numA, numB) {  // funcion anónima
    return numA + numB
}
console.log(sumar(20, 30))

const sumando = (numA, numB) => {    // funcion flecha
    return numA + numB
}
console.log(sumando(10, 3))

const sumando2 = (numA, numB) => console.log(numA + numB)  // funcion flecha directo
sumando2(1, 5)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
console.log('-------------------- 2 ---------------------------')
function mayor(myArray) {
    let esMayor = 0
    myArray.forEach(element => {
        if (esMayor < element) {
            esMayor = element
        }
    });
    console.log(`El mayor número es: ${esMayor}`)
}

mayor([50000, 1, 5, 10, 99, 3000000, -1, 1/2, 2**10])

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log('-------------------- 3 ---------------------------')
const numVocales = (myString) => {
    const vocales = "aeiouáéíóú"
    const stringMinuscula = myString.toLowerCase()
    let contarVocales = 0
    for (let vocal of stringMinuscula) {
        if (vocales.includes(vocal) ) {
            contarVocales++
        }
    }
    return contarVocales
}

console.log(`El texto contiene ${numVocales("Esto es un string con vocales")} vocal(es)`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
console.log('-------------------- 4 ---------------------------')
const arrayMayuscula = (unArray) => {
    let convMayus = []
    unArray.forEach((element) => {
        convMayus.push(element.toUpperCase())
    })
    return convMayus
}

console.log(arrayMayuscula(["Hola", "esto", "es", "un", "Array", "de", "String"]))

const algo = arrayMayuscula(["Hola", "esto", "es", "un", "Array", "de", "String"])

algo.forEach((ele, kie) => {
    console.log(kie, ele)
})

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.log('-------------------- 5 ---------------------------')
function numeroPrimo(num) {

    if (num <= 1) {
        return false
    } else if (num === 2) {
        return true
    } else if (num % 2 == 0) {
        return false
    } else {
        for (i = 3; i < Math.sqrt(num); i+=2) {
            if (num % i == 0) {
                return false
            } 
        }
        return true
    } 
}

console.log(numeroPrimo(373))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
console.log('-------------------- 6 ---------------------------')
const commonElement = (myArray1, myArray2) => {
    return myArray1.filter(element => myArray2.includes(element))
}

const array1 = ["casa", 1, 15, "mapa", 100, 102]
const array2 = [0, 1.5, "mapa", 102, 105, 200]

console.log(commonElement(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
console.log('-------------------- 7 ---------------------------')
function sumPar(arrayNum) {
    const arrayPar = arrayNum.filter(par => par % 2 === 0)
    let sumElement = 0
    arrayPar.forEach((sum) => {
        sumElement += sum
    })
    return sumElement
}

const sumaPares = (array) => {
    let suma = 0
    for (spar of array) {
        if (spar % 2 === 0) {
            suma += spar
        }
    }
    return suma
}

const sumandoPares = function(array) {
    let sumaPar = 0
    for (let i=0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sumaPar += array[i]
        }
    }
    return sumaPar
}

const array = [1, 0, 20, 15, 31, 100, 27, 2, 2**2]
console.log(`Funcioón con filter de array: ${sumPar(array)}`)
console.log(`Función con flecha: ${sumaPares(array)}`)
console.log(`Funcion anonima: ${sumandoPares(array)}`)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.log('-------------------- 8 ---------------------------')
const numAlCuadrado = (array) => {
    let numCuadrado = []
    for (num of array) {
        numCuadrado.push(num ** 2)
    }
    return numCuadrado
}

console.log(numAlCuadrado(array))
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
console.log('-------------------- 9 ---------------------------')
const strtInverso = function(str) {
    const wordArray = str.split(" ")
    const ReverseWordArray = wordArray.reverse()
    const reverseWord = ReverseWordArray.join(" ")
    return reverseWord
}

const myString = "Esto es una cadena de texto"
console.log(myString)
console.log(strtInverso(myString))

// 10. Crea una función que calcule el factorial de un número dado
console.log('-------------------- 10 ---------------------------')
const factorial = (num) => {
    let acumula = 1
    for (let i=1; i <= num; i++) {
        acumula *=i
    }
    return acumula
}

console.log(factorial(7))