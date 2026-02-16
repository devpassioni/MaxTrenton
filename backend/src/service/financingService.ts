import {JsonRepository} from "../utils/jsonRepository"
import {DealService} from "../service/dealService"
import {Financing} from "../models/financing"
export class FinancingService extends JsonRepository<Financing>{

    constructor(

    ){
        super("resources/data/financing.json")
    }






}