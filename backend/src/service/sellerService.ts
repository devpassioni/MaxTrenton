import {Seller} from "../models/seller"
import {JsonRepository} from "../utils/jsonReporitory"

export class SellerService extends JsonRepository <Seller>{

    constructor(){
        super("resources/data/seller.json")
    }

public async addSeller(seller: Seller): Promise<void>{
    const vendor = await this.load();
    vendor.push(seller);
    this.save(vendor);
}

public async removeSeller(id: number): Promise<void>{
    const vendor = await this.load();
    const index = vendor.findIndex(seller => seller.id === id)
    if(!index) throw new Error(`Error! ID ${id} not founded.`)
    
    vendor.splice(index,1);
    await this.save(vendor);
}

public async getAllSeller(): Promise<Seller[]>{
    const vendor = await this.load();
    return vendor;
}

public async getSellerById(id: number): Promise<Seller>{
    const vendor = await this.load();
    const findex = vendor.find(seller => seller.id === id)
    if(!findex) throw new Error(`Error! ID ${id} not founded.`)
    return findex
}

public async getSellerByName(name: string): Promise<Seller>{
    const vendor = await this.load();
    const findex = vendor.find(seller => seller.name === name);
    if(!findex) throw new Error(`Error! ${name} doesn't exist`);
        return findex;
}

public async getActiveSellers(): Promise<Seller []>{
    const vendor = await this.load();
    const findex = vendor.filter(seller => seller.status == "Active")
    if(!findex) throw new Error(`Error! No sellers working`);
    return findex
}

public async activateSeller(id: number): Promise<void>{
    const vendor = await this.load()
    const findex = vendor.find(seller => seller.id === id)
    if(!findex) throw new Error(`Error! ${id} not founded`);

    if(findex.status == "Inactive")findex.Activate;
    this.save(vendor);
}

public async deactivateSeller(id: number): Promise<void>{
    const vendor = await this.load();
    const findex = vendor.find(seller => seller.id === id);
    if(!findex) throw new Error(`Error! ${id} not founded`);
    
    if(findex.status == "Active") findex.Disactivate
    this.save(vendor)
}

public async countActiveSellers(): Promise<Seller []>{
    const vendor = await this.load();
    const actives = vendor.filter(seller => seller.status === "Active")
    if (!actives) throw new Error(`Error no one is active`)
        return actives
    }


}