import { I_vCliente } from "../interfaces/I_vCliente.js";

export default class Cl_vCliente implements I_vCliente {
    inNombre: HTMLInputElement;
    inTipoServicio: HTMLInputElement;
    inEdad: HTMLInputElement;
    inSexo: HTMLInputElement;
    btCancelar: HTMLButtonElement;
    btAceptar: HTMLButtonElement;
    vista: HTMLElement;

    constructor() {
        this.vista = document.getElementById(
            "Cliente"
        ) as HTMLElement;
        this.inNombre = document.getElementById(
            "Cliente_inNombre"
        ) as HTMLInputElement;
        this.inTipoServicio = document.getElementById(
            "Cliente_inTipoServicio"
        ) as HTMLInputElement;
        this.inEdad = document.getElementById(
            "Cliente_inEdad"
        ) as HTMLInputElement;
        this.inSexo = document.getElementById(
            "Cliente_inSexo"
        ) as HTMLInputElement;
    
        this.btCancelar = document.getElementById(
            "Cliente_btCancelar"
        ) as HTMLButtonElement;
        this.btAceptar = document.getElementById(
            "Cliente_btAceptar"
        ) as HTMLButtonElement;
        this.ocultar();
    }

    get nombre(): string {
        return this.inNombre.value;
    }
    get tipoServicio(): number {
        return +this.inTipoServicio.value;
    }
    get edad(): number {
        return +this.inEdad.value;
    }
    get sexo(): number{
        return +this.inSexo.value;
    }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
    this.limpiarFormulario();
  }
  private limpiarFormulario(): void {
    if(this.nombre) this.inNombre.value = "";
    this.inTipoServicio.value = "0";
    this.inEdad.value = "";
    this.inSexo.value = "0";
  }
}