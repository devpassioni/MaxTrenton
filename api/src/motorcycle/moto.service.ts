import { Injectable } from '@nestjs/common';
import {MotorcycleService} from "../../../backend/src/service/motorcycleService"

@Injectable()
export class motoServic{
       private motorCycleService = new MotorcycleService()



async findAll(){
        return this.motorCycleService.findAll();
}
    
async findByID(id:number){
        return this.motorCycleService.findById(id);
}

async findByBodyType(bodyType: "Sport"|"Trail"|"Custom"){
        return this.motorCycleService.findByBodyType(bodyType)
}

async addMoto(
        brand: string,
        model: string,
        year: number,
        color: string,
        price: number,
        quilometers: number,
        status: "Available" | "Sold" | "Reserved",
        numberPlate: string,
        engineDisplacement: number,
        bodyType: "Sport"| "Trail"| "Custom",
        horsePower: string,

){
        const newMoto = {
                id: 0,
                brand,
                model,
                year,
                color,
                price,
                quilometers,
                status,
                numberPlate,
                engineDisplacement,
                bodyType,
                horsePower
        } as any;
        return await this.motorCycleService.create(newMoto)
}


async deleteMoto(id:number){
        return this.motorCycleService.deleteVehicle(id);
}

async findByMinEngineDisplacement(min: number){
        return this.motorCycleService.findByMinEngineDisplacement(min)
}

async findByHorsePowerRange(min: number, max: number){
        return this.motorCycleService.findByHorsePowerRange(min,max)

}

}