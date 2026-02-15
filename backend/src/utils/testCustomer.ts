import { Customer } from "../models/customer";
import { CustomerService } from "../service/customerService";

async function testCustomer() {
    const service = new CustomerService();
    
    console.log("=== TESTE CUSTOMERSERVICE ===");

    try{
        console.log("\n1 - Criando cliente...");
        const newCustomer = new Customer(
            Date.now(),
            "Ryan Rouxinol",
            `teste${Date.now()}@email.com`,
            "123456789",
            new Date("1990-01-01"),
        );
        await service.create(newCustomer);
        console.log("Cliente criado:");
        

        console.log("2 - Listando todos os clientes...");
        const customers = await service.findAll();
        console.log(customers);

        console.log("\n3 - Buscando cliente por email...");
        const foundByEmail = await service.findByEmail(newCustomer.email);
        console.log(foundByEmail);

        console.log("\n4 - Atualizando cliente...");
        const updatedCustomer = await service.updateCustomer(newCustomer.id, { name: "Ryan R." });
        console.log(updatedCustomer);
        try{
            await service.create(newCustomer);
        }catch(error){
            console.error("ERROR creating customer:", error);
        }
    }catch(error){
        console.error("ERROR", error);
    }
}
testCustomer();