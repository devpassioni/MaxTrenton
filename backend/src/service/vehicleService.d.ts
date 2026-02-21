import { JsonRepository } from "../utils/jsonRepository";
import { Vehicle } from "../models/vehicle";
export declare class VehicleService<T extends Vehicle & {
    id: number;
}> extends JsonRepository<T> {
    constructor(filePath: string);
    create(entity: T): Promise<void>;
    deleteVehicle(id: number): Promise<void>;
    findAll(): Promise<T[]>;
    getVehicleId(numberPlate: string): Promise<number>;
    updateVehicle(id: number, updatedData: Partial<T>): Promise<T>;
    findById(id: number): Promise<T>;
    findByStatus(status: "Available" | "Sold" | "Reserved"): Promise<T[]>;
    findByBrand(brand: string): Promise<T[]>;
    findByModel(model: string): Promise<T[]>;
    findByYear(year: number): Promise<T[]>;
    findByPriceRange(minPrice: number, maxPrice: number): Promise<T[]>;
    countAvailableVehicles(): Promise<number>;
}
