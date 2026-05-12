import RepetirVisitor from "./generated/RepetirVisitor.js";

export default class CustomVisitor extends RepetirVisitor {

  constructor() {
    super();
    this.terminated = false;
  }

  visitProg(ctx) {

    for (const instruccion of ctx.instruccion()) {

      if (this.terminated) {
        break;
      }

      this.visit(instruccion);
    }
  }

  visitInst(ctx) {
    return this.visit(ctx.repeticion());
  }

  visitRepe(ctx) {

    const condicion = ctx.condicion().getText();

    do {

      for (const sentencia of ctx.sentencia()) {

        if (this.terminated) {
          return;
        }

        this.visit(sentencia);
      }

    } while (condicion === "falso");
  }

  visitItera(ctx) {
    return this.visit(ctx.salida());
  }

  visitSentenc(ctx) {

    console.log("Programa terminado.");

    this.terminated = true;
  }

  visitSalid(ctx) {

    let texto = ctx.cadena().getText();

    // eliminar comillas
    texto = texto.slice(1, -1);

    console.log(texto);
  }
}