export default class Cl_mCliente {
    _nombre = "";
    _tipoServicio = 0;
    _edad = 0;
    _sexo = 0;
    constructor({ nombre, tipoServicio, edad, sexo }) {
        this.nombre = nombre;
        this.tipoServicio = tipoServicio;
        this.edad = edad;
        this.sexo = sexo;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set tipoServicio(tS) {
        this._tipoServicio = +tS;
    }
    get tipoServicio() {
        return this._tipoServicio;
    }
    set edad(E) {
        this._edad = +E;
    }
    get edad() {
        return this._edad;
    }
    set sexo(S) {
        this._sexo = +S;
    }
    get sexo() {
        return this._sexo;
    }
}
//# sourceMappingURL=Cl_mCliente.js.map