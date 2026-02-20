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


//Ryan -> Ajustar Create / Delete -> Metodo do Service nao contem gerador de ID e nao pode ser gerado


}

