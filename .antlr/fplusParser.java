// Generated from /home/freshpenguin112/Desktop/projects/fplus3/fplus.g4 by ANTLR 4.13.1
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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, COMMENT=7, MLCOMMENT=8, 
		STRING=9, INTEGER=10, FLOAT=11, BOOLEAN=12, PRINT=13, FUNCTION=14, LOADSTRING=15, 
		END=16, IF=17, THEN=18, ELSE=19, ELSEIF=20, WHILE=21, DO=22, LOCAL=23, 
		LET=24, LPAREN=25, RPAREN=26, LBRACE=27, RBRACE=28, LSQUARE=29, RSQUARE=30, 
		DOT=31, COLON=32, COMMA=33, SEMICOLON=34, ID=35, INLINE_JS_EXPR=36, JAVASCRIPT_EMBED=37, 
		WS=38;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_printExpr = 2, RULE_functionDeclaration = 3, 
		RULE_anonymousFunctionDeclaration = 4, RULE_params = 5, RULE_objectDeclaration = 6, 
		RULE_variableDeclaration = 7, RULE_localVariableDeclaration = 8, RULE_keyValuePair = 9, 
		RULE_exprList = 10, RULE_expr = 11, RULE_functionCall = 12, RULE_objectAccess = 13, 
		RULE_arrayAccess = 14, RULE_variableAccess = 15, RULE_parens = 16, RULE_loadstring = 17, 
		RULE_arrayExpr = 18, RULE_objectExpr = 19, RULE_inlineJsExpr = 20, RULE_javaScriptEmbed = 21, 
		RULE_ifStatement = 22, RULE_whileStatement = 23, RULE_elseIfStatement = 24, 
		RULE_elseStatement = 25;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "printExpr", "functionDeclaration", "anonymousFunctionDeclaration", 
			"params", "objectDeclaration", "variableDeclaration", "localVariableDeclaration", 
			"keyValuePair", "exprList", "expr", "functionCall", "objectAccess", "arrayAccess", 
			"variableAccess", "parens", "loadstring", "arrayExpr", "objectExpr", 
			"inlineJsExpr", "javaScriptEmbed", "ifStatement", "whileStatement", "elseIfStatement", 
			"elseStatement"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "'*'", "'/'", "'+'", "'-'", "'^'", null, null, null, null, 
			null, null, "'print'", "'function'", "'loadstring'", "'end'", "'if'", 
			"'then'", "'else'", "'elseif'", "'while'", "'do'", "'local'", "'let'", 
			"'('", "')'", "'{'", "'}'", "'['", "']'", "'.'", "':'", "','", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, "COMMENT", "MLCOMMENT", "STRING", 
			"INTEGER", "FLOAT", "BOOLEAN", "PRINT", "FUNCTION", "LOADSTRING", "END", 
			"IF", "THEN", "ELSE", "ELSEIF", "WHILE", "DO", "LOCAL", "LET", "LPAREN", 
			"RPAREN", "LBRACE", "RBRACE", "LSQUARE", "RSQUARE", "DOT", "COLON", "COMMA", 
			"SEMICOLON", "ID", "INLINE_JS_EXPR", "JAVASCRIPT_EMBED", "WS"
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
			setState(55);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 240696622592L) != 0)) {
				{
				{
				setState(52);
				statement();
				}
				}
				setState(57);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(58);
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
		public AnonymousFunctionDeclarationContext anonymousFunctionDeclaration() {
			return getRuleContext(AnonymousFunctionDeclarationContext.class,0);
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
			setState(69);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(60);
				printExpr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(61);
				functionDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(62);
				anonymousFunctionDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(63);
				objectDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(64);
				variableDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(65);
				localVariableDeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(66);
				expr(0);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(67);
				ifStatement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(68);
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
			setState(71);
			match(PRINT);
			setState(72);
			match(LPAREN);
			setState(74);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 240685997568L) != 0)) {
				{
				setState(73);
				exprList();
				}
			}

			setState(76);
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
		public TerminalNode LOCAL() { return getToken(fplusParser.LOCAL, 0); }
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
			setState(79);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LOCAL) {
				{
				setState(78);
				match(LOCAL);
				}
			}

			setState(81);
			match(FUNCTION);
			setState(82);
			match(ID);
			setState(83);
			match(LPAREN);
			setState(85);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(84);
				params();
				}
			}

			setState(87);
			match(RPAREN);
			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 240696622592L) != 0)) {
				{
				{
				setState(88);
				statement();
				}
				}
				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(94);
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
	public static class AnonymousFunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode FUNCTION() { return getToken(fplusParser.FUNCTION, 0); }
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
		public AnonymousFunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_anonymousFunctionDeclaration; }
	}

	public final AnonymousFunctionDeclarationContext anonymousFunctionDeclaration() throws RecognitionException {
		AnonymousFunctionDeclarationContext _localctx = new AnonymousFunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_anonymousFunctionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			match(FUNCTION);
			setState(97);
			match(LPAREN);
			setState(99);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(98);
				params();
				}
			}

			setState(101);
			match(RPAREN);
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 240696622592L) != 0)) {
				{
				{
				setState(102);
				statement();
				}
				}
				setState(107);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(108);
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
			setState(110);
			match(ID);
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(111);
				match(COMMA);
				setState(112);
				match(ID);
				}
				}
				setState(117);
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
			setState(118);
			match(LBRACE);
			setState(127);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(119);
				keyValuePair();
				setState(124);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(120);
					match(COMMA);
					setState(121);
					keyValuePair();
					}
					}
					setState(126);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(129);
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
			setState(131);
			match(ID);
			setState(132);
			match(T__0);
			setState(133);
			expr(0);
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
			setState(135);
			match(LOCAL);
			setState(136);
			match(ID);
			setState(137);
			match(T__0);
			setState(138);
			expr(0);
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
			setState(140);
			match(ID);
			}
			setState(141);
			match(T__0);
			setState(142);
			expr(0);
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
			setState(144);
			expr(0);
			setState(149);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(145);
				match(COMMA);
				setState(146);
				expr(0);
				}
				}
				setState(151);
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
		public LoadstringContext loadstring() {
			return getRuleContext(LoadstringContext.class,0);
		}
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
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				setState(153);
				match(STRING);
				}
				break;
			case 2:
				{
				setState(154);
				match(INTEGER);
				}
				break;
			case 3:
				{
				setState(155);
				match(FLOAT);
				}
				break;
			case 4:
				{
				setState(156);
				match(BOOLEAN);
				}
				break;
			case 5:
				{
				setState(157);
				loadstring();
				}
				break;
			case 6:
				{
				setState(158);
				arrayExpr();
				}
				break;
			case 7:
				{
				setState(159);
				objectExpr();
				}
				break;
			case 8:
				{
				setState(160);
				functionCall();
				}
				break;
			case 9:
				{
				setState(161);
				objectAccess();
				}
				break;
			case 10:
				{
				setState(162);
				arrayAccess();
				}
				break;
			case 11:
				{
				setState(163);
				variableAccess();
				}
				break;
			case 12:
				{
				setState(164);
				parens();
				}
				break;
			case 13:
				{
				setState(165);
				inlineJsExpr();
				}
				break;
			case 14:
				{
				setState(166);
				javaScriptEmbed();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(174);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExprContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_expr);
					setState(169);
					if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
					setState(170);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 124L) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(171);
					expr(12);
					}
					} 
				}
				setState(176);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(fplusParser.ID, 0); }
		public AnonymousFunctionDeclarationContext anonymousFunctionDeclaration() {
			return getRuleContext(AnonymousFunctionDeclarationContext.class,0);
		}
		public LoadstringContext loadstring() {
			return getRuleContext(LoadstringContext.class,0);
		}
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
			setState(186);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(177);
				match(ID);
				}
				break;
			case FUNCTION:
				enterOuterAlt(_localctx, 2);
				{
				setState(178);
				anonymousFunctionDeclaration();
				}
				break;
			case LOADSTRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(179);
				loadstring();
				setState(180);
				match(LPAREN);
				setState(182);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 240685997568L) != 0)) {
					{
					setState(181);
					exprList();
					}
				}

				setState(184);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		public TerminalNode ID() { return getToken(fplusParser.ID, 0); }
		public ObjectDeclarationContext objectDeclaration() {
			return getRuleContext(ObjectDeclarationContext.class,0);
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
			setState(198);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(188);
				match(ID);
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(189);
				objectDeclaration();
				setState(196);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case DOT:
					{
					setState(190);
					match(DOT);
					setState(191);
					match(ID);
					}
					break;
				case LSQUARE:
					{
					setState(192);
					match(LSQUARE);
					setState(193);
					expr(0);
					setState(194);
					match(RSQUARE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		public ArrayExprContext arrayExpr() {
			return getRuleContext(ArrayExprContext.class,0);
		}
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
			setState(206);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(200);
				match(ID);
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(201);
				arrayExpr();
				setState(202);
				match(LSQUARE);
				setState(203);
				match(INTEGER);
				setState(204);
				match(RSQUARE);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
			setState(208);
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
			setState(210);
			match(LPAREN);
			setState(211);
			expr(0);
			setState(212);
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
	public static class LoadstringContext extends ParserRuleContext {
		public TerminalNode LOADSTRING() { return getToken(fplusParser.LOADSTRING, 0); }
		public TerminalNode LPAREN() { return getToken(fplusParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(fplusParser.RPAREN, 0); }
		public LoadstringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loadstring; }
	}

	public final LoadstringContext loadstring() throws RecognitionException {
		LoadstringContext _localctx = new LoadstringContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_loadstring);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214);
			match(LOADSTRING);
			setState(215);
			match(LPAREN);
			setState(216);
			expr(0);
			setState(217);
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
		enterRule(_localctx, 36, RULE_arrayExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			match(LBRACE);
			setState(221);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 240685997568L) != 0)) {
				{
				setState(220);
				exprList();
				}
			}

			setState(223);
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
		enterRule(_localctx, 38, RULE_objectExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(225);
			match(LBRACE);
			setState(234);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(226);
				keyValuePair();
				setState(231);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(227);
					match(COMMA);
					setState(228);
					keyValuePair();
					}
					}
					setState(233);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(236);
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
		enterRule(_localctx, 40, RULE_inlineJsExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
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
		enterRule(_localctx, 42, RULE_javaScriptEmbed);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
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
		public List<TerminalNode> END() { return getTokens(fplusParser.END); }
		public TerminalNode END(int i) {
			return getToken(fplusParser.END, i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
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
		enterRule(_localctx, 44, RULE_ifStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			match(IF);
			setState(243);
			expr(0);
			setState(244);
			match(THEN);
			setState(248);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 240696622592L) != 0)) {
				{
				{
				setState(245);
				statement();
				}
				}
				setState(250);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(252);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				{
				setState(251);
				match(END);
				}
				break;
			}
			setState(260);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELSEIF) {
				{
				{
				setState(254);
				elseIfStatement();
				setState(256);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
				case 1:
					{
					setState(255);
					match(END);
					}
					break;
				}
				}
				}
				setState(262);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(267);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(263);
				elseStatement();
				setState(265);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
				case 1:
					{
					setState(264);
					match(END);
					}
					break;
				}
				}
			}

			setState(269);
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
	public static class WhileStatementContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(fplusParser.WHILE, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode DO() { return getToken(fplusParser.DO, 0); }
		public TerminalNode END() { return getToken(fplusParser.END, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_whileStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
			match(WHILE);
			setState(272);
			expr(0);
			setState(273);
			match(DO);
			setState(277);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 240696622592L) != 0)) {
				{
				{
				setState(274);
				statement();
				}
				}
				setState(279);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(280);
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
		public ElseIfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIfStatement; }
	}

	public final ElseIfStatementContext elseIfStatement() throws RecognitionException {
		ElseIfStatementContext _localctx = new ElseIfStatementContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_elseIfStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			match(ELSEIF);
			setState(283);
			expr(0);
			setState(284);
			match(THEN);
			setState(288);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 240696622592L) != 0)) {
				{
				{
				setState(285);
				statement();
				}
				}
				setState(290);
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
	public static class ElseStatementContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(fplusParser.ELSE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ElseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseStatement; }
	}

	public final ElseStatementContext elseStatement() throws RecognitionException {
		ElseStatementContext _localctx = new ElseStatementContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_elseStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(291);
			match(ELSE);
			setState(295);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 240696622592L) != 0)) {
				{
				{
				setState(292);
				statement();
				}
				}
				setState(297);
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 11:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 11);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001&\u012b\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0001\u0000\u0005\u00006\b\u0000\n\u0000\f\u0000"+
		"9\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0003\u0001F\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002"+
		"K\b\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0003\u0003P\b\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003V\b\u0003\u0001"+
		"\u0003\u0001\u0003\u0005\u0003Z\b\u0003\n\u0003\f\u0003]\t\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004d\b"+
		"\u0004\u0001\u0004\u0001\u0004\u0005\u0004h\b\u0004\n\u0004\f\u0004k\t"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0005"+
		"\u0005r\b\u0005\n\u0005\f\u0005u\t\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0005\u0006{\b\u0006\n\u0006\f\u0006~\t\u0006\u0003"+
		"\u0006\u0080\b\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0005\n\u0094\b\n\n\n\f\n\u0097"+
		"\t\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u00a8\b\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u00ad\b\u000b\n\u000b\f\u000b"+
		"\u00b0\t\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f\u00b7\b"+
		"\f\u0001\f\u0001\f\u0003\f\u00bb\b\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0003\r\u00c5\b\r\u0003\r\u00c7\b\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0003\u000e"+
		"\u00cf\b\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0012\u0001\u0012\u0003\u0012\u00de\b\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0005\u0013\u00e6\b\u0013"+
		"\n\u0013\f\u0013\u00e9\t\u0013\u0003\u0013\u00eb\b\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0005\u0016\u00f7\b\u0016\n\u0016\f\u0016"+
		"\u00fa\t\u0016\u0001\u0016\u0003\u0016\u00fd\b\u0016\u0001\u0016\u0001"+
		"\u0016\u0003\u0016\u0101\b\u0016\u0005\u0016\u0103\b\u0016\n\u0016\f\u0016"+
		"\u0106\t\u0016\u0001\u0016\u0001\u0016\u0003\u0016\u010a\b\u0016\u0003"+
		"\u0016\u010c\b\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0005\u0017\u0114\b\u0017\n\u0017\f\u0017\u0117\t\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018"+
		"\u0005\u0018\u011f\b\u0018\n\u0018\f\u0018\u0122\t\u0018\u0001\u0019\u0001"+
		"\u0019\u0005\u0019\u0126\b\u0019\n\u0019\f\u0019\u0129\t\u0019\u0001\u0019"+
		"\u0000\u0001\u0016\u001a\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02\u0000\u0001\u0001\u0000"+
		"\u0002\u0006\u0143\u00007\u0001\u0000\u0000\u0000\u0002E\u0001\u0000\u0000"+
		"\u0000\u0004G\u0001\u0000\u0000\u0000\u0006O\u0001\u0000\u0000\u0000\b"+
		"`\u0001\u0000\u0000\u0000\nn\u0001\u0000\u0000\u0000\fv\u0001\u0000\u0000"+
		"\u0000\u000e\u0083\u0001\u0000\u0000\u0000\u0010\u0087\u0001\u0000\u0000"+
		"\u0000\u0012\u008c\u0001\u0000\u0000\u0000\u0014\u0090\u0001\u0000\u0000"+
		"\u0000\u0016\u00a7\u0001\u0000\u0000\u0000\u0018\u00ba\u0001\u0000\u0000"+
		"\u0000\u001a\u00c6\u0001\u0000\u0000\u0000\u001c\u00ce\u0001\u0000\u0000"+
		"\u0000\u001e\u00d0\u0001\u0000\u0000\u0000 \u00d2\u0001\u0000\u0000\u0000"+
		"\"\u00d6\u0001\u0000\u0000\u0000$\u00db\u0001\u0000\u0000\u0000&\u00e1"+
		"\u0001\u0000\u0000\u0000(\u00ee\u0001\u0000\u0000\u0000*\u00f0\u0001\u0000"+
		"\u0000\u0000,\u00f2\u0001\u0000\u0000\u0000.\u010f\u0001\u0000\u0000\u0000"+
		"0\u011a\u0001\u0000\u0000\u00002\u0123\u0001\u0000\u0000\u000046\u0003"+
		"\u0002\u0001\u000054\u0001\u0000\u0000\u000069\u0001\u0000\u0000\u0000"+
		"75\u0001\u0000\u0000\u000078\u0001\u0000\u0000\u00008:\u0001\u0000\u0000"+
		"\u000097\u0001\u0000\u0000\u0000:;\u0005\u0000\u0000\u0001;\u0001\u0001"+
		"\u0000\u0000\u0000<F\u0003\u0004\u0002\u0000=F\u0003\u0006\u0003\u0000"+
		">F\u0003\b\u0004\u0000?F\u0003\f\u0006\u0000@F\u0003\u000e\u0007\u0000"+
		"AF\u0003\u0010\b\u0000BF\u0003\u0016\u000b\u0000CF\u0003,\u0016\u0000"+
		"DF\u0003.\u0017\u0000E<\u0001\u0000\u0000\u0000E=\u0001\u0000\u0000\u0000"+
		"E>\u0001\u0000\u0000\u0000E?\u0001\u0000\u0000\u0000E@\u0001\u0000\u0000"+
		"\u0000EA\u0001\u0000\u0000\u0000EB\u0001\u0000\u0000\u0000EC\u0001\u0000"+
		"\u0000\u0000ED\u0001\u0000\u0000\u0000F\u0003\u0001\u0000\u0000\u0000"+
		"GH\u0005\r\u0000\u0000HJ\u0005\u0019\u0000\u0000IK\u0003\u0014\n\u0000"+
		"JI\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000\u0000KL\u0001\u0000\u0000"+
		"\u0000LM\u0005\u001a\u0000\u0000M\u0005\u0001\u0000\u0000\u0000NP\u0005"+
		"\u0017\u0000\u0000ON\u0001\u0000\u0000\u0000OP\u0001\u0000\u0000\u0000"+
		"PQ\u0001\u0000\u0000\u0000QR\u0005\u000e\u0000\u0000RS\u0005#\u0000\u0000"+
		"SU\u0005\u0019\u0000\u0000TV\u0003\n\u0005\u0000UT\u0001\u0000\u0000\u0000"+
		"UV\u0001\u0000\u0000\u0000VW\u0001\u0000\u0000\u0000W[\u0005\u001a\u0000"+
		"\u0000XZ\u0003\u0002\u0001\u0000YX\u0001\u0000\u0000\u0000Z]\u0001\u0000"+
		"\u0000\u0000[Y\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000\\^\u0001"+
		"\u0000\u0000\u0000][\u0001\u0000\u0000\u0000^_\u0005\u0010\u0000\u0000"+
		"_\u0007\u0001\u0000\u0000\u0000`a\u0005\u000e\u0000\u0000ac\u0005\u0019"+
		"\u0000\u0000bd\u0003\n\u0005\u0000cb\u0001\u0000\u0000\u0000cd\u0001\u0000"+
		"\u0000\u0000de\u0001\u0000\u0000\u0000ei\u0005\u001a\u0000\u0000fh\u0003"+
		"\u0002\u0001\u0000gf\u0001\u0000\u0000\u0000hk\u0001\u0000\u0000\u0000"+
		"ig\u0001\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000jl\u0001\u0000\u0000"+
		"\u0000ki\u0001\u0000\u0000\u0000lm\u0005\u0010\u0000\u0000m\t\u0001\u0000"+
		"\u0000\u0000ns\u0005#\u0000\u0000op\u0005!\u0000\u0000pr\u0005#\u0000"+
		"\u0000qo\u0001\u0000\u0000\u0000ru\u0001\u0000\u0000\u0000sq\u0001\u0000"+
		"\u0000\u0000st\u0001\u0000\u0000\u0000t\u000b\u0001\u0000\u0000\u0000"+
		"us\u0001\u0000\u0000\u0000v\u007f\u0005\u001b\u0000\u0000w|\u0003\u0012"+
		"\t\u0000xy\u0005!\u0000\u0000y{\u0003\u0012\t\u0000zx\u0001\u0000\u0000"+
		"\u0000{~\u0001\u0000\u0000\u0000|z\u0001\u0000\u0000\u0000|}\u0001\u0000"+
		"\u0000\u0000}\u0080\u0001\u0000\u0000\u0000~|\u0001\u0000\u0000\u0000"+
		"\u007fw\u0001\u0000\u0000\u0000\u007f\u0080\u0001\u0000\u0000\u0000\u0080"+
		"\u0081\u0001\u0000\u0000\u0000\u0081\u0082\u0005\u001c\u0000\u0000\u0082"+
		"\r\u0001\u0000\u0000\u0000\u0083\u0084\u0005#\u0000\u0000\u0084\u0085"+
		"\u0005\u0001\u0000\u0000\u0085\u0086\u0003\u0016\u000b\u0000\u0086\u000f"+
		"\u0001\u0000\u0000\u0000\u0087\u0088\u0005\u0017\u0000\u0000\u0088\u0089"+
		"\u0005#\u0000\u0000\u0089\u008a\u0005\u0001\u0000\u0000\u008a\u008b\u0003"+
		"\u0016\u000b\u0000\u008b\u0011\u0001\u0000\u0000\u0000\u008c\u008d\u0005"+
		"#\u0000\u0000\u008d\u008e\u0005\u0001\u0000\u0000\u008e\u008f\u0003\u0016"+
		"\u000b\u0000\u008f\u0013\u0001\u0000\u0000\u0000\u0090\u0095\u0003\u0016"+
		"\u000b\u0000\u0091\u0092\u0005!\u0000\u0000\u0092\u0094\u0003\u0016\u000b"+
		"\u0000\u0093\u0091\u0001\u0000\u0000\u0000\u0094\u0097\u0001\u0000\u0000"+
		"\u0000\u0095\u0093\u0001\u0000\u0000\u0000\u0095\u0096\u0001\u0000\u0000"+
		"\u0000\u0096\u0015\u0001\u0000\u0000\u0000\u0097\u0095\u0001\u0000\u0000"+
		"\u0000\u0098\u0099\u0006\u000b\uffff\uffff\u0000\u0099\u00a8\u0005\t\u0000"+
		"\u0000\u009a\u00a8\u0005\n\u0000\u0000\u009b\u00a8\u0005\u000b\u0000\u0000"+
		"\u009c\u00a8\u0005\f\u0000\u0000\u009d\u00a8\u0003\"\u0011\u0000\u009e"+
		"\u00a8\u0003$\u0012\u0000\u009f\u00a8\u0003&\u0013\u0000\u00a0\u00a8\u0003"+
		"\u0018\f\u0000\u00a1\u00a8\u0003\u001a\r\u0000\u00a2\u00a8\u0003\u001c"+
		"\u000e\u0000\u00a3\u00a8\u0003\u001e\u000f\u0000\u00a4\u00a8\u0003 \u0010"+
		"\u0000\u00a5\u00a8\u0003(\u0014\u0000\u00a6\u00a8\u0003*\u0015\u0000\u00a7"+
		"\u0098\u0001\u0000\u0000\u0000\u00a7\u009a\u0001\u0000\u0000\u0000\u00a7"+
		"\u009b\u0001\u0000\u0000\u0000\u00a7\u009c\u0001\u0000\u0000\u0000\u00a7"+
		"\u009d\u0001\u0000\u0000\u0000\u00a7\u009e\u0001\u0000\u0000\u0000\u00a7"+
		"\u009f\u0001\u0000\u0000\u0000\u00a7\u00a0\u0001\u0000\u0000\u0000\u00a7"+
		"\u00a1\u0001\u0000\u0000\u0000\u00a7\u00a2\u0001\u0000\u0000\u0000\u00a7"+
		"\u00a3\u0001\u0000\u0000\u0000\u00a7\u00a4\u0001\u0000\u0000\u0000\u00a7"+
		"\u00a5\u0001\u0000\u0000\u0000\u00a7\u00a6\u0001\u0000\u0000\u0000\u00a8"+
		"\u00ae\u0001\u0000\u0000\u0000\u00a9\u00aa\n\u000b\u0000\u0000\u00aa\u00ab"+
		"\u0007\u0000\u0000\u0000\u00ab\u00ad\u0003\u0016\u000b\f\u00ac\u00a9\u0001"+
		"\u0000\u0000\u0000\u00ad\u00b0\u0001\u0000\u0000\u0000\u00ae\u00ac\u0001"+
		"\u0000\u0000\u0000\u00ae\u00af\u0001\u0000\u0000\u0000\u00af\u0017\u0001"+
		"\u0000\u0000\u0000\u00b0\u00ae\u0001\u0000\u0000\u0000\u00b1\u00bb\u0005"+
		"#\u0000\u0000\u00b2\u00bb\u0003\b\u0004\u0000\u00b3\u00b4\u0003\"\u0011"+
		"\u0000\u00b4\u00b6\u0005\u0019\u0000\u0000\u00b5\u00b7\u0003\u0014\n\u0000"+
		"\u00b6\u00b5\u0001\u0000\u0000\u0000\u00b6\u00b7\u0001\u0000\u0000\u0000"+
		"\u00b7\u00b8\u0001\u0000\u0000\u0000\u00b8\u00b9\u0005\u001a\u0000\u0000"+
		"\u00b9\u00bb\u0001\u0000\u0000\u0000\u00ba\u00b1\u0001\u0000\u0000\u0000"+
		"\u00ba\u00b2\u0001\u0000\u0000\u0000\u00ba\u00b3\u0001\u0000\u0000\u0000"+
		"\u00bb\u0019\u0001\u0000\u0000\u0000\u00bc\u00c7\u0005#\u0000\u0000\u00bd"+
		"\u00c4\u0003\f\u0006\u0000\u00be\u00bf\u0005\u001f\u0000\u0000\u00bf\u00c5"+
		"\u0005#\u0000\u0000\u00c0\u00c1\u0005\u001d\u0000\u0000\u00c1\u00c2\u0003"+
		"\u0016\u000b\u0000\u00c2\u00c3\u0005\u001e\u0000\u0000\u00c3\u00c5\u0001"+
		"\u0000\u0000\u0000\u00c4\u00be\u0001\u0000\u0000\u0000\u00c4\u00c0\u0001"+
		"\u0000\u0000\u0000\u00c5\u00c7\u0001\u0000\u0000\u0000\u00c6\u00bc\u0001"+
		"\u0000\u0000\u0000\u00c6\u00bd\u0001\u0000\u0000\u0000\u00c7\u001b\u0001"+
		"\u0000\u0000\u0000\u00c8\u00cf\u0005#\u0000\u0000\u00c9\u00ca\u0003$\u0012"+
		"\u0000\u00ca\u00cb\u0005\u001d\u0000\u0000\u00cb\u00cc\u0005\n\u0000\u0000"+
		"\u00cc\u00cd\u0005\u001e\u0000\u0000\u00cd\u00cf\u0001\u0000\u0000\u0000"+
		"\u00ce\u00c8\u0001\u0000\u0000\u0000\u00ce\u00c9\u0001\u0000\u0000\u0000"+
		"\u00cf\u001d\u0001\u0000\u0000\u0000\u00d0\u00d1\u0005#\u0000\u0000\u00d1"+
		"\u001f\u0001\u0000\u0000\u0000\u00d2\u00d3\u0005\u0019\u0000\u0000\u00d3"+
		"\u00d4\u0003\u0016\u000b\u0000\u00d4\u00d5\u0005\u001a\u0000\u0000\u00d5"+
		"!\u0001\u0000\u0000\u0000\u00d6\u00d7\u0005\u000f\u0000\u0000\u00d7\u00d8"+
		"\u0005\u0019\u0000\u0000\u00d8\u00d9\u0003\u0016\u000b\u0000\u00d9\u00da"+
		"\u0005\u001a\u0000\u0000\u00da#\u0001\u0000\u0000\u0000\u00db\u00dd\u0005"+
		"\u001b\u0000\u0000\u00dc\u00de\u0003\u0014\n\u0000\u00dd\u00dc\u0001\u0000"+
		"\u0000\u0000\u00dd\u00de\u0001\u0000\u0000\u0000\u00de\u00df\u0001\u0000"+
		"\u0000\u0000\u00df\u00e0\u0005\u001c\u0000\u0000\u00e0%\u0001\u0000\u0000"+
		"\u0000\u00e1\u00ea\u0005\u001b\u0000\u0000\u00e2\u00e7\u0003\u0012\t\u0000"+
		"\u00e3\u00e4\u0005!\u0000\u0000\u00e4\u00e6\u0003\u0012\t\u0000\u00e5"+
		"\u00e3\u0001\u0000\u0000\u0000\u00e6\u00e9\u0001\u0000\u0000\u0000\u00e7"+
		"\u00e5\u0001\u0000\u0000\u0000\u00e7\u00e8\u0001\u0000\u0000\u0000\u00e8"+
		"\u00eb\u0001\u0000\u0000\u0000\u00e9\u00e7\u0001\u0000\u0000\u0000\u00ea"+
		"\u00e2\u0001\u0000\u0000\u0000\u00ea\u00eb\u0001\u0000\u0000\u0000\u00eb"+
		"\u00ec\u0001\u0000\u0000\u0000\u00ec\u00ed\u0005\u001c\u0000\u0000\u00ed"+
		"\'\u0001\u0000\u0000\u0000\u00ee\u00ef\u0005$\u0000\u0000\u00ef)\u0001"+
		"\u0000\u0000\u0000\u00f0\u00f1\u0005%\u0000\u0000\u00f1+\u0001\u0000\u0000"+
		"\u0000\u00f2\u00f3\u0005\u0011\u0000\u0000\u00f3\u00f4\u0003\u0016\u000b"+
		"\u0000\u00f4\u00f8\u0005\u0012\u0000\u0000\u00f5\u00f7\u0003\u0002\u0001"+
		"\u0000\u00f6\u00f5\u0001\u0000\u0000\u0000\u00f7\u00fa\u0001\u0000\u0000"+
		"\u0000\u00f8\u00f6\u0001\u0000\u0000\u0000\u00f8\u00f9\u0001\u0000\u0000"+
		"\u0000\u00f9\u00fc\u0001\u0000\u0000\u0000\u00fa\u00f8\u0001\u0000\u0000"+
		"\u0000\u00fb\u00fd\u0005\u0010\u0000\u0000\u00fc\u00fb\u0001\u0000\u0000"+
		"\u0000\u00fc\u00fd\u0001\u0000\u0000\u0000\u00fd\u0104\u0001\u0000\u0000"+
		"\u0000\u00fe\u0100\u00030\u0018\u0000\u00ff\u0101\u0005\u0010\u0000\u0000"+
		"\u0100\u00ff\u0001\u0000\u0000\u0000\u0100\u0101\u0001\u0000\u0000\u0000"+
		"\u0101\u0103\u0001\u0000\u0000\u0000\u0102\u00fe\u0001\u0000\u0000\u0000"+
		"\u0103\u0106\u0001\u0000\u0000\u0000\u0104\u0102\u0001\u0000\u0000\u0000"+
		"\u0104\u0105\u0001\u0000\u0000\u0000\u0105\u010b\u0001\u0000\u0000\u0000"+
		"\u0106\u0104\u0001\u0000\u0000\u0000\u0107\u0109\u00032\u0019\u0000\u0108"+
		"\u010a\u0005\u0010\u0000\u0000\u0109\u0108\u0001\u0000\u0000\u0000\u0109"+
		"\u010a\u0001\u0000\u0000\u0000\u010a\u010c\u0001\u0000\u0000\u0000\u010b"+
		"\u0107\u0001\u0000\u0000\u0000\u010b\u010c\u0001\u0000\u0000\u0000\u010c"+
		"\u010d\u0001\u0000\u0000\u0000\u010d\u010e\u0005\u0010\u0000\u0000\u010e"+
		"-\u0001\u0000\u0000\u0000\u010f\u0110\u0005\u0015\u0000\u0000\u0110\u0111"+
		"\u0003\u0016\u000b\u0000\u0111\u0115\u0005\u0016\u0000\u0000\u0112\u0114"+
		"\u0003\u0002\u0001\u0000\u0113\u0112\u0001\u0000\u0000\u0000\u0114\u0117"+
		"\u0001\u0000\u0000\u0000\u0115\u0113\u0001\u0000\u0000\u0000\u0115\u0116"+
		"\u0001\u0000\u0000\u0000\u0116\u0118\u0001\u0000\u0000\u0000\u0117\u0115"+
		"\u0001\u0000\u0000\u0000\u0118\u0119\u0005\u0010\u0000\u0000\u0119/\u0001"+
		"\u0000\u0000\u0000\u011a\u011b\u0005\u0014\u0000\u0000\u011b\u011c\u0003"+
		"\u0016\u000b\u0000\u011c\u0120\u0005\u0012\u0000\u0000\u011d\u011f\u0003"+
		"\u0002\u0001\u0000\u011e\u011d\u0001\u0000\u0000\u0000\u011f\u0122\u0001"+
		"\u0000\u0000\u0000\u0120\u011e\u0001\u0000\u0000\u0000\u0120\u0121\u0001"+
		"\u0000\u0000\u0000\u01211\u0001\u0000\u0000\u0000\u0122\u0120\u0001\u0000"+
		"\u0000\u0000\u0123\u0127\u0005\u0013\u0000\u0000\u0124\u0126\u0003\u0002"+
		"\u0001\u0000\u0125\u0124\u0001\u0000\u0000\u0000\u0126\u0129\u0001\u0000"+
		"\u0000\u0000\u0127\u0125\u0001\u0000\u0000\u0000\u0127\u0128\u0001\u0000"+
		"\u0000\u0000\u01283\u0001\u0000\u0000\u0000\u0129\u0127\u0001\u0000\u0000"+
		"\u0000\u001f7EJOU[cis|\u007f\u0095\u00a7\u00ae\u00b6\u00ba\u00c4\u00c6"+
		"\u00ce\u00dd\u00e7\u00ea\u00f8\u00fc\u0100\u0104\u0109\u010b\u0115\u0120"+
		"\u0127";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}