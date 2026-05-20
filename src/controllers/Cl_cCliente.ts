import { I_vCliente } from "../interfaces/I_vCliente.js";
import Cl_mCliente from "../models/Cl_mCliente.js";

// Definimos el alias de tipo con mayúscula inicial (buena práctica en TS)
type ClienteCallback = (cliente: Cl_mCliente | null) => void;

export default class Cl_cCliente {
    private vista: I_vCliente;
    private callback: ClienteCallback | null = null; 

    constructor(vista: I_vCliente) {
        this.vista = vista;
        // Vinculamos los eventos de la interfaz gráfica a los métodos internos
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }

    // El controlador principal de la empresa llama a este método para abrir el formulario
    solicitarCliente(callback: ClienteCallback): void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btCancelarOnClick(): void {
        if (this.callback) {
            this.callback(null); // Avisamos que no se creó ningún cliente
        }
        this.vista.ocultar();
        this.callback = null; // Reseteamos el callback de manera segura
    }

    private btAceptarOnClick(): void {
        if (this.callback) {
            // Creamos la instancia con los datos actuales capturados por la vista
            this.callback(
                new Cl_mCliente({
                    nombre: this.vista.nombre,
                    tipoServicio: this.vista.tipoServicio,
                    edad: this.vista.edad,
                    sexo: this.vista.sexo,
                })
            );
        }
        this.vista.ocultar();
        this.callback = null; // Reseteamos el callback de manera segura
    }
}