import {JsonRepository} from "../utils/jsonRepository"
import {DealService} from "../service/dealService"
import {Financing} from "../models/financing"

const interestRate = 0.15

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





}