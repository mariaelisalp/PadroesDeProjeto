import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./interfaces/IBuilder";

export default class SanduicheBuilder implements IBuilder{

    private _sanduiche = new Sanduiche();

    reset(): void {
        this._sanduiche = new Sanduiche();
    }
    getSanduiche(): Sanduiche {
        const result : Sanduiche = this._sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(sanduiche: SanduicheType) {
        this._sanduiche.sanduicheType = sanduiche;
    }
    setBread(bread: Bread) {
        this._sanduiche.bread = bread;
        
    }
    setProtein(protein: Protein) {
        this._sanduiche.protein = protein;
    }
    setSalad(salad: Salad) {
        this._sanduiche.salad = salad;
    }
    addSauce(sauce: Sauce) {
        this._sanduiche.addSauce(sauce);
    }

}