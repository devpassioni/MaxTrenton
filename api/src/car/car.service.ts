import {Injectable} from "@nestjs/common"
import {CarService as backendCarService} from "../../../backend/src/service/carService"


@Injectable()
export class CarService{
    private carService = new backendCarService();


    async findAll(){
    const pathAbsoluto = require('path').resolve("resources/data/cars.json");
    console.log("--- TESTE FINAL ---");
    
    try {
        const fs = require('fs');
        if (!fs.existsSync(pathAbsoluto)) {
            console.log("ERRO: Pro Node, esse arquivo NÃO EXISTE aqui:", pathAbsoluto);
            return [];
        }

        const conteudo = fs.readFileSync(pathAbsoluto, 'utf-8');
        console.log("Conteúdo bruto que o Node leu:", ">" + conteudo + "<");
        console.log("Tamanho em caracteres:", conteudo.length);

        return JSON.parse(conteudo);
    } catch (e) {
        console.log("Erro ao tentar ler/parsear:", e.message);
        return [];
    }
       
    }

    async findbyid(id:number){
        return await this.carService.findById(id);
    }


    async findByBodytype(type: "Sedan"|"SUV"|"Coupe"|"Hatchback" ){
        return await this.carService.findByBodyType(type);
    }













}