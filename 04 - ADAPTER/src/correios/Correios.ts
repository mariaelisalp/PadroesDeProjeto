import Rastreio from "../utils/Rastreio";
import ICorreios from "./interfaces/ICorreios";

export default class Correios implements ICorreios{
    private codigoRastreio: Rastreio;

    rastreio(): Rastreio {
        return new Rastreio();
    }

    sendCorreios(): void {
        this.codigoRastreio = this.rastreio();
        console.log("CODIGO DE RASTREIO: " + this.codigoRastreio.getCodigo());
        console.log("Enviando pelos correios.");
    }
    receiveCorreios(): void {
        console.log("Recebendo pelos correios.");
    }

}