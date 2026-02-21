import {Controller, Delete, Post, Body,Get} from "@nestjs/common"
import {SellerServiceAPI} from "./seller.service"
import {CreateSellerDTO} from "./create-seller.dto"

@Controller('sellers')
export class SellerController{
    constructor(private readonly SellerService: SellerServiceAPI){}





    @Get('/all')
    async findAll(){
        return this.SellerService.findAll();
    }


    @Post("/create")
    async createSeller(@Body() SellerData: CreateSellerDTO){
        return this.SellerService.createSeller(SellerData);
            


        
    }

    @Delete('/delete')
    async deleteSeller(id: number){
        return this.deleteSeller(id);
    }


    @Post('/toggle')
    async toggleStatusSeller(id:number){
        return this.toggleStatusSeller(id)
    }





}