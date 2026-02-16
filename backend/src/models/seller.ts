export class Seller{
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public phone: string,
        public registrationCode: number,
        public salesCount: number,
        public status: "Active"|"Inactive"
    ){

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