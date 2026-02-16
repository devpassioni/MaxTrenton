import { User } from "./user";

export class Customer extends User {
    constructor(
        id: number,
        name: string,
        email: string,
        phone: string,
        birthDate: Date,

        public creditScore: number,
        public cpf: string,
    )
        {
            super(id, name, email, phone, birthDate);
        }
}

        