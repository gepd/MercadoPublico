SDK para el uso de la API de Mercado Público con Javascript

## Orden de Compras

### Ejemplo

```ts
import { MercadoPublico } from "MercadoPublico";

const mp = new MercadoPublico("ticket");

// BUSCAR ORDEN DE COMPRA POR ID

const resultado = await mp.ordendecompra.buscarCodigo("id");
```

### Los métodos disponibles son:

- buscarCodigo(codigo: string)
- buscarHoy()
- buscarFecha(fecha: string)
- buscarEstado(estado: EstadoOrdenDeCompra)
- buscarOrganizmoFecha(codigoOrganismo: string, fecha: string)
- buscarProveedorFecha(codigoProveedor: string, fecha: string)

## Licitación

### Ejemplo

```ts
import { MercadoPublico } from "MercadoPublico";

const mp = new MercadoPublico("ticket");

// BUSCAR LICITACIÓN POR ID

const resultado = await mp.licitacion.buscarCodigo("id");
```

### Los métodos disponibles son:

- buscarCodigo(codigo: string)
- buscarHoy()
- buscarFecha(fecha: string)
- buscarEstado(estado: EstadoLicitacion)
- buscarOrganizmoFecha(codigoOrganismo: string, fecha: string)
- buscarProveedorFecha(codigoProveedor: string, fecha: string)

## Buscar Comprador

Este método devuelve un listado con todos los compradores o instituciones públicas

### Ejemplo

```ts
import { MercadoPublico } from "MercadoPublico";

const mp = new MercadoPublico("ticket");

// LISTADO DE COMPRADORES O INSTITUCIONES PÚBLICAS

const resultado = await mp.listarComprador();
```

## Buscar Proveedor

Este método devuelve un listado con todos los proveedores

### Ejemplo

```ts
import { MercadoPublico } from "MercadoPublico";

const mp = new MercadoPublico("ticket");

// LISTADO DE PROVEEDORES

const resultado = await mp.buscarProveedor(rutempresaproveedor: string);

```

## Más información

Puedes encontrar más información sonbre la API de Mercado Público en: [https://api.mercadopublico.cl/](https://api.mercadopublico.cl/)

## Ticket

Ingresar al siguiente formulario para obtener un ticket y realizar peticiones reales

[https://api.mercadopublico.cl/modules/Participa.aspx](https://api.mercadopublico.cl/modules/Participa.aspx)

## Licencia

Este proyecto está liberado bajo la licencia MIT, quiere decir que puedes hacer lo que quieras (incluso comercialmente)
