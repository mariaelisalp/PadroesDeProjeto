import Rastreio from "../utils/Rastreio";
import ITransportadora from "./interfaces/ITransportadora";

export default class Transportadora implements ITransportadora{
    private codigoRastreio: Rastreio;

    rastreio(): Rastreio {
        return new Rastreio();
    }

    send(): void {
        this.codigoRastreio = this.rastreio();
        console.log("CODIGO DE RASTREIO: " + this.codigoRastreio.getCodigo());
        console.log("Enviando pela transportadora.");
    }
    receive(): void {
        console.log("Recebendo pela transportadora.");
    }

}