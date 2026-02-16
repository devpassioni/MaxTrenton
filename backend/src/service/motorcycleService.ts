import {Motorcycle} from "../models/motorcycle";
import {JsonRepository} from "../utils/jsonRepository"

export class MotorcycleService extends JsonRepository<Motorcycle>{
    constructor(){
        super("backend/resources/data/motorcycle.json")
    }
public async addMoto(moto: Motorcycle): Promise<void>{
    const motorcycle = await this.load();
    motorcycle.push(moto);
    await this.save(motorcycle);
}

public async removeMoto(id: number): Promise<boolean>{
    const motorcycle = await this.load();
    const index = motorcycle.findIndex(moto => moto.id === id)
    motorcycle.splice(index,1);
    await this.save(motorcycle);
    return true;

}

public async getMotorCycleById(id: number): Promise<Motorcycle>{
    const motorcycle = await this.load();
    const finder = motorcycle.find(moto => moto.id === id)
    
    if(!finder) throw new Error(`Motorcycle id ${id} not founded`)
    
    return finder
}

public async getAllMotorcycle(): Promise<Motorcycle[]>{
    return await this.load()
    
}
public async getAllAvaialableMotorcycle(): Promise<Motorcycle[]>{
    const motorcycle = await this.load();
    const findex = motorcycle.filter(motos => motos.status === "Available")
    return findex
}

public async getMotorcycleByBrand(brand: string): Promise<Motorcycle []>{
    const motorcycle = await this.load();
    const findex = motorcycle.filter(motos => motos.brand === brand)
    return findex
}

public async getMotorcycleByType(type: string): Promise<Motorcycle []>{
    const motorcycle = await this.load()
    const findex = motorcycle.filter(motos => motos.bodyType === type)
    return findex
}

public async getMotorcycleByPriceRange(min: number, max: number): Promise<Motorcycle[]>{
    const motorcycle = await this.load()
    const findex = motorcycle.filter(motos => motos.price >= min && motos.price <= max)
    return findex
}

public async updateMotorcyclePrice(id: number, newPrice: number): Promise<void>{
    const motorcycle = await this.load()
    let findex = motorcycle.find(moto => moto.id === id)
    if(!findex){
        throw new Error(`Error, motorcycle ${id} not founded!`)
    }
    findex.price = newPrice;
    //verificar possibilidade nesse bug - fiz muito rapido e ja estou cansado!
    await this.save(motorcycle)
}

public async updateMotorcycleStatus(id: number, status: "Available" | "Sold" | "Reserved"): Promise<void>{
    const motorcycle = await this.load()
    const findIndex = motorcycle.find(moto => moto.id === id)
    if(!findIndex){
        throw new Error(`Error! Motocycle id ${id} not founded`)
    }
    
    if(status == "Reserved") findIndex.markAsSold
    else if(status == "Sold") findIndex.markAsSold
    else findIndex.status = "Available"
    await this.save(motorcycle)
}


public async getCheapestMotorcycle(): Promise<Motorcycle>{
    const motorcycle = await this.load()
    const cheapest = motorcycle.reduce((cheapest,moto)=>  moto.price < cheapest.price ? moto : cheapest)
    return cheapest
}

public async getMostExpensiveMotorcycle(): Promise<Motorcycle>{
    const motorcycle = await this.load()
    const highest = motorcycle.reduce((highest, moto)=> moto.price > highest.price ? moto : highest)
    return highest
}

public async countAvailableMotorcycles(): Promise<Number>{
    const motorcycle = await this.load()
   return this.getAllAvaialableMotorcycle.length
}

}