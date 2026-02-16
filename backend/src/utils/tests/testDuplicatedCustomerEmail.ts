import { CustomerService } from "../service/customerService";
import { Customer } from "../models/user";


async function duplicatedEmailTest() {
    const customerService = new CustomerService();
    try {
        console.log("\n[Test 1] Create Customer with duplicate email.");
        const newCustomer1 = new Customer(
            Date.now(),
            "Alice Smith",
            "alice@email.com",
            "11977777777", 
            new Date("1995-01-01"), 
            720, 
            "12345678901"
        );
        await customerService.create(newCustomer1);
        console.log("Created first customer successfully");

        const newCustomer2 = new Customer(
            Date.now() + 1,
            "Bob Johnson",
            "alice@email.com", // Duplicate email
            "11966666666",
            new Date("1992-01-01"),
            680,
            "12345678902"
        );
        await customerService.create(newCustomer2);
    } catch (error: any) {
        console.error("Error: ", error);
    }
}

duplicatedEmailTest();