// Generated from Repetir.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import RepetirListener from './RepetirListener.js';
import RepetirVisitor from './RepetirVisitor.js';

const serializedATN = [4,1,17,67,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,1,2,
1,2,1,2,4,2,29,8,2,11,2,12,2,30,1,2,1,2,1,2,1,2,1,2,1,3,4,3,39,8,3,11,3,
12,3,40,1,3,3,3,44,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,1,
7,4,7,59,8,7,11,7,12,7,60,1,7,1,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,
0,2,1,0,10,11,1,0,13,15,62,0,19,1,0,0,0,2,23,1,0,0,0,4,25,1,0,0,0,6,43,1,
0,0,0,8,45,1,0,0,0,10,51,1,0,0,0,12,54,1,0,0,0,14,56,1,0,0,0,16,64,1,0,0,
0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,
22,1,1,0,0,0,23,24,3,4,2,0,24,3,1,0,0,0,25,26,5,1,0,0,26,28,5,2,0,0,27,29,
3,6,3,0,28,27,1,0,0,0,29,30,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,32,1,
0,0,0,32,33,5,3,0,0,33,34,5,4,0,0,34,35,3,12,6,0,35,36,5,5,0,0,36,5,1,0,
0,0,37,39,3,8,4,0,38,37,1,0,0,0,39,40,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,
0,41,44,1,0,0,0,42,44,3,10,5,0,43,38,1,0,0,0,43,42,1,0,0,0,44,7,1,0,0,0,
45,46,5,6,0,0,46,47,5,7,0,0,47,48,3,14,7,0,48,49,5,8,0,0,49,50,5,5,0,0,50,
9,1,0,0,0,51,52,5,9,0,0,52,53,5,5,0,0,53,11,1,0,0,0,54,55,7,0,0,0,55,13,
1,0,0,0,56,58,5,12,0,0,57,59,3,16,8,0,58,57,1,0,0,0,59,60,1,0,0,0,60,58,
1,0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,63,5,12,0,0,63,15,1,0,0,0,64,65,7,
1,0,0,65,17,1,0,0,0,5,21,30,40,43,60];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RepetirParser extends antlr4.Parser {

    static grammarFileName = "Repetir.g4";
    static literalNames = [ null, "'repetir'", "'{'", "'}'", "'hasta'", 
                            "';'", "'imprimir'", "'('", "')'", "'salir'", 
                            "'verdadero'", "'falso'", "'\"'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "LETRA", "DIGITO", 
                             "SIMBOLO", "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "instruccion", "repeticion", "sentencia", 
                         "salida", "terminar", "condicion", "cadena", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RepetirParser.ruleNames;
        this.literalNames = RepetirParser.literalNames;
        this.symbolicNames = RepetirParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RepetirParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.instruccion();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RepetirParser.RULE_instruccion);
	    try {
	        localctx = new InstContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.repeticion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeticion() {
	    let localctx = new RepeticionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RepetirParser.RULE_repeticion);
	    var _la = 0;
	    try {
	        localctx = new RepeContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(RepetirParser.T__0);
	        this.state = 26;
	        this.match(RepetirParser.T__1);
	        this.state = 28; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 27;
	            this.sentencia();
	            this.state = 30; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6 || _la===9);
	        this.state = 32;
	        this.match(RepetirParser.T__2);
	        this.state = 33;
	        this.match(RepetirParser.T__3);

	        this.state = 34;
	        this.condicion();
	        this.state = 35;
	        this.match(RepetirParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RepetirParser.RULE_sentencia);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            localctx = new IteraContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 37;
	            		this.salida();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 40; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 9:
	            localctx = new SentencContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RepetirParser.RULE_salida);
	    try {
	        localctx = new SalidContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(RepetirParser.T__5);
	        this.state = 46;
	        this.match(RepetirParser.T__6);
	        this.state = 47;
	        this.cadena();
	        this.state = 48;
	        this.match(RepetirParser.T__7);
	        this.state = 49;
	        this.match(RepetirParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RepetirParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(RepetirParser.T__8);
	        this.state = 52;
	        this.match(RepetirParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RepetirParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RepetirParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(RepetirParser.T__11);
	        this.state = 58; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 57;
	            this.caracter();
	            this.state = 60; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0));
	        this.state = 62;
	        this.match(RepetirParser.T__11);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RepetirParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RepetirParser.EOF = antlr4.Token.EOF;
RepetirParser.T__0 = 1;
RepetirParser.T__1 = 2;
RepetirParser.T__2 = 3;
RepetirParser.T__3 = 4;
RepetirParser.T__4 = 5;
RepetirParser.T__5 = 6;
RepetirParser.T__6 = 7;
RepetirParser.T__7 = 8;
RepetirParser.T__8 = 9;
RepetirParser.T__9 = 10;
RepetirParser.T__10 = 11;
RepetirParser.T__11 = 12;
RepetirParser.LETRA = 13;
RepetirParser.DIGITO = 14;
RepetirParser.SIMBOLO = 15;
RepetirParser.NEWLINE = 16;
RepetirParser.WS = 17;

RepetirParser.RULE_prog = 0;
RepetirParser.RULE_instruccion = 1;
RepetirParser.RULE_repeticion = 2;
RepetirParser.RULE_sentencia = 3;
RepetirParser.RULE_salida = 4;
RepetirParser.RULE_terminar = 5;
RepetirParser.RULE_condicion = 6;
RepetirParser.RULE_cadena = 7;
RepetirParser.RULE_caracter = 8;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepetirParser.RULE_prog;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepetirVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepetirParser.RULE_instruccion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class InstContext extends InstruccionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	repeticion() {
	    return this.getTypedRuleContext(RepeticionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.enterInst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.exitInst(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepetirVisitor ) {
	        return visitor.visitInst(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RepetirParser.InstContext = InstContext;

class RepeticionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepetirParser.RULE_repeticion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RepeContext extends RepeticionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.enterRepe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.exitRepe(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepetirVisitor ) {
	        return visitor.visitRepe(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RepetirParser.RepeContext = RepeContext;

class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepetirParser.RULE_sentencia;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IteraContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.enterItera(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.exitItera(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepetirVisitor ) {
	        return visitor.visitItera(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RepetirParser.IteraContext = IteraContext;

class SentencContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.enterSentenc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.exitSentenc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepetirVisitor ) {
	        return visitor.visitSentenc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RepetirParser.SentencContext = SentencContext;

class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepetirParser.RULE_salida;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SalidContext extends SalidaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.enterSalid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.exitSalid(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepetirVisitor ) {
	        return visitor.visitSalid(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RepetirParser.SalidContext = SalidContext;

class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepetirParser.RULE_terminar;
    }


	enterRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepetirVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepetirParser.RULE_condicion;
    }


	enterRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepetirVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepetirParser.RULE_cadena;
    }

	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepetirVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepetirParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(RepetirParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(RepetirParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(RepetirParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepetirListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RepetirVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RepetirParser.ProgContext = ProgContext; 
RepetirParser.InstruccionContext = InstruccionContext; 
RepetirParser.RepeticionContext = RepeticionContext; 
RepetirParser.SentenciaContext = SentenciaContext; 
RepetirParser.SalidaContext = SalidaContext; 
RepetirParser.TerminarContext = TerminarContext; 
RepetirParser.CondicionContext = CondicionContext; 
RepetirParser.CadenaContext = CadenaContext; 
RepetirParser.CaracterContext = CaracterContext; 
