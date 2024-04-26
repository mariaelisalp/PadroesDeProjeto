export default class Endereco{

    private _estado: string;
    private _cidade: string;
    private _rua: string;
    private _numero: number;

    constructor(estado: string, cidade:string, rua:string, numero: number){
        this._estado = estado;
        this._cidade = cidade;
        this._rua = rua;
        this._numero = numero; 
    }

    /**
     * Getter estado
     * @return {string}
     */
	public get estado(): string {
		return this._estado;
	}

    /**
     * Getter cidade
     * @return {string}
     */
	public get cidade(): string {
		return this._cidade;
	}

    /**
     * Getter rua
     * @return {string}
     */
	public get rua(): string {
		return this._rua;
	}

    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Setter estado
     * @param {string} value
     */
	public set estado(value: string) {
		this._estado = value;
	}

    /**
     * Setter cidade
     * @param {string} value
     */
	public set cidade(value: string) {
		this._cidade = value;
	}

    /**
     * Setter rua
     * @param {string} value
     */
	public set rua(value: string) {
		this._rua = value;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}
    
}