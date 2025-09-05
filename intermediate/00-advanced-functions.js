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
function