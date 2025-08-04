// 1. Escribe un comentario en una línea
// Esto es un comentario de 1 línea

// 2. Escribe un comentario en varias líneas
/* Este es
un comentario de
varias líneas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
console.log('*************** 3 ******************')
let myName = "Angel Eduardo"
let myAge = 53
let weight = 15.5
let graduated = false
let aVariable
let aNull = null
let mySymbol = Symbol("mySymbol")
let aBigNumberInt = BigInt(465465456456468468468468468468468468468468468468486468554864)
let aBigNumberInt2 = 446546548354645646546546546545646545645645646546546546546546546545n
// 4. Imprime por consola el valor de todas las variables
console.log('*************** 4 ******************')
console.log(myName)
console.log(myAge)
console.log(weight)
console.log(graduated)
console.log(aVariable)
console.log(aNull)
console.log(mySymbol)
console.log(aBigNumberInt)
console.log(aBigNumberInt2)
// 5. Imprime por consola el tipo de todas las variables
console.log('*************** 5 ******************')
console.log(typeof myName)
console.log(typeof myAge)
console.log(typeof weight)
console.log(typeof graduated)
console.log(typeof aVariable)
console.log(typeof aNull)
console.log(typeof mySymbol)
console.log(typeof aBigNumberInt)
console.log(typeof aBigNumberInt2)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
console.log('*************** 6 ******************')
myName = "Briceño Ayala"
myAge = 60
weight = 70.5
graduated = true
aVariable =""
aNull = null
mySymbol = Symbol("mySymbol2")
aBigNumberInt = BigInt(9999999999999999999999999999999999999999999999999999999999)
aBigNumberInt2 = 9999999999999999999999999999999999999999999999999999999n
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
console.log('*************** 7 ******************')
myName = 56
myAge = "60"
weight = "70.5"
graduated = null
aVariable = "x"
aNull = true
mySymbol = BigInt(9999999999999999999999999999999999999999999999999999999999)
aBigNumberInt = Symbol("mySymbol2")
aBigNumberInt2 = 2560
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
console.log('*************** 8 ******************')
const myNameC = "Angel Eduardo Briceño Ayala"
const myAgeC = 53
const weightC = 70.5
const graduatedC = true
const aVariableC = ""
const aNullC = null
const mySymbolC = Symbol("mySymbol2")
const aBigNumberIntC = BigInt(9999999999999999999999999999999999999999999999999999999999)
const aBigNumberInt2C = 9999999999999999999999999999999999999999999999999999999999n
// 9. A continuación, modifica los valores de las constantes
console.log('*************** 9 ******************')
myNameC = "Angel Eduardo Briceño"
myAgeC = 54
weightC = 70.7
graduatedC = false
aVariableC = null
aNullC = ""
mySymbolC = Symbol("mySymbol23")
aBigNumberIntC = BigInt(99999999999999999999999999999999999999999999999999999999998)
aBigNumberInt2C = 99999999999999999999999999999999999999999999999999999999998n
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse