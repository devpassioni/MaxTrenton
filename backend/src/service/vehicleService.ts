import { JsonRepository } from "../utils/jsonRepository";
import { Vehicle } from "../models/vehicle";

export class VehicleService<T extends Vehicle & {id: number}> extends JsonRepository<T> {
    constructor(filePath: string) {
        super(filePath);
    }

        async create(entity: T): Promise<void> {
            const data = await this.load();
            if(data.some(v => v.id === entity.id)) {
                throw new Error(`Vehicle with ID ${entity.id} already exists`);
            }
            (entity as any).id = await this.genId();
            data.push(entity);
            await this.save(data);
    }

       async deleteVehicle(id: number): Promise<void> {
        await this.delete(id);
    }


    async findAll(): Promise<T[]> {
        try{
            return await this.load();
        }catch{
            return [];
        }
}

    async getVehicleId(numberPlate: string): Promise<number> {
        const data = await this.findAll();
        const found = data.find(v => v.numberPlate === numberPlate);
        if (!found) {
            throw new Error(`Vehicle with number plate ${numberPlate} not found`);
        }
        return found.id ?? 0;
    }


    async updateVehicle(id: number, updatedData: Partial<T>): Promise<T> {
        delete (updatedData as any).id;
        await this.findById(id);

        return await this.update(id, updatedData);
    }

    async findById(id: number): Promise<T> {
        const data = await this.findAll();
        const found = data.find(v => v.id === id);
        if (!found) {
            throw new Error(`Entity with id ${id} not found`);
        }
        return found;
  }

    async findByStatus(status: "Available"|"Sold"|"Reserved"): Promise<T[]> {
        const data = await this.findAll();
        return data.filter(v => v.status === status);
    }
    
    async findByBrand(brand: string): Promise<T[]> {
        const data = await this.findAll();
        return data.filter(v => v.brand.toLowerCase() === brand.toLowerCase());
    }
    
    async findByModel(model: string): Promise<T[]> {
        const data = await this.findAll();
        return data.filter(v => v.model.toLowerCase() === model.toLowerCase());
    }

    async findByYear(year: number): Promise<T[]> {
        const data = await this.findAll();
        return data.filter(v => v.year === year);
    }
    
    async findByPriceRange(minPrice: number, maxPrice: number): Promise<T[]> {
        const data = await this.findAll();
        return data.filter(v => v.price >= minPrice && v.price <= maxPrice);
    }

    async countAvailableVehicles(): Promise<number> {
        const availableVehicles = await this.findByStatus("Available");
        return availableVehicles.length;
    }

}

