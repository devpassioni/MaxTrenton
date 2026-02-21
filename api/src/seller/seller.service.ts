import {Injectable} from "@nestjs/common"
import {SellerService} from "../../../backend/src/service/sellerService"
import {CreateSellerDTO} from "./create-seller.dto"
import {Seller} from "../../../backend/src/models/seller"


@Injectable()
export class SellerServiceAPI{
    private sellerService = new SellerService;

    async findAll(){    
        return this.sellerService.findAll()
    }

    async createSeller(sellerData: CreateSellerDTO){
        const SellerNovo = new Seller(
            0,
            sellerData.name,
            sellerData.email,
            sellerData.phone,
            sellerData.birthDate,
            sellerData.registrationCode,
            sellerData.salesCount,
            sellerData.status)

         return this.sellerService.create(SellerNovo);
    }


    async deleteSeller(id:number){
        return this.sellerService.remove(id);
    }


    async toggleStatus(id:number){
        return this.toggleStatus(id);
    }





}