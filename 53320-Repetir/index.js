import RepetirLexer from "./generated/RepetirLexer.js";
import RepetirParser from "./generated/RepetirParser.js";

import CustomVisitor from "./CustomRepetirVisitor.js";

import antlr4, {
    CharStreams,
    CommonTokenStream
} from "antlr4";

import readline from "readline";
import fs from "fs";

async function main() {

    let input;

    // Intentar leer input.txt
    try {

        input = fs.readFileSync("input.txt", "utf8");

    } catch (err) {

        // Si no existe input.txt, pedir entrada manual
        input = await leerCadena();

        console.log("\nEntrada recibida:");
        console.log(input);
    }

    console.log("\n===== CODIGO FUENTE =====\n");
    console.log(input);

    // Crear flujo de caracteres
    const inputStream = CharStreams.fromString(input);
    const lexer = new RepetirLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    tokenStream.fill();

    // TABLA DE TOKENS


    console.log("\n===== TABLA DE TOKENS =====\n");

    tokenStream.tokens.forEach(token => {

        if (token.type !== -1) {

            const tokenName =
                RepetirLexer.symbolicNames[token.type] || token.text;

            console.log(
                `Lexema: ${token.text} -> Token: ${tokenName}`
            );
        }
    });

    // Reiniciar lexer
    lexer.reset();

    // Crear parser
    const parser = new RepetirParser(tokenStream);

    // Construir árbol
    parser.buildParseTrees = true;

    const tree = parser.prog();

    // ANALISIS SINTACTICO


    console.log("\n===== ANALISIS SINTACTICO =====\n");

    if (parser._syntaxErrors > 0) {

        console.error(
            "Se encontraron errores sintácticos."
        );

    } else {

        console.log("Entrada válida.");


        // ARBOL SINTACTICO


        console.log("\n===== ARBOL SINTACTICO =====\n");

        const arbol = tree.toStringTree(parser.ruleNames);

        console.log(arbol);


        // INTERPRETACION


        console.log("\n===== INTERPRETACION =====\n");

        const visitor = new CustomVisitor();

        visitor.visit(tree);
    }
}

// Lectura manual por consola
function leerCadena() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {

        rl.question(
            "Ingrese una cadena: ",
            (answer) => {

                rl.close();

                resolve(answer);
            }
        );
    });
}

// Ejecutar programa
main();