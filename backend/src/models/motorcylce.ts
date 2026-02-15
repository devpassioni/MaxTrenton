import {vehicle} from "./vehicle";

export class Motorcycle extends vehicle{
    constructor(
        id:number,
        brand: string,
        model: string,
        year: number,
        color: string,
        price: number,
        quilometers: number,
        status: "Available" | "Sold" | "Reserved",

        //
        public engineDisplacement: number,
        public bodyType: "Sport"|"Trail"|"Custom",
        public horsePower: number,
        
    
    ){
        super(id,brand,model,year,color,price,quilometers,status);
    }
}