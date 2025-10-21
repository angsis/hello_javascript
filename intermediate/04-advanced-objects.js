// Objetos avanzados

// Prototipos y Herencia

// Prototipos 

let person = {
    name: "Angel",
    age: 55,
    greet() {
        console.log(`Hola, Soy ${this.name} `)
    } 
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function() {
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()