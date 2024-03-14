export const obtenerDescripcion = (valor: number): string | undefined => {
  switch (valor) {
    case 1:
      return "15 días contra la recepción de la factura";
    case 2:
      return "30 días contra la recepción de la factura";
    case 39:
      return "Otra forma de pago";
    case 46:
      return "50 días contra la recepción de la factura";
    case 47:
      return "60 días contra la recepción de la factura";
    case 48:
      return "A 45 días";
    case 49:
      return "A más de 30 días";
    default:
      return undefined;
  }
};

export const traducirTipoPorAbreviacion = (abreviacion: string): any | null => {
  const datos = [
    {
      Codigo: 1,
      Abreviacion: "OC",
      Descripcion: "Automatica",
    },
    {
      Codigo: 2,
      Abreviacion: "D1",
      Descripcion:
        "Trato directo que genera Orden de Compra por proveedor único",
    },
    {
      Codigo: 3,
      Abreviacion: "C1",
      Descripcion:
        "Trato directo que genera Orden de Compra por emergencia, urgencia e imprevisto",
    },
    {
      Codigo: 4,
      Abreviacion: "F3",
      Descripcion:
        "Trato directo que genera Orden de Compra por confidencialidad",
    },
    {
      Codigo: 5,
      Abreviacion: "G1",
      Descripcion:
        "Trato directo que genera Orden de Compra por naturaleza de negociación",
    },
    {
      Codigo: 6,
      Abreviacion: "R1",
      Descripcion: "Orden de compra menor a 3UTM",
    },
    {
      Codigo: 7,
      Abreviacion: "CA",
      Descripcion: "Orden de compra sin resolución.",
    },
    {
      Codigo: 8,
      Abreviacion: "SE",
      Descripcion: "Sin emisión automática",
    },
    {
      Codigo: 9,
      Abreviacion: "CM",
      Descripcion: "Convenio Marco",
    },
    {
      Codigo: 10,
      Abreviacion: "FG",
      Descripcion: "Trato Directo (Art. 8 letras f y g - Ley 19.886)",
    },
    {
      Codigo: 11,
      Abreviacion: "TL",
      Descripcion: "Convenio Marco U+002d Tienda de Libros (Obsoleto)",
    },
    {
      Codigo: 12,
      Abreviacion: "MC",
      Descripcion: "Microcompra",
    },
    {
      Codigo: 13,
      Abreviacion: "AG",
      Descripcion: "Compra Ágil",
    },
    {
      Codigo: 14,
      Abreviacion: "CC",
      Descripcion: "Compra Coordinada",
    },
  ];

  const resultado = datos.find((objeto) => objeto.Abreviacion === abreviacion);
  return resultado || null;
};

export const descripcionDeEstado = (estado: string | number): string => {
  switch (String(estado)) {
    case "4":
      return "Enviada a Proveedor";
    case "5":
      return "En proceso";
    case "6":
      return "Aceptada";
    case "9":
      return "Cancelada";
    case "12":
      return "Recepción Conforme";
    case "13":
      return "Pendiente de Recepcionar";
    case "14":
      return "Recepcionada Parcialmente";
    case "15":
      return "Recepcion Conforme Incompleta";
    default:
      return "Estado no definido";
  }
};
