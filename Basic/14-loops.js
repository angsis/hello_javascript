// Loops o bucles : Es como una Estructura de control que permite repetir un bloque de código

// for   

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0

while (i < 5) {
    console.log(`Elemento: ${i}`)
    i++
}

// bucle infinito
// while(true){
// }

// do while     Por lo menos se ejecuta una vez
i = 0

do {
    console.log(`Otro Elemento: ${i}`)
    i++
} while (i < 5)

// for of
let myArray = [1, 2, 3, 4, 5, 6, 7, 8]

let mySet = new Set(["Angel", "Briceño", "angsis", 53, true, "angel_eduardo@angsis.com"])

let myMap = new Map([
    ["name", "Angel"],
    ["email", "angel_eduardo@angsis.com"],
    ["age", 53] 
])

let myString = "Hola JavaScript!"

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let clave of myMap.keys()) {
    console.log(`clave = ${clave}`)
}

for (let valor of myMap.values()) {
    console.log(`valor = ${valor}`)
}

for (let [clave, valor] of myMap.entries()) {
    console.log(`valor = ${valor}, clave = ${clave}`)
}


for (let valor of myString) {
    console.log(valor)
}

// Buenas practicas

// -No carer en un bucle infinito, siempre verificar

// -Break y continue
for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue // salta la ejecucion cuando es igual a 5
    } else if (i == 4) {
        break    // termina la ejecucion cuando es igual a 4
    }
    console.log(`Hola ${i}`)
}

