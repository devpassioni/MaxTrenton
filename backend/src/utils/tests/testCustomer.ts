
import { CustomerService } from "../../service/customerService";
import { Customer } from "../../models/user";


async function testCreateCustomer() {
    const customerService = new CustomerService();

    console.log("--- 🧪 Iniciando Testes de Services ---");
    // Teste de criação de cliente
    try {
        console.log("\n[Test 1] Create Customer.");
        const newCustomer = new Customer(
            "Ryan Rouxinol",
            `${Date.now()}@email.com`,
            "11999999999", 
            new Date("2000-01-01"), 
            850, 
            "12345678901"
        );
        await customerService.create(newCustomer);
        console.log("Created customer successfully");

        console.log("\n[Test 2] Create new Customer")
        const newCustomer2 = new Customer(
            "Jane Doe",
            "janedoe@email.com",
            "11988888888", 
            new Date("1995-01-01"), 
            750, 
            "12345678902"
        );
        await customerService.create(newCustomer2);
        console.log("Created second customer successfully");

        console.log("\n[Test 3] findAll Customers.");
        const allCustomers = await customerService.findAll();
        console.log("All customers found:", allCustomers);

         console.log("\n[Test 4] Find Customer by E-mail.");
        const customerFound = await customerService.findByEmail("janedoe@email.com");
        console.log(`Found customer: ${customerFound.name}, ID: ${customerFound.id}`);

        await customerService.create(newCustomer);
        console.log("Created customer successfully");

        console.log("\n[Test 5] Customer with invalid CPF...");
        const newCustomerInvalid = new Customer(
            "Invalid Customer",
            "invalidemail@email.com", 
            "11999999999",
            new Date("2000-01-01"), 
            650, 
            "123" // CPF inválido
        );
        await customerService.create(newCustomerInvalid);

    }catch(error: any) {
        console.error("Error: ", error);
    }
}


testCreateCustomer();
