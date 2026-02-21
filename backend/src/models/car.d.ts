import { Vehicle } from "./vehicle";
export declare class Car extends Vehicle {
    numsOfDoors: number;
    transmissionType: "Automatic" | "Manual";
    engine: string;
    fuelType: "Gas" | "Alcohol" | "Flex" | "EV" | "Diesel";
    type: "Sport" | "SUV" | "Hatch" | "Sedan" | "Cabriolet";
    horsePower: number;
    constructor(brand: string, model: string, year: number, color: string, price: number, quilometers: number, status: "Available" | "Sold" | "Reserved", numberPlate: string, numsOfDoors: number, transmissionType: "Automatic" | "Manual", engine: string, fuelType: "Gas" | "Alcohol" | "Flex" | "EV" | "Diesel", type: "Sport" | "SUV" | "Hatch" | "Sedan" | "Cabriolet", horsePower: number);
    showDetails(id: number): string;
    markAsSold(): void;
    markAsReserved(): void;
    isAvaiable(id: number): boolean;
    applyDiscount(percentage: 0.3 | 0.2 | 0.1 | 0.05): number;
}
