import { Customer } from "../models/customer";

const customer = new Customer(
    1,
    'Ryan',
    'ryan@email.com',
    '1999999999',
    new Date('2002-05-12')
);

console.log(customer);