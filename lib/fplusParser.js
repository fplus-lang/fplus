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

const serializedATN = [4, 1, 38, 299, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 1, 0, 5, 0, 54, 8, 0, 10, 0, 12, 0, 57, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 70, 8, 1, 1, 2, 1, 2, 1, 2, 3, 2, 75, 8, 2, 1, 2, 1, 2, 1, 3, 3, 3, 80, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 86, 8, 3, 1, 3, 1, 3, 5, 3, 90, 8, 3, 10, 3, 12, 3, 93, 9, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 3, 4, 100, 8, 4, 1, 4, 1, 4, 5, 4, 104, 8, 4, 10, 4, 12, 4, 107, 9, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 5, 5, 114, 8, 5, 10, 5, 12, 5, 117, 9, 5, 1, 6, 1, 6, 1, 6, 1, 6, 5, 6, 123, 8, 6, 10, 6, 12, 6, 126, 9, 6, 3, 6, 128, 8, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 5, 10, 148, 8, 10, 10, 10, 12, 10, 151, 9, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 168, 8, 11, 1, 11, 1, 11, 1, 11, 5, 11, 173, 8, 11, 10, 11, 12, 11, 176, 9, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 183, 8, 12, 1, 12, 1, 12, 3, 12, 187, 8, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 197, 8, 13, 3, 13, 199, 8, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 207, 8, 14, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 3, 18, 222, 8, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 5, 19, 230, 8, 19, 10, 19, 12, 19, 233, 9, 19, 3, 19, 235, 8, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22, 1, 22, 5, 22, 247, 8, 22, 10, 22, 12, 22, 250, 9, 22, 1, 22, 3, 22, 253, 8, 22, 1, 22, 1, 22, 3, 22, 257, 8, 22, 5, 22, 259, 8, 22, 10, 22, 12, 22, 262, 9, 22, 1, 22, 1, 22, 3, 22, 266, 8, 22, 3, 22, 268, 8, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1, 23, 5, 23, 276, 8, 23, 10, 23, 12, 23, 279, 9, 23, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 24, 5, 24, 287, 8, 24, 10, 24, 12, 24, 290, 9, 24, 1, 25, 1, 25, 5, 25, 294, 8, 25, 10, 25, 12, 25, 297, 9, 25, 1, 25, 0, 1, 22, 26, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 0, 1, 1, 0, 2, 6, 323, 0, 55, 1, 0, 0, 0, 2, 69, 1, 0, 0, 0, 4, 71, 1, 0, 0, 0, 6, 79, 1, 0, 0, 0, 8, 96, 1, 0, 0, 0, 10, 110, 1, 0, 0, 0, 12, 118, 1, 0, 0, 0, 14, 131, 1, 0, 0, 0, 16, 135, 1, 0, 0, 0, 18, 140, 1, 0, 0, 0, 20, 144, 1, 0, 0, 0, 22, 167, 1, 0, 0, 0, 24, 186, 1, 0, 0, 0, 26, 198, 1, 0, 0, 0, 28, 206, 1, 0, 0, 0, 30, 208, 1, 0, 0, 0, 32, 210, 1, 0, 0, 0, 34, 214, 1, 0, 0, 0, 36, 219, 1, 0, 0, 0, 38, 225, 1, 0, 0, 0, 40, 238, 1, 0, 0, 0, 42, 240, 1, 0, 0, 0, 44, 242, 1, 0, 0, 0, 46, 271, 1, 0, 0, 0, 48, 282, 1, 0, 0, 0, 50, 291, 1, 0, 0, 0, 52, 54, 3, 2, 1, 0, 53, 52, 1, 0, 0, 0, 54, 57, 1, 0, 0, 0, 55, 53, 1, 0, 0, 0, 55, 56, 1, 0, 0, 0, 56, 58, 1, 0, 0, 0, 57, 55, 1, 0, 0, 0, 58, 59, 5, 0, 0, 1, 59, 1, 1, 0, 0, 0, 60, 70, 3, 4, 2, 0, 61, 70, 3, 6, 3, 0, 62, 70, 3, 8, 4, 0, 63, 70, 3, 12, 6, 0, 64, 70, 3, 14, 7, 0, 65, 70, 3, 16, 8, 0, 66, 70, 3, 22, 11, 0, 67, 70, 3, 44, 22, 0, 68, 70, 3, 46, 23, 0, 69, 60, 1, 0, 0, 0, 69, 61, 1, 0, 0, 0, 69, 62, 1, 0, 0, 0, 69, 63, 1, 0, 0, 0, 69, 64, 1, 0, 0, 0, 69, 65, 1, 0, 0, 0, 69, 66, 1, 0, 0, 0, 69, 67, 1, 0, 0, 0, 69, 68, 1, 0, 0, 0, 70, 3, 1, 0, 0, 0, 71, 72, 5, 13, 0, 0, 72, 74, 5, 25, 0, 0, 73, 75, 3, 20, 10, 0, 74, 73, 1, 0, 0, 0, 74, 75, 1, 0, 0, 0, 75, 76, 1, 0, 0, 0, 76, 77, 5, 26, 0, 0, 77, 5, 1, 0, 0, 0, 78, 80, 5, 23, 0, 0, 79, 78, 1, 0, 0, 0, 79, 80, 1, 0, 0, 0, 80, 81, 1, 0, 0, 0, 81, 82, 5, 14, 0, 0, 82, 83, 5, 35, 0, 0, 83, 85, 5, 25, 0, 0, 84, 86, 3, 10, 5, 0, 85, 84, 1, 0, 0, 0, 85, 86, 1, 0, 0, 0, 86, 87, 1, 0, 0, 0, 87, 91, 5, 26, 0, 0, 88, 90, 3, 2, 1, 0, 89, 88, 1, 0, 0, 0, 90, 93, 1, 0, 0, 0, 91, 89, 1, 0, 0, 0, 91, 92, 1, 0, 0, 0, 92, 94, 1, 0, 0, 0, 93, 91, 1, 0, 0, 0, 94, 95, 5, 16, 0, 0, 95, 7, 1, 0, 0, 0, 96, 97, 5, 14, 0, 0, 97, 99, 5, 25, 0, 0, 98, 100, 3, 10, 5, 0, 99, 98, 1, 0, 0, 0, 99, 100, 1, 0, 0, 0, 100, 101, 1, 0, 0, 0, 101, 105, 5, 26, 0, 0, 102, 104, 3, 2, 1, 0, 103, 102, 1, 0, 0, 0, 104, 107, 1, 0, 0, 0, 105, 103, 1, 0, 0, 0, 105, 106, 1, 0, 0, 0, 106, 108, 1, 0, 0, 0, 107, 105, 1, 0, 0, 0, 108, 109, 5, 16, 0, 0, 109, 9, 1, 0, 0, 0, 110, 115, 5, 35, 0, 0, 111, 112, 5, 33, 0, 0, 112, 114, 5, 35, 0, 0, 113, 111, 1, 0, 0, 0, 114, 117, 1, 0, 0, 0, 115, 113, 1, 0, 0, 0, 115, 116, 1, 0, 0, 0, 116, 11, 1, 0, 0, 0, 117, 115, 1, 0, 0, 0, 118, 127, 5, 27, 0, 0, 119, 124, 3, 18, 9, 0, 120, 121, 5, 33, 0, 0, 121, 123, 3, 18, 9, 0, 122, 120, 1, 0, 0, 0, 123, 126, 1, 0, 0, 0, 124, 122, 1, 0, 0, 0, 124, 125, 1, 0, 0, 0, 125, 128, 1, 0, 0, 0, 126, 124, 1, 0, 0, 0, 127, 119, 1, 0, 0, 0, 127, 128, 1, 0, 0, 0, 128, 129, 1, 0, 0, 0, 129, 130, 5, 28, 0, 0, 130, 13, 1, 0, 0, 0, 131, 132, 5, 35, 0, 0, 132, 133, 5, 1, 0, 0, 133, 134, 3, 22, 11, 0, 134, 15, 1, 0, 0, 0, 135, 136, 5, 23, 0, 0, 136, 137, 5, 35, 0, 0, 137, 138, 5, 1, 0, 0, 138, 139, 3, 22, 11, 0, 139, 17, 1, 0, 0, 0, 140, 141, 5, 35, 0, 0, 141, 142, 5, 1, 0, 0, 142, 143, 3, 22, 11, 0, 143, 19, 1, 0, 0, 0, 144, 149, 3, 22, 11, 0, 145, 146, 5, 33, 0, 0, 146, 148, 3, 22, 11, 0, 147, 145, 1, 0, 0, 0, 148, 151, 1, 0, 0, 0, 149, 147, 1, 0, 0, 0, 149, 150, 1, 0, 0, 0, 150, 21, 1, 0, 0, 0, 151, 149, 1, 0, 0, 0, 152, 153, 6, 11, -1, 0, 153, 168, 5, 9, 0, 0, 154, 168, 5, 10, 0, 0, 155, 168, 5, 11, 0, 0, 156, 168, 5, 12, 0, 0, 157, 168, 3, 34, 17, 0, 158, 168, 3, 36, 18, 0, 159, 168, 3, 38, 19, 0, 160, 168, 3, 24, 12, 0, 161, 168, 3, 26, 13, 0, 162, 168, 3, 28, 14, 0, 163, 168, 3, 30, 15, 0, 164, 168, 3, 32, 16, 0, 165, 168, 3, 40, 20, 0, 166, 168, 3, 42, 21, 0, 167, 152, 1, 0, 0, 0, 167, 154, 1, 0, 0, 0, 167, 155, 1, 0, 0, 0, 167, 156, 1, 0, 0, 0, 167, 157, 1, 0, 0, 0, 167, 158, 1, 0, 0, 0, 167, 159, 1, 0, 0, 0, 167, 160, 1, 0, 0, 0, 167, 161, 1, 0, 0, 0, 167, 162, 1, 0, 0, 0, 167, 163, 1, 0, 0, 0, 167, 164, 1, 0, 0, 0, 167, 165, 1, 0, 0, 0, 167, 166, 1, 0, 0, 0, 168, 174, 1, 0, 0, 0, 169, 170, 10, 11, 0, 0, 170, 171, 7, 0, 0, 0, 171, 173, 3, 22, 11, 12, 172, 169, 1, 0, 0, 0, 173, 176, 1, 0, 0, 0, 174, 172, 1, 0, 0, 0, 174, 175, 1, 0, 0, 0, 175, 23, 1, 0, 0, 0, 176, 174, 1, 0, 0, 0, 177, 187, 5, 35, 0, 0, 178, 187, 3, 8, 4, 0, 179, 180, 3, 34, 17, 0, 180, 182, 5, 25, 0, 0, 181, 183, 3, 20, 10, 0, 182, 181, 1, 0, 0, 0, 182, 183, 1, 0, 0, 0, 183, 184, 1, 0, 0, 0, 184, 185, 5, 26, 0, 0, 185, 187, 1, 0, 0, 0, 186, 177, 1, 0, 0, 0, 186, 178, 1, 0, 0, 0, 186, 179, 1, 0, 0, 0, 187, 25, 1, 0, 0, 0, 188, 199, 5, 35, 0, 0, 189, 196, 3, 12, 6, 0, 190, 191, 5, 31, 0, 0, 191, 197, 5, 35, 0, 0, 192, 193, 5, 29, 0, 0, 193, 194, 3, 22, 11, 0, 194, 195, 5, 30, 0, 0, 195, 197, 1, 0, 0, 0, 196, 190, 1, 0, 0, 0, 196, 192, 1, 0, 0, 0, 197, 199, 1, 0, 0, 0, 198, 188, 1, 0, 0, 0, 198, 189, 1, 0, 0, 0, 199, 27, 1, 0, 0, 0, 200, 207, 5, 35, 0, 0, 201, 202, 3, 36, 18, 0, 202, 203, 5, 29, 0, 0, 203, 204, 5, 10, 0, 0, 204, 205, 5, 30, 0, 0, 205, 207, 1, 0, 0, 0, 206, 200, 1, 0, 0, 0, 206, 201, 1, 0, 0, 0, 207, 29, 1, 0, 0, 0, 208, 209, 5, 35, 0, 0, 209, 31, 1, 0, 0, 0, 210, 211, 5, 25, 0, 0, 211, 212, 3, 22, 11, 0, 212, 213, 5, 26, 0, 0, 213, 33, 1, 0, 0, 0, 214, 215, 5, 15, 0, 0, 215, 216, 5, 25, 0, 0, 216, 217, 3, 22, 11, 0, 217, 218, 5, 26, 0, 0, 218, 35, 1, 0, 0, 0, 219, 221, 5, 27, 0, 0, 220, 222, 3, 20, 10, 0, 221, 220, 1, 0, 0, 0, 221, 222, 1, 0, 0, 0, 222, 223, 1, 0, 0, 0, 223, 224, 5, 28, 0, 0, 224, 37, 1, 0, 0, 0, 225, 234, 5, 27, 0, 0, 226, 231, 3, 18, 9, 0, 227, 228, 5, 33, 0, 0, 228, 230, 3, 18, 9, 0, 229, 227, 1, 0, 0, 0, 230, 233, 1, 0, 0, 0, 231, 229, 1, 0, 0, 0, 231, 232, 1, 0, 0, 0, 232, 235, 1, 0, 0, 0, 233, 231, 1, 0, 0, 0, 234, 226, 1, 0, 0, 0, 234, 235, 1, 0, 0, 0, 235, 236, 1, 0, 0, 0, 236, 237, 5, 28, 0, 0, 237, 39, 1, 0, 0, 0, 238, 239, 5, 36, 0, 0, 239, 41, 1, 0, 0, 0, 240, 241, 5, 37, 0, 0, 241, 43, 1, 0, 0, 0, 242, 243, 5, 17, 0, 0, 243, 244, 3, 22, 11, 0, 244, 248, 5, 18, 0, 0, 245, 247, 3, 2, 1, 0, 246, 245, 1, 0, 0, 0, 247, 250, 1, 0, 0, 0, 248, 246, 1, 0, 0, 0, 248, 249, 1, 0, 0, 0, 249, 252, 1, 0, 0, 0, 250, 248, 1, 0, 0, 0, 251, 253, 5, 16, 0, 0, 252, 251, 1, 0, 0, 0, 252, 253, 1, 0, 0, 0, 253, 260, 1, 0, 0, 0, 254, 256, 3, 48, 24, 0, 255, 257, 5, 16, 0, 0, 256, 255, 1, 0, 0, 0, 256, 257, 1, 0, 0, 0, 257, 259, 1, 0, 0, 0, 258, 254, 1, 0, 0, 0, 259, 262, 1, 0, 0, 0, 260, 258, 1, 0, 0, 0, 260, 261, 1, 0, 0, 0, 261, 267, 1, 0, 0, 0, 262, 260, 1, 0, 0, 0, 263, 265, 3, 50, 25, 0, 264, 266, 5, 16, 0, 0, 265, 264, 1, 0, 0, 0, 265, 266, 1, 0, 0, 0, 266, 268, 1, 0, 0, 0, 267, 263, 1, 0, 0, 0, 267, 268, 1, 0, 0, 0, 268, 269, 1, 0, 0, 0, 269, 270, 5, 16, 0, 0, 270, 45, 1, 0, 0, 0, 271, 272, 5, 21, 0, 0, 272, 273, 3, 22, 11, 0, 273, 277, 5, 22, 0, 0, 274, 276, 3, 2, 1, 0, 275, 274, 1, 0, 0, 0, 276, 279, 1, 0, 0, 0, 277, 275, 1, 0, 0, 0, 277, 278, 1, 0, 0, 0, 278, 280, 1, 0, 0, 0, 279, 277, 1, 0, 0, 0, 280, 281, 5, 16, 0, 0, 281, 47, 1, 0, 0, 0, 282, 283, 5, 20, 0, 0, 283, 284, 3, 22, 11, 0, 284, 288, 5, 18, 0, 0, 285, 287, 3, 2, 1, 0, 286, 285, 1, 0, 0, 0, 287, 290, 1, 0, 0, 0, 288, 286, 1, 0, 0, 0, 288, 289, 1, 0, 0, 0, 289, 49, 1, 0, 0, 0, 290, 288, 1, 0, 0, 0, 291, 295, 5, 19, 0, 0, 292, 294, 3, 2, 1, 0, 293, 292, 1, 0, 0, 0, 294, 297, 1, 0, 0, 0, 295, 293, 1, 0, 0, 0, 295, 296, 1, 0, 0, 0, 296, 51, 1, 0, 0, 0, 297, 295, 1, 0, 0, 0, 31, 55, 69, 74, 79, 85, 91, 99, 105, 115, 124, 127, 149, 167, 174, 182, 186, 196, 198, 206, 221, 231, 234, 248, 252, 256, 260, 265, 267, 277, 288, 295];
const atn = new _antlr.default.atn.ATNDeserializer().deserialize(serializedATN);
const decisionsToDFA = atn.decisionToState.map((ds, index) => new _antlr.default.dfa.DFA(ds, index));
const sharedContextCache = new _antlr.default.atn.PredictionContextCache();
class fplusParser extends _antlr.default.Parser {
  static grammarFileName = "fplus.g4";
  static literalNames = [null, "'='", "'*'", "'/'", "'+'", "'-'", "'^'", null, null, null, null, null, null, "'print'", "'function'", "'loadstring'", "'end'", "'if'", "'then'", "'else'", "'elseif'", "'while'", "'do'", "'local'", "'let'", "'('", "')'", "'{'", "'}'", "'['", "']'", "'.'", "':'", "','", "';'"];
  static symbolicNames = [null, null, null, null, null, null, null, "COMMENT", "MLCOMMENT", "STRING", "INTEGER", "FLOAT", "BOOLEAN", "PRINT", "FUNCTION", "LOADSTRING", "END", "IF", "THEN", "ELSE", "ELSEIF", "WHILE", "DO", "LOCAL", "LET", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LSQUARE", "RSQUARE", "DOT", "COLON", "COMMA", "SEMICOLON", "ID", "INLINE_JS_EXPR", "JAVASCRIPT_EMBED", "WS"];
  static ruleNames = ["program", "statement", "printExpr", "functionDeclaration", "anonymousFunctionDeclaration", "params", "objectDeclaration", "variableDeclaration", "localVariableDeclaration", "keyValuePair", "exprList", "expr", "functionCall", "objectAccess", "arrayAccess", "variableAccess", "parens", "loadstring", "arrayExpr", "objectExpr", "inlineJsExpr", "javaScriptEmbed", "ifStatement", "whileStatement", "elseIfStatement", "elseStatement"];
  constructor(input) {
    super(input);
    this._interp = new _antlr.default.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = fplusParser.ruleNames;
    this.literalNames = fplusParser.literalNames;
    this.symbolicNames = fplusParser.symbolicNames;
  }
  sempred(localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
      case 11:
        return this.expr_sempred(localctx, predIndex);
      default:
        throw "No predicate with index:" + ruleIndex;
    }
  }
  expr_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 11);
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
      this.state = 55;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 470110591) !== 0) {
        this.state = 52;
        this.statement();
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 58;
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
      this.state = 69;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 60;
          this.printExpr();
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 61;
          this.functionDeclaration();
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 62;
          this.anonymousFunctionDeclaration();
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 63;
          this.objectDeclaration();
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          this.state = 64;
          this.variableDeclaration();
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          this.state = 65;
          this.localVariableDeclaration();
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          this.state = 66;
          this.expr(0);
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          this.state = 67;
          this.ifStatement();
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          this.state = 68;
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
      this.state = 71;
      this.match(fplusParser.PRINT);
      this.state = 72;
      this.match(fplusParser.LPAREN);
      this.state = 74;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 470089839) !== 0) {
        this.state = 73;
        this.exprList();
      }
      this.state = 76;
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
      this.state = 79;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 23) {
        this.state = 78;
        this.match(fplusParser.LOCAL);
      }
      this.state = 81;
      this.match(fplusParser.FUNCTION);
      this.state = 82;
      this.match(fplusParser.ID);
      this.state = 83;
      this.match(fplusParser.LPAREN);
      this.state = 85;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 35) {
        this.state = 84;
        this.params();
      }
      this.state = 87;
      this.match(fplusParser.RPAREN);
      this.state = 91;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 470110591) !== 0) {
        this.state = 88;
        this.statement();
        this.state = 93;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 94;
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
  anonymousFunctionDeclaration() {
    let localctx = new AnonymousFunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, fplusParser.RULE_anonymousFunctionDeclaration);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 96;
      this.match(fplusParser.FUNCTION);
      this.state = 97;
      this.match(fplusParser.LPAREN);
      this.state = 99;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 35) {
        this.state = 98;
        this.params();
      }
      this.state = 101;
      this.match(fplusParser.RPAREN);
      this.state = 105;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 470110591) !== 0) {
        this.state = 102;
        this.statement();
        this.state = 107;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 108;
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
      this.state = 110;
      this.match(fplusParser.ID);
      this.state = 115;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 33) {
        this.state = 111;
        this.match(fplusParser.COMMA);
        this.state = 112;
        this.match(fplusParser.ID);
        this.state = 117;
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
      this.state = 118;
      this.match(fplusParser.LBRACE);
      this.state = 127;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 35) {
        this.state = 119;
        this.keyValuePair();
        this.state = 124;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 33) {
          this.state = 120;
          this.match(fplusParser.COMMA);
          this.state = 121;
          this.keyValuePair();
          this.state = 126;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
      this.state = 129;
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
      this.state = 131;
      this.match(fplusParser.ID);
      this.state = 132;
      this.match(fplusParser.T__0);
      this.state = 133;
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
    this.enterRule(localctx, 16, fplusParser.RULE_localVariableDeclaration);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 135;
      this.match(fplusParser.LOCAL);
      this.state = 136;
      this.match(fplusParser.ID);
      this.state = 137;
      this.match(fplusParser.T__0);
      this.state = 138;
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
    this.enterRule(localctx, 18, fplusParser.RULE_keyValuePair);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 140;
      this.match(fplusParser.ID);
      this.state = 141;
      this.match(fplusParser.T__0);
      this.state = 142;
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
    this.enterRule(localctx, 20, fplusParser.RULE_exprList);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 144;
      this.expr(0);
      this.state = 149;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 33) {
        this.state = 145;
        this.match(fplusParser.COMMA);
        this.state = 146;
        this.expr(0);
        this.state = 151;
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
    const _startState = 22;
    this.enterRecursionRule(localctx, 22, fplusParser.RULE_expr, _p);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 167;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 12, this._ctx);
      switch (la_) {
        case 1:
          this.state = 153;
          this.match(fplusParser.STRING);
          break;
        case 2:
          this.state = 154;
          this.match(fplusParser.INTEGER);
          break;
        case 3:
          this.state = 155;
          this.match(fplusParser.FLOAT);
          break;
        case 4:
          this.state = 156;
          this.match(fplusParser.BOOLEAN);
          break;
        case 5:
          this.state = 157;
          this.loadstring();
          break;
        case 6:
          this.state = 158;
          this.arrayExpr();
          break;
        case 7:
          this.state = 159;
          this.objectExpr();
          break;
        case 8:
          this.state = 160;
          this.functionCall();
          break;
        case 9:
          this.state = 161;
          this.objectAccess();
          break;
        case 10:
          this.state = 162;
          this.arrayAccess();
          break;
        case 11:
          this.state = 163;
          this.variableAccess();
          break;
        case 12:
          this.state = 164;
          this.parens();
          break;
        case 13:
          this.state = 165;
          this.inlineJsExpr();
          break;
        case 14:
          this.state = 166;
          this.javaScriptEmbed();
          break;
      }
      this._ctx.stop = this._input.LT(-1);
      this.state = 174;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
      while (_alt != 2 && _alt != _antlr.default.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          localctx = new ExprContext(this, _parentctx, _parentState);
          this.pushNewRecursionContext(localctx, _startState, fplusParser.RULE_expr);
          this.state = 169;
          if (!this.precpred(this._ctx, 11)) {
            throw new _antlr.default.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
          }
          this.state = 170;
          _la = this._input.LA(1);
          if (!((_la & ~0x1f) === 0 && (1 << _la & 124) !== 0)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 171;
          this.expr(12);
        }
        this.state = 176;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
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
    this.enterRule(localctx, 24, fplusParser.RULE_functionCall);
    var _la = 0;
    try {
      this.state = 186;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 35:
          this.enterOuterAlt(localctx, 1);
          this.state = 177;
          this.match(fplusParser.ID);
          break;
        case 14:
          this.enterOuterAlt(localctx, 2);
          this.state = 178;
          this.anonymousFunctionDeclaration();
          break;
        case 15:
          this.enterOuterAlt(localctx, 3);
          this.state = 179;
          this.loadstring();
          this.state = 180;
          this.match(fplusParser.LPAREN);
          this.state = 182;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 470089839) !== 0) {
            this.state = 181;
            this.exprList();
          }
          this.state = 184;
          this.match(fplusParser.RPAREN);
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
  objectAccess() {
    let localctx = new ObjectAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, fplusParser.RULE_objectAccess);
    try {
      this.state = 198;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 35:
          this.enterOuterAlt(localctx, 1);
          this.state = 188;
          this.match(fplusParser.ID);
          break;
        case 27:
          this.enterOuterAlt(localctx, 2);
          this.state = 189;
          this.objectDeclaration();
          this.state = 196;
          this._errHandler.sync(this);
          switch (this._input.LA(1)) {
            case 31:
              this.state = 190;
              this.match(fplusParser.DOT);
              this.state = 191;
              this.match(fplusParser.ID);
              break;
            case 29:
              this.state = 192;
              this.match(fplusParser.LSQUARE);
              this.state = 193;
              this.expr(0);
              this.state = 194;
              this.match(fplusParser.RSQUARE);
              break;
            default:
              throw new _antlr.default.error.NoViableAltException(this);
          }
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
      this.state = 206;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 35:
          this.enterOuterAlt(localctx, 1);
          this.state = 200;
          this.match(fplusParser.ID);
          break;
        case 27:
          this.enterOuterAlt(localctx, 2);
          this.state = 201;
          this.arrayExpr();
          this.state = 202;
          this.match(fplusParser.LSQUARE);
          this.state = 203;
          this.match(fplusParser.INTEGER);
          this.state = 204;
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
  variableAccess() {
    let localctx = new VariableAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, fplusParser.RULE_variableAccess);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 208;
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
      this.state = 210;
      this.match(fplusParser.LPAREN);
      this.state = 211;
      this.expr(0);
      this.state = 212;
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
  loadstring() {
    let localctx = new LoadstringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, fplusParser.RULE_loadstring);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 214;
      this.match(fplusParser.LOADSTRING);
      this.state = 215;
      this.match(fplusParser.LPAREN);
      this.state = 216;
      this.expr(0);
      this.state = 217;
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
    this.enterRule(localctx, 36, fplusParser.RULE_arrayExpr);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 219;
      this.match(fplusParser.LBRACE);
      this.state = 221;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 470089839) !== 0) {
        this.state = 220;
        this.exprList();
      }
      this.state = 223;
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
    this.enterRule(localctx, 38, fplusParser.RULE_objectExpr);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 225;
      this.match(fplusParser.LBRACE);
      this.state = 234;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 35) {
        this.state = 226;
        this.keyValuePair();
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 33) {
          this.state = 227;
          this.match(fplusParser.COMMA);
          this.state = 228;
          this.keyValuePair();
          this.state = 233;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
      this.state = 236;
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
    this.enterRule(localctx, 40, fplusParser.RULE_inlineJsExpr);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 238;
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
    this.enterRule(localctx, 42, fplusParser.RULE_javaScriptEmbed);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 240;
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
    this.enterRule(localctx, 44, fplusParser.RULE_ifStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 242;
      this.match(fplusParser.IF);
      this.state = 243;
      this.expr(0);
      this.state = 244;
      this.match(fplusParser.THEN);
      this.state = 248;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 470110591) !== 0) {
        this.state = 245;
        this.statement();
        this.state = 250;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 252;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 23, this._ctx);
      if (la_ === 1) {
        this.state = 251;
        this.match(fplusParser.END);
      }
      this.state = 260;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 20) {
        this.state = 254;
        this.elseIfStatement();
        this.state = 256;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 24, this._ctx);
        if (la_ === 1) {
          this.state = 255;
          this.match(fplusParser.END);
        }
        this.state = 262;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 267;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 19) {
        this.state = 263;
        this.elseStatement();
        this.state = 265;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 26, this._ctx);
        if (la_ === 1) {
          this.state = 264;
          this.match(fplusParser.END);
        }
      }
      this.state = 269;
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
    this.enterRule(localctx, 46, fplusParser.RULE_whileStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 271;
      this.match(fplusParser.WHILE);
      this.state = 272;
      this.expr(0);
      this.state = 273;
      this.match(fplusParser.DO);
      this.state = 277;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 470110591) !== 0) {
        this.state = 274;
        this.statement();
        this.state = 279;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 280;
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
    this.enterRule(localctx, 48, fplusParser.RULE_elseIfStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 282;
      this.match(fplusParser.ELSEIF);
      this.state = 283;
      this.expr(0);
      this.state = 284;
      this.match(fplusParser.THEN);
      this.state = 288;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 470110591) !== 0) {
        this.state = 285;
        this.statement();
        this.state = 290;
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
    this.enterRule(localctx, 50, fplusParser.RULE_elseStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 291;
      this.match(fplusParser.ELSE);
      this.state = 295;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la - 9 & ~0x1f) === 0 && (1 << _la - 9 & 470110591) !== 0) {
        this.state = 292;
        this.statement();
        this.state = 297;
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
fplusParser.LOADSTRING = 15;
fplusParser.END = 16;
fplusParser.IF = 17;
fplusParser.THEN = 18;
fplusParser.ELSE = 19;
fplusParser.ELSEIF = 20;
fplusParser.WHILE = 21;
fplusParser.DO = 22;
fplusParser.LOCAL = 23;
fplusParser.LET = 24;
fplusParser.LPAREN = 25;
fplusParser.RPAREN = 26;
fplusParser.LBRACE = 27;
fplusParser.RBRACE = 28;
fplusParser.LSQUARE = 29;
fplusParser.RSQUARE = 30;
fplusParser.DOT = 31;
fplusParser.COLON = 32;
fplusParser.COMMA = 33;
fplusParser.SEMICOLON = 34;
fplusParser.ID = 35;
fplusParser.INLINE_JS_EXPR = 36;
fplusParser.JAVASCRIPT_EMBED = 37;
fplusParser.WS = 38;
fplusParser.RULE_program = 0;
fplusParser.RULE_statement = 1;
fplusParser.RULE_printExpr = 2;
fplusParser.RULE_functionDeclaration = 3;
fplusParser.RULE_anonymousFunctionDeclaration = 4;
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
fplusParser.RULE_loadstring = 17;
fplusParser.RULE_arrayExpr = 18;
fplusParser.RULE_objectExpr = 19;
fplusParser.RULE_inlineJsExpr = 20;
fplusParser.RULE_javaScriptEmbed = 21;
fplusParser.RULE_ifStatement = 22;
fplusParser.RULE_whileStatement = 23;
fplusParser.RULE_elseIfStatement = 24;
fplusParser.RULE_elseStatement = 25;
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
  anonymousFunctionDeclaration() {
    return this.getTypedRuleContext(AnonymousFunctionDeclarationContext, 0);
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
class AnonymousFunctionDeclarationContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_anonymousFunctionDeclaration;
  }
  FUNCTION() {
    return this.getToken(fplusParser.FUNCTION, 0);
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
      listener.enterAnonymousFunctionDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitAnonymousFunctionDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitAnonymousFunctionDeclaration(this);
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
  loadstring() {
    return this.getTypedRuleContext(LoadstringContext, 0);
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
  anonymousFunctionDeclaration() {
    return this.getTypedRuleContext(AnonymousFunctionDeclarationContext, 0);
  }
  loadstring() {
    return this.getTypedRuleContext(LoadstringContext, 0);
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
  ID() {
    return this.getToken(fplusParser.ID, 0);
  }
  objectDeclaration() {
    return this.getTypedRuleContext(ObjectDeclarationContext, 0);
  }
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
  arrayExpr() {
    return this.getTypedRuleContext(ArrayExprContext, 0);
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
class LoadstringContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_loadstring;
  }
  LOADSTRING() {
    return this.getToken(fplusParser.LOADSTRING, 0);
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
      listener.enterLoadstring(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitLoadstring(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitLoadstring(this);
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
fplusParser.AnonymousFunctionDeclarationContext = AnonymousFunctionDeclarationContext;
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
fplusParser.LoadstringContext = LoadstringContext;
fplusParser.ArrayExprContext = ArrayExprContext;
fplusParser.ObjectExprContext = ObjectExprContext;
fplusParser.InlineJsExprContext = InlineJsExprContext;
fplusParser.JavaScriptEmbedContext = JavaScriptEmbedContext;
fplusParser.IfStatementContext = IfStatementContext;
fplusParser.WhileStatementContext = WhileStatementContext;
fplusParser.ElseIfStatementContext = ElseIfStatementContext;
fplusParser.ElseStatementContext = ElseStatementContext;