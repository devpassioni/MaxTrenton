import {vehicle} from "./vehicle";
export class Car extends vehicle{
    constructor(
        id:number,
        brand: string,
        model: string,
        year: number,
        color: string,
        price: number,
        quilometers: number,
        status: "Available" | "Sold" | "Reserved",
        
        public numsOfDoors: number,
        public transmissionType: "Automatic"|"Manual",
        public engine: string,
        public typeOfFuel: "Gas"|"Alcohol"|"Flex"|"EV",
        public type: "Sport"|"SUV"| "Hatch"|"Sedan"| "Cabriolet",
        public HorsePower: number,
    ){
        super(id,brand,model,year,color,price,quilometers,status);
        status = "Available";
    }

public showDetails(id: number): string{
    return `${this.id}
        Car's brand: ${this.brand}
        Fabrication Year: ${this.year}
        Color: ${this.color}
        Price: ${this.price}
        Quilometers: ${this.quilometers}
        Transmission: ${this.numsOfDoors}
        Engine: ${this.engine}
        Type of Fuel: ${this.typeOfFuel}
        Class Type: ${this.type}
        HorsePower (HP): ${this.HorsePower}
        Available: ${this.status}`
}                   

public markAsSold(id: number){
    this.status = 'Sold';
}

public markAsReserved(id:number){
    this.status = "Reserved";
}

public isAvaiable(id:number): boolean{
    if(this.status == "Available"){
        return true
    }else{
        return false
    }
}

public applyDiscount(percentage: 0.3|0.2|0.1|0.05): number{
    return (this.price * percentage)
}

}