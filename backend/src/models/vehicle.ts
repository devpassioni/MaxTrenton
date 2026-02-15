export abstract class vehicle{
    constructor(
        public id: number,
        public brand: string,
        public model: string,
        public year: number,
        public color: string,
        public price: number,
        public quilometers: number,
        public status: "Available"|"Sold"|"Reserved"
    ){

    }
}