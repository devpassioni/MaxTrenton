"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleService = void 0;
const jsonRepository_1 = require("../utils/jsonRepository");
class VehicleService extends jsonRepository_1.JsonRepository {
    constructor(filePath) {
        super(filePath);
    }
    async create(entity) {
        const data = await this.load();
        if (data.some(v => v.id === entity.id)) {
            throw new Error(`Vehicle with ID ${entity.id} already exists`);
        }
        entity.id = await this.genId();
        data.push(entity);
        await this.save(data);
    }
    async deleteVehicle(id) {
        await this.delete(id);
    }
    async findAll() {
        try {
            return await this.load();
        }
        catch {
            return [];
        }
    }
    async getVehicleId(numberPlate) {
        const data = await this.findAll();
        const found = data.find(v => v.numberPlate === numberPlate);
        if (!found) {
            throw new Error(`Vehicle with number plate ${numberPlate} not found`);
        }
        return found.id ?? 0;
    }
    async updateVehicle(id, updatedData) {
        delete updatedData.id;
        await this.findById(id);
        return await this.update(id, updatedData);
    }
    async findById(id) {
        const data = await this.findAll();
        const found = data.find(v => v.id === id);
        if (!found) {
            throw new Error(`Entity with id ${id} not found`);
        }
        return found;
    }
    async findByStatus(status) {
        const data = await this.findAll();
        return data.filter(v => v.status === status);
    }
    async findByBrand(brand) {
        const data = await this.findAll();
        return data.filter(v => v.brand.toLowerCase() === brand.toLowerCase());
    }
    async findByModel(model) {
        const data = await this.findAll();
        return data.filter(v => v.model.toLowerCase() === model.toLowerCase());
    }
    async findByYear(year) {
        const data = await this.findAll();
        return data.filter(v => v.year === year);
    }
    async findByPriceRange(minPrice, maxPrice) {
        const data = await this.findAll();
        return data.filter(v => v.price >= minPrice && v.price <= maxPrice);
    }
    async countAvailableVehicles() {
        const availableVehicles = await this.findByStatus("Available");
        return availableVehicles.length;
    }
}
exports.VehicleService = VehicleService;
//# sourceMappingURL=vehicleService.js.map