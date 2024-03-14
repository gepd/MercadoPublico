import { ListadoSimple } from "./types";
export declare class MultipleDocument {
    private data;
    constructor(data: any);
    get Cantidad(): number;
    get FechaCreacion(): string;
    get Documents(): ListadoSimple[];
}
