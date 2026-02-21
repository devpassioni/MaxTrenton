export declare abstract class Vehicle {
    brand: string;
    model: string;
    year: number;
    color: string;
    price: number;
    kilometers: number;
    status: "Available" | "Sold" | "Reserved";
    numberPlate: string;
    id?: number;
    constructor(brand: string, model: string, year: number, color: string, price: number, kilometers: number, status: "Available" | "Sold" | "Reserved", numberPlate: string);
}
