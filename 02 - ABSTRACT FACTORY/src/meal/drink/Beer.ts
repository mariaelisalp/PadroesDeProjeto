import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{

    startDelivery(): void {
        this.getCargo();
        console.log("Iniciando o pedido de bebida...")
    }
    getCargo(): void {
        console.log("Cerveja");
    }

}