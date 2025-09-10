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
function multiplyCurry (num1) {
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
function potencia(num, exponente) {
    if (exponente < 1) {
        return 1
    }
    return potencia(num, exponente-1) * num
}

console.log(potencia(3,2))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico