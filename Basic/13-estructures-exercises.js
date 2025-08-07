// 1. Crea un array que almacene cinco animales
console.log('------------------ 1 ------------------')
//let myAnimals = new Array("Perro", "Gato", "Jirafa", "León", "Caimán")
let myAnimals = ["Perro", "Gato", "Jirafa", "León", "Caimán"]
console.log(myAnimals)

// 2. Añade dos más. Uno al principio y otro al final
console.log('------------------ 2 ------------------')
myAnimals.push("Pato")
console.log(myAnimals)
myAnimals.unshift("Tigre")
console.log(myAnimals)

// 3. Elimina el que se encuentra en tercera posición
console.log('------------------ 3 ------------------')
myAnimals.splice(2,1)
console.log(myAnimals)

// 4. Crea un set que almacene cinco libros
console.log('------------------ 4 ------------------')
let mySetBook = new Set(["Matemática", "La vida es bella", "Nutrición", "100 años de soledad", "La culpa es de la vaca"])
console.log(mySetBook)

// 5. Añade dos más. Uno de ellos repetido
console.log('------------------ 5 ------------------')
mySetBook.add("Juego de tronos")
mySetBook.add("Biología")
mySetBook.add("Biología")
console.log(mySetBook)

// 6. Elimina uno concreto a tu elección
console.log('------------------ 6 ------------------')
mySetBook.delete("Biología")
console.log(mySetBook)

// 7. Crea un mapa que asocie el número del mes a su nombre
console.log('------------------ 7 ------------------')
let myMapMonth = new Map([
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"],
])
console.log(myMapMonth)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log('------------------ 8 ------------------')
console.log(myMapMonth.get("5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
console.log('------------------ 9 ------------------')
let veranoMeses = ['Diciembre', 'Enero', 'Febrero']

myMapMonth.set("verano", veranoMeses)
console.log(myMapMonth.get("verano"))
console.log(myMapMonth)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
console.log('------------------ 10 ------------------')
let myArray = ["Cambur", "Peras", "Manzanas", "Aguacate", "Melón", "Aguacate"]
console.log(myArray)

let mySet = new Set(myArray)
console.log(mySet)

let myMap = new Map()
myMap.set("frutas", mySet)
console.log(myMap)

for (let fruta of myMap.get("frutas")) {
    console.log(`Fruta: ${fruta}`)
}