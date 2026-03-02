# Landing Page Insights para Nexin

Este documento tiene el objetivo de aportarte contexto de "marketing y ventas" al momento de diseñar y desarrollar la **Landing Page** de Nexin. Usa estas ideas de narrativa empresarial y de diseño para justificar que es una aplicación del futuro.

## 1. El Pitch de Elevador (Hero Section)

- **Texto de impacto**: "El control total de tu industria, módulo a módulo." / "Nexin: El ERP que evoluciona al ritmo de tu operación."
- **Concepto Visual**: En el _Hero Wrapper_, debes reflejar limpieza, velocidad y control. Un fondo oscuro (dark mode) con líneas neo-brutalistas, gradientes tenues que emulen luces de neón o una malla isométrica de cómo diferentes módulos (o cajas) se conectan.
- **Mensaje clave**: Ya no necesitas comprar un dinosaurio de software monolítico por una fortuna. Elige y escala los micro-módulos que tu negocio demande.

## 2. Los Ejes de Venta (Features Section)

En tu interfaz, podrías resaltar la plataforma bajo **3 grandes pilares** (ideal para tarjetas "Card" con hover effects responsivos):

1. **Arquitectura Desacoplada (Composable ERP)**: "Paga solo por lo que usas. Manufactura, Logística, y Cuentas — piezas independientes encajadas a la perfección por APIs de microsegundos."
2. **Seguridad Central (Zero-Trust)**: "Ninguna acción pasa desapercibida. Con nuestra tecnología Guardian, cada clic en compras o tesorería queda auditado bajo estrictos accesos RBAC (Role-Based Access Control)."
3. **Control en Tiempo Real**: "Desde la rampa de carga hasta el flujo de caja, los datos viajan sin intervención humana. Finanzas tiene los números que logística genera sin cruzar un solo excel."

## 3. Presentando los Módulos (Bento Grid)

Para la landing page moderna, el diseño tipo **Bento Grid** (cajas asimétricas estilo Apple/Vercel) sería ideal para mostrar los 6 sistemas que descubrimos. Podrías asignarle un icono, un micro-color a cada tarjeta y un subtitulo muy de producto tech:

- 🏭 **Factory**: "Diseña tus fórmulas y domina tus listas de materiales (BOMs)."
- 💼 **Vendor**: "El CRM ágil enfocado en convertir cotizaciones en facturación veloz."
- 🛒 **Procurement**: "Flujos de aprobación strictos y relación fluida con proveedores."
- 📦 **Logistics**: "Manejo multi-almacén y tracking de despacho automatizado."
- 💰 **Finance**: "Tesorería, cobros y pagos fusionados en el ledger más confiable del ecosistema."
- 🛡️ **Guardian**: "El escudo perimetral que protege toda la identidad corporativa."

## 4. Estética de la Landing Page y Stack

Dado que la plataforma se orienta a un uso industrial futurista, usaremos tecnologías modernas y coherentes con el resto del ecosistema:

- **Stack Tecnológico**: La Landing Page será construida utilizando **Next.js**. Reemplazaremos Radix por un sistema de diseño propio basado en los lineamientos del **Atlassian Design System**, garantizando estándares enterprise B2B. Incluiremos internacionalización (i18n) con español (default) e inglés.
- **Theme y Colores**: Implementaremos un **Theme Switcher** (Claro/Oscuro), con prioridad absoluta en el **Modo Oscuro**. Un B2B industrial suele apoyarse en **Navy Blue muy oscuro o Carbon Black** como fondos, y acentos funcionales para botones y bordes.
- **Tipografía y Componentes**: Fuente **Lexend**. Construiremos una librería de componentes custom (Glassmorphism, Filled, Outlined) altamente escalable dentro del proyecto.
- **Animaciones**: Movimientos suaves. Usa "Framer Motion" en Next.js para hacer que las tarjetas del Bento Grid aparezcan flotando hacia arriba al hacer scroll (`onViewportEnter`).

## 5. El "Llamado a la Acción" (Call To Action - CTA)

Dado que será implementado como SaaS:

- Principal: "Agendar Demo" o "Explorar el Ecosistema".
- Mensaje final: "_The next generation of manufacturing and business OS._"
