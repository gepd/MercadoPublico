import { Listado, OC } from "../types";
export declare class SingleDocument {
    private data;
    constructor(data: OC);
    get Cantidad(): number;
    get FechaCreacion(): string;
    get Document(): Listado;
}
