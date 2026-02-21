export declare abstract class JsonRepository<T extends {
    id: number;
}> {
    protected filePath: string;
    constructor(relativePath: string);
    protected load(): Promise<T[]>;
    protected save(items: T[]): Promise<void>;
    protected delete(id: number): Promise<void>;
    update(id: number, updatedData: Partial<T>): Promise<T>;
    protected genId(): Promise<number>;
}
