// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
console.log("--------------------------------- 1 -------------------------------")
console.log("--- Map ----")
const iva = 0.19
let netos = [1500, 2000, 18350, 95000, 120350, 100000]

let totales = netos.map(neto => neto * (1 + iva))
console.log(totales)

console.log("--- Filter ----")
let greaters = totales.filter(neto => neto > 100000 || neto == 1785)
console.log(greaters)

console.log("--- Reduce ----")
let sales = totales.reduce((acumulado, total) => acumulado + total)
console.log(`Total de la venta es: ${sales}`)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
console.log("--------------------------------- 2 -------------------------------")
let arrayNumber = [5, 100, -5, 23, 55, 80]
let arrayCubePairs = arrayNumber.map(element => element ** 3).filter(element => element % 2 == 0)
console.log(arrayCubePairs)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
console.log("--------------------------------- 3 -------------------------------")
let arrayInArray = ["Angel", "Eduardo", ["direcciones", ["Maracay", "Talca", ["Venezuela", "Chile", ["Mundo"]]]]]
console.log("--- Flat ----")
console.log(arrayInArray.flat(2))

console.log("--- FlatMap ----")
let flatArray = arrayInArray.flat(4)
console.log(flatArray)
console.log(flatArray.flatMap(element => element.split("u")))

// 4. Ordena un array de números de mayor a menor
console.log("--------------------------------- 4 -------------------------------")
console.log(arrayNumber.sort((a, b) => b - a))

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
console.log("--------------------------------- 5 -------------------------------")
let frutasA = new Set(["Manzanas", "Peras", "Manzanas", "Higos", "Cocos", "Platanos", "Cocos"])
let frutasB = new Set(["Limónes", "Duraznos", "Peras", "Arandanos", "Cocos", "Mandarinas"])

console.log("--- Unión ----")
let unionSet = new Set([...frutasA, ...frutasB])
console.log(unionSet)

console.log("--- Intersección ----")
let intersectionSet1 = new Set([...frutasA].filter(element => frutasB.has(element))) // usando método has del set
let intersectionSet2 = new Set([...frutasA].filter(element => [...frutasB].includes(element))) // usando método includes de un array (set se convierte en array con el operador spread )
console.log(intersectionSet1)
console.log(intersectionSet2)

console.log("--- Diferencia ----")
let subtractSet1 = new Set([...frutasA].filter(element => !frutasB.has(element))) // usando método has del set
let subtractSet2 = new Set([...frutasA].filter(element => ![...frutasB].includes(element))) // usando método includes de un array (set se convierte en array con el operador spread )
console.log(subtractSet1)
console.log(subtractSet2)

// 6. Itera los resultados del ejercicio anterior
console.log("--------------------------------- 6 -------------------------------")
console.log("--- Unión ----")
unionSet.forEach(element => console.log(element))
console.log("--- Intersección ----")
intersectionSet1.forEach(element => console.log(element))
console.log("--- Diferencia ----")
subtractSet1.forEach(element => console.log(element))

// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos
console.log("--------------------------------- 7 -------------------------------")
let users = new Map([
    ["Angel", {
        edad: 55,
        email: "angel@gmail.com"
    }],
    ["María", {
        edad: 56,
        email: "maria@gmail.com"
    }],
    ["Carmen", {
        edad: 57,
        email: "carmen@gmail.com"
    }]
])

let users2 = new Map()

users2.set("Juan", {
    edad: 25, 
    email: "juan@gmail.com"
})

users2.set("Petra", {
    edad: 30, 
    email: "petra@gmail.com"
})

users2.set("Silvia", {
    edad: 40, 
    email: "silvia@gmail.com"
})

users.forEach((info, nombre) => {
    console.log(`Nombre: ${nombre}, edad: ${info.edad}, email: ${info.email}`)
})

users2.forEach((info, nombre) => {
    console.log(`Nombre: ${nombre}, edad: ${info.edad}, email: ${info.email}`)
})

// 8. Dado el mapa anterior, crea un array con los nombres
console.log("--------------------------------- 8 -------------------------------")
const nombresArray = [...users.keys()]
console.log(nombresArray)

const nombresArray2 = [...users2.keys()]
console.log(nombresArray2)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario