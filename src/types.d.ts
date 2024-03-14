type ListadoSimple = {
  Codigo: string;
  Nombre: string;
  CodigoEstado: number;
};

type Fechas = {
  FechaCreacion: string;
  FechaEnvio: string;
  FechaAceptacion: string;
  FechaCancelacion: string | null;
  FechaUltimaModificacion: string;
};

type Comprador = {
  CodigoOrganismo: string;
  NombreOrganismo: string;
  RutUnidad: string;
  CodigoUnidad: string;
  NombreUnidad: string;
  Actividad: string;
  DireccionUnidad: string;
  ComunaUnidad: string;
  RegionUnidad: string;
  Pais: string;
  NombreContacto: string;
  CargoContacto: string;
  FonoContacto: string;
  MailContacto: string;
};

type Proveedor = {
  Codigo: string;
  Nombre: string;
  Actividad: string;
  CodigoSucursal: string;
  NombreSucursal: string;
  RutSucursal: string;
  Direccion: string;
  Comuna: string;
  Region: string;
  Pais: string;
  NombreContacto: string;
  CargoContacto: string;
  FonoContacto: string;
  MailContacto: string;
};

type ListadoItem = {
  Correlativo: number;
  CodigoCategoria: number;
  Categoria: string;
  CodigoProducto: number;
  Producto: string;
  EspecificacionComprador: string;
  EspecificacionProveedor: string | null;
  Cantidad: number;
  Unidad: string | null;
  Moneda: string;
  PrecioNeto: number;
  TotalCargos: number;
  TotalDescuentos: number;
  TotalImpuestos: number;
  Total: number;
};

type Items = {
  Cantidad: number;
  Listado: ListadoItem[];
};

type Listado = {
  Codigo: string;
  Nombre: string;
  CodigoEstado: number;
  Estado: string;
  CodigoLicitacion: string;
  Descripcion: string;
  CodigoTipo: string;
  Tipo: string;
  TipoMoneda: string;
  CodigoEstadoProveedor: number;
  EstadoProveedor: string;
  Fechas: Fechas;
  TieneItems: string;
  PromedioCalificacion: number;
  CantidadEvaluacion: number;
  Descuentos: number;
  Cargos: number;
  TotalNeto: number;
  PorcentajeIva: number;
  Impuestos: number;
  Total: number;
  Financiamiento: string;
  Pais: string;
  TipoDespacho: string;
  FormaPago: string;
  Comprador: Comprador;
  Proveedor: Proveedor;
  Items: Items;
};

export type OC = {
  Cantidad: number;
  FechaCreacion: string;
  Version: string;
  Listado: Listado[];
};

export type ResultadoCompradorProveedor = {
  CodigoEmpresa: string;
  NombreEmpresa: string;
};

export type Formato = "json" | "jsonp" | "xml";

export type Tipo = "licitaciones" | "ordenesdecompra";

export type EstadoLicitacion =
  | "activas"
  | "publicada"
  | "cerrada"
  | "desierta"
  | "adjudicada"
  | "revocada"
  | "suspendida"
  | "todos";

export type EstadoOrdenDeCompra =
  | "enviadaproveedor"
  | "aceptada"
  | "cancelada"
  | "recepcionconforme"
  | "pendienterecepcion"
  | "recepcionaceptada"
  | "recepcionaceptadacialmente"
  | "recepecionconformeincompleta"
  | "todos";
