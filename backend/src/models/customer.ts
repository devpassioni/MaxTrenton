import { User } from "./user";

export class Customer extends User {
    constructor(
        name: string,
        email: string,
        phone: string,
        birthDate: Date,

        public creditScore: number,
        public cpf: string,
    )
        {
            super(name, email, phone, birthDate);
        }
}

        