import { Car } from "../models/car";
import { VehicleService } from "./vehicleService";
export declare class CarService extends VehicleService<Car & {
    id: number;
}> {
    constructor();
    findByBodyType(type: "Sedan" | "SUV" | "Coupe" | "Hatchback"): Promise<Car[]>;
    findByMinHorsePower(min: number): Promise<Car[]>;
    findByFuelType(fuelType: "Gas" | "Alcohol" | "Flex" | "EV" | "Diesel" | "Electric"): Promise<Car[]>;
    findByTransmissionType(transmissionType: "Automatic" | "Manual"): Promise<Car[]>;
    findByNumOfDoors(numOfDoors: number): Promise<Car[]>;
    findByEngine(engine: string): Promise<Car[]>;
}
