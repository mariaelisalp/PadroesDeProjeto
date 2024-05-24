import PlayStation from "./consoles/PlayStation";
import Xbox from "./consoles/Xbox";
import IConsole from "./consoles/interfaces/IConsole";
import AdvancedPlay from "./games/AdvancedPlay";
import Play from "./games/Play";

function startGame(consoles: IConsole){
    console.log("Aguarde");
    const game = new Play(consoles);

    game.playing();
    game.result();

}

function startAdvancedGame(consoles: IConsole){
    console.log("Aguarde");
    const game = new AdvancedPlay(consoles);

    game.playing();
    game.result();
    game.challenge();
}

console.log();
startAdvancedGame(new Xbox());
console.log();
startAdvancedGame(new PlayStation())