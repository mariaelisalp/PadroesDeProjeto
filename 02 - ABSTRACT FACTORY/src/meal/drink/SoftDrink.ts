import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{

    startDelivery(): void {
        this.getCargo();
        console.log("Iniciando o pedido de bebida...")
    }
    getCargo(): void {
        console.log("Bebida sem alcool");
    }

}