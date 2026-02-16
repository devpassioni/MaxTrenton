import {Vehicle} from "./vehicle";

export class Motorcycle extends Vehicle{
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