import { UserService } from "./userService";
import { Seller } from "../models/user";

export class SellerService extends UserService<Seller> {
    constructor() {
        super("resources/data/sellers.json");
    }

    async create(seller: Seller): Promise<void> {

        if(seller.salesCount < 0) {
            throw new Error("Sales count cannot be negative");
        }
        await super.create(seller);
        console.log("Seller created:");
    }

    // POSSIVEL REFATORAÇÃO.
    async toggleStatus(id: number): Promise<void> {
        const sellers = await this.load();
        const index = sellers.findIndex(s => s.id === id);
    
        if (index === -1) throw new Error("Not found!");
        sellers[index].status = sellers[index].status === "Active" ? "Inactive" : "Active";
        await this.save(sellers);
    }

    async getActiveSellers(): Promise<Seller[]> {
        const sellers = await this.findAll();
        return sellers.filter(s => s.status === "Active");
    }
    
    async getTopSeller(limit: number = 5): Promise<Seller[]> {
        const sellers = await this.findAll();
        return sellers
            .sort((a, b) => b.salesCount - a.salesCount)
            .slice(0, limit);
    }
        
}
