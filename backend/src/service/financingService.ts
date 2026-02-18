import {JsonRepository} from "../utils/jsonRepository"
import {DealService} from "../service/dealService"
import {Financing} from "../models/financing"



export class FinancingService extends JsonRepository<Financing &{id:number}>{
    private readonly interestRate = 0.015
    constructor(
        private DealServices: DealService,
    ){
        super("resources/data/financing.json")
    }

public async createFinancing(dealId: number, totalMonth: 12 | 24 | 36 | 48 | 60,typeOfFinancingTable: "PRICE" | "SAC"):Promise<void>{
    const dealD = await this.DealServices.getDealById(dealId);
    if(dealD.status !== "Approved") throw new Error("Deal not approved!")
    const financing = await this.load()
    const newID = await this.genId()
    
    const newFinancing = new Financing(
        newID,
        dealD.id,
        dealD.downPayment,
        this.interestRate,
        dealD.totalValue,
        totalMonth,
        typeOfFinancingTable

    )
    financing.push(newFinancing);
    await this.save(financing)
}   

public async removeFinancing(id: number): Promise<void>{
    const finance = await this.load();
    const findID = finance.findIndex(i => i.id === id)
    finance.splice(findID,1);
    await this.save(finance);
}

public async getAllFinancings(): Promise<Financing []>{
    const finance = await this.load();
    return finance
}

public async getFinanceByType(type: "PRICE" | "SAC"): Promise<Financing []>{
    const finance = await this.load();
    const byType = finance.filter(t => t.typeOfFinancingTable == type);
    return byType;
}

public async getFinancingbyID(id: number): Promise<Financing>{
    const finance = await this.load();
    const findIndex = finance.find(f => f.id === id)
    if(!findIndex) throw new Error("Error, no ID founded")
        return findIndex;
    }

public async getFinacingbyDeal(dealID: number): Promise<Financing>{
    const finance = await this.load();
    const findDeal = finance.find(f => f.dealID === dealID)
    if(!findDeal) throw new Error(`Error - ${dealID} not founded`)
        return findDeal;
    }


public async getInstallmentValue(id: number): Promise<number[]>{
    const finance = await this.load();
    const findID = finance.find(f => f.id === id)
    if(!findID) throw new Error("Error, no ID located")
        if(findID.typeOfFinancingTable == "PRICE"){
          return [findID.calculateInstallmentByPriceTable()]
        }
       return findID.calculateInstallmentBySacTable() 
    }

    



}




