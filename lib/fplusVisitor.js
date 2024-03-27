"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antlr = _interopRequireDefault(require("antlr4"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Generated from fplus.g4 by ANTLR 4.13.1
// jshint ignore: start

// This class defines a complete generic visitor for a parse tree produced by fplusParser.

class fplusVisitor extends _antlr.default.tree.ParseTreeVisitor {
  // Visit a parse tree produced by fplusParser#program.
  visitProgram(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#statement.
  visitStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#printExpr.
  visitPrintExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#functionDeclaration.
  visitFunctionDeclaration(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#localFunctionDeclaration.
  visitLocalFunctionDeclaration(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#params.
  visitParams(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#objectDeclaration.
  visitObjectDeclaration(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#variableDeclaration.
  visitVariableDeclaration(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#localVariableDeclaration.
  visitLocalVariableDeclaration(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#keyValuePair.
  visitKeyValuePair(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#exprList.
  visitExprList(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#expr.
  visitExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#functionCall.
  visitFunctionCall(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#objectAccess.
  visitObjectAccess(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#arrayAccess.
  visitArrayAccess(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#variableAccess.
  visitVariableAccess(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#parens.
  visitParens(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#arrayExpr.
  visitArrayExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#objectExpr.
  visitObjectExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#inlineJsExpr.
  visitInlineJsExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#javaScriptEmbed.
  visitJavaScriptEmbed(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#ifStatement.
  visitIfStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#whileStatement.
  visitWhileStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#elseIfStatement.
  visitElseIfStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by fplusParser#elseStatement.
  visitElseStatement(ctx) {
    return this.visitChildren(ctx);
  }
}
exports.default = fplusVisitor;