# Resumen de Aplicaciones (El Ecosistema Nexin)

El ERP modular de Nexin está compuesto actualmente por 6 sistemas o monorepos ("aplicaciones") independientes. Cada uno funciona con un Frontend en Next.js y un Backend de alto rendimiento en Elysia.js + Drizzle ORM.

A continuación, la anatomía de cada uno:

---

## 1. Guardian

**El Cerebro de Seguridad y Accesos**
Es el sistema fundacional. Ningún usuario hace nada en el ERP sin que Guardian lo permita.

- **Responsabilidad principal**: Gestión de Identidad, Control de Acceso basado en Roles (RBAC), registro de auditoría (audit logs) y envío de notificaciones.
- **Backend**: Emite y valida tokens, autoriza qué rol puede tocar qué endpoint en los demás sistemas.
- **Frontend**: Panel de control para el administrador del sistema donde se gestionan los usuarios, roles, políticas y alertas.

## 2. Factory

**El Corazón de la Manufactura**
Donde vive la "receta secreta" e información interna de lo que construye la industria.

- **Responsabilidad principal**: Catálogo interno de manufactura (materiales, propiedades físicas), Listas de Materiales (BOM) y rutas de producción.
- **Backend**: API que provee información de componentes internos (solo lectura para la mayoría, escritura para ingenieros de producto).
- **Frontend**: Herramienta para ingenieros de manufactura para definir los atributos de lo que se produce.

## 3. Logistic

**El Músculo Operativo (Stock y Envíos)**
Fusiona el control de inventarios convencionales con el tracking de envíos.

- **Responsabilidad principal**: Mantener el catálogo de productos terminados (SKUs vendibles), controlar los niveles de inventario (Stock OnHand, Reserved), manejar los almacenes (Warehouses), gestionar la disposición logística (Shipments, carriers y tracking) y mapear los items producidos por `Factory` a items comerciales.
- **Backend**: Calcula en tiempo real la disponibilidad de stock, registra eventos logísticos.
- **Frontend**: Dashboard para operarios de almacén y logística; permite ajustes físicos, salidas y reportes de guías de envío.

## 4. Procurement

**El Abastecimiento Eficiente (Compras)**
El sistema que asegura que siempre haya recursos para operar.

- **Responsabilidad principal**: Gestión del ciclo de vida de los proveedores (alta, condiciones comerciales), flujo completo de órdenes de compra (POs), recepciones y captura inicial de la factura del proveedor (AP).
- **Backend**: Control de estados de las PO (draft, approved, received), se interconecta con `Logistic` para sumar stock al recibir mercadería, y alerta a `Finance` para los pagos.
- **Frontend**: Portal para compradores e ingenieros de supply chain para emitir solicitudes y aprobar abastecimientos.

## 5. Vendor

**El Motor Comercial (Ventas)**
El canal de entrada de ingresos para Nexin.

- **Responsabilidad principal**: CRM básico, listado de clientes comerciales, creación de Órdenes de Venta (Sales Orders) con la capacidad de negociar márgenes de precio, y un portal inicial de seguimiento de pagos.
- **Backend**: Transmite las órdenes confirmadas a `Finance` y reserva mercadería a través de `Logistic`.
- **Frontend**: Herramienta en manos de los vendedores (Sales Reps) para armar cotizaciones y cerrar ventas.

## 6. Finance

**La Bóveda de Control y Tesorería**
El ente supremo de toda transacción monetaria dentro del ecosistema.

- **Responsabilidad principal**: Flujos de efectivo, conciliaciones bancarias, Cuentas por Cobrar (AR del módulo `Vendor`), Cuentas por Pagar (AP del módulo `Procurement`) y Contabilidad (GL).
- **Backend**: Procesa la aplicación de los pagos, cruza transferencias bancarias contra órdenes y lleva el balance de situación financiera.
- **Frontend**: Panel de uso exclusivo de los CFOs y Contadores para ver el estado real (aging, cuentas de tesorería) de todo el ecosistema.
