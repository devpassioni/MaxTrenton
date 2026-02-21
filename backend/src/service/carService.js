"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const vehicleService_1 = require("./vehicleService");
class CarService extends vehicleService_1.VehicleService {
    constructor() {
        super("resources/data/cars.json");
    }
    async findByBodyType(type) {
        const data = await this.findAll();
        return data.filter(c => c.type === type);
    }
    async findByMinHorsePower(min) {
        const data = await this.findAll();
        return data.filter(c => c.horsePower >= min);
    }
    async findByFuelType(fuelType) {
        const data = await this.findAll();
        return data.filter(c => c.fuelType === fuelType);
    }
    async findByTransmissionType(transmissionType) {
        const data = await this.findAll();
        return data.filter(c => c.transmissionType === transmissionType);
    }
    async findByNumOfDoors(numOfDoors) {
        const data = await this.findAll();
        return data.filter(c => c.numsOfDoors === numOfDoors);
    }
    async findByEngine(engine) {
        const data = await this.findAll();
        return data.filter(c => c.engine.toLowerCase() === engine.toLowerCase());
    }
}
exports.CarService = CarService;
//# sourceMappingURL=carService.js.map