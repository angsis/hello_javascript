// Array

// Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)


myArray = ["Angel", "Briceño", "Computin", 53, true]
myArray2 = new Array("Angel", "Briceño", "Computin", 53, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Angel"
// myArray2[1] = "Briceño"
myArray2[2] = "Computin"

console.log(myArray2)

myArray = []
myArray[2] = "Angel"
// myArray2[0] = "Briceño"
myArray[1] = "Computin"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Angel")  // Agrega el elemento en el ultimo lugar del array
myArray.push("Briceño")
myArray.push('Computin')
myArray.push(37)

console.log(myArray)

console.log(myArray.pop())  // elimina el último y lo devuelve, o sea,  puedo almacenar el valor borrado en una variable
console.log(myArray)
myArray.pop()  // Elimina el último elemento del array

console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // igual que el pop puedo almacenar el elemnto eliminado
myArray.shift()  // Elimina el primer elemento del array
console.log(myArray)

myArray.unshift("Angel", "Briceño", 37)  // va agregando desde el principio los elementos
console.log(myArray)
myArray.unshift("Computin")
console.log(myArray)

// lenght

console.log(myArray.length)  // propiedad que devuelve lo que mide el array (cuantos elementos)

// clear

myArray = [] // borro todos los elementos
myArray.length = 0 // Alternativa casi no se usa
console.log(myArray)

// slice

myArray = ["Angel", "Briceño", "computin", 37, true]
let myNewArray = myArray.slice(1, 3)  // crea un nuevo arreglo desde el elemento 1 y el 3 no inclusive wl 3

console.log(myArray)
console.log(myNewArray)

// splice

console.log(myArray)
myArray.splice(1, 4)  // elimina los elementos de las posiciones ingresadas desde el 1 al 3 del array
console.log(myArray)

myArray = ["Angel", "Briceño", "computin", 37, true]

myArray.splice(1, 2, "Aqui") // desde la posicion 1 elimine 2 elementos y coloque en sustitucion el elemento "Aqui"
console.log(myArray)

myArray.forEach((elemento, k) => {      // esto es una prueba mia
    console.log(`${elemento} y su llave es ${k}`)
})
