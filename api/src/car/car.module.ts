import { Module } from "@nestjs/common";
import { CarController } from "../car/car.controller";
import { CarService } from "../car/car.service";

@Module({
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}