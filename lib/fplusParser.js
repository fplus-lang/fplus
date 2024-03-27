"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antlr = _interopRequireDefault(require("antlr4"));
var _fplusListener = _interopRequireDefault(require("./fplusListener.js"));
var _fplusVisitor = _interopRequireDefault(require("./fplusVisitor.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Generated from fplus.g4 by ANTLR 4.13.1
// jshint ignore: start

const serializedATN = [4, 1, 32, 251, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 1, 0, 5, 0, 52, 8, 0, 10, 0, 12, 0, 55, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 67, 8, 1, 1, 2, 1, 2, 1, 2, 3, 2, 72, 8, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 80, 8, 3, 1, 3, 1, 3, 5, 3, 84, 8, 3, 10, 3, 12, 3, 87, 9, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 96, 8, 4, 1, 4, 1, 4, 5, 4, 100, 8, 4, 10, 4, 12, 4, 103, 9, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 5, 5, 110, 8, 5, 10, 5, 12, 5, 113, 9, 5, 1, 6, 1, 6, 1, 6, 1, 6, 5, 6, 119, 8, 6, 10, 6, 12, 6, 122, 9, 6, 3, 6, 124, 8, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 5, 10, 144, 8, 10, 10, 10, 12, 10, 147, 9, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 162, 8, 11, 1, 12, 1, 12, 1, 12, 3, 12, 167, 8, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 178, 8, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 3, 17, 193, 8, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 5, 18, 201, 8, 18, 10, 18, 12, 18, 204, 9, 18, 3, 18, 206, 8, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 3, 21, 219, 8, 21, 1, 21, 5, 21, 222, 8, 21, 10, 21, 12, 21, 225, 9, 21, 1, 21, 3, 21, 228, 8, 21, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1, 23, 4, 23, 240, 8, 23, 11, 23, 12, 23, 241, 1, 23, 3, 23, 245, 8, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 0, 0, 25, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 0, 0, 264, 0, 53, 1, 0, 0, 0, 2, 66, 1, 0, 0, 0, 4, 68, 1, 0, 0, 0, 6, 75, 1, 0, 0, 0, 8, 90, 1, 0, 0, 0, 10, 106, 1, 0, 0, 0, 12, 114, 1, 0, 0, 0, 14, 127, 1, 0, 0, 0, 16, 131, 1, 0, 0, 0, 18, 136, 1, 0, 0, 0, 20, 140, 1, 0, 0, 0, 22, 161, 1, 0, 0, 0, 24, 163, 1, 0, 0, 0, 26, 170, 1, 0, 0, 0, 28, 179, 1, 0, 0, 0, 30, 184, 1, 0, 0, 0, 32, 186, 1, 0, 0, 0, 34, 190, 1, 0, 0, 0, 36, 196, 1, 0, 0, 0, 38, 209, 1, 0, 0, 0, 40, 211, 1, 0, 0, 0, 42, 213, 1, 0, 0, 0, 44, 229, 1, 0, 0, 0, 46, 235, 1, 0, 0, 0, 48, 246, 1, 0, 0, 0, 50, 52, 3, 2, 1, 0, 51, 50, 1, 0, 0, 0, 52, 55, 1, 0, 0, 0, 53, 51, 1, 0, 0, 0, 53, 54, 1, 0, 0, 0, 54, 56, 1, 0, 0, 0, 55, 53, 1, 0, 0, 0, 56, 57, 5, 0, 0, 1, 57, 1, 1, 0, 0, 0, 58, 67, 3, 4, 2, 0, 59, 67, 3, 6, 3, 0, 60, 67, 3, 12, 6, 0, 61, 67, 3, 14, 7, 0, 62, 67, 3, 16, 8, 0, 63, 67, 3, 22, 11, 0, 64, 67, 3, 42, 21, 0, 65, 67, 3, 44, 22, 0, 66, 58, 1, 0, 0, 0, 66, 59, 1, 0, 0, 0, 66, 60, 1, 0, 0, 0, 66, 61, 1, 0, 0, 0, 66, 62, 1, 0, 0, 0, 66, 63, 1, 0, 0, 0, 66, 64, 1, 0, 0, 0, 66, 65, 1, 0, 0, 0, 67, 3, 1, 0, 0, 0, 68, 69, 5, 8, 0, 0, 69, 71, 5, 19, 0, 0, 70, 72, 3, 20, 10, 0, 71, 70, 1, 0, 0, 0, 71, 72, 1, 0, 0, 0, 72, 73, 1, 0, 0, 0, 73, 74, 5, 20, 0, 0, 74, 5, 1, 0, 0, 0, 75, 76, 5, 9, 0, 0, 76, 77, 5, 29, 0, 0, 77, 79, 5, 19, 0, 0, 78, 80, 3, 10, 5, 0, 79, 78, 1, 0, 0, 0, 79, 80, 1, 0, 0, 0, 80, 81, 1, 0, 0, 0, 81, 85, 5, 20, 0, 0, 82, 84, 3, 2, 1, 0, 83, 82, 1, 0, 0, 0, 84, 87, 1, 0, 0, 0, 85, 83, 1, 0, 0, 0, 85, 86, 1, 0, 0, 0, 86, 88, 1, 0, 0, 0, 87, 85, 1, 0, 0, 0, 88, 89, 5, 10, 0, 0, 89, 7, 1, 0, 0, 0, 90, 91, 5, 17, 0, 0, 91, 92, 5, 9, 0, 0, 92, 93, 5, 29, 0, 0, 93, 95, 5, 19, 0, 0, 94, 96, 3, 10, 5, 0, 95, 94, 1, 0, 0, 0, 95, 96, 1, 0, 0, 0, 96, 97, 1, 0, 0, 0, 97, 101, 5, 20, 0, 0, 98, 100, 3, 2, 1, 0, 99, 98, 1, 0, 0, 0, 100, 103, 1, 0, 0, 0, 101, 99, 1, 0, 0, 0, 101, 102, 1, 0, 0, 0, 102, 104, 1, 0, 0, 0, 103, 101, 1, 0, 0, 0, 104, 105, 5, 10, 0, 0, 105, 9, 1, 0, 0, 0, 106, 111, 5, 29, 0, 0, 107, 108, 5, 27, 0, 0, 108, 110, 5, 29, 0, 0, 109, 107, 1, 0, 0, 0, 110, 113, 1, 0, 0, 0, 111, 109, 1, 0, 0, 0, 111, 112, 1, 0, 0, 0, 112, 11, 1, 0, 0, 0, 113, 111, 1, 0, 0, 0, 114, 123, 5, 21, 0, 0, 115, 120, 3, 18, 9, 0, 116, 117, 5, 27, 0, 0, 117, 119, 3, 18, 9, 0, 118, 116, 1, 0, 0, 0, 119, 122, 1, 0, 0, 0, 120, 118, 1, 0, 0, 0, 120, 121, 1, 0, 0, 0, 121, 124, 1, 0, 0, 0, 122, 120, 1, 0, 0, 0, 123, 115, 1, 0, 0, 0, 123, 124, 1, 0, 0, 0, 124, 125, 1, 0, 0, 0, 125, 126, 5, 22, 0, 0, 126, 13, 1, 0, 0, 0, 127, 128, 5, 29, 0, 0, 128, 129, 5, 1, 0, 0, 129, 130, 3, 22, 11, 0, 130, 15, 1, 0, 0, 0, 131, 132, 5, 17, 0, 0, 132, 133, 5, 29, 0, 0, 133, 134, 5, 1, 0, 0, 134, 135, 3, 22, 11, 0, 135, 17, 1, 0, 0, 0, 136, 137, 5, 29, 0, 0, 137, 138, 5, 1, 0, 0, 138, 139, 3, 22, 11, 0, 139, 19, 1, 0, 0, 0, 140, 145, 3, 22, 11, 0, 141, 142, 5, 27, 0, 0, 142, 144, 3, 22, 11, 0, 143, 141, 1, 0, 0, 0, 144, 147, 1, 0, 0, 0, 145, 143, 1, 0, 0, 0, 145, 146, 1, 0, 0, 0, 146, 21, 1, 0, 0, 0, 147, 145, 1, 0, 0, 0, 148, 162, 5, 4, 0, 0, 149, 162, 5, 5, 0, 0, 150, 162, 5, 6, 0, 0, 151, 162, 5, 7, 0, 0, 152, 162, 3, 34, 17, 0, 153, 162, 3, 36, 18, 0, 154, 162, 3, 24, 12, 0, 155, 162, 3, 26, 13, 0, 156, 162, 3, 28, 14, 0, 157, 162, 3, 30, 15, 0, 158, 162, 3, 32, 16, 0, 159, 162, 3, 38, 19, 0, 160, 162, 3, 40, 20, 0, 161, 148, 1, 0, 0, 0, 161, 149, 1, 0, 0, 0, 161, 150, 1, 0, 0, 0, 161, 151, 1, 0, 0, 0, 161, 152, 1, 0, 0, 0, 161, 153, 1, 0, 0, 0, 161, 154, 1, 0, 0, 0, 161, 155, 1, 0, 0, 0, 161, 156, 1, 0, 0, 0, 161, 157, 1, 0, 0, 0, 161, 158, 1, 0, 0, 0, 161, 159, 1, 0, 0, 0, 161, 160, 1, 0, 0, 0, 162, 23, 1, 0, 0, 0, 163, 164, 5, 29, 0, 0, 164, 166, 5, 19, 0, 0, 165, 167, 3, 20, 10, 0, 166, 165, 1, 0, 0, 0, 166, 167, 1, 0, 0, 0, 167, 168, 1, 0, 0, 0, 168, 169, 5, 20, 0, 0, 169, 25, 1, 0, 0, 0, 170, 177, 5, 29, 0, 0, 171, 172, 5, 25, 0, 0, 172, 178, 5, 29, 0, 0, 173, 174, 5, 23, 0, 0, 174, 175, 3, 22, 11, 0, 175, 176, 5, 24, 0, 0, 176, 178, 1, 0, 0, 0, 177, 171, 1, 0, 0, 0, 177, 173, 1, 0, 0, 0, 178, 27, 1, 0, 0, 0, 179, 180, 5, 29, 0, 0, 180, 181, 5, 23, 0, 0, 181, 182, 5, 5, 0, 0, 182, 183, 5, 24, 0, 0, 183, 29, 1, 0, 0, 0, 184, 185, 5, 29, 0, 0, 185, 31, 1, 0, 0, 0, 186, 187, 5, 19, 0, 0, 187, 188, 3, 22, 11, 0, 188, 189, 5, 20, 0, 0, 189, 33, 1, 0, 0, 0, 190, 192, 5, 21, 0, 0, 191, 193, 3, 20, 10, 0, 192, 191, 1, 0, 0, 0, 192, 193, 1, 0, 0, 0, 193, 194, 1, 0, 0, 0, 194, 195, 5, 22, 0, 0, 195, 35, 1, 0, 0, 0, 196, 205, 5, 21, 0, 0, 197, 202, 3, 18, 9, 0, 198, 199, 5, 27, 0, 0, 199, 201, 3, 18, 9, 0, 200, 198, 1, 0, 0, 0, 201, 204, 1, 0, 0, 0, 202, 200, 1, 0, 0, 0, 202, 203, 1, 0, 0, 0, 203, 206, 1, 0, 0, 0, 204, 202, 1, 0, 0, 0, 205, 197, 1, 0, 0, 0, 205, 206, 1, 0, 0, 0, 206, 207, 1, 0, 0, 0, 207, 208, 5, 22, 0, 0, 208, 37, 1, 0, 0, 0, 209, 210, 5, 30, 0, 0, 210, 39, 1, 0, 0, 0, 211, 212, 5, 31, 0, 0, 212, 41, 1, 0, 0, 0, 213, 214, 5, 11, 0, 0, 214, 215, 3, 22, 11, 0, 215, 216, 5, 12, 0, 0, 216, 218, 3, 2, 1, 0, 217, 219, 5, 10, 0, 0, 218, 217, 1, 0, 0, 0, 218, 219, 1, 0, 0, 0, 219, 223, 1, 0, 0, 0, 220, 222, 3, 46, 23, 0, 221, 220, 1, 0, 0, 0, 222, 225, 1, 0, 0, 0, 223, 221, 1, 0, 0, 0, 223, 224, 1, 0, 0, 0, 224, 227, 1, 0, 0, 0, 225, 223, 1, 0, 0, 0, 226, 228, 3, 48, 24, 0, 227, 226, 1, 0, 0, 0, 227, 228, 1, 0, 0, 0, 228, 43, 1, 0, 0, 0, 229, 230, 5, 15, 0, 0, 230, 231, 3, 22, 11, 0, 231, 232, 5, 16, 0, 0, 232, 233, 3, 2, 1, 0, 233, 234, 5, 10, 0, 0, 234, 45, 1, 0, 0, 0, 235, 236, 5, 14, 0, 0, 236, 237, 3, 22, 11, 0, 237, 239, 5, 12, 0, 0, 238, 240, 3, 2, 1, 0, 239, 238, 1, 0, 0, 0, 240, 241, 1, 0, 0, 0, 241, 239, 1, 0, 0, 0, 241, 242, 1, 0, 0, 0, 242, 244, 1, 0, 0, 0, 243, 245, 5, 10, 0, 0, 244, 243, 1, 0, 0, 0, 244, 245, 1, 0, 0, 0, 245, 47, 1, 0, 0, 0, 246, 247, 5, 13, 0, 0, 247, 248, 3, 2, 1, 0, 248, 249, 5, 10, 0, 0, 249, 49, 1, 0, 0, 0, 22, 53, 66, 71, 79, 85, 95, 101, 111, 120, 123, 145, 161, 166, 177, 192, 202, 205, 218, 223, 227, 241, 244];
const atn = new _antlr.default.atn.ATNDeserializer().deserialize(serializedATN);
const decisionsToDFA = atn.decisionToState.map((ds, index) => new _antlr.default.dfa.DFA(ds, index));
const sharedContextCache = new _antlr.default.atn.PredictionContextCache();
class fplusParser extends _antlr.default.Parser {
  static grammarFileName = "fplus.g4";
  static literalNames = [null, "'='", null, null, null, null, null, null, "'print'", "'function'", "'end'", "'if'", "'then'", "'else'", "'elseif'", "'while'", "'do'", "'local'", "'let'", "'('", "')'", "'{'", "'}'", "'['", "']'", "'.'", "':'", "','", "';'"];
  static symbolicNames = [null, null, "COMMENT", "MLCOMMENT", "STRING", "INTEGER", "FLOAT", "BOOLEAN", "PRINT", "FUNCTION", "END", "IF", "THEN", "ELSE", "ELSEIF", "WHILE", "DO", "LOCAL", "LET", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LSQUARE", "RSQUARE", "DOT", "COLON", "COMMA", "SEMICOLON", "ID", "INLINE_JS_EXPR", "JAVASCRIPT_EMBED", "WS"];
  static ruleNames = ["program", "statement", "printExpr", "functionDeclaration", "localFunctionDeclaration", "params", "objectDeclaration", "variableDeclaration", "localVariableDeclaration", "keyValuePair", "exprList", "expr", "functionCall", "objectAccess", "arrayAccess", "variableAccess", "parens", "arrayExpr", "objectExpr", "inlineJsExpr", "javaScriptEmbed", "ifStatement", "whileStatement", "elseIfStatement", "elseStatement"];
  constructor(input) {
    super(input);
    this._interp = new _antlr.default.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = fplusParser.ruleNames;
    this.literalNames = fplusParser.literalNames;
    this.symbolicNames = fplusParser.symbolicNames;
  }
  program() {
    let localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, fplusParser.RULE_program);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 53;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 3760884720) !== 0) {
        this.state = 50;
        this.statement();
        this.state = 55;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 56;
      this.match(fplusParser.EOF);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  statement() {
    let localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, fplusParser.RULE_statement);
    try {
      this.state = 66;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 58;
          this.printExpr();
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 59;
          this.functionDeclaration();
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 60;
          this.objectDeclaration();
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 61;
          this.variableDeclaration();
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          this.state = 62;
          this.localVariableDeclaration();
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          this.state = 63;
          this.expr();
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          this.state = 64;
          this.ifStatement();
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          this.state = 65;
          this.whileStatement();
          break;
      }
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  printExpr() {
    let localctx = new PrintExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, fplusParser.RULE_printExpr);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 68;
      this.match(fplusParser.PRINT);
      this.state = 69;
      this.match(fplusParser.LPAREN);
      this.state = 71;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la & ~0x1f) === 0 && (1 << _la & 3760718064) !== 0) {
        this.state = 70;
        this.exprList();
      }
      this.state = 73;
      this.match(fplusParser.RPAREN);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  functionDeclaration() {
    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, fplusParser.RULE_functionDeclaration);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 75;
      this.match(fplusParser.FUNCTION);
      this.state = 76;
      this.match(fplusParser.ID);
      this.state = 77;
      this.match(fplusParser.LPAREN);
      this.state = 79;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 29) {
        this.state = 78;
        this.params();
      }
      this.state = 81;
      this.match(fplusParser.RPAREN);
      this.state = 85;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 3760884720) !== 0) {
        this.state = 82;
        this.statement();
        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 88;
      this.match(fplusParser.END);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  localFunctionDeclaration() {
    let localctx = new LocalFunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, fplusParser.RULE_localFunctionDeclaration);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 90;
      this.match(fplusParser.LOCAL);
      this.state = 91;
      this.match(fplusParser.FUNCTION);
      this.state = 92;
      this.match(fplusParser.ID);
      this.state = 93;
      this.match(fplusParser.LPAREN);
      this.state = 95;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 29) {
        this.state = 94;
        this.params();
      }
      this.state = 97;
      this.match(fplusParser.RPAREN);
      this.state = 101;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 3760884720) !== 0) {
        this.state = 98;
        this.statement();
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 104;
      this.match(fplusParser.END);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  params() {
    let localctx = new ParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, fplusParser.RULE_params);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 106;
      this.match(fplusParser.ID);
      this.state = 111;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 27) {
        this.state = 107;
        this.match(fplusParser.COMMA);
        this.state = 108;
        this.match(fplusParser.ID);
        this.state = 113;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  objectDeclaration() {
    let localctx = new ObjectDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, fplusParser.RULE_objectDeclaration);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 114;
      this.match(fplusParser.LBRACE);
      this.state = 123;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 29) {
        this.state = 115;
        this.keyValuePair();
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 27) {
          this.state = 116;
          this.match(fplusParser.COMMA);
          this.state = 117;
          this.keyValuePair();
          this.state = 122;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
      this.state = 125;
      this.match(fplusParser.RBRACE);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  variableDeclaration() {
    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, fplusParser.RULE_variableDeclaration);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 127;
      this.match(fplusParser.ID);
      this.state = 128;
      this.match(fplusParser.T__0);
      this.state = 129;
      this.expr();
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  localVariableDeclaration() {
    let localctx = new LocalVariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, fplusParser.RULE_localVariableDeclaration);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 131;
      this.match(fplusParser.LOCAL);
      this.state = 132;
      this.match(fplusParser.ID);
      this.state = 133;
      this.match(fplusParser.T__0);
      this.state = 134;
      this.expr();
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  keyValuePair() {
    let localctx = new KeyValuePairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, fplusParser.RULE_keyValuePair);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 136;
      this.match(fplusParser.ID);
      this.state = 137;
      this.match(fplusParser.T__0);
      this.state = 138;
      this.expr();
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  exprList() {
    let localctx = new ExprListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, fplusParser.RULE_exprList);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 140;
      this.expr();
      this.state = 145;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 27) {
        this.state = 141;
        this.match(fplusParser.COMMA);
        this.state = 142;
        this.expr();
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  expr() {
    let localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, fplusParser.RULE_expr);
    try {
      this.state = 161;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 11, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 148;
          this.match(fplusParser.STRING);
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 149;
          this.match(fplusParser.INTEGER);
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 150;
          this.match(fplusParser.FLOAT);
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 151;
          this.match(fplusParser.BOOLEAN);
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          this.state = 152;
          this.arrayExpr();
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          this.state = 153;
          this.objectExpr();
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          this.state = 154;
          this.functionCall();
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          this.state = 155;
          this.objectAccess();
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          this.state = 156;
          this.arrayAccess();
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          this.state = 157;
          this.variableAccess();
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          this.state = 158;
          this.parens();
          break;
        case 12:
          this.enterOuterAlt(localctx, 12);
          this.state = 159;
          this.inlineJsExpr();
          break;
        case 13:
          this.enterOuterAlt(localctx, 13);
          this.state = 160;
          this.javaScriptEmbed();
          break;
      }
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  functionCall() {
    let localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, fplusParser.RULE_functionCall);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 163;
      this.match(fplusParser.ID);
      this.state = 164;
      this.match(fplusParser.LPAREN);
      this.state = 166;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la & ~0x1f) === 0 && (1 << _la & 3760718064) !== 0) {
        this.state = 165;
        this.exprList();
      }
      this.state = 168;
      this.match(fplusParser.RPAREN);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  objectAccess() {
    let localctx = new ObjectAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, fplusParser.RULE_objectAccess);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 170;
      this.match(fplusParser.ID);
      this.state = 177;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 25:
          this.state = 171;
          this.match(fplusParser.DOT);
          this.state = 172;
          this.match(fplusParser.ID);
          break;
        case 23:
          this.state = 173;
          this.match(fplusParser.LSQUARE);
          this.state = 174;
          this.expr();
          this.state = 175;
          this.match(fplusParser.RSQUARE);
          break;
        default:
          throw new _antlr.default.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  arrayAccess() {
    let localctx = new ArrayAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, fplusParser.RULE_arrayAccess);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 179;
      this.match(fplusParser.ID);
      this.state = 180;
      this.match(fplusParser.LSQUARE);
      this.state = 181;
      this.match(fplusParser.INTEGER);
      this.state = 182;
      this.match(fplusParser.RSQUARE);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  variableAccess() {
    let localctx = new VariableAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, fplusParser.RULE_variableAccess);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 184;
      this.match(fplusParser.ID);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  parens() {
    let localctx = new ParensContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, fplusParser.RULE_parens);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 186;
      this.match(fplusParser.LPAREN);
      this.state = 187;
      this.expr();
      this.state = 188;
      this.match(fplusParser.RPAREN);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  arrayExpr() {
    let localctx = new ArrayExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, fplusParser.RULE_arrayExpr);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 190;
      this.match(fplusParser.LBRACE);
      this.state = 192;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la & ~0x1f) === 0 && (1 << _la & 3760718064) !== 0) {
        this.state = 191;
        this.exprList();
      }
      this.state = 194;
      this.match(fplusParser.RBRACE);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  objectExpr() {
    let localctx = new ObjectExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, fplusParser.RULE_objectExpr);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 196;
      this.match(fplusParser.LBRACE);
      this.state = 205;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 29) {
        this.state = 197;
        this.keyValuePair();
        this.state = 202;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 27) {
          this.state = 198;
          this.match(fplusParser.COMMA);
          this.state = 199;
          this.keyValuePair();
          this.state = 204;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
      this.state = 207;
      this.match(fplusParser.RBRACE);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  inlineJsExpr() {
    let localctx = new InlineJsExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, fplusParser.RULE_inlineJsExpr);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 209;
      this.match(fplusParser.INLINE_JS_EXPR);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  javaScriptEmbed() {
    let localctx = new JavaScriptEmbedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, fplusParser.RULE_javaScriptEmbed);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 211;
      this.match(fplusParser.JAVASCRIPT_EMBED);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  ifStatement() {
    let localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, fplusParser.RULE_ifStatement);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 213;
      this.match(fplusParser.IF);
      this.state = 214;
      this.expr();
      this.state = 215;
      this.match(fplusParser.THEN);
      this.state = 216;
      this.statement();
      this.state = 218;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 17, this._ctx);
      if (la_ === 1) {
        this.state = 217;
        this.match(fplusParser.END);
      }
      this.state = 223;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
      while (_alt != 2 && _alt != _antlr.default.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          this.state = 220;
          this.elseIfStatement();
        }
        this.state = 225;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
      }
      this.state = 227;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 19, this._ctx);
      if (la_ === 1) {
        this.state = 226;
        this.elseStatement();
      }
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  whileStatement() {
    let localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, fplusParser.RULE_whileStatement);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 229;
      this.match(fplusParser.WHILE);
      this.state = 230;
      this.expr();
      this.state = 231;
      this.match(fplusParser.DO);
      this.state = 232;
      this.statement();
      this.state = 233;
      this.match(fplusParser.END);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  elseIfStatement() {
    let localctx = new ElseIfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, fplusParser.RULE_elseIfStatement);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 235;
      this.match(fplusParser.ELSEIF);
      this.state = 236;
      this.expr();
      this.state = 237;
      this.match(fplusParser.THEN);
      this.state = 239;
      this._errHandler.sync(this);
      var _alt = 1;
      do {
        switch (_alt) {
          case 1:
            this.state = 238;
            this.statement();
            break;
          default:
            throw new _antlr.default.error.NoViableAltException(this);
        }
        this.state = 241;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
      } while (_alt != 2 && _alt != _antlr.default.atn.ATN.INVALID_ALT_NUMBER);
      this.state = 244;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 21, this._ctx);
      if (la_ === 1) {
        this.state = 243;
        this.match(fplusParser.END);
      }
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
  elseStatement() {
    let localctx = new ElseStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, fplusParser.RULE_elseStatement);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 246;
      this.match(fplusParser.ELSE);
      this.state = 247;
      this.statement();
      this.state = 248;
      this.match(fplusParser.END);
    } catch (re) {
      if (re instanceof _antlr.default.error.RecognitionException) {
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
exports.default = fplusParser;
fplusParser.EOF = _antlr.default.Token.EOF;
fplusParser.T__0 = 1;
fplusParser.COMMENT = 2;
fplusParser.MLCOMMENT = 3;
fplusParser.STRING = 4;
fplusParser.INTEGER = 5;
fplusParser.FLOAT = 6;
fplusParser.BOOLEAN = 7;
fplusParser.PRINT = 8;
fplusParser.FUNCTION = 9;
fplusParser.END = 10;
fplusParser.IF = 11;
fplusParser.THEN = 12;
fplusParser.ELSE = 13;
fplusParser.ELSEIF = 14;
fplusParser.WHILE = 15;
fplusParser.DO = 16;
fplusParser.LOCAL = 17;
fplusParser.LET = 18;
fplusParser.LPAREN = 19;
fplusParser.RPAREN = 20;
fplusParser.LBRACE = 21;
fplusParser.RBRACE = 22;
fplusParser.LSQUARE = 23;
fplusParser.RSQUARE = 24;
fplusParser.DOT = 25;
fplusParser.COLON = 26;
fplusParser.COMMA = 27;
fplusParser.SEMICOLON = 28;
fplusParser.ID = 29;
fplusParser.INLINE_JS_EXPR = 30;
fplusParser.JAVASCRIPT_EMBED = 31;
fplusParser.WS = 32;
fplusParser.RULE_program = 0;
fplusParser.RULE_statement = 1;
fplusParser.RULE_printExpr = 2;
fplusParser.RULE_functionDeclaration = 3;
fplusParser.RULE_localFunctionDeclaration = 4;
fplusParser.RULE_params = 5;
fplusParser.RULE_objectDeclaration = 6;
fplusParser.RULE_variableDeclaration = 7;
fplusParser.RULE_localVariableDeclaration = 8;
fplusParser.RULE_keyValuePair = 9;
fplusParser.RULE_exprList = 10;
fplusParser.RULE_expr = 11;
fplusParser.RULE_functionCall = 12;
fplusParser.RULE_objectAccess = 13;
fplusParser.RULE_arrayAccess = 14;
fplusParser.RULE_variableAccess = 15;
fplusParser.RULE_parens = 16;
fplusParser.RULE_arrayExpr = 17;
fplusParser.RULE_objectExpr = 18;
fplusParser.RULE_inlineJsExpr = 19;
fplusParser.RULE_javaScriptEmbed = 20;
fplusParser.RULE_ifStatement = 21;
fplusParser.RULE_whileStatement = 22;
fplusParser.RULE_elseIfStatement = 23;
fplusParser.RULE_elseStatement = 24;
class ProgramContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_program;
  }
  EOF() {
    return this.getToken(fplusParser.EOF, 0);
  }
  statement = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(StatementContext);
    } else {
      return this.getTypedRuleContext(StatementContext, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterProgram(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitProgram(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitProgram(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class StatementContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_statement;
  }
  printExpr() {
    return this.getTypedRuleContext(PrintExprContext, 0);
  }
  functionDeclaration() {
    return this.getTypedRuleContext(FunctionDeclarationContext, 0);
  }
  objectDeclaration() {
    return this.getTypedRuleContext(ObjectDeclarationContext, 0);
  }
  variableDeclaration() {
    return this.getTypedRuleContext(VariableDeclarationContext, 0);
  }
  localVariableDeclaration() {
    return this.getTypedRuleContext(LocalVariableDeclarationContext, 0);
  }
  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }
  ifStatement() {
    return this.getTypedRuleContext(IfStatementContext, 0);
  }
  whileStatement() {
    return this.getTypedRuleContext(WhileStatementContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterStatement(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitStatement(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class PrintExprContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_printExpr;
  }
  PRINT() {
    return this.getToken(fplusParser.PRINT, 0);
  }
  LPAREN() {
    return this.getToken(fplusParser.LPAREN, 0);
  }
  RPAREN() {
    return this.getToken(fplusParser.RPAREN, 0);
  }
  exprList() {
    return this.getTypedRuleContext(ExprListContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterPrintExpr(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitPrintExpr(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitPrintExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class FunctionDeclarationContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_functionDeclaration;
  }
  FUNCTION() {
    return this.getToken(fplusParser.FUNCTION, 0);
  }
  ID() {
    return this.getToken(fplusParser.ID, 0);
  }
  LPAREN() {
    return this.getToken(fplusParser.LPAREN, 0);
  }
  RPAREN() {
    return this.getToken(fplusParser.RPAREN, 0);
  }
  END() {
    return this.getToken(fplusParser.END, 0);
  }
  params() {
    return this.getTypedRuleContext(ParamsContext, 0);
  }
  statement = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(StatementContext);
    } else {
      return this.getTypedRuleContext(StatementContext, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterFunctionDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitFunctionDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitFunctionDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class LocalFunctionDeclarationContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_localFunctionDeclaration;
  }
  LOCAL() {
    return this.getToken(fplusParser.LOCAL, 0);
  }
  FUNCTION() {
    return this.getToken(fplusParser.FUNCTION, 0);
  }
  ID() {
    return this.getToken(fplusParser.ID, 0);
  }
  LPAREN() {
    return this.getToken(fplusParser.LPAREN, 0);
  }
  RPAREN() {
    return this.getToken(fplusParser.RPAREN, 0);
  }
  END() {
    return this.getToken(fplusParser.END, 0);
  }
  params() {
    return this.getTypedRuleContext(ParamsContext, 0);
  }
  statement = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(StatementContext);
    } else {
      return this.getTypedRuleContext(StatementContext, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterLocalFunctionDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitLocalFunctionDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitLocalFunctionDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ParamsContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_params;
  }
  ID = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(fplusParser.ID);
    } else {
      return this.getToken(fplusParser.ID, i);
    }
  };
  COMMA = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(fplusParser.COMMA);
    } else {
      return this.getToken(fplusParser.COMMA, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterParams(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitParams(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitParams(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ObjectDeclarationContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_objectDeclaration;
  }
  LBRACE() {
    return this.getToken(fplusParser.LBRACE, 0);
  }
  RBRACE() {
    return this.getToken(fplusParser.RBRACE, 0);
  }
  keyValuePair = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(KeyValuePairContext);
    } else {
      return this.getTypedRuleContext(KeyValuePairContext, i);
    }
  };
  COMMA = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(fplusParser.COMMA);
    } else {
      return this.getToken(fplusParser.COMMA, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterObjectDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitObjectDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitObjectDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class VariableDeclarationContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_variableDeclaration;
  }
  ID() {
    return this.getToken(fplusParser.ID, 0);
  }
  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterVariableDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitVariableDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitVariableDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class LocalVariableDeclarationContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_localVariableDeclaration;
  }
  LOCAL() {
    return this.getToken(fplusParser.LOCAL, 0);
  }
  ID() {
    return this.getToken(fplusParser.ID, 0);
  }
  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterLocalVariableDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitLocalVariableDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitLocalVariableDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class KeyValuePairContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_keyValuePair;
  }
  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }
  ID() {
    return this.getToken(fplusParser.ID, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterKeyValuePair(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitKeyValuePair(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitKeyValuePair(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ExprListContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_exprList;
  }
  expr = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ExprContext);
    } else {
      return this.getTypedRuleContext(ExprContext, i);
    }
  };
  COMMA = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(fplusParser.COMMA);
    } else {
      return this.getToken(fplusParser.COMMA, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterExprList(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitExprList(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitExprList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ExprContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_expr;
  }
  STRING() {
    return this.getToken(fplusParser.STRING, 0);
  }
  INTEGER() {
    return this.getToken(fplusParser.INTEGER, 0);
  }
  FLOAT() {
    return this.getToken(fplusParser.FLOAT, 0);
  }
  BOOLEAN() {
    return this.getToken(fplusParser.BOOLEAN, 0);
  }
  arrayExpr() {
    return this.getTypedRuleContext(ArrayExprContext, 0);
  }
  objectExpr() {
    return this.getTypedRuleContext(ObjectExprContext, 0);
  }
  functionCall() {
    return this.getTypedRuleContext(FunctionCallContext, 0);
  }
  objectAccess() {
    return this.getTypedRuleContext(ObjectAccessContext, 0);
  }
  arrayAccess() {
    return this.getTypedRuleContext(ArrayAccessContext, 0);
  }
  variableAccess() {
    return this.getTypedRuleContext(VariableAccessContext, 0);
  }
  parens() {
    return this.getTypedRuleContext(ParensContext, 0);
  }
  inlineJsExpr() {
    return this.getTypedRuleContext(InlineJsExprContext, 0);
  }
  javaScriptEmbed() {
    return this.getTypedRuleContext(JavaScriptEmbedContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterExpr(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitExpr(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class FunctionCallContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_functionCall;
  }
  ID() {
    return this.getToken(fplusParser.ID, 0);
  }
  LPAREN() {
    return this.getToken(fplusParser.LPAREN, 0);
  }
  RPAREN() {
    return this.getToken(fplusParser.RPAREN, 0);
  }
  exprList() {
    return this.getTypedRuleContext(ExprListContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterFunctionCall(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitFunctionCall(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitFunctionCall(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ObjectAccessContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_objectAccess;
  }
  ID = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(fplusParser.ID);
    } else {
      return this.getToken(fplusParser.ID, i);
    }
  };
  DOT() {
    return this.getToken(fplusParser.DOT, 0);
  }
  LSQUARE() {
    return this.getToken(fplusParser.LSQUARE, 0);
  }
  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }
  RSQUARE() {
    return this.getToken(fplusParser.RSQUARE, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterObjectAccess(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitObjectAccess(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitObjectAccess(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ArrayAccessContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_arrayAccess;
  }
  ID() {
    return this.getToken(fplusParser.ID, 0);
  }
  LSQUARE() {
    return this.getToken(fplusParser.LSQUARE, 0);
  }
  INTEGER() {
    return this.getToken(fplusParser.INTEGER, 0);
  }
  RSQUARE() {
    return this.getToken(fplusParser.RSQUARE, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterArrayAccess(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitArrayAccess(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitArrayAccess(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class VariableAccessContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_variableAccess;
  }
  ID() {
    return this.getToken(fplusParser.ID, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterVariableAccess(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitVariableAccess(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitVariableAccess(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ParensContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_parens;
  }
  LPAREN() {
    return this.getToken(fplusParser.LPAREN, 0);
  }
  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }
  RPAREN() {
    return this.getToken(fplusParser.RPAREN, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterParens(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitParens(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitParens(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ArrayExprContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_arrayExpr;
  }
  LBRACE() {
    return this.getToken(fplusParser.LBRACE, 0);
  }
  RBRACE() {
    return this.getToken(fplusParser.RBRACE, 0);
  }
  exprList() {
    return this.getTypedRuleContext(ExprListContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterArrayExpr(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitArrayExpr(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitArrayExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ObjectExprContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_objectExpr;
  }
  LBRACE() {
    return this.getToken(fplusParser.LBRACE, 0);
  }
  RBRACE() {
    return this.getToken(fplusParser.RBRACE, 0);
  }
  keyValuePair = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(KeyValuePairContext);
    } else {
      return this.getTypedRuleContext(KeyValuePairContext, i);
    }
  };
  COMMA = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(fplusParser.COMMA);
    } else {
      return this.getToken(fplusParser.COMMA, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterObjectExpr(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitObjectExpr(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitObjectExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class InlineJsExprContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_inlineJsExpr;
  }
  INLINE_JS_EXPR() {
    return this.getToken(fplusParser.INLINE_JS_EXPR, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterInlineJsExpr(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitInlineJsExpr(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitInlineJsExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class JavaScriptEmbedContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_javaScriptEmbed;
  }
  JAVASCRIPT_EMBED() {
    return this.getToken(fplusParser.JAVASCRIPT_EMBED, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterJavaScriptEmbed(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitJavaScriptEmbed(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitJavaScriptEmbed(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class IfStatementContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_ifStatement;
  }
  IF() {
    return this.getToken(fplusParser.IF, 0);
  }
  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }
  THEN() {
    return this.getToken(fplusParser.THEN, 0);
  }
  statement() {
    return this.getTypedRuleContext(StatementContext, 0);
  }
  END() {
    return this.getToken(fplusParser.END, 0);
  }
  elseIfStatement = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ElseIfStatementContext);
    } else {
      return this.getTypedRuleContext(ElseIfStatementContext, i);
    }
  };
  elseStatement() {
    return this.getTypedRuleContext(ElseStatementContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterIfStatement(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitIfStatement(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitIfStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class WhileStatementContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_whileStatement;
  }
  WHILE() {
    return this.getToken(fplusParser.WHILE, 0);
  }
  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }
  DO() {
    return this.getToken(fplusParser.DO, 0);
  }
  statement() {
    return this.getTypedRuleContext(StatementContext, 0);
  }
  END() {
    return this.getToken(fplusParser.END, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterWhileStatement(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitWhileStatement(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitWhileStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ElseIfStatementContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_elseIfStatement;
  }
  ELSEIF() {
    return this.getToken(fplusParser.ELSEIF, 0);
  }
  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }
  THEN() {
    return this.getToken(fplusParser.THEN, 0);
  }
  statement = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(StatementContext);
    } else {
      return this.getTypedRuleContext(StatementContext, i);
    }
  };
  END() {
    return this.getToken(fplusParser.END, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterElseIfStatement(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitElseIfStatement(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitElseIfStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ElseStatementContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_elseStatement;
  }
  ELSE() {
    return this.getToken(fplusParser.ELSE, 0);
  }
  statement() {
    return this.getTypedRuleContext(StatementContext, 0);
  }
  END() {
    return this.getToken(fplusParser.END, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterElseStatement(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitElseStatement(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitElseStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
fplusParser.ProgramContext = ProgramContext;
fplusParser.StatementContext = StatementContext;
fplusParser.PrintExprContext = PrintExprContext;
fplusParser.FunctionDeclarationContext = FunctionDeclarationContext;
fplusParser.LocalFunctionDeclarationContext = LocalFunctionDeclarationContext;
fplusParser.ParamsContext = ParamsContext;
fplusParser.ObjectDeclarationContext = ObjectDeclarationContext;
fplusParser.VariableDeclarationContext = VariableDeclarationContext;
fplusParser.LocalVariableDeclarationContext = LocalVariableDeclarationContext;
fplusParser.KeyValuePairContext = KeyValuePairContext;
fplusParser.ExprListContext = ExprListContext;
fplusParser.ExprContext = ExprContext;
fplusParser.FunctionCallContext = FunctionCallContext;
fplusParser.ObjectAccessContext = ObjectAccessContext;
fplusParser.ArrayAccessContext = ArrayAccessContext;
fplusParser.VariableAccessContext = VariableAccessContext;
fplusParser.ParensContext = ParensContext;
fplusParser.ArrayExprContext = ArrayExprContext;
fplusParser.ObjectExprContext = ObjectExprContext;
fplusParser.InlineJsExprContext = InlineJsExprContext;
fplusParser.JavaScriptEmbedContext = JavaScriptEmbedContext;
fplusParser.IfStatementContext = IfStatementContext;
fplusParser.WhileStatementContext = WhileStatementContext;
fplusParser.ElseIfStatementContext = ElseIfStatementContext;
fplusParser.ElseStatementContext = ElseStatementContext;