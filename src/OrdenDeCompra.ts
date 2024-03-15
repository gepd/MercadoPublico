import { Listar } from "./Listar";
import { MultipleDocument } from "./MultipleDocument";
import { SingleDocument } from "./SingleDocument";
import { EstadoOrdenDeCompra, Formato } from "../types";

export class OrdenDeCompra {
  private request: Listar;

  constructor(ticket: string, formato: Formato = "json") {
    this.request = new Listar(ticket, "ordenesdecompra", formato);
  }

  async buscarCodigo(codigo: string) {
    const request = await this.request.codigo(codigo);
    return new SingleDocument(request);
  }
  async buscarHoy() {
    const request = await this.request.todoEstadoDiaActual();

    return new MultipleDocument(request);
  }

  async buscarFecha(fecha: string) {
    const request = await this.request.todoFecha(fecha);

    return new MultipleDocument(request);
  }

  async buscarEstado(estado: EstadoOrdenDeCompra) {
    const request = await this.request.todoEstado(estado);

    return new MultipleDocument(request);
  }

  async buscarOrganizmoFecha(codigoOrganismo: string, fecha: string) {
    const request = await this.request.organismoFecha(codigoOrganismo, fecha);

    return new MultipleDocument(request);
  }

  async buscarProveedorFecha(codigoProveedor: string, fecha: string) {
    const request = await this.request.proveedorFecha(codigoProveedor, fecha);

    return new MultipleDocument(request);
  }
}
