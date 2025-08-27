let myArray = [1, 2, 3, 4]

let person = {
    name: "Angel",
    age: 54,
    alias: "Angsis"
}

let myValue = myArray [1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuración.    Es una sintaxis que nos permite extraer valor de array y objetos y colocarlos en variables.

// Sintaxis array

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis array con valores predeterminados. al redefinir las variables no puedo usar valores por defecto, tienen que ser al definir las variables
// no se redifine una variable se crea una variable nueva, si el array no tiene valoren la posición

let [myValue5 = 0, myValue6, myValue7, myValue8, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos array

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// Sintaxis objects

let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objects con valores predeterminados.

let {name2, age2, alias2, mail = "ab@gmail.com"} = person  // debe utilizar el nombre de la clave como variable
console.log(name2) // no existe
console.log(age2)  // no existe
console.log(alias2) // no existe
console.log(mail)

// Sintaxis objects con nuevos nombres de variables.

let {name: name3, age: age3, alias: alias3} = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objects anidados

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

let { name: name4, jobs: { name: jobname } } = person3
console.log(name4)
console.log(jobname)

// Propagación (spreading) Operador de propagación (...) Expande elementos de un array u objetos a otros array u objetos

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]

console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray]

console.log(myArray3)

// Combinación de Arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis objects

let person4 = { ...person, email: "a@gmail.com" }

console.log(person4)

// Copia de objects

let person5 = { ...person }

console.log(person5)