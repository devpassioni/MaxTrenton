import {Deal} from "../../models/deal"
import {DealService} from "../../service/dealService";
import {CarService} from "../../service/carService"
import {MotorcycleService} from "../../service/motorcycleService"
import {CustomerService} from "../../service/customerService"
import {SellerService} from "../../service/sellerService"


async function test() {
    const carServices = new CarService()
    const motoService = new MotorcycleService()
    const customerService = new CustomerService()
    const sellerService = new SellerService()
    const deal1 = new DealService(carServices,motoService,sellerService,customerService)
    
    await deal1.addDeal("Car",1,1771356577702,1771356637315,5000,100000,100000,"Financing","Pending")
    
    const deals = await deal1.getallDeals()
    console.log("Antes:", deals)
    
    await deal1.approveDeal(1)  // ← await aqui
    
    const updatedDeals = await deal1.getallDeals()  // ← busca de novo
    console.log("Depois:", updatedDeals)
}

test()