import Cl_mCliente from "../models/Cl_mCliente.js";

export interface I_vEmpresa {
    onNuevoCliente(callback: () => void): void;

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
    }): void
}