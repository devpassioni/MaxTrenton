import {Module} from "@nestjs/common"
import {SellerServiceAPI} from "./seller.service"
import {SellerController} from "./seller.controller"


@Module({
        controllers: [SellerController],
        providers: [SellerServiceAPI]

    })
    export class sellerController{}  
