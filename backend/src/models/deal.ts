export class Deal{
    
    constructor(
        public id: number,
        public typeofVehicle: "Car" | "Motorcycle",
        public vehicleID: number,
        public customerID: number,
        public sellerID: number,
        public totalValue: number,
        public downPayment: number,
        public offeredPrice: number,
        public paymentMethod: "Financing" | "Cash",
        public status: "Pending"|"Approved"| "Refused"
    ){

    }



}