import {Deal} from "../models/deal"
import {Car} from "../models/car"
import {Motorcycle} from "../models/motorcycle"
import {Customer} from "../models/customer"
import {Seller} from "../models/seller"
import {SellerService} from "../service/sellerService"
import {CustomerService} from "../service/customerService"
import {CarService} from "../service/carService"
import {MotorcycleService} from "../service/motorcycleService"
import {JsonRepository} from "../utils/jsonRepository"

interface dealDetails {
    deal: Deal,
    vehicle: Car | Motorcycle,
    customer: Customer,
    seller: Seller
}

export class DealService extends JsonRepository<Deal & {id:number}>{

    constructor(
        private carService: CarService,
        private motoService: MotorcycleService,
        private sellerService: SellerService,
        private customerService: CustomerService,
        
    ){
        super("resources/data/deal.json")
        
    }


public async addDeal(typeofVehicle: "Car"|"Motorcycle", vehicleID: number, customerID: number, sellerID: number,downPayment:number, totalValue: number, offeredPrice: number, paymentMethod: "Financing"|"Cash",Status: "Pending"): Promise<void>{
    
    if(typeofVehicle === "Car"){
     await this.carService.findById(vehicleID);
    }else if(typeofVehicle == "Motorcycle"){
     await this.motoService.findById(vehicleID)
    }
    await this.customerService.findById(customerID);
    await this.sellerService.findById(sellerID);
    offeredPrice = totalValue; //offeredprice vai criar com o valor do totalValue passado pela concessionaria na criacao, depois o cliente pode oferecer e o seller decide se aceita o nao

    const acordo = await this.load()
    const newId = await this.genId()
    const newDeal = new Deal(newId,typeofVehicle,vehicleID,customerID,sellerID,totalValue,downPayment,offeredPrice,paymentMethod,"Pending")
    acordo.push(newDeal)
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

    filterDeal.status = "Approved"
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

public async acceptofferedPricebyCustomer(dealId: number, offeredPrice: number): Promise<Deal>{
    const acordo = await this.load();
    const findex = acordo.find(a => a.id == dealId)
    if(!findex) throw new Error("Error!")
    findex.totalValue = offeredPrice;
    await this.save(acordo)
    return findex
}

public async getTotalRevenue(): Promise<number>{
    const acordo = await this.load();
    const totalValue = acordo.filter(acordo => acordo.status === "Approved")
   return totalValue.reduce((acumulador, deal)=> acumulador + deal.totalValue,0)
}

}