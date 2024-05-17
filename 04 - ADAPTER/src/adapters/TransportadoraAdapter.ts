import ICorreios from "../correios/interfaces/ICorreios";
import Transportadora from "../transportadora/Transportadora";
import Rastreio from "../utils/Rastreio";

export default class implements ICorreios{
    private codigoRastreio : Rastreio;

    constructor(private transportadora: Transportadora){
        console.log("Adaptando transportadora em correios");
    }

    rastreio(): Rastreio {
        return new Rastreio();
    }

    sendCorreios(): void {
        this.transportadora.send();
    }
    receiveCorreios(): void {
        this.transportadora.receive();
    }

}