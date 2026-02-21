"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonRepository = void 0;
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
class JsonRepository {
    constructor(relativePath) {
        this.filePath = path_1.default.resolve(process.cwd(), relativePath);
    }
    async load() {
        const data = await (0, promises_1.readFile)(this.filePath, "utf-8");
        return JSON.parse(data);
    }
    async save(items) {
        await (0, promises_1.writeFile)(this.filePath, JSON.stringify(items, null, 2));
    }
    async delete(id) {
        const items = await this.load();
        const exists = items.some(item => item.id === id);
        if (!exists) {
            throw new Error(`Item com id ${id} não encontrado.`);
        }
        const filteredItems = items.filter(item => item.id !== id);
        await this.save(filteredItems);
    }
    async update(id, updatedData) {
        const items = await this.load();
        const index = items.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error(`Item with id ${id} not found`);
        }
        const updatedItem = { ...items[index], ...updatedData };
        items[index] = updatedItem;
        await this.save(items);
        return updatedItem;
    }
    async genId() {
        const items = await this.load();
        const maxId = items.reduce((max, item) => item.id > max ? item.id : max, 0);
        return maxId + 1;
    }
}
exports.JsonRepository = JsonRepository;
//# sourceMappingURL=jsonRepository.js.map