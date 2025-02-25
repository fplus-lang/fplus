grammar fplus;

// Lexer rules
COMMENT : ('--' ~[\r\n]*) -> skip;
MLCOMMENT : '--[[' .*? ']]--' -> skip;
STRING : ( '\'' ( ~'\'' | '\\' . )* '\'' | '"' ( ~'"' | '\\' . )* '"' );
INTEGER : '-'? [0-9]+;
FLOAT : '-'? [0-9]* '.' [0-9]+;
BOOLEAN : 'true' | 'false';
NIL : 'nil';
PRINT : 'print';
FUNCTION : 'function';
LOADSTRING : 'loadstring';
END : 'end';
NOT : 'not';
IF : 'if';
THEN : 'then';
ELSE : 'else';
ELSEIF : 'elseif';
WHILE : 'while';
DO : 'do';
FOR : 'for';
IN : 'in';
LOCAL : 'local';
LET : 'let';
BREAK : 'break';
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
          | tableDeclaration
          | variableDeclaration
          | localVariableDeclaration
          | expr
          | ifStatement
          | whileStatement
          | forStatement
          | breakStatement;
printExpr : PRINT LPAREN exprList? RPAREN;
functionDeclaration : LOCAL? FUNCTION ID LPAREN params? RPAREN statement* END;
anonymousFunctionDeclaration : FUNCTION LPAREN params? RPAREN statement* END;
params : ID (COMMA ID)*;
tableDeclaration : LBRACE ((exprList | keyValuePair) (COMMA (exprList | keyValuePair))*)? RBRACE;
variableDeclaration : ID '=' expr;
localVariableDeclaration : LOCAL ID '=' expr;
keyValuePair : (ID | STRING) '=' expr;
exprList : expr (COMMA expr)*;
expr : STRING 
     | INTEGER
     | FLOAT 
     | BOOLEAN
     | NIL
     | ID
     | expr ('*' | '/' | '+' | '-' | '^' | '%' | '<<' | '>>' | '&' | '|' | '~') expr
     | expr ('==' | '!=' | '<' | '<=' | '>' | '>=' ) expr
     | expr ('and' | 'or') expr
     | NOT expr
     | loadstring
     //| arrayExpr
     //| objectExpr
     | functionCall
     | tableAccess
     //| arrayAccess
     | variableAccess
     | tableDeclaration
     //| arrayDeclaration
     | parens
     | inlineJsExpr
     | javaScriptEmbed;
functionCall : (ID | anonymousFunctionDeclaration | loadstring) LPAREN exprList? RPAREN;
tableAccess : (ID | tableDeclaration) (DOT ID | LSQUARE expr RSQUARE);
//arrayAccess : (ID | arrayDeclaration) LSQUARE INTEGER RSQUARE;
variableAccess : ID;
parens : LPAREN expr RPAREN;
loadstring : LOADSTRING LPAREN expr RPAREN;
//arrayDeclaration : LBRACE exprList? RBRACE;
//objectExpr : LBRACE (keyValuePair (COMMA keyValuePair)*)? RBRACE;
inlineJsExpr : INLINE_JS_EXPR;
javaScriptEmbed : JAVASCRIPT_EMBED;
ifStatement : IF expr THEN statement* END? (elseIfStatement END?)* (elseStatement END?)? END;
whileStatement : WHILE expr DO statement* END;
forStatement : FOR ID IN expr DO statement* END;
breakStatement : BREAK;
elseIfStatement : ELSEIF expr THEN statement*;
elseStatement : ELSE statement*;
