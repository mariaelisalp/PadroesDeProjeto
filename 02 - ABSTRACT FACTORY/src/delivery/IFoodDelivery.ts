import SoftDrink from "../meal/drink/SoftDrink";
import IDrink from "../meal/drink/interfaces/IDrink";
import HotDog from "../meal/food/HotDog";
import IFood from "../meal/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    
    createDeliveryDrink(): IDrink {
        return new SoftDrink;
    }
    createDeliveryFood(): IFood {
        return new HotDog;
    }

}