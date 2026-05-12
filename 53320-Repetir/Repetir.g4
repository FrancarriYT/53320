grammar Repetir;
// No modifico esto para no problemas 

prog: instruccion+;

instruccion: repeticion # inst;
repeticion:
	'repetir' '{' (sentencia)+ '}' 'hasta' (condicion) ';' # repe;
sentencia: (salida)+ # itera | terminar # sentenc;
salida: 'imprimir' '(' cadena ')' ';' # salid;

// | expr NEWLINE? # printExpr | ID EQ expr NEWLINE? # assign | NEWLINE # blank;

//Lexemas
LETRA: [a-zA-Z];
DIGITO: [0-9];
SIMBOLO: '.' | ',' | '!' | '?' | ':' | ';';
terminar: 'salir' ';';
condicion: 'verdadero' | 'falso';
cadena: '"' (caracter)+ '"';
caracter: LETRA | DIGITO | SIMBOLO;

NEWLINE: '\r'? '\n' -> skip;
WS: [ \t]+ -> skip;
