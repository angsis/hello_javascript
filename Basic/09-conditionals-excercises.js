// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log("****************** 1 **************************")
let myName = "Angel"

if (myName == "Angel") {
    console.log(`Mi nombre es: ${myName}`)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
console.log("****************** 2 **************************")
let user = "amgelo"
let password = "pepe1234"

if (user == "amgelo" && password == "pepe1234") {
    console.log("El usuario ha sido autenticado")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
console.log("****************** 3 **************************")
let myNumber = -5

if (myNumber == 0) {
    console.log(`El numero es 0`)
} else if (myNumber > 0) {
    console.log('El número es positivo')
} else {
    console.log("El número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
console.log("****************** 4 **************************")
let age = 5
//let faltaVotar = 18-age

if (age >= 18) {
    console.log("Puede Votar")
} else {
    console.log(`No puede votar tiene ${age}, le faltan ${18-age} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
console.log("****************** 5 **************************")
const message = age >= 18 ? "Es un adulto" : " Es un menor"
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
// 9. Usa un switch para hacer de nuevo el ejercicio 6
console.log("****************** 6 y 9 **************************")
let mes = 11

if (mes == 9 || mes == 10 || mes == 11) {
    console.log("Estammos en la estación Primavera")
} else if (mes == 12 || mes == 1 || mes == 2) {
    console.log("Estamos en la estacion Verano")
} else if (mes == 3 || mes == 4 || mes == 5) {
    console.log("Estamos en la Estación Otoño")
} else if (mes == 6 || mes == 7 || mes == 8) {
    console.log("Estamos en la estacion Invierno")
} else {
    console.log("Error en el dato ingresado")
}

if (mes >= 9 && mes <= 11) {
    console.log("Estammos en la estación Primavera")
} else if (mes == 12 || mes == 1 || mes == 2) {
    console.log("Estamos en la estacion Verano")
} else if (mes >= 3 && mes <= 5) {
    console.log("Estamos en la Estación Otoño")
} else if (mes >= 6 && mes <= 8) {
    console.log("Estamos en la estacion Invierno")
} else {
    console.log("Error en el dato ingresado")
}

switch (mes) {
    case 9:
    case 10:
    case 11:
        console.log("Estammos en la estación Primavera")
        break
    case 12:
    case 1:
    case 2:
        console.log("Estamos en la estacion Verano")
        break
    case 3: 
    case 4:
    case 5:
        console.log("Estamos en la Estación Otoño")
        break
    case 6:
    case 7:
    case 8:
        console.log("Estamos en la estacion Invierno")
        break
    default:
        console.log("Error en el dato ingresado")
        break;
}
    
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// 10. Usa un switch para hacer de nuevo el ejercicio 7
console.log("****************** 7 y 10 **************************")
let anio = 2025
let diasMes = new Date(anio, mes, 0).getDate()
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre']

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log(`El mes de ${meses[mes-1]} tiene 31 dias`)
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log(`El mes de ${meses[mes-1]} tiene 30 dias`)
} else if (mes == 2) {
    console.log(`El mes de ${meses[mes-1]} tiene 28 o 29 dias`)
} else {
    console.log(`El mes que ingreso es incorrecto`)
}
    


switch (mes) {
    case 1:
        console.log(`El mes de Enero tiene ${diasMes} dias`)
        break
    case 2:
        console.log(`El mes de Febrero tiene ${diasMes} dias`)
        break
    case 3:
        console.log(`El mes de Marzo tiene ${diasMes} dias`)
        break
    case 4:
        console.log(`El mes de Abril tiene ${diasMes} dias`)
        break
    case 5:
        console.log(`El mes de Mayo tiene ${diasMes} dias`)
        break
    case 6:
        console.log(`El mes de Junio tiene ${diasMes} dias`)
        break
    case 7:
        console.log(`El mes de Julio tiene ${diasMes} dias`)
        break
    case 8:
        console.log(`El mes de Agosto tiene ${diasMes} dias`)
        break
    case 9:
        console.log(`El mes de Septiembre tiene ${diasMes} dias`)
        break
    case 10:
        console.log(`El mes de Octubre tiene ${diasMes} dias`)
        break
    case 11:
        console.log(`El mes de Noviembre tiene ${diasMes} dias`)
        break
    case 12:
        console.log(`El mes de Diciembre tiene ${diasMes} dias`)
        break
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
console.log("****************** 8 **************************")
let idioma = "Deutscher"

switch (idioma) {
    case "Español":
        console.log(`Hola!!, soy el idioma ${idioma}`)
        break
    case "English":
        console.log(`Hello!, I am the ${idioma} language`)
        break
    case "Deutscher":
        console.log(`Hallo! Ich bin ${idioma}`)
        break
    default:
        console.log(`No ingresaste un idioma válido`)
}
