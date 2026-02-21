import { Car } from "../models/car";
import { VehicleService } from "./vehicleService";

export class CarService extends VehicleService<Car & {id: number}> {
    constructor() {
        super("resources/data/cars.json");
    }

    async findByBodyType(type: "Sedan"|"SUV"|"Coupe"|"Hatchback"): Promise<Car[]> {
        const data = await this.findAll();
        return data.filter(c => c.type === type);
    }

    async findByMinHorsePower(min: number): Promise<Car[]> {
        const data = await this.findAll();
        return data.filter(c => c.horsePower >= min);
    }

    async findByFuelType(fuelType: "Gas"|"Alcohol"|"Flex"|"EV"|"Diesel"| "Electric"): Promise<Car[]> {
        const data = await this.findAll();
        return data.filter(c => c.fuelType === fuelType);
    }

    async findByTransmissionType(transmissionType: "Automatic"|"Manual"): Promise<Car[]> {
        const data = await this.findAll();
        return data.filter(c => c.transmissionType === transmissionType);
    }

    async findByNumOfDoors(numOfDoors: number): Promise<Car[]> {
        const data = await this.findAll();
        return data.filter(c => c.numsOfDoors === numOfDoors);
    }

    async findByEngine(engine: string): Promise<Car[]> {
        const data = await this.findAll();
        return data.filter(c => c.engine.toLowerCase() === engine.toLowerCase());
    }
}