// Console

// Log

console.log("Hello, Javascript")

// error 

console.error("Se encontro un error en la operación")
console.error("Error al conectar con la base de datos", new Error("Conexión fallida"))

// Warn

console.warn("Este es un mensaje de advertencia")

// Info

console.info("Este es un mensaje de infomación adicional")

// Table

let data = [
    ["Angel", 54],
    ["Sara", 50]
]

console.table(data)

data = [
    {name: "Angel", age: 54},
    {name: "Sara", age: 50}
]

console.table(data)

// Group 

console.group("Usuario:")
console.log("Nombre: Angel")
console.log("Edad: 54")
console.groupEnd()

console.log("xxxxxxxxx")

// time   (Para medir el tiempo que tarda en ejecutar un código)

console.time("Tiempo de ejecución")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2")

console.timeEnd("Tiempo de ejecución")

// Assert

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace  (para analizar la pila de ejecución)

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución")
}

funcA()

// clear  (Borra todo lo que he mostrado en consola)
 
// console.clear()