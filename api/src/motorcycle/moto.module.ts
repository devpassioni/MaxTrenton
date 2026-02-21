import {Module} from '@nestjs/common'
import {motoServic} from "./moto.service"
import {motoController} from "./moto.controller"

@Module({
            controllers: [motoController],
            providers: [motoServic]
})
export class motoModule{}
