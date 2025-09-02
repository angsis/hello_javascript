// 1. Captura una excepción utilizando try-catch
console.log("---------------------- 1 -------------------------")
let miArray

try {
    console.log(miArray[1])
} catch {
    console.log("No existe esa propiedad")
}

// 2. Captura una excepción utilizando try-catch y finally
console.log("---------------------- 2 -------------------------")
try {
    console.log(miArray[1])
} catch {
    console.log("No existe esa propiedad")
} finally {
    console.log("Borrado datos del cache")
}

// 3. Lanza una excepción genérica
console.log("---------------------- 3 -------------------------")
try {
    console.log(miArray[1])
} catch (error) {
    console.log("No existe esa propiedad: ", error.message)
}

// 4. Crea una excepción personalizada
console.log("---------------------- 4 -------------------------")
const areaRectangulo = (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("Debe ingresar solo Números")
    }
    return x * y
}

// 5. Lanza una excepción personalizada
console.log("---------------------- 5 -------------------------")
try {
    console.log(`El área del rectangulo es: ${areaRectangulo("5.6", 6)}`)
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
}

// 6. Lanza varias excepciones según una lógica definida
console.log("---------------------- 6 -------------------------")
const aceleracion = (x1, x2, t1, t2) => {
    if (typeof x1 !== "number" || typeof x2 !== "number" || typeof t1 !== "number" || typeof t2 !== "number") {
        throw new TypeError("Debe ingresar solo tipos numéricos")
    }
    if (x2 - x1 < 0 || t2 - t1 <= 0) {
        throw new Error("Error division entre 0")
    }
    return (x2 - x1) / (t2 - t1)
}

// 7. Captura varias excepciones en un mismo try-catch
console.log("---------------------- 7 -------------------------")
try {
    console.log(`La aceleración es: ${aceleracion(0, 1000, 0, 10)}`)
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de Tipo: ", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido el error: ", error.message)
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log("---------------------- 8 -------------------------")
const myArray = ["123.45", "hola", "99.9", "texto100", "50", "5", "20", "20 / 3"];

for (let i = 0; i < myArray.length; i++) {

    try {
        if (isNaN(myArray[i])) {
            throw new Error("El dato no es un número")
        }

        let value = myArray[i]
        let floatValue = parseFloat(value)

        console.log(`El valor ${value} (${typeof value}) se transformó a: ${floatValue} (${typeof floatValue})`)

    } catch (error) {
        console.log("Ha ocurrido un error: ", error.message)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
console.log("---------------------- 9 -------------------------")

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10