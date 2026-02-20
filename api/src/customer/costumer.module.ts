import {Module} from '@nestjs/common'
import {CustomerServiceAPI} from "./customer.service"
import {CustomerControllerAPI} from "./customer.controller"

@Module({
            controllers: [CustomerControllerAPI],
            providers: [CustomerServiceAPI]
})
export class customerModule{}