import { Injectable } from "@nestjs/common";
import { CarService as BaseCarService } from "../../../backend/src/service/carService";

@Injectable()
export class CarService extends BaseCarService {}
