import {Injectable} from "@nestjs/common"
import {DealService as BackendDealService} from "../../../backend/src/service/dealService"
import {SellerService} from  "../../../backend/src/service/sellerService"
import {CarService} from "../../../backend/src/service/carService"
import {MotorcycleService} from "../../../backend/src/service/motorcycleService"
import {CustomerService} from "../../../backend/src/service/customerService"
import { createDealDTO } from "./create-deal.dto"

@Injectable()
export class DealServiceAPI{
    private dealService: BackendDealService;

    constructor(){
        const carService = new CarService()
        const motoService = new MotorcycleService()
        const customerService = new CustomerService()
        const sellerService = new SellerService() 
    
        this.dealService = new BackendDealService(
            carService,
            motoService,
            sellerService,
            customerService,
    
        )
    }

    async findAll(){
        return this.dealService.getallDeals();
    }


    async addDeal(dto: createDealDTO){
        return this.dealService.addDeal(
            dto.typeofVehicle,
            dto.vehicleID,
            dto.customerID,
            dto.sellerID,
            dto.downPayment,
            dto.totalValue,
            dto.offeredPrice,
            dto.paymentMethod,
            "Pending"
        ) 
    }


    async removeDeal(id: number){
        return this.dealService.removeDeal(id);
    }

    async getDealById(id:number){
        return this.dealService.getDealById(id);
    }


    async getDealBySeller(sellerId:number){
        return this.dealService.getDealById(sellerId);
    }

    async getPendingDeals(){
        return this.dealService.getPendingDeals();
    }

    async getApprovedDeals(){
        return this.dealService.getApprovedDeals();
    }

    async getTotalRevenue(){
        return this.dealService.getTotalRevenue();
    }

}