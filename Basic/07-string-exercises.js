let myName = "Angel Eduardo"
let myLastName = "Briceño Ayala"
let myRut = "25.XXX.XXX"
let myAdress = "Paisaher Hermoso 1859"

// 1. Concatena dos cadenas de texto
console.log(myName + ' ' + myLastName)
// 2. Muestra la longitud de una cadena de texto
console.log(myRut.length)
// 3. Muestra el primer y último carácter de un string
console.log(myAdress[0])
console.log(myAdress[20])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(myName.toUpperCase())
console.log(myLastName.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let unTexto = `Este es
un texto
en varias
lineas`
console.log(unTexto)
// 6. Interpola el valor de una variable en un string
console.log(`Hola me llamo ${myName} con Rut ${myRut} en la direccion ${myAdress}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let myString = "Este es un texto"
console.log(myString.replace(/ /g, "-",)) // ó
console.log(myString.replaceAll(" ", "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(myString.includes("un"))
// 9. Comprueba si dos strings son iguales
console.log(myName == myLastName)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(myName.length == myLastName.length)