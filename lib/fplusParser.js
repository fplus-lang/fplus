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

const serializedATN = [4, 1, 37, 264, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 1, 0, 5, 0, 50, 8, 0, 10, 0, 12, 0, 53, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 65, 8, 1, 1, 2, 1, 2, 1, 2, 3, 2, 70, 8, 2, 1, 2, 1, 2, 1, 3, 3, 3, 75, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 81, 8, 3, 1, 3, 1, 3, 5, 3, 85, 8, 3, 10, 3, 12, 3, 88, 9, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 5, 4, 95, 8, 4, 10, 4, 12, 4, 98, 9, 4, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 104, 8, 5, 10, 5, 12, 5, 107, 9, 5, 3, 5, 109, 8, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 5, 9, 129, 8, 9, 10, 9, 12, 9, 132, 9, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 148, 8, 10, 1, 10, 1, 10, 1, 10, 5, 10, 153, 8, 10, 10, 10, 12, 10, 156, 9, 10, 1, 11, 1, 11, 1, 11, 3, 11, 161, 8, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 172, 8, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 3, 16, 187, 8, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 5, 17, 195, 8, 17, 10, 17, 12, 17, 198, 9, 17, 3, 17, 200, 8, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 20, 5, 20, 212, 8, 20, 10, 20, 12, 20, 215, 9, 20, 1, 20, 3, 20, 218, 8, 20, 1, 20, 1, 20, 3, 20, 222, 8, 20, 5, 20, 224, 8, 20, 10, 20, 12, 20, 227, 9, 20, 1, 20, 1, 20, 3, 20, 231, 8, 20, 3, 20, 233, 8, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 1, 21, 5, 21, 241, 8, 21, 10, 21, 12, 21, 244, 9, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22, 1, 22, 5, 22, 252, 8, 22, 10, 22, 12, 22, 255, 9, 22, 1, 23, 1, 23, 5, 23, 259, 8, 23, 10, 23, 12, 23, 262, 9, 23, 1, 23, 0, 1, 20, 24, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 0, 1, 1, 0, 2, 6, 282, 0, 51, 1, 0, 0, 0, 2, 64, 1, 0, 0, 0, 4, 66, 1, 0, 0, 0, 6, 74, 1, 0, 0, 0, 8, 91, 1, 0, 0, 0, 10, 99, 1, 0, 0, 0, 12, 112, 1, 0, 0, 0, 14, 116, 1, 0, 0, 0, 16, 121, 1, 0, 0, 0, 18, 125, 1, 0, 0, 0, 20, 147, 1, 0, 0, 0, 22, 157, 1, 0, 0, 0, 24, 164, 1, 0, 0, 0, 26, 173, 1, 0, 0, 0, 28, 178, 1, 0, 0, 0, 30, 180, 1, 0, 0, 0, 32, 184, 1, 0, 0, 0, 34, 190, 1, 0, 0, 0, 36, 203, 1, 0, 0, 0, 38, 205, 1, 0, 0, 0, 40, 207, 1, 0, 0, 0, 42, 236, 1, 0, 0, 0, 44, 247, 1, 0, 0, 0, 46, 256, 1, 0, 0, 0, 48, 50, 3, 2, 1, 0, 49, 48, 1, 0, 0, 0, 50, 53, 1, 0, 0, 0, 51, 49, 1, 0, 0, 0, 51, 52, 1, 0, 0, 0, 52, 54, 1, 0, 0, 0, 53, 51, 1, 0, 0, 0, 54, 55, 5, 0, 0, 1, 55, 1, 1, 0, 0, 0, 56, 65, 3, 4, 2, 0, 57, 65, 3, 6, 3, 0, 58, 65, 3, 10, 5, 0, 59, 65, 3, 12, 6, 0, 60, 65, 3, 14, 7, 0, 61, 65, 3, 20, 10, 0, 62, 65, 3, 40, 20, 0, 63, 65, 3, 42, 21, 0, 64, 56, 1, 0, 0, 0, 64, 57, 1, 0, 0, 0, 64, 58, 1, 0, 0, 0, 64, 59, 1, 0, 0, 0, 64, 60, 1, 0, 0, 0, 64, 61, 1, 0, 0, 0, 64, 62, 1, 0, 0, 0, 64, 63, 1, 0, 0, 0, 65, 3, 1, 0, 0, 0, 66, 67, 5, 13, 0, 0, 67, 69, 5, 24, 0, 0, 68, 70, 3, 18, 9, 0, 69, 68, 1, 0, 0, 0, 69, 70, 1, 0, 0, 0, 70, 71, 1, 0, 0, 0, 71, 72, 5, 25, 0, 0, 72, 5, 1, 0, 0, 0, 73, 75, 5, 22, 0, 0, 74, 73, 1, 0, 0, 0, 74, 75, 1, 0, 0, 0, 75, 76, 1, 0, 0, 0, 76, 77, 5, 14, 0, 0, 77, 78, 5, 34, 0, 0, 78, 80, 5, 24, 0, 0, 79, 81, 3, 8, 4, 0, 80, 79, 1, 0, 0, 0, 80, 81, 1, 0, 0, 0, 81, 82, 1, 0, 0, 0, 82, 86, 5, 25, 0, 0, 83, 85, 3, 2, 1, 0, 84, 83, 1, 0, 0, 0, 85, 88, 1, 0, 0, 0, 86, 84, 1, 0, 0, 0, 86, 87, 1, 0, 0, 0, 87, 89, 1, 0, 0, 0, 88, 86, 1, 0, 0, 0, 89, 90, 5, 15, 0, 0, 90, 7, 1, 0, 0, 0, 91, 96, 5, 34, 0, 0, 92, 93, 5, 32, 0, 0, 93, 95, 5, 34, 0, 0, 94, 92, 1, 0, 0, 0, 95, 98, 1, 0, 0, 0, 96, 94, 1, 0, 0, 0, 96, 97, 1, 0, 0, 0, 97, 9, 1, 0, 0, 0, 98, 96, 1, 0, 0, 0, 99, 108, 5, 26, 0, 0, 100, 105, 3, 16, 8, 0, 101, 102, 5, 32, 0, 0, 102, 104, 3, 16, 8, 0, 103, 101, 1, 0, 0, 0, 104, 107, 1, 0, 0, 0, 105, 103, 1, 0, 0, 0, 105, 106, 1, 0, 0, 0, 106, 109, 1, 0, 0, 0, 107, 105, 1, 0, 0, 0, 108, 100, 1, 0, 0, 0, 108, 109, 1, 0, 0, 0, 109, 110, 1, 0, 0, 0, 110, 111, 5, 27, 0, 0, 111, 11, 1, 0, 0, 0, 112, 113, 5, 34, 0, 0, 113, 114, 5, 1, 0, 0, 114, 115, 3, 20, 10, 0, 115, 13, 1, 0, 0, 0, 116, 117, 5, 22, 0, 0, 117, 118, 5, 34, 0, 0, 118, 119, 5, 1, 0, 0, 119, 120, 3, 20, 10, 0, 120, 15, 1, 0, 0, 0, 121, 122, 5, 34, 0, 0, 122, 123, 5, 1, 0, 0, 123, 124, 3, 20, 10, 0, 124, 17, 1, 0, 0, 0, 125, 130, 3, 20, 10, 0, 126, 127, 5, 32, 0, 0, 127, 129, 3, 20, 10, 0, 128, 126, 1, 0, 0, 0, 129, 132, 1, 0, 0, 0, 130, 128, 1, 0, 0, 0, 130, 131, 1, 0, 0, 0, 131, 19, 1, 0, 0, 0, 132, 130, 1, 0, 0, 0, 133, 134, 6, 10, -1, 0, 134, 148, 5, 9, 0, 0, 135, 148, 5, 10, 0, 0, 136, 148, 5, 11, 0, 0, 137, 148, 5, 12, 0, 0, 138, 148, 3, 32, 16, 0, 139, 148, 3, 34, 17, 0, 140, 148, 3, 22, 11, 0, 141, 148, 3, 24, 12, 0, 142, 148, 3, 26, 13, 0, 143, 148, 3, 28, 14, 0, 144, 148, 3, 30, 15, 0, 145, 148, 3, 36, 18, 0, 146, 148, 3, 38, 19, 0, 147, 133, 1, 0, 0, 0, 147, 135, 1, 0, 0, 0, 147, 136, 1, 0, 0, 0, 147, 137, 1, 0, 0, 0, 147, 138, 1, 0, 0, 0, 147, 139, 1, 0, 0, 0, 147, 140, 1, 0, 0, 0, 147, 141, 1, 0, 0, 0, 147, 142, 1, 0, 0, 0, 147, 143, 1, 0, 0, 0, 147, 144, 1, 0, 0, 0, 147, 145, 1, 0, 0, 0, 147, 146, 1, 0, 0, 0, 148, 154, 1, 0, 0, 0, 149, 150, 10, 10, 0, 0, 150, 151, 7, 0, 0, 0, 151, 153, 3, 20, 10, 11, 152, 149, 1, 0, 0, 0, 153, 156, 1, 0, 0, 0, 154, 152, 1, 0, 0, 0, 154, 155, 1, 0, 0, 0, 155, 21, 1, 0, 0, 0, 156, 154, 1, 0, 0, 0, 157, 158, 5, 34, 0, 0, 158, 160, 5, 24, 0, 0, 159, 161, 3, 18, 9, 0, 160, 159, 1, 0, 0, 0, 160, 161, 1, 0, 0, 0, 161, 162, 1, 0, 0, 0, 162, 163, 5, 25, 0, 0, 163, 23, 1, 0, 0, 0, 164, 171, 5, 34, 0, 0, 165, 166, 5, 30, 0, 0, 166, 172, 5, 34, 0, 0, 167, 168, 5, 28, 0, 0, 168, 169, 3, 20, 10, 0, 169, 170, 5, 29, 0, 0, 170, 172, 1, 0, 0, 0, 171, 165, 1, 0, 0, 0, 171, 167, 1, 0, 0, 0, 172, 25, 1, 0, 0, 0, 173, 174, 5, 34, 0, 0, 174, 175, 5, 28, 0, 0, 175, 176, 5, 10, 0, 0, 176, 177, 5, 29, 0, 0, 177, 27, 1, 0, 0, 0, 178, 179, 5, 34, 0, 0, 179, 29, 1, 0, 0, 0, 180, 181, 5, 24, 0, 0, 181, 182, 3, 20, 10, 0, 182, 183, 5, 25, 0, 0, 183, 31, 1, 0, 0, 0, 184, 186, 5, 26, 0, 0, 185, 187, 3, 18, 9, 0, 186, 185, 1, 0, 0, 0, 186, 187, 1, 0, 0, 0, 187, 188, 1, 0, 0, 0, 188, 189, 5, 27, 0, 0, 189, 33, 1, 0, 0, 0, 190, 199, 5, 26, 0, 0, 191, 196, 3, 16, 8, 0, 192, 193, 5, 32, 0, 0, 193, 195, 3, 16, 8, 0, 194, 192, 1, 0, 0, 0, 195, 198, 1, 0, 0, 0, 196, 194, 1, 0, 0, 0, 196, 197, 1, 0, 0, 0, 197, 200, 1, 0, 0, 0, 198, 196, 1, 0, 0, 0, 199, 191, 1, 0, 0, 0, 199, 200, 1, 0, 0, 0, 200, 201, 1, 0, 0, 0, 201, 202, 5, 27, 0, 0, 202, 35, 1, 0, 0, 0, 203, 204, 5, 35, 0, 0, 204, 37, 1, 0, 0, 0, 205, 206, 5, 36, 0, 0, 206, 39, 1, 0, 0, 0, 207, 208, 5, 16, 0, 0, 208, 209, 3, 20, 10, 0, 209, 213, 5, 17, 0, 0, 210, 212, 3, 2, 1, 0, 211, 210, 1, 0, 0, 0, 212, 215, 1, 0, 0, 0, 213, 211, 1, 0, 0, 0, 213, 214, 1, 0, 0, 0, 214, 217, 1, 0, 0, 0, 215, 213, 1, 0, 0, 0, 216, 218, 5, 15, 0, 0, 217, 216, 1, 0, 0, 0, 217, 218, 1, 0, 0, 0, 218, 225, 1, 0, 0, 0, 219, 221, 3, 44, 22, 0, 220, 222, 5, 15, 0, 0, 221, 220, 1, 0, 0, 0, 221, 222, 1, 0, 0, 0, 222, 224, 1, 0, 0, 0, 223, 219, 1, 0, 0, 0, 224, 227, 1, 0, 0, 0, 225, 223, 1, 0, 0, 0, 225, 226, 1, 0, 0, 0, 226, 232, 1, 0, 0, 0, 227, 225, 1, 0, 0, 0, 228, 230, 3, 46, 23, 0, 229, 231, 5, 15, 0, 0, 230, 229, 1, 0, 0, 0, 230, 231, 1, 0, 0, 0, 231, 233, 1, 0, 0, 0, 232, 228, 1, 0, 0, 0, 232, 233, 1, 0, 0, 0, 233, 234, 1, 0, 0, 0, 234, 235, 5, 15, 0, 0, 235, 41, 1, 0, 0, 0, 236, 237, 5, 20, 0, 0, 237, 238, 3, 20, 10, 0, 238, 242, 5, 21, 0, 0, 239, 241, 3, 2, 1, 0, 240, 239, 1, 0, 0, 0, 241, 244, 1, 0, 0, 0, 242, 240, 1, 0, 0, 0, 242, 243, 1, 0, 0, 0, 243, 245, 1, 0, 0, 0, 244, 242, 1, 0, 0, 0, 245, 246, 5, 15, 0, 0, 246, 43, 1, 0, 0, 0, 247, 248, 5, 19, 0, 0, 248, 249, 3, 20, 10, 0, 249, 253, 5, 17, 0, 0, 250, 252, 3, 2, 1, 0, 251, 250, 1, 0, 0, 0, 252, 255, 1, 0, 0, 0, 253, 251, 1, 0, 0, 0, 253, 254, 1, 0, 0, 0, 254, 45, 1, 0, 0, 0, 255, 253, 1, 0, 0, 0, 256, 260, 5, 18, 0, 0, 257, 259, 3, 2, 1, 0, 258, 257, 1, 0, 0, 0, 259, 262, 1, 0, 0, 0, 260, 258, 1, 0, 0, 0, 260, 261, 1, 0, 0, 0, 261, 47, 1, 0, 0, 0, 262, 260, 1, 0, 0, 0, 26, 51, 64, 69, 74, 80, 86, 96, 105, 108, 130, 147, 154, 160, 171, 186, 196, 199, 213, 217, 221, 225, 230, 232, 242, 253, 260];
const atn = new _antlr.default.atn.ATNDeserializer().deserialize(serializedATN);
const decisionsToDFA = atn.decisionToState.map((ds, index) => new _antlr.default.dfa.DFA(ds, index));
const sharedContextCache = new _antlr.default.atn.PredictionContextCache();
class fplusParser extends _antlr.default.Parser {
  static grammarFileName = "fplus.g4";
  static literalNames = [null, "'='", "'*'", "'/'", "'+'", "'-'", "'^'", null, null, null, null, null, null, "'print'", "'function'", "'end'", "'if'", "'then'", "'else'", "'elseif'", "'while'", "'do'", "'local'", "'let'", "'('", "')'", "'{'", "'}'", "'['", "']'", "'.'", "':'", "','", "';'"];
  static symbolicNames = [null, null, null, null, null, null, null, "COMMENT", "MLCOMMENT", "STRING", "INTEGER", "FLOAT", "BOOLEAN", "PRINT", "FUNCTION", "END", "IF", "THEN", "ELSE", "ELSEIF", "WHILE", "DO", "LOCAL", "LET", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LSQUARE", "RSQUARE", "DOT", "COLON", "COMMA", "SEMICOLON", "ID", "INLINE_JS_EXPR", "JAVASCRIPT_EMBED", "WS"];
  static ruleNames = ["program", "statement", "printExpr", "functionDeclaration", "params", "objectDeclaration", "variableDeclaration", "localVariableDeclaration", "keyValuePair", "exprList", "expr", "functionCall", "objectAccess", "arrayAccess", "variableAccess", "parens", "arrayExpr", "objectExpr", "inlineJsExpr", "javaScriptEmbed", "ifStatement", "whileStatement", "elseIfStatement", "elseStatement"];
  constructor(input) {
    super(input);
    this._interp = new _antlr.default.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = fplusParser.ruleNames;
    this.literalNames = fplusParser.literalNames;
    this.symbolicNames = fplusParser.symbolicNames;
  }
  sempred(localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
      case 10:
        return this.expr_sempred(localctx, predIndex);
      default:
        throw "No predicate with index:" + ruleIndex;
    }
  }
  expr_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 10);
      default:
        throw "No predicate with index:" + predIndex;
    }
  }
  program() {
    let localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, fplusParser.RULE_program);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 51;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 235055295) !== 0) {
        this.state = 48;
        this.statement();
        this.state = 53;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 54;
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
      this.state = 64;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 56;
          this.printExpr();
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 57;
          this.functionDeclaration();
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 58;
          this.objectDeclaration();
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 59;
          this.variableDeclaration();
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          this.state = 60;
          this.localVariableDeclaration();
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          this.state = 61;
          this.expr(0);
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          this.state = 62;
          this.ifStatement();
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          this.state = 63;
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
      this.state = 66;
      this.match(fplusParser.PRINT);
      this.state = 67;
      this.match(fplusParser.LPAREN);
      this.state = 69;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 235044879) !== 0) {
        this.state = 68;
        this.exprList();
      }
      this.state = 71;
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
      this.state = 74;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 22) {
        this.state = 73;
        this.match(fplusParser.LOCAL);
      }
      this.state = 76;
      this.match(fplusParser.FUNCTION);
      this.state = 77;
      this.match(fplusParser.ID);
      this.state = 78;
      this.match(fplusParser.LPAREN);
      this.state = 80;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 34) {
        this.state = 79;
        this.params();
      }
      this.state = 82;
      this.match(fplusParser.RPAREN);
      this.state = 86;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 235055295) !== 0) {
        this.state = 83;
        this.statement();
        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 89;
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
    this.enterRule(localctx, 8, fplusParser.RULE_params);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 91;
      this.match(fplusParser.ID);
      this.state = 96;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 32) {
        this.state = 92;
        this.match(fplusParser.COMMA);
        this.state = 93;
        this.match(fplusParser.ID);
        this.state = 98;
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
    this.enterRule(localctx, 10, fplusParser.RULE_objectDeclaration);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 99;
      this.match(fplusParser.LBRACE);
      this.state = 108;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 34) {
        this.state = 100;
        this.keyValuePair();
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 32) {
          this.state = 101;
          this.match(fplusParser.COMMA);
          this.state = 102;
          this.keyValuePair();
          this.state = 107;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
      this.state = 110;
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
    this.enterRule(localctx, 12, fplusParser.RULE_variableDeclaration);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 112;
      this.match(fplusParser.ID);
      this.state = 113;
      this.match(fplusParser.T__0);
      this.state = 114;
      this.expr(0);
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
    this.enterRule(localctx, 14, fplusParser.RULE_localVariableDeclaration);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 116;
      this.match(fplusParser.LOCAL);
      this.state = 117;
      this.match(fplusParser.ID);
      this.state = 118;
      this.match(fplusParser.T__0);
      this.state = 119;
      this.expr(0);
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
    this.enterRule(localctx, 16, fplusParser.RULE_keyValuePair);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 121;
      this.match(fplusParser.ID);
      this.state = 122;
      this.match(fplusParser.T__0);
      this.state = 123;
      this.expr(0);
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
    this.enterRule(localctx, 18, fplusParser.RULE_exprList);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 125;
      this.expr(0);
      this.state = 130;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 32) {
        this.state = 126;
        this.match(fplusParser.COMMA);
        this.state = 127;
        this.expr(0);
        this.state = 132;
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
  expr(_p) {
    if (_p === undefined) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new ExprContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 20;
    this.enterRecursionRule(localctx, 20, fplusParser.RULE_expr, _p);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 147;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 10, this._ctx);
      switch (la_) {
        case 1:
          this.state = 134;
          this.match(fplusParser.STRING);
          break;
        case 2:
          this.state = 135;
          this.match(fplusParser.INTEGER);
          break;
        case 3:
          this.state = 136;
          this.match(fplusParser.FLOAT);
          break;
        case 4:
          this.state = 137;
          this.match(fplusParser.BOOLEAN);
          break;
        case 5:
          this.state = 138;
          this.arrayExpr();
          break;
        case 6:
          this.state = 139;
          this.objectExpr();
          break;
        case 7:
          this.state = 140;
          this.functionCall();
          break;
        case 8:
          this.state = 141;
          this.objectAccess();
          break;
        case 9:
          this.state = 142;
          this.arrayAccess();
          break;
        case 10:
          this.state = 143;
          this.variableAccess();
          break;
        case 11:
          this.state = 144;
          this.parens();
          break;
        case 12:
          this.state = 145;
          this.inlineJsExpr();
          break;
        case 13:
          this.state = 146;
          this.javaScriptEmbed();
          break;
      }
      this._ctx.stop = this._input.LT(-1);
      this.state = 154;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
      while (_alt != 2 && _alt != _antlr.default.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          localctx = new ExprContext(this, _parentctx, _parentState);
          this.pushNewRecursionContext(localctx, _startState, fplusParser.RULE_expr);
          this.state = 149;
          if (!this.precpred(this._ctx, 10)) {
            throw new _antlr.default.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
          }
          this.state = 150;
          _la = this._input.LA(1);
          if (!((_la & ~0x1f) === 0 && (1 << _la & 124) !== 0)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 151;
          this.expr(11);
        }
        this.state = 156;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
      }
    } catch (error) {
      if (error instanceof _antlr.default.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  functionCall() {
    let localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, fplusParser.RULE_functionCall);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 157;
      this.match(fplusParser.ID);
      this.state = 158;
      this.match(fplusParser.LPAREN);
      this.state = 160;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 235044879) !== 0) {
        this.state = 159;
        this.exprList();
      }
      this.state = 162;
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
    this.enterRule(localctx, 24, fplusParser.RULE_objectAccess);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 164;
      this.match(fplusParser.ID);
      this.state = 171;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 30:
          this.state = 165;
          this.match(fplusParser.DOT);
          this.state = 166;
          this.match(fplusParser.ID);
          break;
        case 28:
          this.state = 167;
          this.match(fplusParser.LSQUARE);
          this.state = 168;
          this.expr(0);
          this.state = 169;
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
    this.enterRule(localctx, 26, fplusParser.RULE_arrayAccess);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 173;
      this.match(fplusParser.ID);
      this.state = 174;
      this.match(fplusParser.LSQUARE);
      this.state = 175;
      this.match(fplusParser.INTEGER);
      this.state = 176;
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
    this.enterRule(localctx, 28, fplusParser.RULE_variableAccess);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 178;
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
    this.enterRule(localctx, 30, fplusParser.RULE_parens);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 180;
      this.match(fplusParser.LPAREN);
      this.state = 181;
      this.expr(0);
      this.state = 182;
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
    this.enterRule(localctx, 32, fplusParser.RULE_arrayExpr);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 184;
      this.match(fplusParser.LBRACE);
      this.state = 186;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 235044879) !== 0) {
        this.state = 185;
        this.exprList();
      }
      this.state = 188;
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
    this.enterRule(localctx, 34, fplusParser.RULE_objectExpr);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 190;
      this.match(fplusParser.LBRACE);
      this.state = 199;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 34) {
        this.state = 191;
        this.keyValuePair();
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 32) {
          this.state = 192;
          this.match(fplusParser.COMMA);
          this.state = 193;
          this.keyValuePair();
          this.state = 198;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
      this.state = 201;
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
    this.enterRule(localctx, 36, fplusParser.RULE_inlineJsExpr);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 203;
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
    this.enterRule(localctx, 38, fplusParser.RULE_javaScriptEmbed);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 205;
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
    this.enterRule(localctx, 40, fplusParser.RULE_ifStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 207;
      this.match(fplusParser.IF);
      this.state = 208;
      this.expr(0);
      this.state = 209;
      this.match(fplusParser.THEN);
      this.state = 213;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 235055295) !== 0) {
        this.state = 210;
        this.statement();
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 217;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 18, this._ctx);
      if (la_ === 1) {
        this.state = 216;
        this.match(fplusParser.END);
      }
      this.state = 225;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 19) {
        this.state = 219;
        this.elseIfStatement();
        this.state = 221;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 19, this._ctx);
        if (la_ === 1) {
          this.state = 220;
          this.match(fplusParser.END);
        }
        this.state = 227;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 232;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 18) {
        this.state = 228;
        this.elseStatement();
        this.state = 230;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 21, this._ctx);
        if (la_ === 1) {
          this.state = 229;
          this.match(fplusParser.END);
        }
      }
      this.state = 234;
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
  whileStatement() {
    let localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, fplusParser.RULE_whileStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 236;
      this.match(fplusParser.WHILE);
      this.state = 237;
      this.expr(0);
      this.state = 238;
      this.match(fplusParser.DO);
      this.state = 242;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 235055295) !== 0) {
        this.state = 239;
        this.statement();
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 245;
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
    this.enterRule(localctx, 44, fplusParser.RULE_elseIfStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 247;
      this.match(fplusParser.ELSEIF);
      this.state = 248;
      this.expr(0);
      this.state = 249;
      this.match(fplusParser.THEN);
      this.state = 253;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 235055295) !== 0) {
        this.state = 250;
        this.statement();
        this.state = 255;
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
  elseStatement() {
    let localctx = new ElseStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, fplusParser.RULE_elseStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 256;
      this.match(fplusParser.ELSE);
      this.state = 260;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 235055295) !== 0) {
        this.state = 257;
        this.statement();
        this.state = 262;
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
}
exports.default = fplusParser;
fplusParser.EOF = _antlr.default.Token.EOF;
fplusParser.T__0 = 1;
fplusParser.T__1 = 2;
fplusParser.T__2 = 3;
fplusParser.T__3 = 4;
fplusParser.T__4 = 5;
fplusParser.T__5 = 6;
fplusParser.COMMENT = 7;
fplusParser.MLCOMMENT = 8;
fplusParser.STRING = 9;
fplusParser.INTEGER = 10;
fplusParser.FLOAT = 11;
fplusParser.BOOLEAN = 12;
fplusParser.PRINT = 13;
fplusParser.FUNCTION = 14;
fplusParser.END = 15;
fplusParser.IF = 16;
fplusParser.THEN = 17;
fplusParser.ELSE = 18;
fplusParser.ELSEIF = 19;
fplusParser.WHILE = 20;
fplusParser.DO = 21;
fplusParser.LOCAL = 22;
fplusParser.LET = 23;
fplusParser.LPAREN = 24;
fplusParser.RPAREN = 25;
fplusParser.LBRACE = 26;
fplusParser.RBRACE = 27;
fplusParser.LSQUARE = 28;
fplusParser.RSQUARE = 29;
fplusParser.DOT = 30;
fplusParser.COLON = 31;
fplusParser.COMMA = 32;
fplusParser.SEMICOLON = 33;
fplusParser.ID = 34;
fplusParser.INLINE_JS_EXPR = 35;
fplusParser.JAVASCRIPT_EMBED = 36;
fplusParser.WS = 37;
fplusParser.RULE_program = 0;
fplusParser.RULE_statement = 1;
fplusParser.RULE_printExpr = 2;
fplusParser.RULE_functionDeclaration = 3;
fplusParser.RULE_params = 4;
fplusParser.RULE_objectDeclaration = 5;
fplusParser.RULE_variableDeclaration = 6;
fplusParser.RULE_localVariableDeclaration = 7;
fplusParser.RULE_keyValuePair = 8;
fplusParser.RULE_exprList = 9;
fplusParser.RULE_expr = 10;
fplusParser.RULE_functionCall = 11;
fplusParser.RULE_objectAccess = 12;
fplusParser.RULE_arrayAccess = 13;
fplusParser.RULE_variableAccess = 14;
fplusParser.RULE_parens = 15;
fplusParser.RULE_arrayExpr = 16;
fplusParser.RULE_objectExpr = 17;
fplusParser.RULE_inlineJsExpr = 18;
fplusParser.RULE_javaScriptEmbed = 19;
fplusParser.RULE_ifStatement = 20;
fplusParser.RULE_whileStatement = 21;
fplusParser.RULE_elseIfStatement = 22;
fplusParser.RULE_elseStatement = 23;
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
  LOCAL() {
    return this.getToken(fplusParser.LOCAL, 0);
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
  END = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(fplusParser.END);
    } else {
      return this.getToken(fplusParser.END, i);
    }
  };
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
  END() {
    return this.getToken(fplusParser.END, 0);
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