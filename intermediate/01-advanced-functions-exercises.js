// 1. Crea una función que retorne a otra función
console.log("------------------------  1  -------------------------")
function createGreet(name) {
    return function greeting() {
        console.log(`Hola, ${name}`)
    }
}

const greetAngel = createGreet("Angel")
greetAngel()

// 2. Implementa una función currificada que multiplique 3 números
console.log("------------------------  2  -------------------------")
function multiplyCurry(num1) {
    return function (num2) {
        return function (num3) {
            return num1 * num2 * num3
        }
    }
}
console.log(multiplyCurry(5)(2)(1))
const multipNum1 = multiplyCurry(100)
console.log(multipNum1(2)(1))
const multNum2 = multipNum1(3)
const multNum3 = multNum2(1)
console.log(multNum3)

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
console.log("------------------------  3  -------------------------")
function potencia(num, exponente) {
    if (exponente < 1) {
        return 1
    }
    return potencia(num, exponente - 1) * num
}

console.log(potencia(3, 2))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
console.log("------------------------  4  -------------------------")
function createCounter(valInitial) {
    let counter = valInitial
    return funcsCounter = {
        getValue: function () {
            return counter
        },
        increment: function () {
            return counter++
        },
        decrement: function () {
            return counter--
        }
    }
}
const counter = createCounter(10)
counter.decrement()
counter.decrement()
counter.decrement()
counter.increment()
console.log(counter.getValue())
counter.increment()
console.log(counter.getValue())
counter.decrement()
console.log(counter.getValue())
console.log(counter)

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
console.log("------------------------  5  -------------------------")
function sumManyTimes(multiplier, ...numbers) {
    let sumNumbers = 0
    for (i = 0; i < numbers.length; i++) {
        sumNumbers += numbers[i]
    }
    return sumNumbers * multiplier
}
let myArray = [10, 10, 10, 10, 10, 200, 500, 20]
console.log(sumManyTimes(10, ...myArray))
console.log(sumManyTimes(10, 10, 10, 10, 10, 10, 200, 500, 20))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
console.log("------------------------  6  -------------------------")
function sumNumbers(...numbers) {
    let sumNumbers = 0
    for (i = 0; i < numbers.length; i++) {
        sumNumbers += numbers[i]
    }
    return sumNumbers
}

function sum(a, b, c) {
    return a + b + c
}

function processData(data, callback) {
    const result = sumNumbers(...data)
    return callback(result)
}

function processData2(data, callback) {
    const result = sum(...data)
    return callback(result)
}

function getResult(resultSuma) {
    return console.log(`El resultado de la suma es: ${resultSuma}`)
}

processData([10, 20, 30, 40, 50], getResult)
processData([2, 3, 5], getResult)

// 7. Desarrolla una función parcial
console.log("------------------------  7  -------------------------")
function person(name, age, height, weight) {
    return `Nombre: ${name}, Edad: ${age}, Altura: ${height}, Peso: ${weight}`
}

function greetingComplete(name) {
    return function (age = 0, height = 0, weight = 0) {
        return person(name, age, height, weight)
    }
}

const greet = greetingComplete("Angel Eduardo")
console.log(greet(50, 1.80, 92))
console.log(greet())

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico