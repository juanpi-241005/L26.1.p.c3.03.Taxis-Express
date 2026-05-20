/*TAXI EXPRESS
La empresa TAXI EXPRESS C.A, dedicada al ramo de servicios de transporte, señala que, por
el aumento de su cartera de clientes, necesita un sistema automatizado que le permita llevar
ciertas estadísticas. Para ello por cada cliente que atiende le toma los siguientes datos: nombre,
tipo de servicio a tomar (1. Largo Urbano, 2. Corto Urbano), edad y sexo (1. Masculino o 2.
Femenino). Es significativo para la empresa, obtener un reporte que contenga:
 a) Cantidad declientes femeninas mayores de edad,
  b) cuál ha sido la menor edad atendida,
   c) promedio de edad de los clientes.

Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que Juan (20 años) tomó servicio corto, Ana (19) largo, Lin
(18) corto, y Mary (15) largo:


> Cantidad de registros procedados: N
> El último ?? es: XXXX
> Nombres con valor superior al último: YYY1, YYY2, ...
> Métodos de ARRAYS usados: forEach, map,
*/

import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import Cl_cCliente from "./Cl_cCliente.js";
import {I_vEmpresa } from "../interfaces/I_vEmpresa.js";
import Cl_mCliente from "../models/Cl_mCliente.js";

export default class Cl_cEmpresa {
    private mEmpresa: Cl_mEmpresa = new Cl_mEmpresa();
    private vEmpresa: I_vEmpresa;
    private cCliente: Cl_cCliente;

    constructor(vistaEmpresa: I_vEmpresa, controladorCliente: Cl_cCliente) {
        this.vEmpresa = vistaEmpresa;
        this.cCliente = controladorCliente;

        this.vEmpresa.onNuevoCliente(() => this.procesar1Cliente());
        this.cargarDatosHardcoded();
    }

    private cargarDatosHardcoded() {
        const cliente1 = new Cl_mCliente({ nombre: "Juan", tipoServicio: 2, edad: 20, sexo: 1 });
        const cliente2 = new Cl_mCliente({ nombre: "Ana", tipoServicio: 1, edad: 19, sexo: 2 });
        const cliente3 = new Cl_mCliente({ nombre: "Lin", tipoServicio: 2, edad: 18, sexo: 1 });
        const cliente4 = new Cl_mCliente({ nombre: "Mary", tipoServicio: 1, edad: 15, sexo: 2 });

        this.mEmpresa.agregarCliente(cliente1);
        this.mEmpresa.agregarCliente(cliente2);
        this.mEmpresa.agregarCliente(cliente3);
        this.mEmpresa.agregarCliente(cliente4);

        this.actualizarReporte();
    }

    private procesar1Cliente() {
        this.cCliente.solicitarCliente((cliente) => {
            if(cliente !== null) {
                this.mEmpresa.agregarCliente(cliente);
                this.actualizarReporte();
            }
        });
    }

    private actualizarReporte(): void {
        this.vEmpresa.mostrarCliente({
            cliente: this.mEmpresa.cliente,
            cantidadMujeresMayores: this.mEmpresa.cantidadMujeresMayores(),
            clienteMenorEdad: this.mEmpresa.clienteMenorEdad(),
            promedioEdad: this.mEmpresa.promedioEdad(),
            cantidadClientes: this.mEmpresa.cantidadClientes(),
            ultimoNombre: this.mEmpresa.ultimoNombre(),
            nombresSuperioresAlUltimo: this.mEmpresa.nombresSuperioresAlUltimo(),
            procesosUsados: this.mEmpresa.procesosUsados()
        });
    }
} 