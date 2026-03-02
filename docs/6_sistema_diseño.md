# Sistema de Diseño y Componentes (Nexin UI)

Para garantizar la consistencia visual y la fácil escalabilidad hacia las demás aplicaciones del ecosistema Nexin, la _Landing Page_ funcionará como el "Nodo Cero" del sistema de diseño.

A partir de este proyecto se creará una librería de componentes de interfaz (UI) fuertemente inspirada en los principios del **Atlassian Design System**, pensados para software corporativo B2B complejo.

## 1. Arquitectura de Archivos

Todo el sistema de diseño habitará en el directorio `src/theme`. Los componentes se guardarán en `src/theme/components`. Esto permite que en el futuro este directorio pueda ser extraído como un paquete NPM (ej: `@nexin-ui/core`).

## 2. Configuración de Temas (Theme Switcher)

El sistema debe soportar **Dark Mode** y **Light Mode**, con el modo oscuro como la experiencia principal (por defecto visual si aplica, aunque el explorador del usuario dicta la base general).

### Paleta de Colores Base

Se deben definir variables de diseño para los siguientes propósitos:

- **Fondos (Backgrounds)**: Diferenciados para Light y Dark mode (ej. `bg-background` y `bg-surface`).
- **Accent Color y Secundario**: El color principal de Nexin y su color de apoyo.
- **Acciones (Semantic Colors)**:
  - `success` (Verde atlassian)
  - `warning` (Naranja/Amarillo)
  - `error` (Rojo intenso)
  - `info` (Azul corporativo)
  - `muted / disabled` (Grises neutralizados para estados inactivos)

## 3. Variantes Universales

Todos los componentes visuales interactivos (ej. botones, tarjetas, badges) contarán idealmente con 3 variantes estéticas base de donde heredar:

1. **Filled**: Color sólido, ideal para acciones primarias.
2. **Outlined**: Fondo transparente con borde visible, para acciones secundarias.
3. **Glass**: Efecto _Glassmorphism_ (Backdrop blur + borde semi-transparente + fondo translúcido), perfecto para elementos "flotantes" sobre fondos complejos y darle el toque "futurista" de modo comando.

## 4. Sistema de Tallas (Sizing)

Los componentes que manipulan texto y estructura (como Buttons, Text, Headings, Inputs) estandarizarán sus tamaños bajo el modelo T-Shirt con **5 variantes restrictivas**:

- `xs` (Extra Pequeño - Ideal para badges y data-tables densas).
- `sm` (Pequeño).
- `md` (Mediano - Default).
- `lg` (Grande - Ideal para la Landing Page).
- `xl` (Extra Grande - Títulos de Hero, CTAs importantes).

## 5. Reglas Estrictas para Botones (`Button`)

Para asegurar la accesibilidad y un look corporativo técnico moderno:

- **Iconos Obligatorios**: Todos los botones deben poder recibir (y por defecto mostrar cuando aplique) un icono al inicio de la acción.
- **Tipografía**: La tipografía de los botones será la global de Nexin (**Lexend**), en un peso medium o semi-bold para legibilidad.

## 6. Iconografía (Lucide React)

El proveedor de iconos oficial será **Lucide React**, debido a su versatilidad, peso ligero y diseño neutro/limpio (muy alineado con Atlassian/empresarial).

- El sistema utilizará por defecto **iconos Outlined / Lineales** a `1.5px` o `2px` de grosor para mantener una apariencia limpia y analítica.
- Para alertas o estados modales se podrá considerar variantes filled, pero la UI de controles y botones priorizará siempre los trazos limpios de línea.

## 7. Multi-idioma (i18n)

La arquitectura de la aplicación debe soportar diccionarios de traducción. Se requiere soporte inicial para **Español (default)** e **Inglés**. Las cadenas de texto de contenido no deben estar quemadas (hardcoded) directamente en las vistas, se utilizarán diccionarios de la propia librería implementada (ej. `next-intl`).
