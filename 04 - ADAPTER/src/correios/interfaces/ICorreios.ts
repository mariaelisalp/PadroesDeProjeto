import Rastreio from "../../utils/Rastreio";

export default interface ICorreios{
    rastreio(): Rastreio;
    sendCorreios(): void;
    receiveCorreios(): void;
}