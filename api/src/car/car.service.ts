import {Injectable} from "@nestjs/common"
import {CarService as backendCarService} from "../../../backend/src/service/carService"


@Injectable()
export class CarService{
    private carService = new backendCarService();


    async findAll(){
        return await this.carService.findAll();
    }

    async findbyid(id:number){
        return await this.carService.findById(id);
    }


    async findByBodytype(type: "Sedan"|"SUV"|"Coupe"|"Hatchback" ){
        return await this.carService.findByBodyType(type);
    }













}