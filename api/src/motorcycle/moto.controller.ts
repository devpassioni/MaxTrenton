import {Controller, Get, Post, Param, Body,Delete} from "@nestjs/common";
import {motoServic} from "./moto.service";

@Controller('moto')
export class motoController{
    constructor(private readonly motoServic: motoServic){}


@Get('/listall')
async findAll(){
    return this.motoServic.findAll();
}

@Get(':id')
async findByID(@Param('id') id: string){
    return this.motoServic.findByID(Number(id))
}

@Post('/addmoto')
async addMoto(@Body() motoData: any){
    return this.motoServic.addMoto(
        motoData.brand,
        motoData.model,
        motoData.year,
        motoData.color,
        motoData.price,
        motoData.quilometers,
        motoData.status,
        motoData.numberPlate,
        motoData.engineDisplacement,
        motoData.bodyType,
        motoData.horsePower
    );
}

@Delete('/deletemoto')
async deleteMoto(@Param('id') id:string){
    return this.motoServic.deleteMoto(Number(id))
}

@Get('/findby/displacement')
async findByEngineDisplacement(@Param('min') min:string){
    return this.motoServic.findByMinEngineDisplacement(Number(min));

}
@Get('/findby/HorsePower')
async findByHorsePowerRange(@Param('min')@Param('max') min: number, max: number){
    return this.motoServic.findByHorsePowerRange(min,max);
}

}