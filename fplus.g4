grammar fplus;

// Lexer rules
COMMENT : ('--' ~[\r\n]*) -> skip;
MLCOMMENT : '--[[' .*? ']]--' -> skip;
STRING : ( '\'' ( ~'\'' | '\\' . )* '\'' | '"' ( ~'"' | '\\' . )* '"' );
INTEGER : '-'? [0-9]+;
FLOAT : '-'? [0-9]* '.' [0-9]+;
BOOLEAN : 'true' | 'false';
PRINT : 'print';
FUNCTION : 'function';
LOADSTRING : 'loadstring';
END : 'end';
IF : 'if';
THEN : 'then';
ELSE : 'else';
ELSEIF : 'elseif';
WHILE : 'while';
DO : 'do';
LOCAL : 'local';
LET : 'let';
LPAREN : '(';
RPAREN : ')';
LBRACE : '{';
RBRACE : '}';
LSQUARE : '[';
RSQUARE : ']';
DOT : '.';
COLON : ':';
COMMA : ',';
SEMICOLON : ';' -> skip;
ID : [a-zA-Z_] [a-zA-Z0-9_]*;
INLINE_JS_EXPR : '%' '[' .*? ']' '%';
JAVASCRIPT_EMBED : '%' '{' .*? '}' '%';
WS : [ \t\r\n]+ -> skip;

// Parser rules
program : statement* EOF;
statement : printExpr
          | functionDeclaration
          | anonymousFunctionDeclaration
          | objectDeclaration
          | variableDeclaration
          | localVariableDeclaration
          | expr
          | ifStatement
          | whileStatement;
printExpr : PRINT LPAREN exprList? RPAREN;
functionDeclaration : LOCAL? FUNCTION ID LPAREN params? RPAREN statement* END;
//localFunctionDeclaration : functionDeclaration;
anonymousFunctionDeclaration : FUNCTION LPAREN params? RPAREN statement* END;
params : ID (COMMA ID)*;
objectDeclaration : LBRACE (keyValuePair (COMMA keyValuePair)*)? RBRACE;
variableDeclaration : ID '=' expr;
localVariableDeclaration : LOCAL ID '=' expr;
keyValuePair : (ID) '=' expr;
exprList : expr (COMMA expr)*;
expr : STRING 
     | INTEGER
     | FLOAT 
     | BOOLEAN
     | expr ('*' | '/' | '+' | '-' | '^') expr
     | loadstring
     | arrayExpr
     | objectExpr
     | functionCall
     | objectAccess
     | arrayAccess
     | variableAccess
     | parens
     | inlineJsExpr
     | javaScriptEmbed;
functionCall : ID | anonymousFunctionDeclaration | loadstring LPAREN exprList? RPAREN;
objectAccess : ID | objectDeclaration (DOT ID | LSQUARE expr RSQUARE);
arrayAccess : ID | arrayExpr LSQUARE INTEGER RSQUARE;
variableAccess : ID;
parens : LPAREN expr RPAREN;
loadstring : LOADSTRING LPAREN expr RPAREN;
arrayExpr : LBRACE exprList? RBRACE;
objectExpr : LBRACE (keyValuePair (COMMA keyValuePair)*)? RBRACE;
inlineJsExpr : INLINE_JS_EXPR;
javaScriptEmbed : JAVASCRIPT_EMBED;
ifStatement : IF expr THEN statement* END? (elseIfStatement END?)* (elseStatement END?)? END;
whileStatement : WHILE expr DO statement* END;
elseIfStatement : ELSEIF expr THEN statement*;
elseStatement : ELSE statement*;