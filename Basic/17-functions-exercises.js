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

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado