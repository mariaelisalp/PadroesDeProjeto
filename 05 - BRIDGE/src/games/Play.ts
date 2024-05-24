import Iconsole from "../consoles/interfaces/IConsole";
import IGame from "./interfaces/IGame";

export default class Play implements IGame{

    constructor(private game: Iconsole){
    }

    playing(): void {
        console.log("Iniciando a partida...");
    }
    result(): void {
        console.log("******** PARTIDA INICIADA ********");
    }

}