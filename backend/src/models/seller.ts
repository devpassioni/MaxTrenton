export class Seller{
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public phone: string,
        public registrationCode: number,
        public salesCount: number,
        public status: boolean
    ){

    }

public showDetails(): void{
    console.log(`Nome: ${this.name}
       Registration Code: ${this.registrationCode} 
       Sales Count: ${this.salesCount}`)
}



}