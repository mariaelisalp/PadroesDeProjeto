import Beer from "../meal/drink/Beer";
import IDrink from "../meal/drink/interfaces/IDrink";
import Hamburguer from "../meal/food/Hamburguer";
import IFood from "../meal/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiqfomeDelivery implements IDeliveryFactory{

    createDeliveryDrink(): IDrink {
        return new Beer;
    }
    createDeliveryFood(): IFood {
        return new Hamburguer;
    }

}