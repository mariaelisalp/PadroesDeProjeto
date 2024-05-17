export default class Rastreio{
    private codigoRastreio = Math.random();

    getCodigo(): number{
        return this.codigoRastreio;
    }

}