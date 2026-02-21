import { Injectable } from "@nestjs/common";
import {FinancingService as FinancingServiceBackend} from "../../../backend/src/service/financingService"
import {DealService} from "../../../backend/src/service/dealService"
import {SellerService} from  "../../../backend/src/service/sellerService"
import {CarService as CarServiceBackend} from "../../../backend/src/service/carService"
import {MotorcycleService} from "../../../backend/src/service/motorcycleService"
import {CustomerService} from "../../../backend/src/service/customerService"



@Injectable()
export class FinancingService{
    private FinanceService: FinancingServiceBackend
    constructor(){
        
       const sellerService = new SellerService()
       const carService = new CarServiceBackend() 
       const motorcycleService = new MotorcycleService()
       const customerService = new CustomerService()

       const  dealService = new DealService(
        carService,motorcycleService,sellerService,customerService
       )
       
       this.FinanceService = new FinancingServiceBackend(dealService); 
    
    }

    
    




}