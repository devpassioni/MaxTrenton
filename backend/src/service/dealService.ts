import {Deal} from "../models/deal"
import {SellerService} from "../service/sellerService"
import {CustomerService} from "../service/customerService"
import {CarService} from "../service/carService"
import {MotorcycleService} from "../service/motorcycleService"
import {JsonRepository} from "../utils/jsonReporitory"


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
    return await filterDeal
}

public async approveDeal(id: number): Promise<void>{
    const acordo = await this.load();
    const filterDeal = acordo.find(acordo => acordo.id === id)
    if(!filterDeal) throw new Error(`Error -> ${id} not founded`)

    filterDeal.approveDeal()
    await this.save(acordo)
    }



}