"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const vehicle_1 = require("./vehicle");
class Car extends vehicle_1.Vehicle {
    constructor(brand, model, year, color, price, quilometers, status, numberPlate, numsOfDoors, transmissionType, engine, fuelType, type, horsePower) {
        super(brand, model, year, color, price, quilometers, status, numberPlate);
        this.numsOfDoors = numsOfDoors;
        this.transmissionType = transmissionType;
        this.engine = engine;
        this.fuelType = fuelType;
        this.type = type;
        this.horsePower = horsePower;
        status = "Available";
    }
    showDetails(id) {
        return `${this.id}
        Car's brand: ${this.brand}
        Fabrication Year: ${this.year}
        Color: ${this.color}
        Price: ${this.price}
        Quilometers: ${this.kilometers}
        Transmission: ${this.numsOfDoors}
        Engine: ${this.engine}
        Type of Fuel: ${this.fuelType}
        Class Type: ${this.type}
        HorsePower (HP): ${this.horsePower}
        Available: ${this.status}`;
    }
    markAsSold() {
        this.status = 'Sold';
    }
    markAsReserved() {
        this.status = "Reserved";
    }
    isAvaiable(id) {
        if (this.status == "Available") {
            return true;
        }
        else {
            return false;
        }
    }
    applyDiscount(percentage) {
        const percentual = (this.price * percentage);
        const value = (this.price - percentual);
        console.log(`Desconto aplicado de ${percentage}% Valor original: R$ ${this.price} para R$ ${value} `);
        return value;
    }
}
exports.Car = Car;
//# sourceMappingURL=car.js.map