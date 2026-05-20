export default class Cl_mCliente {
    private _nombre: string = "";
    private _tipoServicio: number = 0;
    private _edad: number = 0;
    private _sexo: number = 0;
    constructor({
        nombre,
        tipoServicio,
        edad,
        sexo
    }: {
        nombre: string,
        tipoServicio: number,
        edad: number,
        sexo: number
    }) {
        this.nombre = nombre;
        this.tipoServicio = tipoServicio;
        this.edad = edad;
        this.sexo = sexo;

    }
    set nombre(n: string) {
        this._nombre = n;
    }
    get nombre(): string {
        return this._nombre;
    }
    set tipoServicio(tS: number) {
        this._tipoServicio = +tS;
    }
    get tipoServicio(): number {
        return this._tipoServicio;
    }
    set edad(E: number) {
        this._edad = +E;
    }
    get edad(): number {
        return this._edad;
    }

    set sexo(S: number) {
        this._sexo = +S;
    }
    get sexo(): number {
        return this._sexo;
    }

}