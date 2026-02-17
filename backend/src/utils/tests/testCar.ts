import { Car } from "../../models/car"; 
import { CarService } from "../../service/carService";

async function testCreateCar() {
    console.log("--- 🧪 Iniciando Testes de Services ---")
    
    try{
        const carServices = new CarService();
        const newCar = new Car(
            "Toyota",
            "Corolla",
            2020,
            "Silver",
            80000,
            35000,
            "Available",
            "ABC1234",
            4,
            "Automatic",
            "1.8",
            "Gas",
            "Sedan",
            140,
        );
        await carServices.create(newCar as any);
        console.log("Created car successfully");

        const newCar2 = new Car(
            "Honda",
            "Civic",
            2019,
            "Blue",
            75000,
            40000,
            "Available",
            "XYZ5678",
            4,
            "Manual",
            "2.0",
            "Gas",
            "Sedan",
            158,
        );
        await carServices.create(newCar2 as any);
        console.log("Created second car successfully");

        const newCar3 = new Car(
            "Tesla",
            "Model 3",
            2021,
            "Red",
            120000,
            15000,
            "Available",
            "TESLA3",
            4,
            "Automatic",
            "Electric",
            "EV",
            "Sedan",
            283,
        );
        await carServices.create(newCar3 as any);
        console.log("Created third car successfully");

        const allCars = await carServices.findAll();
        console.log("All cars:", allCars);

        const findCarById = await carServices.findById(1);
        console.log("Found car by ID 1:", findCarById);
    }catch(error){
        console.error("Error creating car:", error);
    }
}

testCreateCar();