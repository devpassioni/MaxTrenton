import {Post,Get,Delete,Body,Controller, Param} from "@nestjs/common"
import { DealServiceAPI } from "./deal.service"
import { createDealDTO } from "./create-deal.dto";

@Controller('deals')
export class DealController{
        constructor(private readonly DealService: DealServiceAPI){}





@Post('/add')
 async createNewDeal(Dealdata: createDealDTO ){
    return this.DealService.addDeal(Dealdata);
 }

@Delete('/delete/:id')
 async deleteDeal(@Param('id') id: string){
    return this.DealService.removeDeal(Number(id));
 }

 @Get('/all')
 async findAllDeals(){
    return this.DealService.findAll();
 }


 @Get(':id')
 async findDealByID(@Param('id') id: string){
    return this.DealService.getDealById(Number(id));
 }

 @Get('/pendingDeals')
 async getPendingDeals(){
    return this.DealService.getPendingDeals();
 }


 @Get('/approvedDeals')
 async getApprovedDeals(){
    return this.DealService.getApprovedDeals();
 }

 @Get('/totalRevenue')
 async getTotalRevenue(){
    return this.DealService.getTotalRevenue();
 }


}