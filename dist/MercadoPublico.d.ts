import { Licitacion } from "./Licitacion";
import { OrdenDeCompra } from "./OrdenDeCompra";
import { Formato, ResultadoCompradorProveedor } from "./types";
export declare class MercadoPublico {
    protected ticket: string;
    protected format: Formato;
    licitacion: Licitacion;
    ordendecompra: OrdenDeCompra;
    constructor(ticket: string, format?: Formato);
    listarComprador(): Promise<ResultadoCompradorProveedor[]>;
    buscarProveedor(rutempresaproveedor: string): Promise<ResultadoCompradorProveedor>;
}
