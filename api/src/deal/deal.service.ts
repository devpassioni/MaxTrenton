import {Injectable} from "@nestjs/common"
import {DealService as BackendDealService} from "../../../backend/src/service/dealService"
import {SellerService} from  "../../../backend/src/service/sellerService"
import {CarService} from "../../../backend/src/service/carService"
import {MotorcycleService} from "../../../backend/src/service/motorcycleService"
import {CustomerService} from "../../../backend/src/service/customerService"


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


    async addDeal(){
        return this.dealService.addDeal // <- Precisara de um DTO
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