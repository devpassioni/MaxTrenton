import {Injectable} from "@nestjs/common"
import {CustomerService} from "../../../backend/src/service/customerService"
import {Customer} from "../../../backend/src/models/customer"

@Injectable()
export class CustomerServiceAPI{
    private customerService = new CustomerService();

async findAll(){
    return this.customerService.findAll();
}

async findByID(id: number){
    return this.customerService.findById(id);
}


async createCustomer(name: string, email: string, phone: string, 
    birthDate: Date, cpf: number, creditScore: string){
        const novoCustomer = new Customer( 
            0,
            name,
            email,
            phone,
            birthDate,
            cpf,
            creditScore,
        )
            return this.customerService.create(novoCustomer)
    }


async deleteCustomer(id: number){
    return this.customerService.remove(id)
}

}




