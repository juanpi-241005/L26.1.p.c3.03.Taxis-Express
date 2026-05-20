import Cl_mCliente from "./Cl_mCliente.js";

export default class Cl_mEmpresa {
    public cliente: Cl_mCliente[] = [];

    agregarCliente(cliente: Cl_mCliente) {
        this.cliente.push(cliente);
    }
    cantidadMujeresMayores(): number {
        let totalMujeresMayores = 0;
        for (let i = 0; i < this.cliente.length; i++) {
            if (this.cliente[i].sexo === 2 && this.cliente[i].edad >= 18) {
                totalMujeresMayores++;
            }}
        return totalMujeresMayores;
    }
    
    clienteMenorEdad(): number {
        if(this.cliente.length === 0) return 0;

        let menorEdad = this.cliente[0].edad;
        for (let i = 1; i < this.cliente.length; i++) {
            if (this.cliente[i].edad < menorEdad) {
                menorEdad = this.cliente[i].edad;
            }
        }
        return menorEdad;
    }
    promedioEdad(): number {
        if(this.cliente.length === 0) return 0;
        let totalEdad = 0;
        for (let i = 0; i < this.cliente.length; i++) {
            totalEdad += this.cliente[i].edad;
        }
        return totalEdad / this.cliente.length;
    }
    cantidadClientes(): number {
        return this.cliente.length;
    }
    ultimoNombre(): string {
        if(this.cliente.length === 0) return "";
        return this.cliente[this.cliente.length - 1].nombre;
    }
    nombresSuperioresAlUltimo(): string[] {
        if(this.cliente.length <= 1) return [];
        const ultimaEdad = this.cliente[this.cliente.length - 1].edad;
        const nombreSuperiores: string[] = [];
        for (let i = 0; i < this.cliente.length - 1; i++) {
            if (this.cliente[i].edad > ultimaEdad) {
                nombreSuperiores.push(this.cliente[i].nombre);
            }
        }
        return nombreSuperiores;
    }
    procesosUsados(): string[] {
        return ["length", "push"];
    }
} 
