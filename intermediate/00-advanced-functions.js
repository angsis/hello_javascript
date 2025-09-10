// Funciones avanzadas

// Ciudadanos de primera clase

const greet = function (name) {
  console.log(`Hola, ${name}`);
};

greet("Angel");

function processGreeting(greetFunction, name) {
  greetFunction(name);
}

function returnGreeting() {
  return greet;
}

processGreeting(greet, "Angsis");

const greet2 = returnGreeting();
greet2("Eduardo");

// Arrow Function avanzadas

// - Retorno implícito
const multiply = (a, b) => a * b;
console.log(multiply(2, 5));

// - this léxico

const handler = {
  name: "Angel",
  greeting: function () {
    console.log(`Hola, ${this.name}`);
  },
  arrowGreeting: () => {
    console.log(`Hola, ${this.name}`);
  },
};

handler.greeting();
handler.arrowGreeting(); // si no colocamos el punto y como no se esjecuta el IIFE, porque ve todo el contexto

// IIFE (Expresión de Función Invocada Inmediatamente)

// - IIFE Clásico
(function () {
  console.log("IIFE clásico");
})();

(() => {
  console.log("IIFE con arrow function");
})();

// Parámetros Rest (...)

function sum(...numbers) {
  let result = 0
  for (let number of numbers) {
    result += number
  }
  return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))

// Operador Spread (...)

const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
  return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // sin Spread
console.log(sumWithSpread(...numbers))  // que el array tenga más elementos no es un problema, pero si tiene menos si habrá problemas

// Closures (Clausuras) 

function createCounter() {
  let counter = 0
  return function () {
    counter++
    console.log(`Contador: ${counter}`)
  }
}

const counter = createCounter()
counter()
counter()
counter()
counter()

const counter2 = createCounter()
counter2()
counter2()
counter2()
counter2()

// Recursividad

function factorial(n) {
  if (n <= 1) {
    return 1
  }
  return factorial(n - 1) * n
}

console.log(factorial(5))

// Funciones parcialies

function partialSum(a) {
  return function (b, c) {
    return sum(a, b, c)
  }
}

const sunwith = partialSum(5)
console.log(sunwith(10, 3))
console.log(sunwith(3, 3))

// Currying

function currySum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return sum(a, b, c, d)
      }
    }
  }
}

const sumAB = currySum(5)(5)
const sumC = sumAB(3)
console.log(sumC(10))
console.log(sumC(20))

// Callbacks

function processData (data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result) {
  console.log(result)
}

function processResult2(result) {
  console.log(`Mi resultado es: ${result}`)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => {
  console.log(`Mi resultado en la arrow function es: ${result}`)
})