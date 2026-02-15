import { readFile, writeFile } from "fs/promises";
import path from "path";

export abstract class JsonRepository<T> {

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
}