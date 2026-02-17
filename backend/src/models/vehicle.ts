export abstract class Vehicle{
    constructor(
        public id: number,
        public brand: string,
        public model: string,
        public year: number,
        public color: string,
        public price: number,
        public kilometers: number,
        public status: "Available"|"Sold"|"Reserved"
    ){

    }




}