import IItem from "./interfaces/IItem";

export default class Game implements IItem{

    start(): void {
        this.getDescription();
        console.log("Iniciando...");
    }
    getDescription(): void {
        console.log("Jogo XXX");
    }
    
}