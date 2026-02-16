import {JsonRepository} from "../utils/jsonRepository"
import {Car} from "../models/car";

export class CarService extends JsonRepository<Car>{
    private Cars: Car[] = [];
    constructor(){
        super("resources/data/cars.json");
        this.carregar();
        this.sincronizar();
    }
private async carregar(): Promise<void> {
        this.Cars = await this.load();
    }

    private async sincronizar(): Promise<void> {
        await this.save(this.Cars);
    }


public addCar(car: Car){
    this.Cars.push(car);
    this.sincronizar()
}

public popCar(id:number){
    const index = this.Cars.findIndex(car => car.id === id);

    if(index === -1) return false

    this.Cars.splice(index,1);
    this.sincronizar()
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
    const car = this.Cars.find(cars => cars.id === id)

    if(!car){
        throw new Error(`${id} didn't match to our database.`)
    }
    
    return car.price = newPrice
    
}

public updateCarStatus(id: number, status: "Available" | "Sold" | "Reserved" ): void{
    const car = this.Cars.find(car => car.id === id)

    if(!car){
         throw new Error(`${id} didn't match to our database.`)
    }
    if(status === "Sold") car.markAsSold()
     else if(status == "Reserved") car.markAsReserved()
    
    else{
        car.status = "Available";
    }

}

public getCheapestCar(): Car {
    if(this.Cars.length === 0 ){
        throw new Error("There`s no cars in the list")
    }
    return this.Cars.reduce((cheapest, car)=> car.price < cheapest.price ? car : cheapest)
}

public getMostExpensiveCar(): Car {
    if(this.Cars.length === 0){
        throw new Error("There`s no cars in the list!")
    }
    const value =  this.Cars.reduce((highest, car) => car.price > highest.price ? car : highest)
    return value    
}

public countAvailableCars(): number{
    
    return this.getAvaialableCars.length
}


}
