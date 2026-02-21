export interface createDealDTO{
    typeofVehicle: "Car"| "Motorcycle";
    vehicleID: number;
    customerID: number;
    sellerID: number;
    downPayment: number;
    totalValue: number;
    offeredPrice: number;
    paymentMethod: "Financing"|"Cash";
    
}