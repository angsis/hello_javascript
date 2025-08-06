// Map (o diccionario en otros lenguajes)

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicialización 

myMap = new Map([
    ["name", "Angel"],
    ["email", "angel_eduardo@angsis.com"],
    ["age", 53] 
])

console.log(myMap)
// set       Si la clave no existe lo agrega, si la clave existe lo modifica (agrega o modifica)

myMap.set("alias", "amgelo7")
myMap.set("name", "Angel Eduardo")
myMap.set("age", 60)

console.log(myMap)

// get    Obtener el valor mediante la clave, si la clave no existe envia un undefined

console.log(myMap.get("name"))
console.log(myMap.get("lastName")) // undefined

// has       Sirve para comprobar si una clave existe

console.log(myMap.has("name"))  // True
console.log(myMap.has("lastName"))  // False

// delete

myMap.delete("email")  // borra el registro ingresando su llave
console.log(myMap)

//keys & values and entries

console.log(myMap.keys()) // muestra las llaves o claves
console.log(myMap.values())  // muestra los valores
console.log(myMap.entries())

// size

console.log(myMap.size) // nos dice el tamamño del map

// clear

myMap.clear()     // Limpia el map queda en 0
console.log(myMap)
