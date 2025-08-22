// Objects   coleccion de propiedades, colecciones de datos relacionados tipo datos-valor

// Sintaxis

let person = {
    name: "Angel",
    age: 37,
    alias: "angsis"
}

// Acceso a proiedades

// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["name"])

// Modificación de propiedades
person.name = "Angel Eduardo"
console.log(person.name)

console.log(typeof person.age)
person.age = "37"
console.log(person.age)
console.log(typeof person.age)

// Eliminación de propiedades
delete person.age
console.log(person)

// Nueva propiedad
person.email = "angel_eduardo@angsis.com"
person["age"] = 57
console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Angel",
    age: 37,
    alias: "angsis",
    walk: function() {
        console.log("La persona camina")
    }
}

person2.walk()

// Anidacion de objects

let person3 = {
    name: "Angel",
    age: 37,
    alias: "angsis",
    walk: function() {
        console.log("La persona camina")
    },
    jobs: {
        name: "Computacion",
        exp: 15,
        work: function() {
            console.log(`${this.name} persona trabaja`)
        }
    }
}

console.log(person3)
console.log(person3.jobs)
console.log(person3.jobs.name)
person3.jobs.work()

// Igualdad de objects

let person4 = {
    name: "Angel Eduardo",
    alias: "angsis",
    email: "angel_eduardo@angsis.com",
    age: 57
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iteración

for(let key in person3.jobs) {     // accede es a la clave, para acceder el valor tiene que ser de la forma person4[key]
    console.log(key + ": " + person3.jobs[key])
}

// Funciones como objetos

function Person(name, age) {    // no hacerlo de esta forma, hay que hacerlo como un clase
    this.name = name
    this.age = age
}

let person5 = new Person("Angel Eduardo Briceño", 54)
console.log(person5)
console.log(person5.name)

console.log(typeof person4)
console.log(typeof person5)