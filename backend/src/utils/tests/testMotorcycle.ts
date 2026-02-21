import { Motorcycle} from "../../models/motorcycle";
import { MotorcycleService } from "../../service/motorcycleService";

async function testCreateMotorcycle() {
    console.log("--- 🧪 Iniciando Testes de Services ---")
    
    try{
        const motorcycleService = new MotorcycleService();
        // const newMotorcycle = new Motorcycle(
        //     "Yamaha",
        //     "MT-07",
        //     2020,
        //     "Blue",
        //     35000,
        //     10000,
        //     "Available",
        //     "MOTO1234",
        //     689,
        //     "Sport",
        //     74,
        // );
        // await motorcycleService.create(newMotorcycle as any);
        // console.log("Created motorcycle successfully");

        // const newMotorcycle2 = new Motorcycle(
        //     "Yamaha",
        //     "MT-07",
        //     2020,
        //     "Blue",
        //     35000,
        //     10000,
        //     "Available",
        //     "MOTO1244",
        //     689,
        //     "Sport",
        //     74,
        // );
        // await motorcycleService.create(newMotorcycle2 as any);
        // console.log("Created motorcycle successfully");
        const newMotorcycle3 = new Motorcycle(
            "Yamaha",
            "MT-05",
            2022,
            "Blue",
            35000,
            10000,
            "Available",
            "MOT12354",
            689,
            "Sport",
            74,
        );
        await motorcycleService.create(newMotorcycle3 as any);
        console.log("Created motorcycle successfully");

        const findMotorcycle = await motorcycleService.findById(1);
        console.log("Found motorcycle:", findMotorcycle);

        const allMotorcycles = await motorcycleService.findAll();
        console.log("All motorcycles:", allMotorcycles);
    }catch(error){
        console.error("Error creating motorcycle:", error);
    }
}

testCreateMotorcycle();