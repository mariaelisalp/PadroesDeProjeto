import Iconsole from "../consoles/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    
    constructor(console: Iconsole){
        super(console);
    }

    challenge(): void{
        console.log("Ativando modo challenge na partida");
    }
}