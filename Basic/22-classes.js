// Clases. Es como una plantilla de objetos

class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this. alias = alias
    }

}

// Sintaxis

let person = new Person("Angel", 54, "angsis")
let person2 = new Person("Angel", 54, "angsis")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin Nombre", age = 0, alias = "Sin Alias") {
        this.name = name
        this.age = age
        this. alias = alias
    }

}

let person3 = new DefaultPerson()

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "angsis"
console.log(person3.alias)

// Funciones en clases

class PersonWhitMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this. alias = alias
    }

    walk() {
        console.log("La persona camina")
    }

}

let person4 = new PersonWhitMethod("Angel", 54, "angsis")
person4.walk()

// Propiedades privadas

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this. alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Angel", 54, "angsis", "4564464564")

// no podemos acceder
// console.log(person5.bank)
// person5.bank = "new 4564464564" // bank no es #bank

console.log(person5)

// Getters y setters

class GetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get names() {
        return this.#name
    }

}

let person6 = new GetPerson("Angel", 54, "angsis")

console.log(person6)
console.log(person6.names)