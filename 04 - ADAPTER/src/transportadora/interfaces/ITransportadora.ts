import Rastreio from "../../utils/Rastreio";

export default interface ITransportadora{
    rastreio(): Rastreio;
    send(): void;
    receive(): void;
}