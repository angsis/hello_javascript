// Funciones (Bloque de código para ejecutar una tarea específica)

// Funciones Simples
function myFunc() {
    console.log("!Hola, función¡")
}

myFunc()

// Con parámetros
function myFuncWithParams(name) {
    console.log(`!Hola, ${name}¡`)
}

myFuncWithParams("Angel Eduardo")

// Funciones anónimas (Funciones que no tienen nombre definido, pero hay que asignarlas a una variable o una constante)

const myFunc2 = function(name) {
    console.log(`!Hola, ${name}¡`)
}

myFunc2("Briceño Ayala")

// Arrow Functions  (Funciones de flechas) Tambien hay que asignarlas a una variable o constante

const myFunc3 = (name) => {
    console.log(`!Hola, ${name}¡`)
}

myFunc3("Carmen Argelia")

const myFunc4 = (name) => console.log(`!Hola, ${name}¡`)

myFunc4("Francisco Eduardo")

// Parámetros

function sum (a, b) {
    console.log(a + b)
}

sum(5, 10)

// Parámetros por defecto

function defaultSum (a = 0, b = 0) {
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 25)

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)
console.log(mult(5, 20))

// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función Interna")
    }
    intern()
}

extern()  // intern() Error: Fuera del scope

// Funciones de orden superior.  son funciones que reciben otras funciones de argumentos

function applyFunc(func, paramA, paramB) {
    func(paramA, paramB)
}

applyFunc(defaultSum, 10, 5)

// forEach. Funcion que nos sirve para ejecutar bucles asociados a elementos iterables

let myArray = [1, 2, 3, 4, 5]

myArray.forEach(function (valor) {
    console.log(valor)
})

// con Arrow
myArray.forEach((value) => console.log(value))

mySet = new Set(["Angel", "Briceño", "angsis", 53, true, "angel_eduardo@angsis.com"])
myMap = new Map([
    ["name", "Angel"],
    ["email", "angel_eduardo@angsis.com"],
    ["age", 53] 
])

mySet.forEach((value) => console.log(value))
myMap.forEach((value, kies) => console.log(kies, value))