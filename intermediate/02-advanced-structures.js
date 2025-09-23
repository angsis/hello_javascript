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