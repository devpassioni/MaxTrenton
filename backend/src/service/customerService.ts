import { JsonRepository } from "../utils/jsonReporitory";
import { Customer } from "../models/customer";

export class CustomerService extends JsonRepository<Customer> {
    constructor() {
        super("resources/data/customers.json");
    }

    async findAll(): Promise<Customer[]> {
        const data = await this.load();
        return data.map(c => ({
            ...c,
            birthDate: new Date(c.birthDate),
            createdAt: new Date(c.createdAt)
        }))
    }

    async create(customer: Customer): Promise<void> {
        const customers = await this.load();
        if(customers.some(c => c.email === customer.email)) {
            throw new Error(`Email ${customer.email} in use`);
        }
        customers.push(customer);
        await this.save(customers);
    }

    async updateCustomer(id: number, updatedData: Partial<Customer>): Promise<Customer> {
        delete updatedData.id;
        delete updatedData.createdAt;

        if (updatedData.email){
            const customers = await this.load();
            const emailExists = customers.some(c => c.email === updatedData.email && c.id !== id);
            if (emailExists) {
                throw new Error(`Email ${updatedData.email} in use`);
            }
        }
        return await this.update(id, updatedData);
    }

    async findById(id: number): Promise<Customer | undefined> {
        const customers = await this.findAll();
        const customer = customers.find(c => c.id === id);
        if (!customer) {
            throw new Error(`Customer with id ${id} not found`);
        }
        return customer;
  }

    async findByEmail(email: string): Promise<Customer | undefined> {
        const customers = await this.findAll();
        const customer = customers.find(c => c.email === email);
        if (!customer) {
            throw new Error(`Customer with email ${email} not found`);
        }
        return customer;
    }
}