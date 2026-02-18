import { Controller, Get, Post, Body } from "@nestjs/common";
import { CarService } from "./car.service";
import { Car } from "../../../backend/src/models/car";

@Controller("cars")
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }

  @Post()
  async create(@Body() carData: Omit<Car, "id">): Promise<Car> {
    return this.carService.create(carData);
  }
}