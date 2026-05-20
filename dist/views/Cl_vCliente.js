export default class Cl_vCliente {
    inNombre;
    inTipoServicio;
    inEdad;
    inSexo;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("Cliente");
        this.inNombre = document.getElementById("Cliente_inNombre");
        this.inTipoServicio = document.getElementById("Cliente_inTipoServicio");
        this.inEdad = document.getElementById("Cliente_inEdad");
        this.inSexo = document.getElementById("Cliente_inSexo");
        this.btCancelar = document.getElementById("Cliente_btCancelar");
        this.btAceptar = document.getElementById("Cliente_btAceptar");
        this.ocultar();
    }
    get nombre() {
        return this.inNombre.value;
    }
    get tipoServicio() {
        return +this.inTipoServicio.value;
    }
    get edad() {
        return +this.inEdad.value;
    }
    get sexo() {
        return +this.inSexo.value;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
        this.limpiarFormulario();
    }
    limpiarFormulario() {
        if (this.nombre)
            this.inNombre.value = "";
        this.inTipoServicio.value = "0";
        this.inEdad.value = "";
        this.inSexo.value = "0";
    }
}
//# sourceMappingURL=Cl_vCliente.js.map