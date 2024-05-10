import IBuilder from "../builders/interfaces/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private builder: IBuilder){

    }

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.INTEGRAL);
        this.builder.setProtein(Protein.SALSICHA);
        this.builder.setSalad(Salad.TOMATE);
        this.builder.addSauce(Sauce.MOSTARDA);
        this.builder.addSauce(Sauce.KETCHUP);
    }

    constructXsalada(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(Bread.ITALIANO);
        this.builder.setProtein(Protein.HAMBURGUER);
        this.builder.setSalad(Salad.RUCULA);
        this.builder.addSauce(Sauce.KETCHUP);
        this.builder.addSauce(Sauce.BARBECUE);
        this.builder.addSauce(Sauce.MAIONESE);
    }
}