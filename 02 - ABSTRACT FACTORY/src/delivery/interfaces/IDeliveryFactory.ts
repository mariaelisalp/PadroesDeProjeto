import IDrink from "../../meal/drink/interfaces/IDrink";
import IFood from "../../meal/food/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFood;
}