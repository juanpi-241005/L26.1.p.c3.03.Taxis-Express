import Cl_mCliente from "../models/Cl_mCliente.js";
export default class Cl_cCliente {
    vista;
    callback = null;
    constructor(vista) {
        this.vista = vista;
        // Vinculamos los eventos de la interfaz gráfica a los métodos internos
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }
    // El controlador principal de la empresa llama a este método para abrir el formulario
    solicitarCliente(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        if (this.callback) {
            this.callback(null); // Avisamos que no se creó ningún cliente
        }
        this.vista.ocultar();
        this.callback = null; // Reseteamos el callback de manera segura
    }
    btAceptarOnClick() {
        if (this.callback) {
            // Creamos la instancia con los datos actuales capturados por la vista
            this.callback(new Cl_mCliente({
                nombre: this.vista.nombre,
                tipoServicio: this.vista.tipoServicio,
                edad: this.vista.edad,
                sexo: this.vista.sexo,
            }));
        }
        this.vista.ocultar();
        this.callback = null; // Reseteamos el callback de manera segura
    }
}
//# sourceMappingURL=Cl_cCliente.js.map