"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antlr = _interopRequireDefault(require("antlr4"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Generated from fplus.g4 by ANTLR 4.13.1
// jshint ignore: start

// This class defines a complete listener for a parse tree produced by fplusParser.
class fplusListener extends _antlr.default.tree.ParseTreeListener {
  // Enter a parse tree produced by fplusParser#program.
  enterProgram(ctx) {}

  // Exit a parse tree produced by fplusParser#program.
  exitProgram(ctx) {}

  // Enter a parse tree produced by fplusParser#statement.
  enterStatement(ctx) {}

  // Exit a parse tree produced by fplusParser#statement.
  exitStatement(ctx) {}

  // Enter a parse tree produced by fplusParser#printExpr.
  enterPrintExpr(ctx) {}

  // Exit a parse tree produced by fplusParser#printExpr.
  exitPrintExpr(ctx) {}

  // Enter a parse tree produced by fplusParser#functionDeclaration.
  enterFunctionDeclaration(ctx) {}

  // Exit a parse tree produced by fplusParser#functionDeclaration.
  exitFunctionDeclaration(ctx) {}

  // Enter a parse tree produced by fplusParser#anonymousFunctionDeclaration.
  enterAnonymousFunctionDeclaration(ctx) {}

  // Exit a parse tree produced by fplusParser#anonymousFunctionDeclaration.
  exitAnonymousFunctionDeclaration(ctx) {}

  // Enter a parse tree produced by fplusParser#params.
  enterParams(ctx) {}

  // Exit a parse tree produced by fplusParser#params.
  exitParams(ctx) {}

  // Enter a parse tree produced by fplusParser#objectDeclaration.
  enterObjectDeclaration(ctx) {}

  // Exit a parse tree produced by fplusParser#objectDeclaration.
  exitObjectDeclaration(ctx) {}

  // Enter a parse tree produced by fplusParser#variableDeclaration.
  enterVariableDeclaration(ctx) {}

  // Exit a parse tree produced by fplusParser#variableDeclaration.
  exitVariableDeclaration(ctx) {}

  // Enter a parse tree produced by fplusParser#localVariableDeclaration.
  enterLocalVariableDeclaration(ctx) {}

  // Exit a parse tree produced by fplusParser#localVariableDeclaration.
  exitLocalVariableDeclaration(ctx) {}

  // Enter a parse tree produced by fplusParser#keyValuePair.
  enterKeyValuePair(ctx) {}

  // Exit a parse tree produced by fplusParser#keyValuePair.
  exitKeyValuePair(ctx) {}

  // Enter a parse tree produced by fplusParser#exprList.
  enterExprList(ctx) {}

  // Exit a parse tree produced by fplusParser#exprList.
  exitExprList(ctx) {}

  // Enter a parse tree produced by fplusParser#expr.
  enterExpr(ctx) {}

  // Exit a parse tree produced by fplusParser#expr.
  exitExpr(ctx) {}

  // Enter a parse tree produced by fplusParser#functionCall.
  enterFunctionCall(ctx) {}

  // Exit a parse tree produced by fplusParser#functionCall.
  exitFunctionCall(ctx) {}

  // Enter a parse tree produced by fplusParser#objectAccess.
  enterObjectAccess(ctx) {}

  // Exit a parse tree produced by fplusParser#objectAccess.
  exitObjectAccess(ctx) {}

  // Enter a parse tree produced by fplusParser#arrayAccess.
  enterArrayAccess(ctx) {}

  // Exit a parse tree produced by fplusParser#arrayAccess.
  exitArrayAccess(ctx) {}

  // Enter a parse tree produced by fplusParser#variableAccess.
  enterVariableAccess(ctx) {}

  // Exit a parse tree produced by fplusParser#variableAccess.
  exitVariableAccess(ctx) {}

  // Enter a parse tree produced by fplusParser#parens.
  enterParens(ctx) {}

  // Exit a parse tree produced by fplusParser#parens.
  exitParens(ctx) {}

  // Enter a parse tree produced by fplusParser#loadstring.
  enterLoadstring(ctx) {}

  // Exit a parse tree produced by fplusParser#loadstring.
  exitLoadstring(ctx) {}

  // Enter a parse tree produced by fplusParser#arrayExpr.
  enterArrayExpr(ctx) {}

  // Exit a parse tree produced by fplusParser#arrayExpr.
  exitArrayExpr(ctx) {}

  // Enter a parse tree produced by fplusParser#objectExpr.
  enterObjectExpr(ctx) {}

  // Exit a parse tree produced by fplusParser#objectExpr.
  exitObjectExpr(ctx) {}

  // Enter a parse tree produced by fplusParser#inlineJsExpr.
  enterInlineJsExpr(ctx) {}

  // Exit a parse tree produced by fplusParser#inlineJsExpr.
  exitInlineJsExpr(ctx) {}

  // Enter a parse tree produced by fplusParser#javaScriptEmbed.
  enterJavaScriptEmbed(ctx) {}

  // Exit a parse tree produced by fplusParser#javaScriptEmbed.
  exitJavaScriptEmbed(ctx) {}

  // Enter a parse tree produced by fplusParser#ifStatement.
  enterIfStatement(ctx) {}

  // Exit a parse tree produced by fplusParser#ifStatement.
  exitIfStatement(ctx) {}

  // Enter a parse tree produced by fplusParser#whileStatement.
  enterWhileStatement(ctx) {}

  // Exit a parse tree produced by fplusParser#whileStatement.
  exitWhileStatement(ctx) {}

  // Enter a parse tree produced by fplusParser#elseIfStatement.
  enterElseIfStatement(ctx) {}

  // Exit a parse tree produced by fplusParser#elseIfStatement.
  exitElseIfStatement(ctx) {}

  // Enter a parse tree produced by fplusParser#elseStatement.
  enterElseStatement(ctx) {}

  // Exit a parse tree produced by fplusParser#elseStatement.
  exitElseStatement(ctx) {}
}
exports.default = fplusListener;