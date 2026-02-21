export abstract class Vehicle{
            public id?: number
    constructor(
        public brand: string,
        public model: string,
        public year: number,
        public color: string,
        public price: number,
        public kilometers: number,
        public status: "Available"|"Sold"|"Reserved",
        public numberPlate: string
        
    ){

    }




}