// Set

// Sintaxis declaración

let mySet = new Set()

// Sintaxsis incicialización

mySet = new Set(["Angel", "Briceño", "angsis", 53, true, "angel_eduardo@angsis.com"]) // entre corchetes

console.log(mySet)
console.log(mySet.size)

// Métodos comunes

// add y delete

mySet.add("htt://angsis.com")
console.log(mySet)

mySet.delete("htt://angsis.com")

console.log(mySet)

console.log(mySet.delete("Angel"))  // devuelve el valor true si lo consigue y lo elimina
console.log(mySet.delete(4))   // devuelve el valor false si no lo consigue

if (mySet.delete("4")) {
    console.log("Fué Borrado")
} else {
    console.log("No fue borrado")
}

// has

console.log(mySet.has("Angel"))  // devuelve false si no consigue el elemento
console.log(mySet.has("Briceño")) // devuelve true si consigue el elemento

// size

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

myArray.push("angel_eduardo@angsis.com")
console.log(myArray)

mySet = new Set(myArray)
console.log(mySet)

// principal diferencia de set a un array es que no acepta duplicado

mySet.add("angel_eduardo@angsis.com")
mySet.add("angel_eduardo@angsis.com")
mySet.add("angel_eduardo@angsis.com")
mySet.add("angel_eduardo@angsis.com")

console.log(mySet)