import { readFile, writeFile } from "fs/promises";
import path from "path";

export abstract class JsonRepository<T extends {id: number}> {

    protected filePath: string;

    constructor(relativePath: string){
        this.filePath = path.resolve(process.cwd(), relativePath);
    }

    protected async load(): Promise<T[]> {
        const data = await readFile(this.filePath, "utf-8");
        return JSON.parse(data);
    }
    protected async save(items: T[]): Promise<void> {
        await writeFile(
            this.filePath,
            JSON.stringify(items, null, 2),
        );
    }

    protected async delete(id: number): Promise<void> {
        const items = await this.load();
        
        const exists = items.some(item => item.id === id);
        if (!exists) {
            throw new Error(`Item com id ${id} não encontrado.`);
        }

        const filteredItems = items.filter(item => item.id !== id);
        
        await this.save(filteredItems);
    }

    public async update(id: number, updatedData: Partial<T>): Promise<T> {
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

}