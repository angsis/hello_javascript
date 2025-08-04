// Strings (Cadenas)

let myName = "Eduardo"
let greeting = "Hola, " + myName + "!"

console.log(greeting)
console.log(typeof greeting)

// longitud cadena
console.log(greeting.length)

// acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[11])

// Métodos Comunes
console.log(greeting.toUpperCase()) // convertir a mayuscula
console.log(greeting.toLowerCase()) // convertir a minuscula
console.log(greeting.indexOf("Eduardo")) // Para saber en que indice se encuentra el texto (number)
console.log(greeting.indexOf("Hola"))  // Para saber en que indice se encuentra el texto (number)
console.log(greeting.includes("Hola")) // Para saber si incluye el texto (boleano)
console.log(greeting.includes("Pepe")) // Para saber si incluye el texto (boleano)
console.log(greeting.slice(7, 8)) // para obtener un trozo del texto (string) (entre el 7 y el 8)
console.log(greeting.replace("Eduardo", "Angel"))
console.log(greeting.replace("Hola", "Buenas Tardes")) // remplaza la palabra

// Template literals (plantillas literales)

let message = `Hola, este es mi 
curso de javascript`  // con las comillas invertidas puedo escribir un texto en varias lineas
console.log(message)

let mail = "angel_eduardo@gmail.com"

console.log(`Hola ${myName} mi correo es: ${mail}`) // inrterpolación
