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

const serializedATN = [4, 1, 57, 304, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 1, 0, 5, 0, 52, 8, 0, 10, 0, 12, 0, 55, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 70, 8, 1, 1, 2, 1, 2, 1, 2, 3, 2, 75, 8, 2, 1, 2, 1, 2, 1, 3, 3, 3, 80, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 86, 8, 3, 1, 3, 1, 3, 5, 3, 90, 8, 3, 10, 3, 12, 3, 93, 9, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 3, 4, 100, 8, 4, 1, 4, 1, 4, 5, 4, 104, 8, 4, 10, 4, 12, 4, 107, 9, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 5, 5, 114, 8, 5, 10, 5, 12, 5, 117, 9, 5, 1, 6, 1, 6, 1, 6, 3, 6, 122, 8, 6, 1, 6, 1, 6, 1, 6, 3, 6, 127, 8, 6, 5, 6, 129, 8, 6, 10, 6, 12, 6, 132, 9, 6, 5, 6, 134, 8, 6, 10, 6, 12, 6, 137, 9, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 5, 10, 157, 8, 10, 10, 10, 12, 10, 160, 9, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 179, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 190, 8, 11, 10, 11, 12, 11, 193, 9, 11, 1, 12, 1, 12, 1, 12, 3, 12, 198, 8, 12, 1, 12, 1, 12, 3, 12, 202, 8, 12, 1, 12, 1, 12, 1, 13, 1, 13, 3, 13, 208, 8, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 216, 8, 13, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 5, 19, 237, 8, 19, 10, 19, 12, 19, 240, 9, 19, 1, 19, 3, 19, 243, 8, 19, 1, 19, 1, 19, 3, 19, 247, 8, 19, 5, 19, 249, 8, 19, 10, 19, 12, 19, 252, 9, 19, 1, 19, 1, 19, 3, 19, 256, 8, 19, 3, 19, 258, 8, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 20, 5, 20, 266, 8, 20, 10, 20, 12, 20, 269, 9, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 5, 21, 279, 8, 21, 10, 21, 12, 21, 282, 9, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1, 23, 5, 23, 292, 8, 23, 10, 23, 12, 23, 295, 9, 23, 1, 24, 1, 24, 5, 24, 299, 8, 24, 10, 24, 12, 24, 302, 9, 24, 1, 24, 0, 1, 22, 25, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 0, 4, 2, 0, 23, 23, 54, 54, 1, 0, 2, 12, 1, 0, 13, 18, 1, 0, 19, 20, 333, 0, 53, 1, 0, 0, 0, 2, 69, 1, 0, 0, 0, 4, 71, 1, 0, 0, 0, 6, 79, 1, 0, 0, 0, 8, 96, 1, 0, 0, 0, 10, 110, 1, 0, 0, 0, 12, 118, 1, 0, 0, 0, 14, 140, 1, 0, 0, 0, 16, 144, 1, 0, 0, 0, 18, 149, 1, 0, 0, 0, 20, 153, 1, 0, 0, 0, 22, 178, 1, 0, 0, 0, 24, 197, 1, 0, 0, 0, 26, 207, 1, 0, 0, 0, 28, 217, 1, 0, 0, 0, 30, 219, 1, 0, 0, 0, 32, 223, 1, 0, 0, 0, 34, 228, 1, 0, 0, 0, 36, 230, 1, 0, 0, 0, 38, 232, 1, 0, 0, 0, 40, 261, 1, 0, 0, 0, 42, 272, 1, 0, 0, 0, 44, 285, 1, 0, 0, 0, 46, 287, 1, 0, 0, 0, 48, 296, 1, 0, 0, 0, 50, 52, 3, 2, 1, 0, 51, 50, 1, 0, 0, 0, 52, 55, 1, 0, 0, 0, 53, 51, 1, 0, 0, 0, 53, 54, 1, 0, 0, 0, 54, 56, 1, 0, 0, 0, 55, 53, 1, 0, 0, 0, 56, 57, 5, 0, 0, 1, 57, 1, 1, 0, 0, 0, 58, 70, 3, 4, 2, 0, 59, 70, 3, 6, 3, 0, 60, 70, 3, 8, 4, 0, 61, 70, 3, 12, 6, 0, 62, 70, 3, 14, 7, 0, 63, 70, 3, 16, 8, 0, 64, 70, 3, 22, 11, 0, 65, 70, 3, 38, 19, 0, 66, 70, 3, 40, 20, 0, 67, 70, 3, 42, 21, 0, 68, 70, 3, 44, 22, 0, 69, 58, 1, 0, 0, 0, 69, 59, 1, 0, 0, 0, 69, 60, 1, 0, 0, 0, 69, 61, 1, 0, 0, 0, 69, 62, 1, 0, 0, 0, 69, 63, 1, 0, 0, 0, 69, 64, 1, 0, 0, 0, 69, 65, 1, 0, 0, 0, 69, 66, 1, 0, 0, 0, 69, 67, 1, 0, 0, 0, 69, 68, 1, 0, 0, 0, 70, 3, 1, 0, 0, 0, 71, 72, 5, 28, 0, 0, 72, 74, 5, 44, 0, 0, 73, 75, 3, 20, 10, 0, 74, 73, 1, 0, 0, 0, 74, 75, 1, 0, 0, 0, 75, 76, 1, 0, 0, 0, 76, 77, 5, 45, 0, 0, 77, 5, 1, 0, 0, 0, 78, 80, 5, 41, 0, 0, 79, 78, 1, 0, 0, 0, 79, 80, 1, 0, 0, 0, 80, 81, 1, 0, 0, 0, 81, 82, 5, 29, 0, 0, 82, 83, 5, 54, 0, 0, 83, 85, 5, 44, 0, 0, 84, 86, 3, 10, 5, 0, 85, 84, 1, 0, 0, 0, 85, 86, 1, 0, 0, 0, 86, 87, 1, 0, 0, 0, 87, 91, 5, 45, 0, 0, 88, 90, 3, 2, 1, 0, 89, 88, 1, 0, 0, 0, 90, 93, 1, 0, 0, 0, 91, 89, 1, 0, 0, 0, 91, 92, 1, 0, 0, 0, 92, 94, 1, 0, 0, 0, 93, 91, 1, 0, 0, 0, 94, 95, 5, 31, 0, 0, 95, 7, 1, 0, 0, 0, 96, 97, 5, 29, 0, 0, 97, 99, 5, 44, 0, 0, 98, 100, 3, 10, 5, 0, 99, 98, 1, 0, 0, 0, 99, 100, 1, 0, 0, 0, 100, 101, 1, 0, 0, 0, 101, 105, 5, 45, 0, 0, 102, 104, 3, 2, 1, 0, 103, 102, 1, 0, 0, 0, 104, 107, 1, 0, 0, 0, 105, 103, 1, 0, 0, 0, 105, 106, 1, 0, 0, 0, 106, 108, 1, 0, 0, 0, 107, 105, 1, 0, 0, 0, 108, 109, 5, 31, 0, 0, 109, 9, 1, 0, 0, 0, 110, 115, 5, 54, 0, 0, 111, 112, 5, 52, 0, 0, 112, 114, 5, 54, 0, 0, 113, 111, 1, 0, 0, 0, 114, 117, 1, 0, 0, 0, 115, 113, 1, 0, 0, 0, 115, 116, 1, 0, 0, 0, 116, 11, 1, 0, 0, 0, 117, 115, 1, 0, 0, 0, 118, 135, 5, 46, 0, 0, 119, 122, 3, 20, 10, 0, 120, 122, 3, 18, 9, 0, 121, 119, 1, 0, 0, 0, 121, 120, 1, 0, 0, 0, 122, 130, 1, 0, 0, 0, 123, 126, 5, 52, 0, 0, 124, 127, 3, 20, 10, 0, 125, 127, 3, 18, 9, 0, 126, 124, 1, 0, 0, 0, 126, 125, 1, 0, 0, 0, 127, 129, 1, 0, 0, 0, 128, 123, 1, 0, 0, 0, 129, 132, 1, 0, 0, 0, 130, 128, 1, 0, 0, 0, 130, 131, 1, 0, 0, 0, 131, 134, 1, 0, 0, 0, 132, 130, 1, 0, 0, 0, 133, 121, 1, 0, 0, 0, 134, 137, 1, 0, 0, 0, 135, 133, 1, 0, 0, 0, 135, 136, 1, 0, 0, 0, 136, 138, 1, 0, 0, 0, 137, 135, 1, 0, 0, 0, 138, 139, 5, 47, 0, 0, 139, 13, 1, 0, 0, 0, 140, 141, 5, 54, 0, 0, 141, 142, 5, 1, 0, 0, 142, 143, 3, 22, 11, 0, 143, 15, 1, 0, 0, 0, 144, 145, 5, 41, 0, 0, 145, 146, 5, 54, 0, 0, 146, 147, 5, 1, 0, 0, 147, 148, 3, 22, 11, 0, 148, 17, 1, 0, 0, 0, 149, 150, 7, 0, 0, 0, 150, 151, 5, 1, 0, 0, 151, 152, 3, 22, 11, 0, 152, 19, 1, 0, 0, 0, 153, 158, 3, 22, 11, 0, 154, 155, 5, 52, 0, 0, 155, 157, 3, 22, 11, 0, 156, 154, 1, 0, 0, 0, 157, 160, 1, 0, 0, 0, 158, 156, 1, 0, 0, 0, 158, 159, 1, 0, 0, 0, 159, 21, 1, 0, 0, 0, 160, 158, 1, 0, 0, 0, 161, 162, 6, 11, -1, 0, 162, 179, 5, 23, 0, 0, 163, 179, 5, 24, 0, 0, 164, 179, 5, 25, 0, 0, 165, 179, 5, 26, 0, 0, 166, 179, 5, 27, 0, 0, 167, 179, 5, 54, 0, 0, 168, 169, 5, 32, 0, 0, 169, 179, 3, 22, 11, 9, 170, 179, 3, 32, 16, 0, 171, 179, 3, 24, 12, 0, 172, 179, 3, 26, 13, 0, 173, 179, 3, 28, 14, 0, 174, 179, 3, 12, 6, 0, 175, 179, 3, 30, 15, 0, 176, 179, 3, 34, 17, 0, 177, 179, 3, 36, 18, 0, 178, 161, 1, 0, 0, 0, 178, 163, 1, 0, 0, 0, 178, 164, 1, 0, 0, 0, 178, 165, 1, 0, 0, 0, 178, 166, 1, 0, 0, 0, 178, 167, 1, 0, 0, 0, 178, 168, 1, 0, 0, 0, 178, 170, 1, 0, 0, 0, 178, 171, 1, 0, 0, 0, 178, 172, 1, 0, 0, 0, 178, 173, 1, 0, 0, 0, 178, 174, 1, 0, 0, 0, 178, 175, 1, 0, 0, 0, 178, 176, 1, 0, 0, 0, 178, 177, 1, 0, 0, 0, 179, 191, 1, 0, 0, 0, 180, 181, 10, 12, 0, 0, 181, 182, 7, 1, 0, 0, 182, 190, 3, 22, 11, 13, 183, 184, 10, 11, 0, 0, 184, 185, 7, 2, 0, 0, 185, 190, 3, 22, 11, 12, 186, 187, 10, 10, 0, 0, 187, 188, 7, 3, 0, 0, 188, 190, 3, 22, 11, 11, 189, 180, 1, 0, 0, 0, 189, 183, 1, 0, 0, 0, 189, 186, 1, 0, 0, 0, 190, 193, 1, 0, 0, 0, 191, 189, 1, 0, 0, 0, 191, 192, 1, 0, 0, 0, 192, 23, 1, 0, 0, 0, 193, 191, 1, 0, 0, 0, 194, 198, 5, 54, 0, 0, 195, 198, 3, 8, 4, 0, 196, 198, 3, 32, 16, 0, 197, 194, 1, 0, 0, 0, 197, 195, 1, 0, 0, 0, 197, 196, 1, 0, 0, 0, 198, 199, 1, 0, 0, 0, 199, 201, 5, 44, 0, 0, 200, 202, 3, 20, 10, 0, 201, 200, 1, 0, 0, 0, 201, 202, 1, 0, 0, 0, 202, 203, 1, 0, 0, 0, 203, 204, 5, 45, 0, 0, 204, 25, 1, 0, 0, 0, 205, 208, 5, 54, 0, 0, 206, 208, 3, 12, 6, 0, 207, 205, 1, 0, 0, 0, 207, 206, 1, 0, 0, 0, 208, 215, 1, 0, 0, 0, 209, 210, 5, 50, 0, 0, 210, 216, 5, 54, 0, 0, 211, 212, 5, 48, 0, 0, 212, 213, 3, 22, 11, 0, 213, 214, 5, 49, 0, 0, 214, 216, 1, 0, 0, 0, 215, 209, 1, 0, 0, 0, 215, 211, 1, 0, 0, 0, 216, 27, 1, 0, 0, 0, 217, 218, 5, 54, 0, 0, 218, 29, 1, 0, 0, 0, 219, 220, 5, 44, 0, 0, 220, 221, 3, 22, 11, 0, 221, 222, 5, 45, 0, 0, 222, 31, 1, 0, 0, 0, 223, 224, 5, 30, 0, 0, 224, 225, 5, 44, 0, 0, 225, 226, 3, 22, 11, 0, 226, 227, 5, 45, 0, 0, 227, 33, 1, 0, 0, 0, 228, 229, 5, 55, 0, 0, 229, 35, 1, 0, 0, 0, 230, 231, 5, 56, 0, 0, 231, 37, 1, 0, 0, 0, 232, 233, 5, 33, 0, 0, 233, 234, 3, 22, 11, 0, 234, 238, 5, 34, 0, 0, 235, 237, 3, 2, 1, 0, 236, 235, 1, 0, 0, 0, 237, 240, 1, 0, 0, 0, 238, 236, 1, 0, 0, 0, 238, 239, 1, 0, 0, 0, 239, 242, 1, 0, 0, 0, 240, 238, 1, 0, 0, 0, 241, 243, 5, 31, 0, 0, 242, 241, 1, 0, 0, 0, 242, 243, 1, 0, 0, 0, 243, 250, 1, 0, 0, 0, 244, 246, 3, 46, 23, 0, 245, 247, 5, 31, 0, 0, 246, 245, 1, 0, 0, 0, 246, 247, 1, 0, 0, 0, 247, 249, 1, 0, 0, 0, 248, 244, 1, 0, 0, 0, 249, 252, 1, 0, 0, 0, 250, 248, 1, 0, 0, 0, 250, 251, 1, 0, 0, 0, 251, 257, 1, 0, 0, 0, 252, 250, 1, 0, 0, 0, 253, 255, 3, 48, 24, 0, 254, 256, 5, 31, 0, 0, 255, 254, 1, 0, 0, 0, 255, 256, 1, 0, 0, 0, 256, 258, 1, 0, 0, 0, 257, 253, 1, 0, 0, 0, 257, 258, 1, 0, 0, 0, 258, 259, 1, 0, 0, 0, 259, 260, 5, 31, 0, 0, 260, 39, 1, 0, 0, 0, 261, 262, 5, 37, 0, 0, 262, 263, 3, 22, 11, 0, 263, 267, 5, 38, 0, 0, 264, 266, 3, 2, 1, 0, 265, 264, 1, 0, 0, 0, 266, 269, 1, 0, 0, 0, 267, 265, 1, 0, 0, 0, 267, 268, 1, 0, 0, 0, 268, 270, 1, 0, 0, 0, 269, 267, 1, 0, 0, 0, 270, 271, 5, 31, 0, 0, 271, 41, 1, 0, 0, 0, 272, 273, 5, 39, 0, 0, 273, 274, 5, 54, 0, 0, 274, 275, 5, 40, 0, 0, 275, 276, 3, 22, 11, 0, 276, 280, 5, 38, 0, 0, 277, 279, 3, 2, 1, 0, 278, 277, 1, 0, 0, 0, 279, 282, 1, 0, 0, 0, 280, 278, 1, 0, 0, 0, 280, 281, 1, 0, 0, 0, 281, 283, 1, 0, 0, 0, 282, 280, 1, 0, 0, 0, 283, 284, 5, 31, 0, 0, 284, 43, 1, 0, 0, 0, 285, 286, 5, 43, 0, 0, 286, 45, 1, 0, 0, 0, 287, 288, 5, 36, 0, 0, 288, 289, 3, 22, 11, 0, 289, 293, 5, 34, 0, 0, 290, 292, 3, 2, 1, 0, 291, 290, 1, 0, 0, 0, 292, 295, 1, 0, 0, 0, 293, 291, 1, 0, 0, 0, 293, 294, 1, 0, 0, 0, 294, 47, 1, 0, 0, 0, 295, 293, 1, 0, 0, 0, 296, 300, 5, 35, 0, 0, 297, 299, 3, 2, 1, 0, 298, 297, 1, 0, 0, 0, 299, 302, 1, 0, 0, 0, 300, 298, 1, 0, 0, 0, 300, 301, 1, 0, 0, 0, 301, 49, 1, 0, 0, 0, 302, 300, 1, 0, 0, 0, 31, 53, 69, 74, 79, 85, 91, 99, 105, 115, 121, 126, 130, 135, 158, 178, 189, 191, 197, 201, 207, 215, 238, 242, 246, 250, 255, 257, 267, 280, 293, 300];
const atn = new _antlr.default.atn.ATNDeserializer().deserialize(serializedATN);
const decisionsToDFA = atn.decisionToState.map((ds, index) => new _antlr.default.dfa.DFA(ds, index));
const sharedContextCache = new _antlr.default.atn.PredictionContextCache();
class fplusParser extends _antlr.default.Parser {
  static grammarFileName = "fplus.g4";
  static literalNames = [null, "'='", "'*'", "'/'", "'+'", "'-'", "'^'", "'%'", "'<<'", "'>>'", "'&'", "'|'", "'~'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'and'", "'or'", null, null, null, null, null, null, "'nil'", "'print'", "'function'", "'loadstring'", "'end'", "'not'", "'if'", "'then'", "'else'", "'elseif'", "'while'", "'do'", "'for'", "'in'", "'local'", "'let'", "'break'", "'('", "')'", "'{'", "'}'", "'['", "']'", "'.'", "':'", "','", "';'"];
  static symbolicNames = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "COMMENT", "MLCOMMENT", "STRING", "INTEGER", "FLOAT", "BOOLEAN", "NIL", "PRINT", "FUNCTION", "LOADSTRING", "END", "NOT", "IF", "THEN", "ELSE", "ELSEIF", "WHILE", "DO", "FOR", "IN", "LOCAL", "LET", "BREAK", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LSQUARE", "RSQUARE", "DOT", "COLON", "COMMA", "SEMICOLON", "ID", "INLINE_JS_EXPR", "JAVASCRIPT_EMBED", "WS"];
  static ruleNames = ["program", "statement", "printExpr", "functionDeclaration", "anonymousFunctionDeclaration", "params", "tableDeclaration", "variableDeclaration", "localVariableDeclaration", "keyValuePair", "exprList", "expr", "functionCall", "tableAccess", "variableAccess", "parens", "loadstring", "inlineJsExpr", "javaScriptEmbed", "ifStatement", "whileStatement", "forStatement", "breakStatement", "elseIfStatement", "elseStatement"];
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
        return this.precpred(this._ctx, 12);
      case 1:
        return this.precpred(this._ctx, 11);
      case 2:
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
      this.state = 53;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 2139095040) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 29383331) !== 0) {
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
      this.state = 69;
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
          this.anonymousFunctionDeclaration();
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 61;
          this.tableDeclaration();
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          this.state = 62;
          this.variableDeclaration();
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          this.state = 63;
          this.localVariableDeclaration();
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          this.state = 64;
          this.expr(0);
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          this.state = 65;
          this.ifStatement();
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          this.state = 66;
          this.whileStatement();
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          this.state = 67;
          this.forStatement();
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          this.state = 68;
          this.breakStatement();
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
      if ((_la & ~0x1f) === 0 && (1 << _la & 1870659584) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 29380609) !== 0) {
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
      if (_la === 41) {
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
      if (_la === 54) {
        this.state = 84;
        this.params();
      }
      this.state = 87;
      this.match(fplusParser.RPAREN);
      this.state = 91;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 2139095040) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 29383331) !== 0) {
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
      if (_la === 54) {
        this.state = 98;
        this.params();
      }
      this.state = 101;
      this.match(fplusParser.RPAREN);
      this.state = 105;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 2139095040) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 29383331) !== 0) {
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
      while (_la === 52) {
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
  tableDeclaration() {
    let localctx = new TableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, fplusParser.RULE_tableDeclaration);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 118;
      this.match(fplusParser.LBRACE);
      this.state = 135;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 1870659584) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 29380609) !== 0) {
        this.state = 121;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 9, this._ctx);
        switch (la_) {
          case 1:
            this.state = 119;
            this.exprList();
            break;
          case 2:
            this.state = 120;
            this.keyValuePair();
            break;
        }
        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 52) {
          this.state = 123;
          this.match(fplusParser.COMMA);
          this.state = 126;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 10, this._ctx);
          switch (la_) {
            case 1:
              this.state = 124;
              this.exprList();
              break;
            case 2:
              this.state = 125;
              this.keyValuePair();
              break;
          }
          this.state = 132;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 137;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 138;
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
  localVariableDeclaration() {
    let localctx = new LocalVariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, fplusParser.RULE_localVariableDeclaration);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 144;
      this.match(fplusParser.LOCAL);
      this.state = 145;
      this.match(fplusParser.ID);
      this.state = 146;
      this.match(fplusParser.T__0);
      this.state = 147;
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
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 149;
      _la = this._input.LA(1);
      if (!(_la === 23 || _la === 54)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
      this.state = 150;
      this.match(fplusParser.T__0);
      this.state = 151;
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
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 153;
      this.expr(0);
      this.state = 158;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
      while (_alt != 2 && _alt != _antlr.default.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          this.state = 154;
          this.match(fplusParser.COMMA);
          this.state = 155;
          this.expr(0);
        }
        this.state = 160;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
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
      this.state = 178;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 14, this._ctx);
      switch (la_) {
        case 1:
          this.state = 162;
          this.match(fplusParser.STRING);
          break;
        case 2:
          this.state = 163;
          this.match(fplusParser.INTEGER);
          break;
        case 3:
          this.state = 164;
          this.match(fplusParser.FLOAT);
          break;
        case 4:
          this.state = 165;
          this.match(fplusParser.BOOLEAN);
          break;
        case 5:
          this.state = 166;
          this.match(fplusParser.NIL);
          break;
        case 6:
          this.state = 167;
          this.match(fplusParser.ID);
          break;
        case 7:
          this.state = 168;
          this.match(fplusParser.NOT);
          this.state = 169;
          this.expr(9);
          break;
        case 8:
          this.state = 170;
          this.loadstring();
          break;
        case 9:
          this.state = 171;
          this.functionCall();
          break;
        case 10:
          this.state = 172;
          this.tableAccess();
          break;
        case 11:
          this.state = 173;
          this.variableAccess();
          break;
        case 12:
          this.state = 174;
          this.tableDeclaration();
          break;
        case 13:
          this.state = 175;
          this.parens();
          break;
        case 14:
          this.state = 176;
          this.inlineJsExpr();
          break;
        case 15:
          this.state = 177;
          this.javaScriptEmbed();
          break;
      }
      this._ctx.stop = this._input.LT(-1);
      this.state = 191;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
      while (_alt != 2 && _alt != _antlr.default.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          this.state = 189;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 15, this._ctx);
          switch (la_) {
            case 1:
              localctx = new ExprContext(this, _parentctx, _parentState);
              this.pushNewRecursionContext(localctx, _startState, fplusParser.RULE_expr);
              this.state = 180;
              if (!this.precpred(this._ctx, 12)) {
                throw new _antlr.default.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
              }
              this.state = 181;
              _la = this._input.LA(1);
              if (!((_la & ~0x1f) === 0 && (1 << _la & 8188) !== 0)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 182;
              this.expr(13);
              break;
            case 2:
              localctx = new ExprContext(this, _parentctx, _parentState);
              this.pushNewRecursionContext(localctx, _startState, fplusParser.RULE_expr);
              this.state = 183;
              if (!this.precpred(this._ctx, 11)) {
                throw new _antlr.default.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
              }
              this.state = 184;
              _la = this._input.LA(1);
              if (!((_la & ~0x1f) === 0 && (1 << _la & 516096) !== 0)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 185;
              this.expr(12);
              break;
            case 3:
              localctx = new ExprContext(this, _parentctx, _parentState);
              this.pushNewRecursionContext(localctx, _startState, fplusParser.RULE_expr);
              this.state = 186;
              if (!this.precpred(this._ctx, 10)) {
                throw new _antlr.default.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
              }
              this.state = 187;
              _la = this._input.LA(1);
              if (!(_la === 19 || _la === 20)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 188;
              this.expr(11);
              break;
          }
        }
        this.state = 193;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
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
      this.enterOuterAlt(localctx, 1);
      this.state = 197;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 54:
          this.state = 194;
          this.match(fplusParser.ID);
          break;
        case 29:
          this.state = 195;
          this.anonymousFunctionDeclaration();
          break;
        case 30:
          this.state = 196;
          this.loadstring();
          break;
        default:
          throw new _antlr.default.error.NoViableAltException(this);
      }
      this.state = 199;
      this.match(fplusParser.LPAREN);
      this.state = 201;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la & ~0x1f) === 0 && (1 << _la & 1870659584) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 29380609) !== 0) {
        this.state = 200;
        this.exprList();
      }
      this.state = 203;
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
  tableAccess() {
    let localctx = new TableAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, fplusParser.RULE_tableAccess);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 207;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 54:
          this.state = 205;
          this.match(fplusParser.ID);
          break;
        case 46:
          this.state = 206;
          this.tableDeclaration();
          break;
        default:
          throw new _antlr.default.error.NoViableAltException(this);
      }
      this.state = 215;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 50:
          this.state = 209;
          this.match(fplusParser.DOT);
          this.state = 210;
          this.match(fplusParser.ID);
          break;
        case 48:
          this.state = 211;
          this.match(fplusParser.LSQUARE);
          this.state = 212;
          this.expr(0);
          this.state = 213;
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
    this.enterRule(localctx, 28, fplusParser.RULE_variableAccess);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 217;
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
      this.state = 219;
      this.match(fplusParser.LPAREN);
      this.state = 220;
      this.expr(0);
      this.state = 221;
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
    this.enterRule(localctx, 32, fplusParser.RULE_loadstring);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 223;
      this.match(fplusParser.LOADSTRING);
      this.state = 224;
      this.match(fplusParser.LPAREN);
      this.state = 225;
      this.expr(0);
      this.state = 226;
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
  inlineJsExpr() {
    let localctx = new InlineJsExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, fplusParser.RULE_inlineJsExpr);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 228;
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
    this.enterRule(localctx, 36, fplusParser.RULE_javaScriptEmbed);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 230;
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
    this.enterRule(localctx, 38, fplusParser.RULE_ifStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 232;
      this.match(fplusParser.IF);
      this.state = 233;
      this.expr(0);
      this.state = 234;
      this.match(fplusParser.THEN);
      this.state = 238;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 2139095040) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 29383331) !== 0) {
        this.state = 235;
        this.statement();
        this.state = 240;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 242;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 22, this._ctx);
      if (la_ === 1) {
        this.state = 241;
        this.match(fplusParser.END);
      }
      this.state = 250;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 36) {
        this.state = 244;
        this.elseIfStatement();
        this.state = 246;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 23, this._ctx);
        if (la_ === 1) {
          this.state = 245;
          this.match(fplusParser.END);
        }
        this.state = 252;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 257;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 35) {
        this.state = 253;
        this.elseStatement();
        this.state = 255;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 25, this._ctx);
        if (la_ === 1) {
          this.state = 254;
          this.match(fplusParser.END);
        }
      }
      this.state = 259;
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
    this.enterRule(localctx, 40, fplusParser.RULE_whileStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 261;
      this.match(fplusParser.WHILE);
      this.state = 262;
      this.expr(0);
      this.state = 263;
      this.match(fplusParser.DO);
      this.state = 267;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 2139095040) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 29383331) !== 0) {
        this.state = 264;
        this.statement();
        this.state = 269;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 270;
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
  forStatement() {
    let localctx = new ForStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, fplusParser.RULE_forStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 272;
      this.match(fplusParser.FOR);
      this.state = 273;
      this.match(fplusParser.ID);
      this.state = 274;
      this.match(fplusParser.IN);
      this.state = 275;
      this.expr(0);
      this.state = 276;
      this.match(fplusParser.DO);
      this.state = 280;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 2139095040) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 29383331) !== 0) {
        this.state = 277;
        this.statement();
        this.state = 282;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 283;
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
  breakStatement() {
    let localctx = new BreakStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, fplusParser.RULE_breakStatement);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 285;
      this.match(fplusParser.BREAK);
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
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 287;
      this.match(fplusParser.ELSEIF);
      this.state = 288;
      this.expr(0);
      this.state = 289;
      this.match(fplusParser.THEN);
      this.state = 293;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 2139095040) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 29383331) !== 0) {
        this.state = 290;
        this.statement();
        this.state = 295;
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
    this.enterRule(localctx, 48, fplusParser.RULE_elseStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 296;
      this.match(fplusParser.ELSE);
      this.state = 300;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 2139095040) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 29383331) !== 0) {
        this.state = 297;
        this.statement();
        this.state = 302;
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
fplusParser.T__6 = 7;
fplusParser.T__7 = 8;
fplusParser.T__8 = 9;
fplusParser.T__9 = 10;
fplusParser.T__10 = 11;
fplusParser.T__11 = 12;
fplusParser.T__12 = 13;
fplusParser.T__13 = 14;
fplusParser.T__14 = 15;
fplusParser.T__15 = 16;
fplusParser.T__16 = 17;
fplusParser.T__17 = 18;
fplusParser.T__18 = 19;
fplusParser.T__19 = 20;
fplusParser.COMMENT = 21;
fplusParser.MLCOMMENT = 22;
fplusParser.STRING = 23;
fplusParser.INTEGER = 24;
fplusParser.FLOAT = 25;
fplusParser.BOOLEAN = 26;
fplusParser.NIL = 27;
fplusParser.PRINT = 28;
fplusParser.FUNCTION = 29;
fplusParser.LOADSTRING = 30;
fplusParser.END = 31;
fplusParser.NOT = 32;
fplusParser.IF = 33;
fplusParser.THEN = 34;
fplusParser.ELSE = 35;
fplusParser.ELSEIF = 36;
fplusParser.WHILE = 37;
fplusParser.DO = 38;
fplusParser.FOR = 39;
fplusParser.IN = 40;
fplusParser.LOCAL = 41;
fplusParser.LET = 42;
fplusParser.BREAK = 43;
fplusParser.LPAREN = 44;
fplusParser.RPAREN = 45;
fplusParser.LBRACE = 46;
fplusParser.RBRACE = 47;
fplusParser.LSQUARE = 48;
fplusParser.RSQUARE = 49;
fplusParser.DOT = 50;
fplusParser.COLON = 51;
fplusParser.COMMA = 52;
fplusParser.SEMICOLON = 53;
fplusParser.ID = 54;
fplusParser.INLINE_JS_EXPR = 55;
fplusParser.JAVASCRIPT_EMBED = 56;
fplusParser.WS = 57;
fplusParser.RULE_program = 0;
fplusParser.RULE_statement = 1;
fplusParser.RULE_printExpr = 2;
fplusParser.RULE_functionDeclaration = 3;
fplusParser.RULE_anonymousFunctionDeclaration = 4;
fplusParser.RULE_params = 5;
fplusParser.RULE_tableDeclaration = 6;
fplusParser.RULE_variableDeclaration = 7;
fplusParser.RULE_localVariableDeclaration = 8;
fplusParser.RULE_keyValuePair = 9;
fplusParser.RULE_exprList = 10;
fplusParser.RULE_expr = 11;
fplusParser.RULE_functionCall = 12;
fplusParser.RULE_tableAccess = 13;
fplusParser.RULE_variableAccess = 14;
fplusParser.RULE_parens = 15;
fplusParser.RULE_loadstring = 16;
fplusParser.RULE_inlineJsExpr = 17;
fplusParser.RULE_javaScriptEmbed = 18;
fplusParser.RULE_ifStatement = 19;
fplusParser.RULE_whileStatement = 20;
fplusParser.RULE_forStatement = 21;
fplusParser.RULE_breakStatement = 22;
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
  anonymousFunctionDeclaration() {
    return this.getTypedRuleContext(AnonymousFunctionDeclarationContext, 0);
  }
  tableDeclaration() {
    return this.getTypedRuleContext(TableDeclarationContext, 0);
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
  forStatement() {
    return this.getTypedRuleContext(ForStatementContext, 0);
  }
  breakStatement() {
    return this.getTypedRuleContext(BreakStatementContext, 0);
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
class TableDeclarationContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_tableDeclaration;
  }
  LBRACE() {
    return this.getToken(fplusParser.LBRACE, 0);
  }
  RBRACE() {
    return this.getToken(fplusParser.RBRACE, 0);
  }
  exprList = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ExprListContext);
    } else {
      return this.getTypedRuleContext(ExprListContext, i);
    }
  };
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
      listener.enterTableDeclaration(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitTableDeclaration(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitTableDeclaration(this);
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
  STRING() {
    return this.getToken(fplusParser.STRING, 0);
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
  NIL() {
    return this.getToken(fplusParser.NIL, 0);
  }
  ID() {
    return this.getToken(fplusParser.ID, 0);
  }
  NOT() {
    return this.getToken(fplusParser.NOT, 0);
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
  loadstring() {
    return this.getTypedRuleContext(LoadstringContext, 0);
  }
  functionCall() {
    return this.getTypedRuleContext(FunctionCallContext, 0);
  }
  tableAccess() {
    return this.getTypedRuleContext(TableAccessContext, 0);
  }
  variableAccess() {
    return this.getTypedRuleContext(VariableAccessContext, 0);
  }
  tableDeclaration() {
    return this.getTypedRuleContext(TableDeclarationContext, 0);
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
  LPAREN() {
    return this.getToken(fplusParser.LPAREN, 0);
  }
  RPAREN() {
    return this.getToken(fplusParser.RPAREN, 0);
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
class TableAccessContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_tableAccess;
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
  tableDeclaration() {
    return this.getTypedRuleContext(TableDeclarationContext, 0);
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
      listener.enterTableAccess(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitTableAccess(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitTableAccess(this);
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
class ForStatementContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_forStatement;
  }
  FOR() {
    return this.getToken(fplusParser.FOR, 0);
  }
  ID() {
    return this.getToken(fplusParser.ID, 0);
  }
  IN() {
    return this.getToken(fplusParser.IN, 0);
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
      listener.enterForStatement(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitForStatement(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitForStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class BreakStatementContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_breakStatement;
  }
  BREAK() {
    return this.getToken(fplusParser.BREAK, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterBreakStatement(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitBreakStatement(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitBreakStatement(this);
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
fplusParser.TableDeclarationContext = TableDeclarationContext;
fplusParser.VariableDeclarationContext = VariableDeclarationContext;
fplusParser.LocalVariableDeclarationContext = LocalVariableDeclarationContext;
fplusParser.KeyValuePairContext = KeyValuePairContext;
fplusParser.ExprListContext = ExprListContext;
fplusParser.ExprContext = ExprContext;
fplusParser.FunctionCallContext = FunctionCallContext;
fplusParser.TableAccessContext = TableAccessContext;
fplusParser.VariableAccessContext = VariableAccessContext;
fplusParser.ParensContext = ParensContext;
fplusParser.LoadstringContext = LoadstringContext;
fplusParser.InlineJsExprContext = InlineJsExprContext;
fplusParser.JavaScriptEmbedContext = JavaScriptEmbedContext;
fplusParser.IfStatementContext = IfStatementContext;
fplusParser.WhileStatementContext = WhileStatementContext;
fplusParser.ForStatementContext = ForStatementContext;
fplusParser.BreakStatementContext = BreakStatementContext;
fplusParser.ElseIfStatementContext = ElseIfStatementContext;
fplusParser.ElseStatementContext = ElseStatementContext;