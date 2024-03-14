import { EstadoLicitacion, EstadoOrdenDeCompra, Formato, Tipo } from "./types";
export declare class Listar {
    private ticket;
    private tipo;
    private formato;
    static baseUrl: string;
    static path: string;
    constructor(ticket: string, tipo: Tipo, formato?: Formato);
    static makeRequest(endpoint: string): Promise<any>;
    static getEnpoint(ticket: string, baseUrl: string, path: string, query?: Record<string, string>): string;
    codigo(codigo: string): Promise<any>;
    todoEstadoDiaActual(): Promise<any>;
    todoFecha(fecha: string): Promise<any>;
    todoEstado(estado: EstadoLicitacion | EstadoOrdenDeCompra): Promise<any>;
    organismoFecha(codigoOrganismo: string, fecha: string): Promise<any>;
    proveedorFecha(codigoProveedor: string, fecha: string): Promise<any>;
}
