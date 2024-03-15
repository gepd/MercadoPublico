import { ListadoSimple } from "../types";

export class MultipleDocument {
  constructor(private data) {}

  get Cantidad(): number {
    return this.data.Cantidad;
  }

  get FechaCreacion(): string {
    return this.data.FechaCreacion;
  }

  get Documents(): ListadoSimple[] {
    return this.data.Listado;
  }
}
