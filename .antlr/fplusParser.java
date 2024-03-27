// Generated from /home/freshpenguin112/Desktop/projects/testlang/fplus.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class fplusParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, COMMENT=2, MLCOMMENT=3, STRING=4, INTEGER=5, FLOAT=6, BOOLEAN=7, 
		PRINT=8, FUNCTION=9, END=10, IF=11, THEN=12, ELSE=13, ELSEIF=14, WHILE=15, 
		DO=16, LOCAL=17, LET=18, LPAREN=19, RPAREN=20, LBRACE=21, RBRACE=22, LSQUARE=23, 
		RSQUARE=24, DOT=25, COLON=26, COMMA=27, SEMICOLON=28, ID=29, INLINE_JS_EXPR=30, 
		JAVASCRIPT_EMBED=31, WS=32;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_printExpr = 2, RULE_functionDeclaration = 3, 
		RULE_localFunctionDeclaration = 4, RULE_params = 5, RULE_objectDeclaration = 6, 
		RULE_variableDeclaration = 7, RULE_localVariableDeclaration = 8, RULE_keyValuePair = 9, 
		RULE_exprList = 10, RULE_expr = 11, RULE_functionCall = 12, RULE_objectAccess = 13, 
		RULE_arrayAccess = 14, RULE_variableAccess = 15, RULE_parens = 16, RULE_arrayExpr = 17, 
		RULE_objectExpr = 18, RULE_inlineJsExpr = 19, RULE_javaScriptEmbed = 20, 
		RULE_ifStatement = 21, RULE_whileStatement = 22, RULE_elseIfStatement = 23, 
		RULE_elseStatement = 24;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "printExpr", "functionDeclaration", "localFunctionDeclaration", 
			"params", "objectDeclaration", "variableDeclaration", "localVariableDeclaration", 
			"keyValuePair", "exprList", "expr", "functionCall", "objectAccess", "arrayAccess", 
			"variableAccess", "parens", "arrayExpr", "objectExpr", "inlineJsExpr", 
			"javaScriptEmbed", "ifStatement", "whileStatement", "elseIfStatement", 
			"elseStatement"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", null, null, null, null, null, null, "'print'", "'function'", 
			"'end'", "'if'", "'then'", "'else'", "'elseif'", "'while'", "'do'", "'local'", 
			"'let'", "'('", "')'", "'{'", "'}'", "'['", "']'", "'.'", "':'", "','", 
			"';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "COMMENT", "MLCOMMENT", "STRING", "INTEGER", "FLOAT", "BOOLEAN", 
			"PRINT", "FUNCTION", "END", "IF", "THEN", "ELSE", "ELSEIF", "WHILE", 
			"DO", "LOCAL", "LET", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LSQUARE", 
			"RSQUARE", "DOT", "COLON", "COMMA", "SEMICOLON", "ID", "INLINE_JS_EXPR", 
			"JAVASCRIPT_EMBED", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "fplus.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public fplusParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(fplusParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3760884720L) != 0)) {
				{
				{
				setState(50);
				statement();
				}
				}
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(56);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public PrintExprContext printExpr() {
			return getRuleContext(PrintExprContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public ObjectDeclarationContext objectDeclaration() {
			return getRuleContext(ObjectDeclarationContext.class,0);
		}
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public LocalVariableDeclarationContext localVariableDeclaration() {
			return getRuleContext(LocalVariableDeclarationContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public WhileStatementContext whileStatement() {
			return getRuleContext(WhileStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(66);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(58);
				printExpr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(59);
				functionDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(60);
				objectDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(61);
				variableDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(62);
				localVariableDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(63);
				expr();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(64);
				ifStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(65);
				whileStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintExprContext extends ParserRuleContext {
		public TerminalNode PRINT() { return getToken(fplusParser.PRINT, 0); }
		public TerminalNode LPAREN() { return getToken(fplusParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(fplusParser.RPAREN, 0); }
		public ExprListContext exprList() {
			return getRuleContext(ExprListContext.class,0);
		}
		public PrintExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printExpr; }
	}

	public final PrintExprContext printExpr() throws RecognitionException {
		PrintExprContext _localctx = new PrintExprContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_printExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			match(PRINT);
			setState(69);
			match(LPAREN);
			setState(71);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3760718064L) != 0)) {
				{
				setState(70);
				exprList();
				}
			}

			setState(73);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode FUNCTION() { return getToken(fplusParser.FUNCTION, 0); }
		public TerminalNode ID() { return getToken(fplusParser.ID, 0); }
		public TerminalNode LPAREN() { return getToken(fplusParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(fplusParser.RPAREN, 0); }
		public TerminalNode END() { return getToken(fplusParser.END, 0); }
		public ParamsContext params() {
			return getRuleContext(ParamsContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			match(FUNCTION);
			setState(76);
			match(ID);
			setState(77);
			match(LPAREN);
			setState(79);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(78);
				params();
				}
			}

			setState(81);
			match(RPAREN);
			setState(85);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3760884720L) != 0)) {
				{
				{
				setState(82);
				statement();
				}
				}
				setState(87);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(88);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LocalFunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode LOCAL() { return getToken(fplusParser.LOCAL, 0); }
		public TerminalNode FUNCTION() { return getToken(fplusParser.FUNCTION, 0); }
		public TerminalNode ID() { return getToken(fplusParser.ID, 0); }
		public TerminalNode LPAREN() { return getToken(fplusParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(fplusParser.RPAREN, 0); }
		public TerminalNode END() { return getToken(fplusParser.END, 0); }
		public ParamsContext params() {
			return getRuleContext(ParamsContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public LocalFunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_localFunctionDeclaration; }
	}

	public final LocalFunctionDeclarationContext localFunctionDeclaration() throws RecognitionException {
		LocalFunctionDeclarationContext _localctx = new LocalFunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_localFunctionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			match(LOCAL);
			setState(91);
			match(FUNCTION);
			setState(92);
			match(ID);
			setState(93);
			match(LPAREN);
			setState(95);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(94);
				params();
				}
			}

			setState(97);
			match(RPAREN);
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3760884720L) != 0)) {
				{
				{
				setState(98);
				statement();
				}
				}
				setState(103);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(104);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParamsContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(fplusParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(fplusParser.ID, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(fplusParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(fplusParser.COMMA, i);
		}
		public ParamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_params; }
	}

	public final ParamsContext params() throws RecognitionException {
		ParamsContext _localctx = new ParamsContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_params);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			match(ID);
			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(107);
				match(COMMA);
				setState(108);
				match(ID);
				}
				}
				setState(113);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectDeclarationContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(fplusParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(fplusParser.RBRACE, 0); }
		public List<KeyValuePairContext> keyValuePair() {
			return getRuleContexts(KeyValuePairContext.class);
		}
		public KeyValuePairContext keyValuePair(int i) {
			return getRuleContext(KeyValuePairContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(fplusParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(fplusParser.COMMA, i);
		}
		public ObjectDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectDeclaration; }
	}

	public final ObjectDeclarationContext objectDeclaration() throws RecognitionException {
		ObjectDeclarationContext _localctx = new ObjectDeclarationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_objectDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			match(LBRACE);
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(115);
				keyValuePair();
				setState(120);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(116);
					match(COMMA);
					setState(117);
					keyValuePair();
					}
					}
					setState(122);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(125);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableDeclarationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(fplusParser.ID, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			match(ID);
			setState(128);
			match(T__0);
			setState(129);
			expr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LocalVariableDeclarationContext extends ParserRuleContext {
		public TerminalNode LOCAL() { return getToken(fplusParser.LOCAL, 0); }
		public TerminalNode ID() { return getToken(fplusParser.ID, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public LocalVariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_localVariableDeclaration; }
	}

	public final LocalVariableDeclarationContext localVariableDeclaration() throws RecognitionException {
		LocalVariableDeclarationContext _localctx = new LocalVariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_localVariableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			match(LOCAL);
			setState(132);
			match(ID);
			setState(133);
			match(T__0);
			setState(134);
			expr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class KeyValuePairContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode ID() { return getToken(fplusParser.ID, 0); }
		public KeyValuePairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyValuePair; }
	}

	public final KeyValuePairContext keyValuePair() throws RecognitionException {
		KeyValuePairContext _localctx = new KeyValuePairContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_keyValuePair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(136);
			match(ID);
			}
			setState(137);
			match(T__0);
			setState(138);
			expr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprListContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(fplusParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(fplusParser.COMMA, i);
		}
		public ExprListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprList; }
	}

	public final ExprListContext exprList() throws RecognitionException {
		ExprListContext _localctx = new ExprListContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_exprList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
			expr();
			setState(145);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(141);
				match(COMMA);
				setState(142);
				expr();
				}
				}
				setState(147);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(fplusParser.STRING, 0); }
		public TerminalNode INTEGER() { return getToken(fplusParser.INTEGER, 0); }
		public TerminalNode FLOAT() { return getToken(fplusParser.FLOAT, 0); }
		public TerminalNode BOOLEAN() { return getToken(fplusParser.BOOLEAN, 0); }
		public ArrayExprContext arrayExpr() {
			return getRuleContext(ArrayExprContext.class,0);
		}
		public ObjectExprContext objectExpr() {
			return getRuleContext(ObjectExprContext.class,0);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public ObjectAccessContext objectAccess() {
			return getRuleContext(ObjectAccessContext.class,0);
		}
		public ArrayAccessContext arrayAccess() {
			return getRuleContext(ArrayAccessContext.class,0);
		}
		public VariableAccessContext variableAccess() {
			return getRuleContext(VariableAccessContext.class,0);
		}
		public ParensContext parens() {
			return getRuleContext(ParensContext.class,0);
		}
		public InlineJsExprContext inlineJsExpr() {
			return getRuleContext(InlineJsExprContext.class,0);
		}
		public JavaScriptEmbedContext javaScriptEmbed() {
			return getRuleContext(JavaScriptEmbedContext.class,0);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_expr);
		try {
			setState(161);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(148);
				match(STRING);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(149);
				match(INTEGER);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(150);
				match(FLOAT);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(151);
				match(BOOLEAN);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(152);
				arrayExpr();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(153);
				objectExpr();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(154);
				functionCall();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(155);
				objectAccess();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(156);
				arrayAccess();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(157);
				variableAccess();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(158);
				parens();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(159);
				inlineJsExpr();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(160);
				javaScriptEmbed();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(fplusParser.ID, 0); }
		public TerminalNode LPAREN() { return getToken(fplusParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(fplusParser.RPAREN, 0); }
		public ExprListContext exprList() {
			return getRuleContext(ExprListContext.class,0);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_functionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			match(ID);
			setState(164);
			match(LPAREN);
			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3760718064L) != 0)) {
				{
				setState(165);
				exprList();
				}
			}

			setState(168);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectAccessContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(fplusParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(fplusParser.ID, i);
		}
		public TerminalNode DOT() { return getToken(fplusParser.DOT, 0); }
		public TerminalNode LSQUARE() { return getToken(fplusParser.LSQUARE, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RSQUARE() { return getToken(fplusParser.RSQUARE, 0); }
		public ObjectAccessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectAccess; }
	}

	public final ObjectAccessContext objectAccess() throws RecognitionException {
		ObjectAccessContext _localctx = new ObjectAccessContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_objectAccess);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			match(ID);
			setState(177);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DOT:
				{
				setState(171);
				match(DOT);
				setState(172);
				match(ID);
				}
				break;
			case LSQUARE:
				{
				setState(173);
				match(LSQUARE);
				setState(174);
				expr();
				setState(175);
				match(RSQUARE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArrayAccessContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(fplusParser.ID, 0); }
		public TerminalNode LSQUARE() { return getToken(fplusParser.LSQUARE, 0); }
		public TerminalNode INTEGER() { return getToken(fplusParser.INTEGER, 0); }
		public TerminalNode RSQUARE() { return getToken(fplusParser.RSQUARE, 0); }
		public ArrayAccessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayAccess; }
	}

	public final ArrayAccessContext arrayAccess() throws RecognitionException {
		ArrayAccessContext _localctx = new ArrayAccessContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_arrayAccess);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			match(ID);
			setState(180);
			match(LSQUARE);
			setState(181);
			match(INTEGER);
			setState(182);
			match(RSQUARE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableAccessContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(fplusParser.ID, 0); }
		public VariableAccessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableAccess; }
	}

	public final VariableAccessContext variableAccess() throws RecognitionException {
		VariableAccessContext _localctx = new VariableAccessContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_variableAccess);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParensContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(fplusParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(fplusParser.RPAREN, 0); }
		public ParensContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parens; }
	}

	public final ParensContext parens() throws RecognitionException {
		ParensContext _localctx = new ParensContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_parens);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(186);
			match(LPAREN);
			setState(187);
			expr();
			setState(188);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArrayExprContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(fplusParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(fplusParser.RBRACE, 0); }
		public ExprListContext exprList() {
			return getRuleContext(ExprListContext.class,0);
		}
		public ArrayExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayExpr; }
	}

	public final ArrayExprContext arrayExpr() throws RecognitionException {
		ArrayExprContext _localctx = new ArrayExprContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_arrayExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			match(LBRACE);
			setState(192);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3760718064L) != 0)) {
				{
				setState(191);
				exprList();
				}
			}

			setState(194);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectExprContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(fplusParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(fplusParser.RBRACE, 0); }
		public List<KeyValuePairContext> keyValuePair() {
			return getRuleContexts(KeyValuePairContext.class);
		}
		public KeyValuePairContext keyValuePair(int i) {
			return getRuleContext(KeyValuePairContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(fplusParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(fplusParser.COMMA, i);
		}
		public ObjectExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectExpr; }
	}

	public final ObjectExprContext objectExpr() throws RecognitionException {
		ObjectExprContext _localctx = new ObjectExprContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_objectExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			match(LBRACE);
			setState(205);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(197);
				keyValuePair();
				setState(202);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(198);
					match(COMMA);
					setState(199);
					keyValuePair();
					}
					}
					setState(204);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(207);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InlineJsExprContext extends ParserRuleContext {
		public TerminalNode INLINE_JS_EXPR() { return getToken(fplusParser.INLINE_JS_EXPR, 0); }
		public InlineJsExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineJsExpr; }
	}

	public final InlineJsExprContext inlineJsExpr() throws RecognitionException {
		InlineJsExprContext _localctx = new InlineJsExprContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_inlineJsExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(INLINE_JS_EXPR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class JavaScriptEmbedContext extends ParserRuleContext {
		public TerminalNode JAVASCRIPT_EMBED() { return getToken(fplusParser.JAVASCRIPT_EMBED, 0); }
		public JavaScriptEmbedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_javaScriptEmbed; }
	}

	public final JavaScriptEmbedContext javaScriptEmbed() throws RecognitionException {
		JavaScriptEmbedContext _localctx = new JavaScriptEmbedContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_javaScriptEmbed);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			match(JAVASCRIPT_EMBED);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(fplusParser.IF, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode THEN() { return getToken(fplusParser.THEN, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode END() { return getToken(fplusParser.END, 0); }
		public List<ElseIfStatementContext> elseIfStatement() {
			return getRuleContexts(ElseIfStatementContext.class);
		}
		public ElseIfStatementContext elseIfStatement(int i) {
			return getRuleContext(ElseIfStatementContext.class,i);
		}
		public ElseStatementContext elseStatement() {
			return getRuleContext(ElseStatementContext.class,0);
		}
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_ifStatement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			match(IF);
			setState(214);
			expr();
			setState(215);
			match(THEN);
			setState(216);
			statement();
			setState(218);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(217);
				match(END);
				}
				break;
			}
			setState(223);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(220);
					elseIfStatement();
					}
					} 
				}
				setState(225);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			setState(227);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				{
				setState(226);
				elseStatement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhileStatementContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(fplusParser.WHILE, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode DO() { return getToken(fplusParser.DO, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode END() { return getToken(fplusParser.END, 0); }
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_whileStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			match(WHILE);
			setState(230);
			expr();
			setState(231);
			match(DO);
			setState(232);
			statement();
			setState(233);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElseIfStatementContext extends ParserRuleContext {
		public TerminalNode ELSEIF() { return getToken(fplusParser.ELSEIF, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode THEN() { return getToken(fplusParser.THEN, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode END() { return getToken(fplusParser.END, 0); }
		public ElseIfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIfStatement; }
	}

	public final ElseIfStatementContext elseIfStatement() throws RecognitionException {
		ElseIfStatementContext _localctx = new ElseIfStatementContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_elseIfStatement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			match(ELSEIF);
			setState(236);
			expr();
			setState(237);
			match(THEN);
			setState(239); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(238);
					statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(241); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(244);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				{
				setState(243);
				match(END);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElseStatementContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(fplusParser.ELSE, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode END() { return getToken(fplusParser.END, 0); }
		public ElseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseStatement; }
	}

	public final ElseStatementContext elseStatement() throws RecognitionException {
		ElseStatementContext _localctx = new ElseStatementContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_elseStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(246);
			match(ELSE);
			setState(247);
			statement();
			setState(248);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001 \u00fb\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0001\u0000\u0005\u00004\b\u0000\n\u0000\f\u00007\t\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001C\b\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0003\u0002H\b\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003P\b\u0003"+
		"\u0001\u0003\u0001\u0003\u0005\u0003T\b\u0003\n\u0003\f\u0003W\t\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0003\u0004`\b\u0004\u0001\u0004\u0001\u0004\u0005\u0004"+
		"d\b\u0004\n\u0004\f\u0004g\t\u0004\u0001\u0004\u0001\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0005\u0005n\b\u0005\n\u0005\f\u0005q\t\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006w\b\u0006"+
		"\n\u0006\f\u0006z\t\u0006\u0003\u0006|\b\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\n\u0005\n\u0090\b\n\n\n\f\n\u0093\t\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u00a2\b\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0003\f\u00a7\b\f\u0001\f\u0001\f\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u00b2\b\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011"+
		"\u0003\u0011\u00c1\b\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0005\u0012\u00c9\b\u0012\n\u0012\f\u0012\u00cc"+
		"\t\u0012\u0003\u0012\u00ce\b\u0012\u0001\u0012\u0001\u0012\u0001\u0013"+
		"\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0003\u0015\u00db\b\u0015\u0001\u0015\u0005\u0015"+
		"\u00de\b\u0015\n\u0015\f\u0015\u00e1\t\u0015\u0001\u0015\u0003\u0015\u00e4"+
		"\b\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0004\u0017\u00f0"+
		"\b\u0017\u000b\u0017\f\u0017\u00f1\u0001\u0017\u0003\u0017\u00f5\b\u0017"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0000\u0000"+
		"\u0019\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e \"$&(*,.0\u0000\u0000\u0108\u00005\u0001\u0000\u0000"+
		"\u0000\u0002B\u0001\u0000\u0000\u0000\u0004D\u0001\u0000\u0000\u0000\u0006"+
		"K\u0001\u0000\u0000\u0000\bZ\u0001\u0000\u0000\u0000\nj\u0001\u0000\u0000"+
		"\u0000\fr\u0001\u0000\u0000\u0000\u000e\u007f\u0001\u0000\u0000\u0000"+
		"\u0010\u0083\u0001\u0000\u0000\u0000\u0012\u0088\u0001\u0000\u0000\u0000"+
		"\u0014\u008c\u0001\u0000\u0000\u0000\u0016\u00a1\u0001\u0000\u0000\u0000"+
		"\u0018\u00a3\u0001\u0000\u0000\u0000\u001a\u00aa\u0001\u0000\u0000\u0000"+
		"\u001c\u00b3\u0001\u0000\u0000\u0000\u001e\u00b8\u0001\u0000\u0000\u0000"+
		" \u00ba\u0001\u0000\u0000\u0000\"\u00be\u0001\u0000\u0000\u0000$\u00c4"+
		"\u0001\u0000\u0000\u0000&\u00d1\u0001\u0000\u0000\u0000(\u00d3\u0001\u0000"+
		"\u0000\u0000*\u00d5\u0001\u0000\u0000\u0000,\u00e5\u0001\u0000\u0000\u0000"+
		".\u00eb\u0001\u0000\u0000\u00000\u00f6\u0001\u0000\u0000\u000024\u0003"+
		"\u0002\u0001\u000032\u0001\u0000\u0000\u000047\u0001\u0000\u0000\u0000"+
		"53\u0001\u0000\u0000\u000056\u0001\u0000\u0000\u000068\u0001\u0000\u0000"+
		"\u000075\u0001\u0000\u0000\u000089\u0005\u0000\u0000\u00019\u0001\u0001"+
		"\u0000\u0000\u0000:C\u0003\u0004\u0002\u0000;C\u0003\u0006\u0003\u0000"+
		"<C\u0003\f\u0006\u0000=C\u0003\u000e\u0007\u0000>C\u0003\u0010\b\u0000"+
		"?C\u0003\u0016\u000b\u0000@C\u0003*\u0015\u0000AC\u0003,\u0016\u0000B"+
		":\u0001\u0000\u0000\u0000B;\u0001\u0000\u0000\u0000B<\u0001\u0000\u0000"+
		"\u0000B=\u0001\u0000\u0000\u0000B>\u0001\u0000\u0000\u0000B?\u0001\u0000"+
		"\u0000\u0000B@\u0001\u0000\u0000\u0000BA\u0001\u0000\u0000\u0000C\u0003"+
		"\u0001\u0000\u0000\u0000DE\u0005\b\u0000\u0000EG\u0005\u0013\u0000\u0000"+
		"FH\u0003\u0014\n\u0000GF\u0001\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000"+
		"HI\u0001\u0000\u0000\u0000IJ\u0005\u0014\u0000\u0000J\u0005\u0001\u0000"+
		"\u0000\u0000KL\u0005\t\u0000\u0000LM\u0005\u001d\u0000\u0000MO\u0005\u0013"+
		"\u0000\u0000NP\u0003\n\u0005\u0000ON\u0001\u0000\u0000\u0000OP\u0001\u0000"+
		"\u0000\u0000PQ\u0001\u0000\u0000\u0000QU\u0005\u0014\u0000\u0000RT\u0003"+
		"\u0002\u0001\u0000SR\u0001\u0000\u0000\u0000TW\u0001\u0000\u0000\u0000"+
		"US\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000\u0000VX\u0001\u0000\u0000"+
		"\u0000WU\u0001\u0000\u0000\u0000XY\u0005\n\u0000\u0000Y\u0007\u0001\u0000"+
		"\u0000\u0000Z[\u0005\u0011\u0000\u0000[\\\u0005\t\u0000\u0000\\]\u0005"+
		"\u001d\u0000\u0000]_\u0005\u0013\u0000\u0000^`\u0003\n\u0005\u0000_^\u0001"+
		"\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000\u0000"+
		"ae\u0005\u0014\u0000\u0000bd\u0003\u0002\u0001\u0000cb\u0001\u0000\u0000"+
		"\u0000dg\u0001\u0000\u0000\u0000ec\u0001\u0000\u0000\u0000ef\u0001\u0000"+
		"\u0000\u0000fh\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000\u0000hi\u0005"+
		"\n\u0000\u0000i\t\u0001\u0000\u0000\u0000jo\u0005\u001d\u0000\u0000kl"+
		"\u0005\u001b\u0000\u0000ln\u0005\u001d\u0000\u0000mk\u0001\u0000\u0000"+
		"\u0000nq\u0001\u0000\u0000\u0000om\u0001\u0000\u0000\u0000op\u0001\u0000"+
		"\u0000\u0000p\u000b\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000"+
		"r{\u0005\u0015\u0000\u0000sx\u0003\u0012\t\u0000tu\u0005\u001b\u0000\u0000"+
		"uw\u0003\u0012\t\u0000vt\u0001\u0000\u0000\u0000wz\u0001\u0000\u0000\u0000"+
		"xv\u0001\u0000\u0000\u0000xy\u0001\u0000\u0000\u0000y|\u0001\u0000\u0000"+
		"\u0000zx\u0001\u0000\u0000\u0000{s\u0001\u0000\u0000\u0000{|\u0001\u0000"+
		"\u0000\u0000|}\u0001\u0000\u0000\u0000}~\u0005\u0016\u0000\u0000~\r\u0001"+
		"\u0000\u0000\u0000\u007f\u0080\u0005\u001d\u0000\u0000\u0080\u0081\u0005"+
		"\u0001\u0000\u0000\u0081\u0082\u0003\u0016\u000b\u0000\u0082\u000f\u0001"+
		"\u0000\u0000\u0000\u0083\u0084\u0005\u0011\u0000\u0000\u0084\u0085\u0005"+
		"\u001d\u0000\u0000\u0085\u0086\u0005\u0001\u0000\u0000\u0086\u0087\u0003"+
		"\u0016\u000b\u0000\u0087\u0011\u0001\u0000\u0000\u0000\u0088\u0089\u0005"+
		"\u001d\u0000\u0000\u0089\u008a\u0005\u0001\u0000\u0000\u008a\u008b\u0003"+
		"\u0016\u000b\u0000\u008b\u0013\u0001\u0000\u0000\u0000\u008c\u0091\u0003"+
		"\u0016\u000b\u0000\u008d\u008e\u0005\u001b\u0000\u0000\u008e\u0090\u0003"+
		"\u0016\u000b\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u0090\u0093\u0001"+
		"\u0000\u0000\u0000\u0091\u008f\u0001\u0000\u0000\u0000\u0091\u0092\u0001"+
		"\u0000\u0000\u0000\u0092\u0015\u0001\u0000\u0000\u0000\u0093\u0091\u0001"+
		"\u0000\u0000\u0000\u0094\u00a2\u0005\u0004\u0000\u0000\u0095\u00a2\u0005"+
		"\u0005\u0000\u0000\u0096\u00a2\u0005\u0006\u0000\u0000\u0097\u00a2\u0005"+
		"\u0007\u0000\u0000\u0098\u00a2\u0003\"\u0011\u0000\u0099\u00a2\u0003$"+
		"\u0012\u0000\u009a\u00a2\u0003\u0018\f\u0000\u009b\u00a2\u0003\u001a\r"+
		"\u0000\u009c\u00a2\u0003\u001c\u000e\u0000\u009d\u00a2\u0003\u001e\u000f"+
		"\u0000\u009e\u00a2\u0003 \u0010\u0000\u009f\u00a2\u0003&\u0013\u0000\u00a0"+
		"\u00a2\u0003(\u0014\u0000\u00a1\u0094\u0001\u0000\u0000\u0000\u00a1\u0095"+
		"\u0001\u0000\u0000\u0000\u00a1\u0096\u0001\u0000\u0000\u0000\u00a1\u0097"+
		"\u0001\u0000\u0000\u0000\u00a1\u0098\u0001\u0000\u0000\u0000\u00a1\u0099"+
		"\u0001\u0000\u0000\u0000\u00a1\u009a\u0001\u0000\u0000\u0000\u00a1\u009b"+
		"\u0001\u0000\u0000\u0000\u00a1\u009c\u0001\u0000\u0000\u0000\u00a1\u009d"+
		"\u0001\u0000\u0000\u0000\u00a1\u009e\u0001\u0000\u0000\u0000\u00a1\u009f"+
		"\u0001\u0000\u0000\u0000\u00a1\u00a0\u0001\u0000\u0000\u0000\u00a2\u0017"+
		"\u0001\u0000\u0000\u0000\u00a3\u00a4\u0005\u001d\u0000\u0000\u00a4\u00a6"+
		"\u0005\u0013\u0000\u0000\u00a5\u00a7\u0003\u0014\n\u0000\u00a6\u00a5\u0001"+
		"\u0000\u0000\u0000\u00a6\u00a7\u0001\u0000\u0000\u0000\u00a7\u00a8\u0001"+
		"\u0000\u0000\u0000\u00a8\u00a9\u0005\u0014\u0000\u0000\u00a9\u0019\u0001"+
		"\u0000\u0000\u0000\u00aa\u00b1\u0005\u001d\u0000\u0000\u00ab\u00ac\u0005"+
		"\u0019\u0000\u0000\u00ac\u00b2\u0005\u001d\u0000\u0000\u00ad\u00ae\u0005"+
		"\u0017\u0000\u0000\u00ae\u00af\u0003\u0016\u000b\u0000\u00af\u00b0\u0005"+
		"\u0018\u0000\u0000\u00b0\u00b2\u0001\u0000\u0000\u0000\u00b1\u00ab\u0001"+
		"\u0000\u0000\u0000\u00b1\u00ad\u0001\u0000\u0000\u0000\u00b2\u001b\u0001"+
		"\u0000\u0000\u0000\u00b3\u00b4\u0005\u001d\u0000\u0000\u00b4\u00b5\u0005"+
		"\u0017\u0000\u0000\u00b5\u00b6\u0005\u0005\u0000\u0000\u00b6\u00b7\u0005"+
		"\u0018\u0000\u0000\u00b7\u001d\u0001\u0000\u0000\u0000\u00b8\u00b9\u0005"+
		"\u001d\u0000\u0000\u00b9\u001f\u0001\u0000\u0000\u0000\u00ba\u00bb\u0005"+
		"\u0013\u0000\u0000\u00bb\u00bc\u0003\u0016\u000b\u0000\u00bc\u00bd\u0005"+
		"\u0014\u0000\u0000\u00bd!\u0001\u0000\u0000\u0000\u00be\u00c0\u0005\u0015"+
		"\u0000\u0000\u00bf\u00c1\u0003\u0014\n\u0000\u00c0\u00bf\u0001\u0000\u0000"+
		"\u0000\u00c0\u00c1\u0001\u0000\u0000\u0000\u00c1\u00c2\u0001\u0000\u0000"+
		"\u0000\u00c2\u00c3\u0005\u0016\u0000\u0000\u00c3#\u0001\u0000\u0000\u0000"+
		"\u00c4\u00cd\u0005\u0015\u0000\u0000\u00c5\u00ca\u0003\u0012\t\u0000\u00c6"+
		"\u00c7\u0005\u001b\u0000\u0000\u00c7\u00c9\u0003\u0012\t\u0000\u00c8\u00c6"+
		"\u0001\u0000\u0000\u0000\u00c9\u00cc\u0001\u0000\u0000\u0000\u00ca\u00c8"+
		"\u0001\u0000\u0000\u0000\u00ca\u00cb\u0001\u0000\u0000\u0000\u00cb\u00ce"+
		"\u0001\u0000\u0000\u0000\u00cc\u00ca\u0001\u0000\u0000\u0000\u00cd\u00c5"+
		"\u0001\u0000\u0000\u0000\u00cd\u00ce\u0001\u0000\u0000\u0000\u00ce\u00cf"+
		"\u0001\u0000\u0000\u0000\u00cf\u00d0\u0005\u0016\u0000\u0000\u00d0%\u0001"+
		"\u0000\u0000\u0000\u00d1\u00d2\u0005\u001e\u0000\u0000\u00d2\'\u0001\u0000"+
		"\u0000\u0000\u00d3\u00d4\u0005\u001f\u0000\u0000\u00d4)\u0001\u0000\u0000"+
		"\u0000\u00d5\u00d6\u0005\u000b\u0000\u0000\u00d6\u00d7\u0003\u0016\u000b"+
		"\u0000\u00d7\u00d8\u0005\f\u0000\u0000\u00d8\u00da\u0003\u0002\u0001\u0000"+
		"\u00d9\u00db\u0005\n\u0000\u0000\u00da\u00d9\u0001\u0000\u0000\u0000\u00da"+
		"\u00db\u0001\u0000\u0000\u0000\u00db\u00df\u0001\u0000\u0000\u0000\u00dc"+
		"\u00de\u0003.\u0017\u0000\u00dd\u00dc\u0001\u0000\u0000\u0000\u00de\u00e1"+
		"\u0001\u0000\u0000\u0000\u00df\u00dd\u0001\u0000\u0000\u0000\u00df\u00e0"+
		"\u0001\u0000\u0000\u0000\u00e0\u00e3\u0001\u0000\u0000\u0000\u00e1\u00df"+
		"\u0001\u0000\u0000\u0000\u00e2\u00e4\u00030\u0018\u0000\u00e3\u00e2\u0001"+
		"\u0000\u0000\u0000\u00e3\u00e4\u0001\u0000\u0000\u0000\u00e4+\u0001\u0000"+
		"\u0000\u0000\u00e5\u00e6\u0005\u000f\u0000\u0000\u00e6\u00e7\u0003\u0016"+
		"\u000b\u0000\u00e7\u00e8\u0005\u0010\u0000\u0000\u00e8\u00e9\u0003\u0002"+
		"\u0001\u0000\u00e9\u00ea\u0005\n\u0000\u0000\u00ea-\u0001\u0000\u0000"+
		"\u0000\u00eb\u00ec\u0005\u000e\u0000\u0000\u00ec\u00ed\u0003\u0016\u000b"+
		"\u0000\u00ed\u00ef\u0005\f\u0000\u0000\u00ee\u00f0\u0003\u0002\u0001\u0000"+
		"\u00ef\u00ee\u0001\u0000\u0000\u0000\u00f0\u00f1\u0001\u0000\u0000\u0000"+
		"\u00f1\u00ef\u0001\u0000\u0000\u0000\u00f1\u00f2\u0001\u0000\u0000\u0000"+
		"\u00f2\u00f4\u0001\u0000\u0000\u0000\u00f3\u00f5\u0005\n\u0000\u0000\u00f4"+
		"\u00f3\u0001\u0000\u0000\u0000\u00f4\u00f5\u0001\u0000\u0000\u0000\u00f5"+
		"/\u0001\u0000\u0000\u0000\u00f6\u00f7\u0005\r\u0000\u0000\u00f7\u00f8"+
		"\u0003\u0002\u0001\u0000\u00f8\u00f9\u0005\n\u0000\u0000\u00f91\u0001"+
		"\u0000\u0000\u0000\u00165BGOU_eox{\u0091\u00a1\u00a6\u00b1\u00c0\u00ca"+
		"\u00cd\u00da\u00df\u00e3\u00f1\u00f4";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}