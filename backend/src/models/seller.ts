import { User } from "./user";

export class Seller extends User {
        public id?: number;
    constructor(

        name: string,
        email: string,
        phone: string,
        birthDate: Date,
        
        public registrationCode: number,
        public salesCount: number,
        public status: "Active"|"Inactive"

        
    ){
        super(name, email, phone, birthDate);
    }

public showDetails(): void{
    console.log(`Nome: ${this.name}
       Registration Code: ${this.registrationCode} 
       Active: ${this.status}`)
}

public isActive(): boolean{
    if(this.status === "Inactive") return false
    return true
}

public Disactivate(){
    this.status = "Inactive"
}
public Activate(){
    this.status = "Active"
}

}