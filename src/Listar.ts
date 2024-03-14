import { EstadoLicitacion, EstadoOrdenDeCompra, Formato, Tipo } from "./types";

export class Listar {
  static baseUrl = "https://api.mercadopublico.cl";
  static path = "servicios/v1/publico";

  constructor(
    private ticket: string,
    private tipo: Tipo,
    private formato: Formato = "json"
  ) {}

  static async makeRequest(endpoint: string) {
    const response = await fetch(endpoint);
    return response.json();
  }

  static getEnpoint(
    ticket: string,
    baseUrl: string,
    path: string,
    query: Record<string, string> = {}
  ) {
    const url = new URL(baseUrl);
    url.pathname = path;
    url.search = new URLSearchParams({
      ticket,
      ...query,
    }).toString();

    return url.href;
  }

  codigo(codigo: string) {
    const path = `${Listar.path}/${this.tipo}.${this.formato}`;
    const query = { codigo };
    const endpoint = Listar.getEnpoint(
      this.ticket,
      Listar.baseUrl,
      path,
      query
    );
    return Listar.makeRequest(endpoint);
  }

  todoEstadoDiaActual() {
    const path = `${Listar.path}/${this.tipo}.${this.formato}`;
    const endpoint = Listar.getEnpoint(this.ticket, Listar.baseUrl, path);

    return Listar.makeRequest(endpoint);
  }

  todoFecha(fecha: string) {
    const path = `${Listar.path}/${this.tipo}.${this.formato}`;
    const query = { fecha };
    const endpoint = Listar.getEnpoint(
      this.ticket,
      Listar.baseUrl,
      path,
      query
    );

    return Listar.makeRequest(endpoint);
  }
  todoEstado(estado: EstadoLicitacion | EstadoOrdenDeCompra) {
    const path = `${Listar.path}/${this.tipo}.${this.formato}`;
    const query = { estado };
    const endpoint = Listar.getEnpoint(
      this.ticket,
      Listar.baseUrl,
      path,
      query
    );

    return Listar.makeRequest(endpoint);
  }
  organismoFecha(codigoOrganismo: string, fecha: string) {
    const path = `${Listar.path}/${this.tipo}.${this.formato}`;
    const query = { codigoOrganismo, fecha };
    const endpoint = Listar.getEnpoint(
      this.ticket,
      Listar.baseUrl,
      path,
      query
    );

    return Listar.makeRequest(endpoint);
  }

  proveedorFecha(codigoProveedor: string, fecha: string) {
    const path = `${Listar.path}/${this.tipo}.${this.formato}`;
    const query = { codigoProveedor, fecha };
    const endpoint = Listar.getEnpoint(
      this.ticket,
      Listar.baseUrl,
      path,
      query
    );

    return Listar.makeRequest(endpoint);
  }
}
