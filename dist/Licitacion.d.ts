import { MultipleDocument } from "./MultipleDocument";
import { SingleDocument } from "./SingleDocument";
import { EstadoLicitacion, Formato } from "./types";
export declare class Licitacion {
    private request;
    constructor(ticket: string, formato?: Formato);
    buscarCodigo(codigo: string): Promise<SingleDocument>;
    buscarHoy(): Promise<MultipleDocument>;
    buscarFecha(fecha: string): Promise<MultipleDocument>;
    buscarEstado(estado: EstadoLicitacion): Promise<MultipleDocument>;
    buscarOrganizmoFecha(codigoOrganismo: string, fecha: string): Promise<MultipleDocument>;
    buscarProveedorFecha(codigoProveedor: string, fecha: string): Promise<MultipleDocument>;
}
