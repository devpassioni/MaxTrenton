import{Module} from "@nestjs/common"
import { DealController } from "./deal.controller"
import { DealServiceAPI } from "./deal.service"

@Module({
    controllers: [DealController],
    providers: [DealServiceAPI]

})
export class DealModule{}