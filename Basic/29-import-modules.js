// Importación módulos

import { add, PI, name, Circle } from "./28-export-modules.js"
import defaultImport from "./28-export-modules.js"

// funciones

console.log(add(15, 20))

// Propiedades

console.log(PI)
console.log(name)
/* console.log(substract(10, 20)) */

// Clases
let circulo = new Circle(10)
console.log(circulo.radius)
console.log(circulo.area().toFixed(2))

let myClass = new defaultImport()
myClass.func()

