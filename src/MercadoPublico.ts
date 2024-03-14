import { Licitacion } from "./Licitacion";
import { Listar } from "./Listar";
import { OrdenDeCompra } from "./OrdenDeCompra";
import { Formato, ResultadoCompradorProveedor } from "./types";

export class MercadoPublico {
  licitacion: Licitacion;
  ordendecompra: OrdenDeCompra;

  constructor(protected ticket: string, protected format: Formato = "json") {
    this.licitacion = new Licitacion(ticket, format);
    this.ordendecompra = new OrdenDeCompra(ticket, format);
  }

  async listarComprador(): Promise<ResultadoCompradorProveedor[]> {
    const path = `${Listar.path}/Empresas/BuscarComprador`;
    const query = {};
    const endpoint = Listar.getEnpoint(
      this.ticket,
      Listar.baseUrl,
      path,
      query
    );

    const request = await Listar.makeRequest(endpoint);

    return request.listaEmpresas;
  }

  async buscarProveedor(
    rutempresaproveedor: string
  ): Promise<ResultadoCompradorProveedor> {
    const regex = /(?=.*[.].*)(?=.*[-].*)/;

    if (!regex.test(rutempresaproveedor)) {
      throw new Error("RUT_WRONG_FORMAT");
    }

    const path = `${Listar.path}/Empresas/BuscarProveedor`;
    const query = { rutempresaproveedor };
    const endpoint = Listar.getEnpoint(
      this.ticket,
      Listar.baseUrl,
      path,
      query
    );

    const request = await Listar.makeRequest(endpoint);

    return request.listaEmpresas[0];
  }
}
