import {Car} from "../models/Car";

export class CarService{
    constructor(
        private Cars: Car[] = [],
    ){
        
    }

public addCar(car: Car){
    this.Cars.push(car);
}

public popCar(id:number){
    const index = this.Cars.findIndex(car => car.id === id);

    if(index === -1) return false

    this.Cars.splice(index,1);
    return true
}

public getCarById(id: number): Car | undefined {

    const car =  this.Cars.find(cars => cars.id === id);
    
    if(!car){
        throw new Error(`Carro com id ${id} não encontrado`)
    }

    return car
}

public getAvaialableCars(): Car[] | undefined{
    const available =  this.Cars.filter(cars => cars.status === 'Available');

    if(!available){
        throw new Error("Nao ha carros disponives no momento!");
    
    }
    return available
}

public getCarsByBrand(brand: string): Car[] | undefined{
    const search = this.Cars.filter(cars => cars.brand === brand)

    if(!search){
        throw new Error(`Nao ha carros da Marca ${brand}!`)

    }

    return search

}

public getCarsByType(type:string){
    const searchByType = this.Cars.filter(cars => cars.type === type)

    if(!searchByType){
        throw new Error(`Error, there's no cars of type ${type}`)
    }

    return searchByType
}


public getCarsByPrice(min: number, max: number): Car[] | undefined{
    const cars = this.Cars.filter(cars => cars.price >= min && cars.price <= max)
     
    if(cars.length === 0){
        throw new Error(`Nao ha carros no range entre ${min} e ${max}`)
    }

    return cars

} 

public updateCarPrice(id: number,newPrice: number){
    const index = this.Cars.findIndex(cars => cars.id === id)

    

    
}


}
