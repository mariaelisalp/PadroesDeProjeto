import Iconsole from "./interfaces/IConsole";

export default class Xbox implements Iconsole{

    constructor(){
        this.configureGame();
        console.log("Xbox: Iniciando jogo...");
    }

    configureGame(): void {
        this.authToken();
        console.log("Xbox: Configurando ambiente de jogo...");
    }
    authToken(): void {
        console.log("Xbox: Autorizando partida...")
    }

}