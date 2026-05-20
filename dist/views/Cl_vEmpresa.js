const html = String.raw;
export default class Cl_vEmpresa {
    lblcantidadMujeresMayores;
    lblclienteMenorEdad;
    lblpromedioEdad;
    lblCantidadClientes;
    lblNombreUltimo;
    lblNombresSuperioresAlUltimo;
    lblProcesosUsados;
    btNuevoCliente;
    tbCliente;
    vista;
    constructor() {
        this.vista = document.getElementById("empresa");
        this.lblcantidadMujeresMayores = document.getElementById("empresa_lblcantidadMujeresMayores");
        this.lblclienteMenorEdad = document.getElementById("empresa_lblclienteMenorEdad");
        this.lblpromedioEdad = document.getElementById("empresa_lblpromedioEdad");
        this.lblCantidadClientes = document.getElementById("empresa_lblcantidadClientes");
        this.lblNombreUltimo = document.getElementById("empresa_lblNombreUltimo");
        this.lblNombresSuperioresAlUltimo = document.getElementById("empresa_lblNombresSuperioresAlUltimo");
        this.lblProcesosUsados = document.getElementById("empresa_lblProcesosUsados");
        this.btNuevoCliente = document.getElementById("empresa_btNuevoCliente");
        this.tbCliente = document.getElementById("empresa_tbCliente");
    }
    onNuevoCliente(callback) {
        this.btNuevoCliente.onclick = callback;
    }
    mostrarCliente({ cliente, cantidadMujeresMayores, clienteMenorEdad, promedioEdad, cantidadClientes, ultimoNombre, nombresSuperioresAlUltimo, procesosUsados }) {
        this.tbCliente.innerHTML = "";
        for (let i = 0; i < cliente.length; i++) {
            const c = cliente[i];
            const textoSexo = c.sexo === 1 ? "Masculino" : "Femenino";
            this.tbCliente.innerHTML += html `
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
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vEmpresa.js.map