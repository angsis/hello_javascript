// 1. Crea una clase que reciba dos propiedades
console.log("---------------------- 1 ---------------------------")
class Vehicle {
    constructor(name, color) {
        this.name = name,
        this.color = color
    }

    static wheels() {
        console.log(`Los Vehiculos tienen una cantidad de rueda por tipo`)
    }

}

let myVehicle = new Vehicle("Suv 500", "Red")
console.log(myVehicle)

// 2. Añade un método a la clase que utilice las propiedades
console.log("---------------------- 2 ---------------------------")
class Vehicle2 {
    constructor(name, color, width, depth) {
        this.name = name,
        this.color = color,
        this.width  = width,
        this.depth = depth
    }

    colorVehicle() {
        console.log(`El vehiculo ${this.name} es de color ${this.color}`)
    }

    squareMeter() {
        return this.width * this.depth
    }

}

let myVehicle2 = new Vehicle2("Suv 500", "Rojo", 1.8, 3.85 )
myVehicle2.colorVehicle()
console.log(myVehicle2.squareMeter())

// 3. Muestra los valores de las propiedades e invoca a la función
console.log("---------------------- 3 ---------------------------")
console.log(myVehicle2.name)
console.log(myVehicle2.color)
console.log(myVehicle2.depth)
console.log(myVehicle2.width)

myVehicle2.colorVehicle()

console.log(`El vehiculo tiene una dimención de ${myVehicle2.squareMeter()} m2`)

// 4. Añade un método estático a la primera clase
console.log("---------------------- 4 ---------------------------")
console.log("---- Ver en ejercicio 1")

// 5. Haz uso del método estático
console.log("---------------------- 5 ---------------------------")
Vehicle.wheels()

// 6. Crea una clase que haga uso de herencia
console.log("---------------------- 6 ---------------------------")

class Moto extends Vehicle2 {
    
}

let myMoto = new Moto("Vera", "Azul", 1, 1.2)
console.log(myMoto)

// 7. Crea una clase que haga uso de getters y setters
console.log("---------------------- 7 ---------------------------")
class Vehicle3 {
    #serial
    #chasis
    constructor(name, color, serial, chasis) {
        this.name = name,
        this.color = color,
        this.#serial = serial,
        this.#chasis = chasis
    }

    get serial() {
        return this.#serial
    }

    get chasis() {
        return this.#chasis
    }

    set serial(newSerial) {
        this.#serial = newSerial
    }

    set chasis(newChasis) {
        this.#chasis = newChasis
    }

}

let myVehicle3 = new Vehicle3("Lancha", "Amarilla", "S99999999", "CH111111111" )
console.log(myVehicle3)

// 8. Modifica la clase con getters y setters para que use propiedades privadas
console.log("---------------------- 8 ---------------------------")
console.log("Realizado en la 7")
console.log(myVehicle3.chasis)
console.log(myVehicle3.serial)

// 9. Utiliza los get y set y muestra sus valores
console.log("---------------------- 9 ---------------------------")
console.log(myVehicle3.chasis)
console.log(myVehicle3.serial)
myVehicle3.serial = "s46546546545"
myVehicle3.chasis = "c98989898989"
console.log(myVehicle3.chasis)
console.log(myVehicle3.serial)

// 10. Sobrescribe un método de una clase que utilice herencia
console.log("---------------------- 10 ---------------------------")
class Lancha extends Vehicle2 {

    colorVehicle() {
    console.log(`El vehiculo Lancha ${this.name} es de color ${this.color}`)
    }

}

let myLancha = new Lancha("Marina", "Blanca", 3.5, 2)
myLancha.colorVehicle()