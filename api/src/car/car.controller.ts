import {Controller, Get, Post, Param, Body} from "@nestjs/common";
import {CarService} from './car.service'

@Controller('cars')
export class CarController{
    constructor(private readonly carService: CarService){}


@Get('/listall')
async findAll(){
    return this.carService.findAll();
}

@Get(':id')
async findbyId(@Param('id') id: string){
    return await this.carService.findbyid(Number(id));
}

@Post('/add')
async createCar(@Body() carData: any) { 
   
    return this.carService.createCar(
        carData.brand,
        carData.model,
        carData.year,
        carData.color,
        carData.price,
        carData.quilometers,
        carData.status,
        carData.numberPlate,
        carData.numsOfDoors,
        carData.transmissionType,
        carData.engine,
        carData.fuelType,
        carData.type,
        carData.horsePower
    );
}



}