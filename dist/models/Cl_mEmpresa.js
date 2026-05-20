export default class Cl_mEmpresa {
    cliente = [];
    agregarCliente(cliente) {
        this.cliente.push(cliente);
    }
    cantidadMujeresMayores() {
        let totalMujeresMayores = 0;
        for (let i = 0; i < this.cliente.length; i++) {
            if (this.cliente[i].sexo === 2 && this.cliente[i].edad >= 18) {
                totalMujeresMayores++;
            }
        }
        return totalMujeresMayores;
    }
    clienteMenorEdad() {
        if (this.cliente.length === 0)
            return 0;
        let menorEdad = this.cliente[0].edad;
        for (let i = 1; i < this.cliente.length; i++) {
            if (this.cliente[i].edad < menorEdad) {
                menorEdad = this.cliente[i].edad;
            }
        }
        return menorEdad;
    }
    promedioEdad() {
        if (this.cliente.length === 0)
            return 0;
        let totalEdad = 0;
        for (let i = 0; i < this.cliente.length; i++) {
            totalEdad += this.cliente[i].edad;
        }
        return totalEdad / this.cliente.length;
    }
    cantidadClientes() {
        return this.cliente.length;
    }
    ultimoNombre() {
        if (this.cliente.length === 0)
            return "";
        return this.cliente[this.cliente.length - 1].nombre;
    }
    nombresSuperioresAlUltimo() {
        if (this.cliente.length <= 1)
            return [];
        const ultimaEdad = this.cliente[this.cliente.length - 1].edad;
        const nombreSuperiores = [];
        for (let i = 0; i < this.cliente.length - 1; i++) {
            if (this.cliente[i].edad > ultimaEdad) {
                nombreSuperiores.push(this.cliente[i].nombre);
            }
        }
        return nombreSuperiores;
    }
    procesosUsados() {
        return ["length", "push"];
    }
}
//# sourceMappingURL=Cl_mEmpresa.js.map