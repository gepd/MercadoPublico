import { MultipleDocument } from "./MultipleDocument";
import { SingleDocument } from "./SingleDocument";
import { EstadoOrdenDeCompra, Formato } from "./types";
export declare class OrdenDeCompra {
    private request;
    constructor(ticket: string, formato?: Formato);
    buscarCodigo(codigo: string): Promise<SingleDocument>;
    buscarHoy(): Promise<MultipleDocument>;
    buscarFecha(fecha: string): Promise<MultipleDocument>;
    buscarEstado(estado: EstadoOrdenDeCompra): Promise<MultipleDocument>;
    buscarOrganizmoFecha(codigoOrganismo: string, fecha: string): Promise<MultipleDocument>;
    buscarProveedorFecha(codigoProveedor: string, fecha: string): Promise<MultipleDocument>;
}
