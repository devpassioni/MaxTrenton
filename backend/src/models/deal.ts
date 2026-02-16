export class Deal{
    constructor(
        public id: number,
        public typeofVehicle: "Vehicle" | "Motorcycle",
        public vehicleID: number,
        public customerID: number,
        public sellerID: number,
        public date: Date,
        public totalValue: number,
        public downPayment: number,
        public offeredPrice: number,
        public status: "Pending"|"Approved"| "Refused"
    ){

    }

public showDetails(){
console.log(`Transaction ID: ${this.id}\n
             Customer ID: ${this.customerID}\n                          
             Seller ID: ${this.sellerID}\n
             Date: ${this.date}\n                           
             Offered Price: ${this.offeredPrice}\n  
             Status: ${this.status}
                                        
                                          `)    
}

public refuseDeal(){
    console.log("This Deal was Refused by the System")
    this.status = "Refused"
}

public approveDeal(){
    console.log(`Deal ${this.id} was sucessfully approved`)
    this.status = "Approved"
}

public isPending(){
    if(this.status === "Approved" || this.status === "Refused") return false
    return true
}
}