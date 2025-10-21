// Estructuras avanzadas


// Array avanzados


// - Métodos funcionales

// forEach

let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => console.log(element))

// map  (crear un nuevo array aplicando una función a cada elemento del array)

let pares = numbers.map(element => `Hola, ${element}`)
console.log(pares)

// filter (filtra elementos creando un nuevo array)

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce 
let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum)

let sum1 = numbers.reduce((previous, current, key) => {
    let result
    result = previous  + current
    console.log(`R:${result}, P:${previous}, C: ${current}, K: ${key}`)
    return result
}, 0)

console.log(sum1)


// - Manipulación

// flat  (aplana el array segun nivel indicado)

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

//flapMap (aplana el array -flap- crea un array nuevo segun funcion -map-)

let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

// - ordenación

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)
console.log(sorted)

// reverse

sorted.reverse()
console.log(sorted)


// - Búsqueda

// Include

console.log(sorted.includes(4))
console.log(sorted.includes(5))

// find

console.log(sorted.find(value => value == 4))
console.log(sorted.find(value => value == 5))
let firstEven = sorted.find(element => element % 2 == 0)
console.log(firstEven)

// findIndex

let firstEvenIndex = sorted.findIndex(element => element % 2 == 0)
console.log(firstEvenIndex)


// Sets avanzados

// Operaciones

// Eliminación de duplicados

let numberArray = [1, 2, 2, 3, 4, 5, 6, 6]
numberArray = [...new Set(numberArray)]
console.log(numberArray)

// Unión

const setA = new Set([1, 2 ,3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union)

// Intersección

const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)

// Diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

// Conversión

console.log([...setA])


// Iteración

// forEach

setA.forEach(element => console.log(element))


// Maps avanzados

let myMap = new Map([
    ["name", "Angel"],
    ["age", 55]
])

console.log(myMap)

// -Iteración

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// -Conversión

// Mapa a Array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// Mapa a objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a Mapa

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)