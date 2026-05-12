
# Analizador Sintáctico y Semántico: 53320-Repetir

**Alumno:** Francisco Carrizo (2k2) - **Legajo:** 53320  
**Materia:** Sintaxis y Semántica de los Lenguajes - UTN FRM
<div align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6fhHcnWQWvPnN_how4y2dFYDPIGw9kaVyg&s" alt="UTN FRM" width="150"/>
</div>

---

## Propósito del Proyecto

El proyecto consiste en el uso de la extensión **ANTLR4** para la emulación de un léxico y una sintaxis de un lenguaje inventado. Posteriormente, gracias al paquete de desarrollo de ANTLR, el proyecto extrae la información de los nodos, tokens y lexemas para definir una semántica, funcionando como lo haría un intérprete reducido de dicho lenguaje.
<div align="center">
  <img src="https://avatars.githubusercontent.com/u/80584?v=4" alt="ANTLR" width="100"/>
 </div>

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/FrancarriYT/53320.git
   ```

2. Verifica e instala las dependencias de **Node.js** ingresando a la carpeta del proyecto:

   ```bash
   cd 53320-Repetir
   npm install
   ```

## Instrucciones de Uso

### Cómo ejecutar el programa

Una vez situado en el directorio `53320-Repetir` en tu terminal, puedes ejecutar el analizador directamente corriendo el archivo principal con Node.js:

```bash
node index.js
```

O de manera alternativa, utilizando el script de npm:

```bash
npm start
```

> **Nota:** El programa intentará leer el código fuente desde el archivo `input.txt` (puedes modificar este archivo para probar distintas entradas). Verifica la existencia de este archivo y que contenga las cadenas de prueba correctas.

---

## Semántica de la Gramática

La gramática **`Repetir`** implementa una estructura de control de flujo cíclica. Su diseño es el siguiente:

- **Estructura General:**
  `repetir { [sentencias] } hasta [condicion] ;`
- **Sentencias:** Se admiten operaciones como `imprimir("texto");` para mostrar mensajes por pantalla, o `salir;` para forzar la terminación temprana del programa.
- **Condición:** La evaluación ocurre al final del ciclo y admite los valores lógicos `verdadero` y `falso`. Mientras la condición sea `falso`, el ciclo se repetirá. Al evaluar `verdadero`, la iteración concluye.
- **Comportamiento:** Se asemeja al funcionamiento de un bloque `do-while` tradicional, garantizando que el cuerpo de la estructura se ejecute por lo menos una vez antes de comprobar la condición de salida.
