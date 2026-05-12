// Generated from c:\\Users\\Sergio\\Desktop\\Fran\\UTN\\2026 Semestre 1\\Sintaxis y Semántica\\Analizador Sintactico\\Analizador Sintactico Fran\\53320-Repetir\\Repetir.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link RepetirParser}.
 */
public interface RepetirListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link RepetirParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(RepetirParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link RepetirParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(RepetirParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by the {@code inst}
	 * labeled alternative in {@link RepetirParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInst(RepetirParser.InstContext ctx);
	/**
	 * Exit a parse tree produced by the {@code inst}
	 * labeled alternative in {@link RepetirParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInst(RepetirParser.InstContext ctx);
	/**
	 * Enter a parse tree produced by the {@code repe}
	 * labeled alternative in {@link RepetirParser#repeticion}.
	 * @param ctx the parse tree
	 */
	void enterRepe(RepetirParser.RepeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code repe}
	 * labeled alternative in {@link RepetirParser#repeticion}.
	 * @param ctx the parse tree
	 */
	void exitRepe(RepetirParser.RepeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code itera}
	 * labeled alternative in {@link RepetirParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterItera(RepetirParser.IteraContext ctx);
	/**
	 * Exit a parse tree produced by the {@code itera}
	 * labeled alternative in {@link RepetirParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitItera(RepetirParser.IteraContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sentenc}
	 * labeled alternative in {@link RepetirParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentenc(RepetirParser.SentencContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sentenc}
	 * labeled alternative in {@link RepetirParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentenc(RepetirParser.SentencContext ctx);
	/**
	 * Enter a parse tree produced by the {@code salid}
	 * labeled alternative in {@link RepetirParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalid(RepetirParser.SalidContext ctx);
	/**
	 * Exit a parse tree produced by the {@code salid}
	 * labeled alternative in {@link RepetirParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalid(RepetirParser.SalidContext ctx);
	/**
	 * Enter a parse tree produced by {@link RepetirParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(RepetirParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link RepetirParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(RepetirParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link RepetirParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(RepetirParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link RepetirParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(RepetirParser.CondicionContext ctx);
	/**
	 * Enter a parse tree produced by {@link RepetirParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(RepetirParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link RepetirParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(RepetirParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link RepetirParser#caracter}.
	 * @param ctx the parse tree
	 */
	void enterCaracter(RepetirParser.CaracterContext ctx);
	/**
	 * Exit a parse tree produced by {@link RepetirParser#caracter}.
	 * @param ctx the parse tree
	 */
	void exitCaracter(RepetirParser.CaracterContext ctx);
}