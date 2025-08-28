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

class GetSetPerson {

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

    get name() {
        return this.#name
    }

/*     get bank() {                             // SOLO PARA VER QUE SI LO CAMBIO
        return this.#bank
    } */

    set bank(newbank) {
        this.#bank = newbank
    }

}

let person6 = new GetSetPerson("Angel", 54, "angsis", "B4568465468")

console.log(person6)
console.log(person6.name)
person6.bank = "B1111111111"
// console.log(person6.bank)  Era solo para ver que si lo cambio con la funcion set

// Herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }
}

let animal = new Animal("León")
console.log(animal)

class Dog extends Animal {

    run() {
        console.log("El perro corre")
    }

    sound() {
        //super.sound()  // solo si quieres que haga lo que hace la funcion padre (no se usa)
        console.log(`El perro ${this.name} hace Guau!`)
    }
}

let myDog = new Dog("AngelDog")

console.log(myDog)
myDog.run()
myDog.sound()

class Fish extends Animal {

    constructor(name, size) {
        super(name),
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }
}

let myFish = new Fish("AngelFish", 20)

console.log(myFish)
myFish.swim()
myFish.sound()

// Métodos estáticos

class MathOperations {    

    static sum(a, b) {   // al colocar la palabra static no necesito instanciar
        return a + b
    }
}

console.log(MathOperations.sum(10, 220))