import Client from "./clients/Client";
import AiqfomeDelivery from "./delivery/AiqfomeDelivery";
import Company from "./delivery/Company";
import IFoodDelivery from "./delivery/IFoodDelivery";
import IDeliveryFactory from "./delivery/interfaces/IDeliveryFactory";

const currentyCompany = Company.AIQFOME;
let factory: IDeliveryFactory;

switch(currentyCompany){
    case Company.IFOOD:
        factory = new IFoodDelivery;
        break;
    
    case Company.AIQFOME:
        factory = new AiqfomeDelivery;
        break;
    
    default:
        console.log("empresa não cadastrada");
        break;

}

const client = new Client(factory);
client.startDelivery();