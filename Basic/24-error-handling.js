// Excepción

// produce un excepción
let myObject
// console.log(myObject.email)  // porque no existe email

// Captura de errores

// try-catch

try {
    // Código que intenta ejecutar
    console.log(myObject.email) 
    console.log("1-Finaliza la ejecución sin errores")
} catch {
    // Bloque de error 
    console.log("1-Se ha producido un error")
}

// Captura del error

try {
    // Código que intenta ejecutar
    console.log(myObject.email) 
    console.log("2-Finaliza la ejecución sin errores")
} catch (error) {
    // Bloque de error 
    console.log("2-Se ha producido un error ", error.message)
}

// finally

try {
    // Código que intenta ejecutar
    console.log("3-" + myObject) 
    console.log("3-Finaliza la ejecución sin errores")
} catch (error) {
    // Bloque de error 
    console.log("3-Se ha producido un error ", error.message)
} finally {
    console.log("3-Este código se va a ejecutar siempre")
}

// No está soportado
// try {
//     console.log("3-" + myObject) 
//     console.log("3-Finaliza la ejecución sin errores")
// } finally {
//     console.log("3-Este código se va a ejecutar siempre")
// }

// Lanzamiento de errores

// throw

// throw new Error("Se ha producido un error")

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") { // Se puede hacer así
        throw new TypeError("4-Esta operación solo suma números")
    }     
    if (!Number.isInteger(a) || !Number.isInteger(b)) { // o así
        throw new Error("4-Esta operación solo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("6-Se esta intentando sumar ceros", a, b)
    }
    return `4-Suma = ${a + b}`
}

try {
    console.log(sumIntegers(10, 6))
    //console.log(sumIntegers(5.5, 6))
    //console.log(sumIntegers(10, "6"))
    console.log(sumIntegers("25", 7))
} catch (error) {
    console.log("4-Se ha producido un error: ", error.message)
}

// Capturar varios tipos de errores

try {
    console.log(sumIntegers(5.5, 6))
    console.log(sumIntegers(10, "6"))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("5-Se ha producido un error del tipo: ", error.message)
    } else if (error instanceof Error) {
        console.log("5-Se ha producido un error: ", error.message)
    }    
}

// Crear excepciones personalizada. La creamos como una clase y heredamos de Error

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message),
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 6))
} catch (error) {
    console.log("6-Se ha producido un error personalizado: ", error.message)
    error.printNumbers()
}