# Reglas de Arquitectura - Proyecto del Equipo "Undefined"

Este archivo sirve como guía de contexto para que el asistente entienda la estructura y los estándares de este proyecto.

## 🏛️ Patrón de Arquitectura: MVC
El proyecto sigue estrictamente el patrón **Modelo-Vista-Controlador**. Al generar código o analizar errores, sigue estas ubicaciones:

- **Models (`src/models`):** Contienen las clases de datos y la lógica de negocio basada en Programación Orientada a Objetos (POO).
- **Views (`src/views` o archivos `.html`):** Interfaces de usuario. El proyecto mantiene dos implementaciones visuales independientes.
- **Controllers (`src/controllers`):** Clases que gestionan la comunicación entre los modelos y las vistas.

## 🛠️ Stack Tecnológico y Compilación
- **Lenguaje:** TypeScript (TS).
- **Salida:** El código se compila a JavaScript (JS) en la carpeta `dist/`.
- **Configuración:** Respetar siempre las reglas definidas en el archivo `tsconfig.json` raíz para la optimización del compilado.
- **Tipado:** Es obligatorio el uso de tipos fuertes y evitar el uso de `any` para mantener la integridad de la arquitectura.

## 📋 Estándares de Codificación
1. **Nomenclatura:**
   - Clases y Modelos: PascalCase (ej: `UsuarioModel.ts`).
   - Métodos y Variables: camelCase (ej: `calcularTotal()`).
   - Interfaces: Empezar con 'I' (ej: `IPaciente.ts`).
2. **Gestión de Vistas (Dualidad HTML/Bootstrap):**
   - El proyecto cuenta con dos implementaciones distintas para presentar los datos: `index-PlainHTML.html` e `index-BootStrap.html`.
   - **Regla estricta de contexto:** Al asistir con el código de la interfaz, el asistente debe identificar qué archivo se está editando y proporcionar sugerencias exclusivas para ese entorno.
   - Si se edita la vista de **HTML Plano**, las sugerencias deben usar únicamente HTML semántico y CSS estándar. Está prohibido inyectar clases de frameworks.
   - Si se edita la vista de **Bootstrap**, las sugerencias deben aprovechar al máximo el sistema de grillas y los componentes utilitarios del framework.
3. **Organización:** No mezclar lógica de control, algoritmos complejos ni persistencia de datos dentro de los archivos de vista.

## 📂 Mapa de Carpetas Principal
- `/src`: Código fuente original en TypeScript.
- `/dist`: Archivos JavaScript optimizados y listos para ejecución.
- `/resources`: Activos externos, imágenes o estilos adicionales.
- `tsconfig.json`: Configuración maestra del compilador.