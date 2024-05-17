import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreios from "./correios/interfaces/ICorreios";
import Transportadora from "./transportadora/Transportadora";

const envio : ICorreios = new TransportadoraAdapter(new Transportadora());

envio.sendCorreios();
envio.receiveCorreios();
