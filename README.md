# 53320-Repetir

Este es un archivo README para el repositorio. Aquí puedes describir el propósito del proyecto, cómo instalarlo y cómo usarlo.

## Instalación

Clona este repositorio: `git clone https://github.com/mbrachetta/50268.git`

Luego, instala las dependencias de Node.js entrando a la carpeta del proyecto:

```bash
cd 53320-Repetir
npm install
```

## Instrucciones de Uso

Incorporar aquí las instrucciones detalladas de uso, gráficos explicativos y cualquier otra
información que considere importante para favorecer el testeo y evaluación de su proyecto de
analizador.

### Cómo ejecutar el programa

Una vez en 53320-Repetir puedes ejecutar el analizador directamente corriendo el archivo principal con Node.js:

```bash
node index.js
```

El programa intentará leer el código fuente desde el archivo `input.txt` (o puedes modificar este archivo para probar distintas entradas). Si el archivo no existe o está vacío, puede solicitar entrada por consola.

### Semántica de la Gramática

La gramática `Repetir` implementa una estructura de control de flujo cíclica. Su diseño es el siguiente:

- **Estructura General:** `repetir { [sentencias] } hasta [condicion] ;`
- **Sentencias:** Se admiten operaciones como `imprimir("texto");` para mostrar mensajes por pantalla, o `salir;` para forzar la terminación temprana del programa.
- **Condición:** La evaluación ocurre al final del ciclo y admite los valores lógicos `verdadero` y `falso`. Mientras la condición sea `falso`, el ciclo se repetirá. Al evaluar `verdadero`, la iteración concluye.
- **Comportamiento:** Se asemeja al funcionamiento de un bloque `do-while`, garantizando que el cuerpo de la estructura se ejecute por lo menos una vez antes de comprobar la condición de salida.
