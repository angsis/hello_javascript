// 1. Crea un función que utilice error correctamente
console.log(" -----------------  1  ------------------------")
    function div(a, b) {
        if (b === 0) {
            console.error("No se puede dividir entre 0")
            return NaN
        } 
        return a / b        
    }
    console.log(div(5, 0))

// 2. Crea una función que utilice warn correctamente
console.log(" -----------------  2  ------------------------")
    function greet(name, age) {
        if (typeof name !== "string") {
            console.warn("Advertencia: se esperaba un string para el nombre")
            return
        }

        if (typeof age !== "number") {
            console.warn("Advertencia: la edad debe ser un numero")
            return
        }

        console.log(`Hola, ${name}. Tienes ${age}`)
    }

    greet(123, "20")

// 3. Crea una función que utilice info correctamente
console.log(" -----------------  3  ------------------------")


// 4. Utiliza table

// 5. Utiliza group

// 6. Utiliza time

// 7. Valida con assert si un número es positivo

// 8. Utiliza count

// 9. Utiliza trace

// 10. Utiliza clear