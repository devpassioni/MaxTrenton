import { JsonRepository } from "../utils/jsonRepository";
import { User } from "../models/user";

export class UserService<T extends User> extends JsonRepository<T> {
    constructor(filePath: string) {
        super(filePath);
    }

    async findAll(): Promise<T[]> {
        const data = await this.load();
        return data.map(u => ({
            ...u,
            birthDate: new Date(u.birthDate),
            createdAt: new Date(u.createdAt)
        }))
    }

    async create(entity: T): Promise<void> {
        const data = await this.load();
        if(data.some(c => c.email === entity.email)) {
            throw new Error(`Email ${entity.email} in use`);
        }
        entity.id = await this.genId();
        data.push(entity);
        await this.save(data);
    }

    async updateUser(id: number, updatedData: Partial<T>): Promise<T> {
        delete (updatedData as any).id;
        delete (updatedData as any).createdAt;

        if (updatedData.email){
            const data = await this.load();
            const emailExists = data.some(u => u.email === updatedData.email && u.id !== id);
            if (emailExists) {
                throw new Error(`Email ${updatedData.email} in use`);
            }
        }
        return await this.update(id, updatedData);
    }

    async findByEmail(email: string): Promise<T> {
        const data = await this.findAll();
        const found = data.find(u => u.email === email);
        if (!found) {
            throw new Error(`Record with email ${email} not found`);
        }
        return found;
    }
}