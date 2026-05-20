import { I_vEmpresa } from "../interfaces/I_vEmpresa.js";
import Cl_mCliente from "../models/Cl_mCliente.js";

const html = String.raw;

export default class Cl_vEmpresa implements I_vEmpresa {
    
    private lblcantidadMujeresMayores: HTMLLabelElement;
    private lblclienteMenorEdad: HTMLLabelElement;
    private lblpromedioEdad: HTMLLabelElement;
    private lblCantidadClientes: HTMLLabelElement;
    private lblNombreUltimo: HTMLLabelElement;
    private lblNombresSuperioresAlUltimo: HTMLLabelElement;
    private lblProcesosUsados: HTMLLabelElement;
    private btNuevoCliente: HTMLButtonElement;
    private tbCliente: HTMLTableElement;
    private vista: HTMLElement | null;

    constructor() {
        this.vista = document.getElementById("empresa") as HTMLElement | null;
        this.lblcantidadMujeresMayores = document.getElementById("empresa_lblcantidadMujeresMayores") as HTMLLabelElement;
        this.lblclienteMenorEdad = document.getElementById("empresa_lblclienteMenorEdad") as HTMLLabelElement;
        this.lblpromedioEdad = document.getElementById("empresa_lblpromedioEdad") as HTMLLabelElement;
        this.lblCantidadClientes = document.getElementById("empresa_lblcantidadClientes") as HTMLLabelElement;
        this.lblNombreUltimo = document.getElementById("empresa_lblNombreUltimo") as HTMLLabelElement;
        this.lblNombresSuperioresAlUltimo = document.getElementById("empresa_lblNombresSuperioresAlUltimo") as HTMLLabelElement;
        this.lblProcesosUsados = document.getElementById("empresa_lblProcesosUsados") as HTMLLabelElement;
        this.btNuevoCliente = document.getElementById("empresa_btNuevoCliente") as HTMLButtonElement;
        this.tbCliente = document.getElementById("empresa_tbCliente") as HTMLTableElement;
        
    }

    onNuevoCliente(callback: () => void): void {
        this.btNuevoCliente.onclick = callback;
    }

    mostrarCliente({    
        cliente,
        cantidadMujeresMayores,
        clienteMenorEdad,
        promedioEdad,
        cantidadClientes,
        ultimoNombre,
        nombresSuperioresAlUltimo,
        procesosUsados
    }: {
        cliente: Cl_mCliente[];
        cantidadMujeresMayores: number;
        clienteMenorEdad: number;
        promedioEdad: number;
        cantidadClientes: number;
        ultimoNombre: string;
        nombresSuperioresAlUltimo: string[];
        procesosUsados: string[];
    }): void {
        
        this.tbCliente.innerHTML = "";       

        for (let i = 0; i < cliente.length; i++) {
            const c = cliente[i];
        
            const textoSexo = c.sexo === 1 ? "Masculino" : "Femenino";

            this.tbCliente.innerHTML += html`
                <tr>
                    <td>${c.nombre}</td>
                    <td>${c.tipoServicio}</td>
                    <td>${c.edad}</td>
                    <td>${textoSexo}</td>
                </tr>
            `;
        }

        this.lblcantidadMujeresMayores.innerText = cantidadMujeresMayores.toString();
        this.lblclienteMenorEdad.innerText = clienteMenorEdad.toString();
        this.lblpromedioEdad.innerText = promedioEdad.toFixed(2);
        this.lblCantidadClientes.innerText = cantidadClientes.toString();
        this.lblNombreUltimo.innerText = ultimoNombre;
        this.lblNombresSuperioresAlUltimo.innerText = nombresSuperioresAlUltimo.join(", ");
        this.lblProcesosUsados.innerText = procesosUsados.join(", ");
    }

    mostrar(): void {
        if (this.vista === null) return;
        this.vista.hidden = false;
    }
    
    ocultar(): void {
        if (this.vista === null) return;
        this.vista.hidden = true;
    }
}