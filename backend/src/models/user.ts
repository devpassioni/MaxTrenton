export abstract class User {
    public createdAt: Date;
    constructor(
        public id: number,
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