export class Customer {
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