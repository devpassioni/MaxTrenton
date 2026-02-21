import {Controller,Delete, Get, Post, Param, Body} from "@nestjs/common";
import {CustomerServiceAPI} from "../customer/customer.service"

@Controller('customer')
export class CustomerControllerAPI{
    constructor(private readonly CustomerServiceAPI: CustomerServiceAPI){}



@Get('/listall')
async listAll(){
    return this.CustomerServiceAPI.findAll();
}


@Get(':id')
async findByID(@Param('id') id: string){
    return this.CustomerServiceAPI.findByID(Number(id))
}

@Post('/add')
async addCustomer(@Body() customerData: any){
    return this.CustomerServiceAPI.createCustomer(
        customerData.name,
        customerData.email,
        customerData.phone,
        customerData.birthDate,
        customerData.cpf,
        customerData.creditScore,

    );
}

@Delete('/remove')
async removeCustomer(id:number){
    return this.CustomerServiceAPI.deleteCustomer(id);
}





}