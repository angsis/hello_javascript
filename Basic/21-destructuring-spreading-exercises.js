// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
console.log("--------------------------- 1 -------------------------------")
let myArray = ["Juan", 58, true, {name: "Angel", age: 54}, [1, 5, 6, 7.5, 2/5]]

let [element0, element1, element2, element3, element4] = myArray

console.log(element0, typeof element0)
console.log(element1, typeof element1)
console.log(element2, typeof element2)
console.log(element3, typeof element3)
console.log(element4, typeof element4)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log("--------------------------- 2 -------------------------------")
let myArray2 = ["Juan", 58, true, {name: "Angel", age: 54}, [1, 5, 6, 7.5, 2/5]]

let [element5, element6, element7, element8, element9, element10 = "Juanito Perez"] = myArray2
console.log(element5, typeof element5)
console.log(element6, typeof element6)
console.log(element7, typeof element7)
console.log(element8, typeof element8)
console.log(element9, typeof element9)
console.log(element10, typeof element10)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log("--------------------------- 3 -------------------------------")
let myAnimals = {
    nameAnimals: "Cocodrilo",
    generoAnimals: "Macho",
    country: "Asia",
    age: 5,
    propiedades: {
        color: "Marron",
        sonido: "Grrrrrr..."
    }
}

let { nameAnimals, generoAnimals } = myAnimals

console.log(nameAnimals)
console.log(generoAnimals)

/* 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
      a nuevas variables con nombres diferentes */
console.log("--------------------------- 4 -------------------------------")
let { country: pais, age: edad } = myAnimals

console.log(pais)
console.log(edad)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log("--------------------------- 5 -------------------------------")
let { propiedades: { color, sonido} } = myAnimals
let { propiedades: { color: colores, sonido: sonidos}} = myAnimals

console.log(color)
console.log(sonido)
console.log(colores)
console.log(sonidos)

// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log("--------------------------- 6 -------------------------------")
let myArray3 = [...myArray, ...myArray2]

console.log(myArray3)

// 7. Usa propagación para crear una copia de un array
console.log("--------------------------- 7 -------------------------------")
let myArray4 = [...myArray]

console.log(myArray4)

// 8. Usa propagación para combinar dos objetos en uno nuevo
console.log("--------------------------- 8 -------------------------------")
let person = {
    name: "Angel",
    gener: "Masculino",
    age: 54,
    height: 1.80
}

let myOnjects = { ...myAnimals, ...person }

console.log(myOnjects)

// 9. Usa propagación para crear una copia de un objeto
console.log("--------------------------- 9 -------------------------------")
let person2 = { ...person }

console.log(person2)

// 10. Combina desestructuración y propagación
console.log("--------------------------- 10 -------------------------------")
let { name, age, ...rest } = person

console.log(name)
console.log(age)
console.log(rest)

let [ item1, item2, , , ...unArray ] = myArray

console.log(item1)
console.log(item2)
console.log(unArray)
