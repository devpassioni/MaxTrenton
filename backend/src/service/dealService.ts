import {Deal} from "../models/deal"
import {SellerService} from "../service/sellerService"
import {CustomerService} from "../service/customerService"
import {CarService} from "../service/carService"
import {MotorcycleService} from "../service/motorcycleService"
import {JsonRepository} from "../utils/jsonRepository"


export class DealService extends JsonRepository<Deal>{

    constructor(
        private carService: CarService,
        private motoService: MotorcycleService,
        private sellerService: SellerService,
        private customerService: CustomerService,
    ){
        super("resources/data/deal.json")
    }

public async addDeal(deal: Deal): Promise<void>{
    const acordo = await this.load();
    acordo.push(deal)
    await this.save(acordo)
}
public async removeDeal(id: number): Promise<void>{
    const acordo = await this.load();
    const findex = acordo.findIndex(deal => deal.id === id);
    acordo.splice(findex,1);
    await this.save(acordo);
}

public async getallDeals(): Promise<Deal []>{
    const acordo = await this.load();
    if(!acordo) throw new Error(`No Deals founded`)
    return acordo
}

public async getDealById(id: number): Promise<Deal>{
    const acordo = await this.load();
    const dealindex = acordo.find(acordo => acordo.id === id)
    if(!dealindex) throw new Error('Error! not founded')
    return dealindex
}

public async getDealBySeller(sellerId: number): Promise<Deal []>{
    const acordo = await this.load();
    const dealindex = acordo.filter(acordo => acordo.sellerID === sellerId)
    if(!dealindex) throw new Error(`Fail - No Deals on this Seller's page`)
    return dealindex

    }

public async getDealbyStatus(status:"Pending"|"Approved"| "Refused" ): Promise<Deal []>{
    const acordo = await this.load();
    const filterDeal = acordo.filter(acordo => acordo.status === status);
    return filterDeal
}

public async approveDeal(id: number): Promise<void>{
    const acordo = await this.load();
    const filterDeal = acordo.find(acordo => acordo.id === id)
    if(!filterDeal) throw new Error(`Error -> ${id} not founded`)

    filterDeal.approveDeal()
    await this.save(acordo)
    }

public async refuseDeal(id: number): Promise<void>{
    const acordo = await this.load();
    const filterDeal = acordo.find(acordo => acordo.id === id)
    if(!filterDeal) throw new Error(`Error -> ${id} not founded`)
    
    filterDeal.refuseDeal()
    await this.save(acordo);
}

public async getPendingDeals(): Promise<Deal []>{
    const acordo = await this.load();
    const filterDeal = acordo.filter(acordo => acordo.status === "Pending")
    if(filterDeal.length === 0) throw new Error(`Error - no Pending Deals`)
    return filterDeal
}

public async getApprovedDeals(): Promise<Deal []>{
    const acordo = await this.load();
    const filterDeal = acordo.filter(acordo => acordo.status === "Approved")
    if(filterDeal.length === 0) throw new Error(`Error - no Approved Deals`)
    return filterDeal
}

public async getTotalRevenue(): Promise<number>{
    const acordo = await this.load();
    const totalValue = acordo.filter(acordo => acordo.status === "Approved")
   return totalValue.reduce((acumulador, deal)=> acumulador + deal.totalValue,0)
}
//avaliar
public async createFinancing(dealID: number ): Promise<void>{
    const acordo = await this.load();
    const filterDeal = acordo.find(acordo => acordo.status === "Approved");
    if(!filterDeal) throw new Error(`This Deal isn't approved yet`);

    
} 



}