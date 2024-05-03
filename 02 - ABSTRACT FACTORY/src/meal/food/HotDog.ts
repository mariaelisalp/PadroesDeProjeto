import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{

    startDelivery(): void {
        this.getCargo();
        console.log("Iniciando o pedido...");
    }
    getCargo(): void {
        console.log("Hot Dog");
    }

}