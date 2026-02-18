export abstract class User {
    public createdAt: Date;
    public id?: number;
    constructor(
        public name: string,
        public email: string,
        public phone: string,
        public birthDate: Date,
        
    ) {
        this.createdAt = new Date();
    }

}
export * from "./customer"; 
export * from "./seller";