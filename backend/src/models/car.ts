import {Vehicle} from "./vehicle";

export class Car extends Vehicle{
    
    constructor(
        
        brand: string,
        model: string,
        year: number,
        color: string,
        price: number,
        quilometers: number,
        status: "Available" | "Sold" | "Reserved",
        numberPlate: string,
        
        public numsOfDoors: number,
        public transmissionType: "Automatic"|"Manual",
        public engine: string,
        public fuelType: "Gas"|"Alcohol"|"Flex"|"EV"|"Diesel",
        public type: "Sport"|"SUV"| "Hatch"|"Sedan"| "Cabriolet",
        public horsePower: number,
    ){
        super(brand,model,year,color,price,quilometers,status, numberPlate);
        status = "Available";
    }

public showDetails(id: number): string{
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
        Available: ${this.status}`
}                   

public markAsSold(){
    this.status = 'Sold';
}

public markAsReserved(){
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
       const percentual =  (this.price * percentage)
        const value = (this.price - percentual)
        console.log(`Desconto aplicado de ${percentage}% Valor original: R$ ${this.price} para R$ ${value} `)
        return value
}


}