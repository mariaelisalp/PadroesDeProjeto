import IDeliveryFactory from "../delivery/interfaces/IDeliveryFactory";
import IDrink from "../meal/drink/interfaces/IDrink";
import IFood from "../meal/food/interfaces/IFood";

export default class Client{
    private food: IFood;
    private drink: IDrink;

    constructor(factory: IDeliveryFactory){
        this.food = factory.createDeliveryFood();
        this.drink = factory.createDeliveryDrink();
    }

    startDelivery(): void{
        this.food.startDelivery();
        this.drink.startDelivery();
    }
}