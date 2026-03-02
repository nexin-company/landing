# Mapa de Interconexión Nexin

El diseño desacoplado de Nexin requiere que sus módulos se comuniquen mediante APIs (y eventualmente colas de mensajes) para automatizar el negocio y evitar la doble captura manual.

A continuación, un diagrama que ilustra de manera conceptual cómo se comunican estos 6 sistemas:

```mermaid
flowchart TD
    %% Estilos de los nodos
    classDef core fill:#2d3436,stroke:#74b9ff,stroke-width:2px,color:#fff;
    classDef sales fill:#6c5ce7,stroke:#a29bfe,stroke-width:2px,color:#fff;
    classDef supply fill:#00b894,stroke:#55efc4,stroke-width:2px,color:#fff;
    classDef money fill:#e17055,stroke:#fab1a0,stroke-width:2px,color:#fff;

    %% Nodos (Aplicaciones)
    Guardian["🛡️ Guardian\n(Auth, RBAC, Auditoría)"]:::core
    Factory["🏭 Factory\n(Manufactura, BOM, Specs)"]:::supply
    Logistic["📦 Logistic\n(Stock, Warehouses, Shipments)"]:::supply
    Procurement["🛒 Procurement\n(Compras, Proveedores, PO)"]:::supply
    Vendor["💼 Vendor\n(Ventas, CRM, Pedidos)"]:::sales
    Finance["💰 Finance\n(Tesorería, AR, AP, Bancos)"]:::money

    %% Relaciones Guardian (Orquestador Transversal)
    Guardian -.->|Valida tokens/Roles\nGuarda logs| Factory
    Guardian -.->|Valida tokens/Roles\nGuarda logs| Logistic
    Guardian -.->|Flujos de Aprobación| Procurement
    Guardian -.->|Valida tokens/Roles\nGuarda logs| Vendor
    Guardian -.->|Valida tokens/Roles\nGuarda logs| Finance

    %% Relaciones de Flujo de Negocio
    Factory -->|Provee Catálogo Interno\npara Mapeo Comercial| Logistic

    Vendor -->|Reserva Stock\nConsulta Shipments| Logistic
    Vendor -->|Publica Ordenes para\nCuentas por Cobrar (AR)| Finance

    Procurement -->|Registra Recepción\npara sumar Stock OnHand| Logistic
    Procurement -->|Envía Facturas a Pagar\n(AP)| Finance

    Logistic -->|Actualiza Disponibilidad| Vendor
```

## Flujos de Trabajo Principales (Ejemplos Reales)

### Flujo 1: Venta y Despacho ("Order-to-Cash")

1. Un cliente es registrado por ventas en **Vendor**.
2. **Vendor** crea una Orden de Venta y consulta a **Logistic** vía API para saber si hay _Stock Disponible_.
3. Si la venta se aprueba, **Vendor** pide a **Logistic** reservar el stock y notifica a **Finance** que ahora hay una cuenta por cobrar (AR).
4. El almacén recibe la orden logística en su portal de **Logistic** y hace el despacho (Shipment).
5. El cliente deposita, y Tesorería ingresa en **Finance** el pago bancario, liberando el estado contable de la orden en todo el ecosistema.

### Flujo 2: Manufactura y Abastecimiento ("Procure-to-Pay")

1. **Factory** determina que el Producto X requiere Materia Prima Y.
2. Compras nota un déficit de "Y" y crea una Orden de Compra (PO) en **Procurement**.
3. **Guardian** valida que el comprador tiene el rol adecuado e inicia un flujo de aprobación.
4. El proveedor entrega "Y". Almacén recibe en la rampa virtual de **Procurement/Logistic** y **Logistic** suma eso como nuevo Stock Físico (+).
5. Se recibe la factura fiscal. **Procurement** la manda a **Finance** como Cuenta por Pagar (AP), donde un director financiero aprueba la liberación de los fondos al banco.
