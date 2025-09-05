// Exportación de módulos

// Funciones
export function add(a, b) {
    return a + b
}

// Propiedades

export const PI = 3.1416
export let name = "Angel"

// Clases
export class Circle {
    constructor (radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
}


// Exportación por defecto

/* export default function substract(a, b) {   // no se puede tener dos exportaciones por defecto solo 1, solo funciones y clases
    return a - b
} */

export default class MyClass {
    func() {
        console.log("Mi clase")
    }
}
