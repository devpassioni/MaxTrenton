import { JsonRepository } from "../utils/jsonReporitory";
import { Customer } from "../models/customer";

export class CustomerService extends JsonRepository<Customer> {
    constructor() {
        super("resources/data/customers.json");
    }

    async findAll(): Promise<Customer[]> {
        return await this.load();
    }

    async create(customer: Customer): Promise<void> {
        const customers = await this.load();
        customers.push(customer);
        await this.save(customers);
    }
}