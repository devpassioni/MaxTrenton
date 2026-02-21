
export class CreateSellerDTO{
    name: string;
    email: string;
    phone: string;
    birthDate: Date;
    registrationCode: number;
    salesCount: number;
    status: "Active" | "Inactive";

}