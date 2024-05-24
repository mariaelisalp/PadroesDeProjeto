import Iconsole from "./interfaces/IConsole";

export default class PlayStation implements Iconsole{

    constructor(){
        this.configureGame();
        console.log("PlayStation: Iniciando jogo...");
    }

    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Configurando ambiente da partida...");
    }
    authToken(): void {
        console.log("PlayStation: Autorizando partida...")
    }

}