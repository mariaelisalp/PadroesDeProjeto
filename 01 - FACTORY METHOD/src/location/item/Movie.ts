import IItem from "./interfaces/IItem";

export default class Movie implements IItem{

    start(): void {
        this.getDescription();
        console.log("Iniciando...");
    }
    getDescription(): void {
        console.log("Filme YYY");
    }

}