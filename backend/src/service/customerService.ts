import { Customer } from "../models/user";
import { UserService } from "./userService";

export class CustomerService extends UserService<Customer> {
    constructor() {
        super("resources/data/customers.json");
    }

    async create(customer: Customer): Promise<void> {
        if(customer.cpf.length !== 11) {
            throw new Error("CPF must be 11 digits");
        }

        const customers = await this.findAll();
        if(customers.some(c => c.cpf === customer.cpf)) {
            throw new Error(`CPF ${customer.cpf} in use`);
        }

        await super.create(customer);
        console.log("Customer created:");
    }
        
    async getHighCreditScoreCustomers(): Promise<Customer[]> {
        const customers = await this.findAll();
        return customers.filter(c => c.creditScore > 700);
    }

    async canAffordPurchase(id: number, vehiclePrice: number): Promise<boolean> {
        const customer = await this.findById(id);
        return customer.creditScore >= (vehiclePrice * 0.01);
}


    async remove(id: number): Promise<void> {
    await this.delete(id);
}

}
