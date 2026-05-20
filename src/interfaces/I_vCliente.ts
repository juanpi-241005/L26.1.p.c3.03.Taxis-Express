export interface I_vCliente {
    get nombre(): string;
    get tipoServicio(): number;
    get edad(): number;
    get sexo(): number;
    mostrar(): void;
    ocultar(): void;
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}