// Generated from /home/freshpenguin112/Desktop/projects/fplus/fplus.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link fplusParser}.
 */
public interface fplusListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link fplusParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(fplusParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(fplusParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(fplusParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(fplusParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#printExpr}.
	 * @param ctx the parse tree
	 */
	void enterPrintExpr(fplusParser.PrintExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#printExpr}.
	 * @param ctx the parse tree
	 */
	void exitPrintExpr(fplusParser.PrintExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDeclaration(fplusParser.FunctionDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDeclaration(fplusParser.FunctionDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#params}.
	 * @param ctx the parse tree
	 */
	void enterParams(fplusParser.ParamsContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#params}.
	 * @param ctx the parse tree
	 */
	void exitParams(fplusParser.ParamsContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#objectDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterObjectDeclaration(fplusParser.ObjectDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#objectDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitObjectDeclaration(fplusParser.ObjectDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclaration(fplusParser.VariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclaration(fplusParser.VariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#localVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterLocalVariableDeclaration(fplusParser.LocalVariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#localVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitLocalVariableDeclaration(fplusParser.LocalVariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#keyValuePair}.
	 * @param ctx the parse tree
	 */
	void enterKeyValuePair(fplusParser.KeyValuePairContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#keyValuePair}.
	 * @param ctx the parse tree
	 */
	void exitKeyValuePair(fplusParser.KeyValuePairContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#exprList}.
	 * @param ctx the parse tree
	 */
	void enterExprList(fplusParser.ExprListContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#exprList}.
	 * @param ctx the parse tree
	 */
	void exitExprList(fplusParser.ExprListContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(fplusParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(fplusParser.ExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(fplusParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(fplusParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#objectAccess}.
	 * @param ctx the parse tree
	 */
	void enterObjectAccess(fplusParser.ObjectAccessContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#objectAccess}.
	 * @param ctx the parse tree
	 */
	void exitObjectAccess(fplusParser.ObjectAccessContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#arrayAccess}.
	 * @param ctx the parse tree
	 */
	void enterArrayAccess(fplusParser.ArrayAccessContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#arrayAccess}.
	 * @param ctx the parse tree
	 */
	void exitArrayAccess(fplusParser.ArrayAccessContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#variableAccess}.
	 * @param ctx the parse tree
	 */
	void enterVariableAccess(fplusParser.VariableAccessContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#variableAccess}.
	 * @param ctx the parse tree
	 */
	void exitVariableAccess(fplusParser.VariableAccessContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#parens}.
	 * @param ctx the parse tree
	 */
	void enterParens(fplusParser.ParensContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#parens}.
	 * @param ctx the parse tree
	 */
	void exitParens(fplusParser.ParensContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#arrayExpr}.
	 * @param ctx the parse tree
	 */
	void enterArrayExpr(fplusParser.ArrayExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#arrayExpr}.
	 * @param ctx the parse tree
	 */
	void exitArrayExpr(fplusParser.ArrayExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#objectExpr}.
	 * @param ctx the parse tree
	 */
	void enterObjectExpr(fplusParser.ObjectExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#objectExpr}.
	 * @param ctx the parse tree
	 */
	void exitObjectExpr(fplusParser.ObjectExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#inlineJsExpr}.
	 * @param ctx the parse tree
	 */
	void enterInlineJsExpr(fplusParser.InlineJsExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#inlineJsExpr}.
	 * @param ctx the parse tree
	 */
	void exitInlineJsExpr(fplusParser.InlineJsExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#javaScriptEmbed}.
	 * @param ctx the parse tree
	 */
	void enterJavaScriptEmbed(fplusParser.JavaScriptEmbedContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#javaScriptEmbed}.
	 * @param ctx the parse tree
	 */
	void exitJavaScriptEmbed(fplusParser.JavaScriptEmbedContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void enterIfStatement(fplusParser.IfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void exitIfStatement(fplusParser.IfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#whileStatement}.
	 * @param ctx the parse tree
	 */
	void enterWhileStatement(fplusParser.WhileStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#whileStatement}.
	 * @param ctx the parse tree
	 */
	void exitWhileStatement(fplusParser.WhileStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#elseIfStatement}.
	 * @param ctx the parse tree
	 */
	void enterElseIfStatement(fplusParser.ElseIfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#elseIfStatement}.
	 * @param ctx the parse tree
	 */
	void exitElseIfStatement(fplusParser.ElseIfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link fplusParser#elseStatement}.
	 * @param ctx the parse tree
	 */
	void enterElseStatement(fplusParser.ElseStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link fplusParser#elseStatement}.
	 * @param ctx the parse tree
	 */
	void exitElseStatement(fplusParser.ElseStatementContext ctx);
}