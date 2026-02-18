import { SellerService } from "../../service/sellerService";
import { Seller } from "../../models/user";
import { run } from "node:test";

async function testCreateSeller() {
    const sellerService = new SellerService();
    try{
        console.log("\n[Test 1] Create Seller.");
        const newSeller = new Seller(
            "John Doe",
            "johndoe@email.com",
            "11999999999",
            new Date("1985-05-15"),
            12345, 
            10, 
            "Active"
        );
        await sellerService.create(newSeller);
        console.log("Created seller successfully");
        

        console.log("\n[Test 2] findAll Sellers.");
        const allSellers = await sellerService.findAll();
        console.log("All sellers found:", allSellers);

        console.log("\n[Test 3] Find Seller by E-mail.");
        const sellerFound = await sellerService.findByEmail("johndoe@email.com");
        console.log(`Found seller: ${sellerFound.name}, ID: ${sellerFound.id}`);

        console.log("\n[Test 4] Seller with negative sales count...");
        const newSellerInvalid = new Seller(
            "Invalid Seller",
            "invalidemail@email.com",
            "11988888888",
            new Date("1990-01-01"),
            3, 
            -5,// Sales count is negative
            "Active"
        );
        await sellerService.create(newSellerInvalid);



    }catch(error: any) {
        console.error("Error: ", error);
    }
}
testCreateSeller();