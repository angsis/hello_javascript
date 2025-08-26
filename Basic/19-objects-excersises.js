// 1. Crea un objeto con 3 propiedades
console.log("------------------------ 1 --------------------------")
let animals = {
    tipe: "Mamifero",
    sexo: "masculino",
    name: "Tigre"
}
console.log(animals)

// 2. Accede y muestra su valor
console.log("------------------------ 2 --------------------------")
console.log(animals.name)
console.log(animals["sexo"])
console.log(animals.tipe)

// 3. Agrega una nueva propiedad
console.log("------------------------ 3 --------------------------")
animals.origen = "Africano"
console.log(animals)

// 4. Elimina una de las 3 primeras propiedades
console.log("------------------------ 4 --------------------------")
delete animals.sexo
console.log(animals)

// 5. Agrega una función e invócala
console.log("------------------------ 5 --------------------------")
animals.sonido = function() {
    console.log(`El ${this.name} hace grrrr....`)
} 
console.log(animals)
animals.sonido()

// 6. Itera las propiedades del objeto
console.log("------------------------ 6 --------------------------")
for (let key in animals) {
    console.log(`${key}: ${animals[key]}`)
}

// 7. Crea un objeto anidado
console.log("------------------------ 7 --------------------------")
let empresa = {
    name: "Pepsicola",
    dni: "45654564-8",
    address: {
        street: "Calle 5 de julio",
        state: "California",
        country: "EEUU"
    }
}

console.log(empresa)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("------------------------ 8 --------------------------")
console.log(empresa.address.street)
console.log(empresa.address["country"])
console.log(empresa["address"].state)

// 9. Comprueba si los dos objetos creados son iguales
console.log("------------------------ 9 --------------------------")
let empresa2 = {
    name: "Pepsicola",
    dni: "45654564-8",
    address: {
        street: "Calle 5 de julio",
        state: "California",
        country: "EEUU"
    }
}

let empresa3 = empresa

console.log(empresa === empresa2)
console.log(empresa.dni === empresa2.dni)
console.log(empresa === empresa3)

// 10. Comprueba si dos propiedades diferentes son iguales
// Igual a la 9