import { Listado, OC } from "../types";

export class SingleDocument {
  constructor(private data: OC) {}

  get Cantidad(): number {
    return this.data.Cantidad;
  }

  get FechaCreacion(): string {
    return this.data.FechaCreacion;
  }

  get Document(): Listado {
    return this.data.Listado[0];
  }
}
