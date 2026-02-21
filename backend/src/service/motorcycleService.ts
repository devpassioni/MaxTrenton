import { Motorcycle } from "../models/motorcycle";
import { VehicleService } from "./vehicleService";

export class MotorcycleService extends VehicleService<Motorcycle & {id: number}> {
    constructor() {
        super("backend/resources/data/motorcycles.json");
    }

    async findByBodyType(bodyType: "Sport"|"Trail"|"Custom"): Promise<Motorcycle[]> {
        const data = await this.findAll();
        return data.filter(m => m.bodyType === bodyType);
    }

    async findByMinEngineDisplacement(min: number): Promise<Motorcycle[]> {
        const data = await this.findAll();
        return data.filter(m => m.engineDisplacement >= min);
    }

    async findByHorsePowerRange(min: number, max: number): Promise<Motorcycle[]> {
        const data = await this.findAll();
        return data.filter(m => m.horsePower >= min && m.horsePower <= max);
    }
}