import {Motorcycle} from "../models/motorcycle";
import {JsonRepository} from "../utils/jsonReporitory"

export class MotorcycleService extends JsonRepository<Motorcycle>{
    constructor(){
        super("resources/data/motorcycle.json")
    }


public async addMoto(moto: Motorcycle): Promise<void>{
    const motorcycle = await this.load();
    motorcycle.push(moto);
    await this.save(motorcycle);
}

public async removeMoto(id: number): Promise<boolean>{
    const motorcycle = await this.load();
    const index = motorcycle.findIndex(moto => moto.id === id)
    motorcycle.slice(index,1);
    await this.save(motorcycle);
    return true;

}

}