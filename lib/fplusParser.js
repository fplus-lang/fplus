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

const serializedATN = [4, 1, 56, 337, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 1, 0, 5, 0, 64, 8, 0, 10, 0, 12, 0, 67, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 82, 8, 1, 1, 2, 1, 2, 1, 2, 3, 2, 87, 8, 2, 1, 2, 1, 2, 1, 3, 3, 3, 92, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 98, 8, 3, 1, 3, 1, 3, 5, 3, 102, 8, 3, 10, 3, 12, 3, 105, 9, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 3, 4, 112, 8, 4, 1, 4, 1, 4, 5, 4, 116, 8, 4, 10, 4, 12, 4, 119, 9, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 5, 5, 126, 8, 5, 10, 5, 12, 5, 129, 9, 5, 1, 6, 1, 6, 1, 6, 3, 6, 134, 8, 6, 1, 6, 1, 6, 1, 6, 3, 6, 139, 8, 6, 5, 6, 141, 8, 6, 10, 6, 12, 6, 144, 9, 6, 5, 6, 146, 8, 6, 10, 6, 12, 6, 149, 9, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 5, 10, 169, 8, 10, 10, 10, 12, 10, 172, 9, 10, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 5, 12, 179, 8, 12, 10, 12, 12, 12, 182, 9, 12, 1, 13, 1, 13, 1, 13, 5, 13, 187, 8, 13, 10, 13, 12, 13, 190, 9, 13, 1, 14, 1, 14, 1, 14, 5, 14, 195, 8, 14, 10, 14, 12, 14, 198, 9, 14, 1, 15, 1, 15, 1, 15, 5, 15, 203, 8, 15, 10, 15, 12, 15, 206, 9, 15, 1, 16, 3, 16, 209, 8, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 3, 17, 226, 8, 17, 1, 18, 1, 18, 1, 18, 3, 18, 231, 8, 18, 1, 18, 1, 18, 3, 18, 235, 8, 18, 1, 18, 1, 18, 1, 19, 1, 19, 3, 19, 241, 8, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 249, 8, 19, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 24, 1, 24, 1, 25, 1, 25, 1, 25, 1, 25, 5, 25, 270, 8, 25, 10, 25, 12, 25, 273, 9, 25, 1, 25, 3, 25, 276, 8, 25, 1, 25, 1, 25, 3, 25, 280, 8, 25, 5, 25, 282, 8, 25, 10, 25, 12, 25, 285, 9, 25, 1, 25, 1, 25, 3, 25, 289, 8, 25, 3, 25, 291, 8, 25, 1, 25, 1, 25, 1, 26, 1, 26, 1, 26, 1, 26, 5, 26, 299, 8, 26, 10, 26, 12, 26, 302, 9, 26, 1, 26, 1, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 5, 27, 312, 8, 27, 10, 27, 12, 27, 315, 9, 27, 1, 27, 1, 27, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 1, 29, 5, 29, 325, 8, 29, 10, 29, 12, 29, 328, 9, 29, 1, 30, 1, 30, 5, 30, 332, 8, 30, 10, 30, 12, 30, 335, 9, 30, 1, 30, 0, 0, 31, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 0, 6, 2, 0, 22, 22, 53, 53, 1, 0, 2, 3, 1, 0, 4, 9, 1, 0, 10, 11, 1, 0, 12, 19, 2, 0, 11, 11, 31, 31, 360, 0, 65, 1, 0, 0, 0, 2, 81, 1, 0, 0, 0, 4, 83, 1, 0, 0, 0, 6, 91, 1, 0, 0, 0, 8, 108, 1, 0, 0, 0, 10, 122, 1, 0, 0, 0, 12, 130, 1, 0, 0, 0, 14, 152, 1, 0, 0, 0, 16, 156, 1, 0, 0, 0, 18, 161, 1, 0, 0, 0, 20, 165, 1, 0, 0, 0, 22, 173, 1, 0, 0, 0, 24, 175, 1, 0, 0, 0, 26, 183, 1, 0, 0, 0, 28, 191, 1, 0, 0, 0, 30, 199, 1, 0, 0, 0, 32, 208, 1, 0, 0, 0, 34, 225, 1, 0, 0, 0, 36, 230, 1, 0, 0, 0, 38, 240, 1, 0, 0, 0, 40, 250, 1, 0, 0, 0, 42, 252, 1, 0, 0, 0, 44, 256, 1, 0, 0, 0, 46, 261, 1, 0, 0, 0, 48, 263, 1, 0, 0, 0, 50, 265, 1, 0, 0, 0, 52, 294, 1, 0, 0, 0, 54, 305, 1, 0, 0, 0, 56, 318, 1, 0, 0, 0, 58, 320, 1, 0, 0, 0, 60, 329, 1, 0, 0, 0, 62, 64, 3, 2, 1, 0, 63, 62, 1, 0, 0, 0, 64, 67, 1, 0, 0, 0, 65, 63, 1, 0, 0, 0, 65, 66, 1, 0, 0, 0, 66, 68, 1, 0, 0, 0, 67, 65, 1, 0, 0, 0, 68, 69, 5, 0, 0, 1, 69, 1, 1, 0, 0, 0, 70, 82, 3, 4, 2, 0, 71, 82, 3, 6, 3, 0, 72, 82, 3, 8, 4, 0, 73, 82, 3, 12, 6, 0, 74, 82, 3, 14, 7, 0, 75, 82, 3, 16, 8, 0, 76, 82, 3, 22, 11, 0, 77, 82, 3, 50, 25, 0, 78, 82, 3, 52, 26, 0, 79, 82, 3, 54, 27, 0, 80, 82, 3, 56, 28, 0, 81, 70, 1, 0, 0, 0, 81, 71, 1, 0, 0, 0, 81, 72, 1, 0, 0, 0, 81, 73, 1, 0, 0, 0, 81, 74, 1, 0, 0, 0, 81, 75, 1, 0, 0, 0, 81, 76, 1, 0, 0, 0, 81, 77, 1, 0, 0, 0, 81, 78, 1, 0, 0, 0, 81, 79, 1, 0, 0, 0, 81, 80, 1, 0, 0, 0, 82, 3, 1, 0, 0, 0, 83, 84, 5, 27, 0, 0, 84, 86, 5, 43, 0, 0, 85, 87, 3, 20, 10, 0, 86, 85, 1, 0, 0, 0, 86, 87, 1, 0, 0, 0, 87, 88, 1, 0, 0, 0, 88, 89, 5, 44, 0, 0, 89, 5, 1, 0, 0, 0, 90, 92, 5, 40, 0, 0, 91, 90, 1, 0, 0, 0, 91, 92, 1, 0, 0, 0, 92, 93, 1, 0, 0, 0, 93, 94, 5, 28, 0, 0, 94, 95, 5, 53, 0, 0, 95, 97, 5, 43, 0, 0, 96, 98, 3, 10, 5, 0, 97, 96, 1, 0, 0, 0, 97, 98, 1, 0, 0, 0, 98, 99, 1, 0, 0, 0, 99, 103, 5, 44, 0, 0, 100, 102, 3, 2, 1, 0, 101, 100, 1, 0, 0, 0, 102, 105, 1, 0, 0, 0, 103, 101, 1, 0, 0, 0, 103, 104, 1, 0, 0, 0, 104, 106, 1, 0, 0, 0, 105, 103, 1, 0, 0, 0, 106, 107, 5, 30, 0, 0, 107, 7, 1, 0, 0, 0, 108, 109, 5, 28, 0, 0, 109, 111, 5, 43, 0, 0, 110, 112, 3, 10, 5, 0, 111, 110, 1, 0, 0, 0, 111, 112, 1, 0, 0, 0, 112, 113, 1, 0, 0, 0, 113, 117, 5, 44, 0, 0, 114, 116, 3, 2, 1, 0, 115, 114, 1, 0, 0, 0, 116, 119, 1, 0, 0, 0, 117, 115, 1, 0, 0, 0, 117, 118, 1, 0, 0, 0, 118, 120, 1, 0, 0, 0, 119, 117, 1, 0, 0, 0, 120, 121, 5, 30, 0, 0, 121, 9, 1, 0, 0, 0, 122, 127, 5, 53, 0, 0, 123, 124, 5, 51, 0, 0, 124, 126, 5, 53, 0, 0, 125, 123, 1, 0, 0, 0, 126, 129, 1, 0, 0, 0, 127, 125, 1, 0, 0, 0, 127, 128, 1, 0, 0, 0, 128, 11, 1, 0, 0, 0, 129, 127, 1, 0, 0, 0, 130, 147, 5, 45, 0, 0, 131, 134, 3, 20, 10, 0, 132, 134, 3, 18, 9, 0, 133, 131, 1, 0, 0, 0, 133, 132, 1, 0, 0, 0, 134, 142, 1, 0, 0, 0, 135, 138, 5, 51, 0, 0, 136, 139, 3, 20, 10, 0, 137, 139, 3, 18, 9, 0, 138, 136, 1, 0, 0, 0, 138, 137, 1, 0, 0, 0, 139, 141, 1, 0, 0, 0, 140, 135, 1, 0, 0, 0, 141, 144, 1, 0, 0, 0, 142, 140, 1, 0, 0, 0, 142, 143, 1, 0, 0, 0, 143, 146, 1, 0, 0, 0, 144, 142, 1, 0, 0, 0, 145, 133, 1, 0, 0, 0, 146, 149, 1, 0, 0, 0, 147, 145, 1, 0, 0, 0, 147, 148, 1, 0, 0, 0, 148, 150, 1, 0, 0, 0, 149, 147, 1, 0, 0, 0, 150, 151, 5, 46, 0, 0, 151, 13, 1, 0, 0, 0, 152, 153, 5, 53, 0, 0, 153, 154, 5, 1, 0, 0, 154, 155, 3, 22, 11, 0, 155, 15, 1, 0, 0, 0, 156, 157, 5, 40, 0, 0, 157, 158, 5, 53, 0, 0, 158, 159, 5, 1, 0, 0, 159, 160, 3, 22, 11, 0, 160, 17, 1, 0, 0, 0, 161, 162, 7, 0, 0, 0, 162, 163, 5, 1, 0, 0, 163, 164, 3, 22, 11, 0, 164, 19, 1, 0, 0, 0, 165, 170, 3, 22, 11, 0, 166, 167, 5, 51, 0, 0, 167, 169, 3, 22, 11, 0, 168, 166, 1, 0, 0, 0, 169, 172, 1, 0, 0, 0, 170, 168, 1, 0, 0, 0, 170, 171, 1, 0, 0, 0, 171, 21, 1, 0, 0, 0, 172, 170, 1, 0, 0, 0, 173, 174, 3, 24, 12, 0, 174, 23, 1, 0, 0, 0, 175, 180, 3, 26, 13, 0, 176, 177, 7, 1, 0, 0, 177, 179, 3, 26, 13, 0, 178, 176, 1, 0, 0, 0, 179, 182, 1, 0, 0, 0, 180, 178, 1, 0, 0, 0, 180, 181, 1, 0, 0, 0, 181, 25, 1, 0, 0, 0, 182, 180, 1, 0, 0, 0, 183, 188, 3, 28, 14, 0, 184, 185, 7, 2, 0, 0, 185, 187, 3, 28, 14, 0, 186, 184, 1, 0, 0, 0, 187, 190, 1, 0, 0, 0, 188, 186, 1, 0, 0, 0, 188, 189, 1, 0, 0, 0, 189, 27, 1, 0, 0, 0, 190, 188, 1, 0, 0, 0, 191, 196, 3, 30, 15, 0, 192, 193, 7, 3, 0, 0, 193, 195, 3, 30, 15, 0, 194, 192, 1, 0, 0, 0, 195, 198, 1, 0, 0, 0, 196, 194, 1, 0, 0, 0, 196, 197, 1, 0, 0, 0, 197, 29, 1, 0, 0, 0, 198, 196, 1, 0, 0, 0, 199, 204, 3, 32, 16, 0, 200, 201, 7, 4, 0, 0, 201, 203, 3, 32, 16, 0, 202, 200, 1, 0, 0, 0, 203, 206, 1, 0, 0, 0, 204, 202, 1, 0, 0, 0, 204, 205, 1, 0, 0, 0, 205, 31, 1, 0, 0, 0, 206, 204, 1, 0, 0, 0, 207, 209, 7, 5, 0, 0, 208, 207, 1, 0, 0, 0, 208, 209, 1, 0, 0, 0, 209, 210, 1, 0, 0, 0, 210, 211, 3, 34, 17, 0, 211, 33, 1, 0, 0, 0, 212, 226, 5, 22, 0, 0, 213, 226, 5, 23, 0, 0, 214, 226, 5, 24, 0, 0, 215, 226, 5, 25, 0, 0, 216, 226, 5, 26, 0, 0, 217, 226, 5, 53, 0, 0, 218, 226, 3, 36, 18, 0, 219, 226, 3, 38, 19, 0, 220, 226, 3, 40, 20, 0, 221, 226, 3, 12, 6, 0, 222, 226, 3, 42, 21, 0, 223, 226, 3, 46, 23, 0, 224, 226, 3, 48, 24, 0, 225, 212, 1, 0, 0, 0, 225, 213, 1, 0, 0, 0, 225, 214, 1, 0, 0, 0, 225, 215, 1, 0, 0, 0, 225, 216, 1, 0, 0, 0, 225, 217, 1, 0, 0, 0, 225, 218, 1, 0, 0, 0, 225, 219, 1, 0, 0, 0, 225, 220, 1, 0, 0, 0, 225, 221, 1, 0, 0, 0, 225, 222, 1, 0, 0, 0, 225, 223, 1, 0, 0, 0, 225, 224, 1, 0, 0, 0, 226, 35, 1, 0, 0, 0, 227, 231, 5, 53, 0, 0, 228, 231, 3, 8, 4, 0, 229, 231, 3, 44, 22, 0, 230, 227, 1, 0, 0, 0, 230, 228, 1, 0, 0, 0, 230, 229, 1, 0, 0, 0, 231, 232, 1, 0, 0, 0, 232, 234, 5, 43, 0, 0, 233, 235, 3, 20, 10, 0, 234, 233, 1, 0, 0, 0, 234, 235, 1, 0, 0, 0, 235, 236, 1, 0, 0, 0, 236, 237, 5, 44, 0, 0, 237, 37, 1, 0, 0, 0, 238, 241, 5, 53, 0, 0, 239, 241, 3, 12, 6, 0, 240, 238, 1, 0, 0, 0, 240, 239, 1, 0, 0, 0, 241, 248, 1, 0, 0, 0, 242, 243, 5, 49, 0, 0, 243, 249, 5, 53, 0, 0, 244, 245, 5, 47, 0, 0, 245, 246, 3, 22, 11, 0, 246, 247, 5, 48, 0, 0, 247, 249, 1, 0, 0, 0, 248, 242, 1, 0, 0, 0, 248, 244, 1, 0, 0, 0, 249, 39, 1, 0, 0, 0, 250, 251, 5, 53, 0, 0, 251, 41, 1, 0, 0, 0, 252, 253, 5, 43, 0, 0, 253, 254, 3, 22, 11, 0, 254, 255, 5, 44, 0, 0, 255, 43, 1, 0, 0, 0, 256, 257, 5, 29, 0, 0, 257, 258, 5, 43, 0, 0, 258, 259, 3, 22, 11, 0, 259, 260, 5, 44, 0, 0, 260, 45, 1, 0, 0, 0, 261, 262, 5, 54, 0, 0, 262, 47, 1, 0, 0, 0, 263, 264, 5, 55, 0, 0, 264, 49, 1, 0, 0, 0, 265, 266, 5, 32, 0, 0, 266, 267, 3, 22, 11, 0, 267, 271, 5, 33, 0, 0, 268, 270, 3, 2, 1, 0, 269, 268, 1, 0, 0, 0, 270, 273, 1, 0, 0, 0, 271, 269, 1, 0, 0, 0, 271, 272, 1, 0, 0, 0, 272, 275, 1, 0, 0, 0, 273, 271, 1, 0, 0, 0, 274, 276, 5, 30, 0, 0, 275, 274, 1, 0, 0, 0, 275, 276, 1, 0, 0, 0, 276, 283, 1, 0, 0, 0, 277, 279, 3, 58, 29, 0, 278, 280, 5, 30, 0, 0, 279, 278, 1, 0, 0, 0, 279, 280, 1, 0, 0, 0, 280, 282, 1, 0, 0, 0, 281, 277, 1, 0, 0, 0, 282, 285, 1, 0, 0, 0, 283, 281, 1, 0, 0, 0, 283, 284, 1, 0, 0, 0, 284, 290, 1, 0, 0, 0, 285, 283, 1, 0, 0, 0, 286, 288, 3, 60, 30, 0, 287, 289, 5, 30, 0, 0, 288, 287, 1, 0, 0, 0, 288, 289, 1, 0, 0, 0, 289, 291, 1, 0, 0, 0, 290, 286, 1, 0, 0, 0, 290, 291, 1, 0, 0, 0, 291, 292, 1, 0, 0, 0, 292, 293, 5, 30, 0, 0, 293, 51, 1, 0, 0, 0, 294, 295, 5, 36, 0, 0, 295, 296, 3, 22, 11, 0, 296, 300, 5, 37, 0, 0, 297, 299, 3, 2, 1, 0, 298, 297, 1, 0, 0, 0, 299, 302, 1, 0, 0, 0, 300, 298, 1, 0, 0, 0, 300, 301, 1, 0, 0, 0, 301, 303, 1, 0, 0, 0, 302, 300, 1, 0, 0, 0, 303, 304, 5, 30, 0, 0, 304, 53, 1, 0, 0, 0, 305, 306, 5, 38, 0, 0, 306, 307, 5, 53, 0, 0, 307, 308, 5, 39, 0, 0, 308, 309, 3, 22, 11, 0, 309, 313, 5, 37, 0, 0, 310, 312, 3, 2, 1, 0, 311, 310, 1, 0, 0, 0, 312, 315, 1, 0, 0, 0, 313, 311, 1, 0, 0, 0, 313, 314, 1, 0, 0, 0, 314, 316, 1, 0, 0, 0, 315, 313, 1, 0, 0, 0, 316, 317, 5, 30, 0, 0, 317, 55, 1, 0, 0, 0, 318, 319, 5, 42, 0, 0, 319, 57, 1, 0, 0, 0, 320, 321, 5, 35, 0, 0, 321, 322, 3, 22, 11, 0, 322, 326, 5, 33, 0, 0, 323, 325, 3, 2, 1, 0, 324, 323, 1, 0, 0, 0, 325, 328, 1, 0, 0, 0, 326, 324, 1, 0, 0, 0, 326, 327, 1, 0, 0, 0, 327, 59, 1, 0, 0, 0, 328, 326, 1, 0, 0, 0, 329, 333, 5, 34, 0, 0, 330, 332, 3, 2, 1, 0, 331, 330, 1, 0, 0, 0, 332, 335, 1, 0, 0, 0, 333, 331, 1, 0, 0, 0, 333, 334, 1, 0, 0, 0, 334, 61, 1, 0, 0, 0, 335, 333, 1, 0, 0, 0, 34, 65, 81, 86, 91, 97, 103, 111, 117, 127, 133, 138, 142, 147, 170, 180, 188, 196, 204, 208, 225, 230, 234, 240, 248, 271, 275, 279, 283, 288, 290, 300, 313, 326, 333];
const atn = new _antlr.default.atn.ATNDeserializer().deserialize(serializedATN);
const decisionsToDFA = atn.decisionToState.map((ds, index) => new _antlr.default.dfa.DFA(ds, index));
const sharedContextCache = new _antlr.default.atn.PredictionContextCache();
class fplusParser extends _antlr.default.Parser {
  static grammarFileName = "fplus.g4";
  static literalNames = [null, "'='", "'and'", "'or'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'%'", "'<<'", "'>>'", "'&'", "'|'", "'~'", null, null, null, null, null, null, "'nil'", "'print'", "'function'", "'loadstring'", "'end'", "'not'", "'if'", "'then'", "'else'", "'elseif'", "'while'", "'do'", "'for'", "'in'", "'local'", "'let'", "'break'", "'('", "')'", "'{'", "'}'", "'['", "']'", "'.'", "':'", "','", "';'"];
  static symbolicNames = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "COMMENT", "MLCOMMENT", "STRING", "INTEGER", "FLOAT", "BOOLEAN", "NIL", "PRINT", "FUNCTION", "LOADSTRING", "END", "NOT", "IF", "THEN", "ELSE", "ELSEIF", "WHILE", "DO", "FOR", "IN", "LOCAL", "LET", "BREAK", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LSQUARE", "RSQUARE", "DOT", "COLON", "COMMA", "SEMICOLON", "ID", "INLINE_JS_EXPR", "JAVASCRIPT_EMBED", "WS"];
  static ruleNames = ["program", "statement", "printExpr", "functionDeclaration", "anonymousFunctionDeclaration", "params", "tableDeclaration", "variableDeclaration", "localVariableDeclaration", "keyValuePair", "exprList", "expr", "exprLogical", "exprRelational", "exprAddSub", "exprMulDiv", "exprUnary", "exprPrimary", "functionCall", "tableAccess", "variableAccess", "parens", "loadstring", "inlineJsExpr", "javaScriptEmbed", "ifStatement", "whileStatement", "forStatement", "breakStatement", "elseIfStatement", "elseStatement"];
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
      this.state = 65;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 3217033216) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 14691665) !== 0) {
        this.state = 62;
        this.statement();
        this.state = 67;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 68;
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
      this.state = 81;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 70;
          this.printExpr();
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 71;
          this.functionDeclaration();
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 72;
          this.anonymousFunctionDeclaration();
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 73;
          this.tableDeclaration();
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          this.state = 74;
          this.variableDeclaration();
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          this.state = 75;
          this.localVariableDeclaration();
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          this.state = 76;
          this.expr();
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          this.state = 77;
          this.ifStatement();
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          this.state = 78;
          this.whileStatement();
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          this.state = 79;
          this.forStatement();
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          this.state = 80;
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
      this.state = 83;
      this.match(fplusParser.PRINT);
      this.state = 84;
      this.match(fplusParser.LPAREN);
      this.state = 86;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la & ~0x1f) === 0 && (1 << _la & 3082815488) !== 0 || (_la - 43 & ~0x1f) === 0 && (1 << _la - 43 & 7173) !== 0) {
        this.state = 85;
        this.exprList();
      }
      this.state = 88;
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
      this.state = 91;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 40) {
        this.state = 90;
        this.match(fplusParser.LOCAL);
      }
      this.state = 93;
      this.match(fplusParser.FUNCTION);
      this.state = 94;
      this.match(fplusParser.ID);
      this.state = 95;
      this.match(fplusParser.LPAREN);
      this.state = 97;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 53) {
        this.state = 96;
        this.params();
      }
      this.state = 99;
      this.match(fplusParser.RPAREN);
      this.state = 103;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 3217033216) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 14691665) !== 0) {
        this.state = 100;
        this.statement();
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 106;
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
      this.state = 108;
      this.match(fplusParser.FUNCTION);
      this.state = 109;
      this.match(fplusParser.LPAREN);
      this.state = 111;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 53) {
        this.state = 110;
        this.params();
      }
      this.state = 113;
      this.match(fplusParser.RPAREN);
      this.state = 117;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 3217033216) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 14691665) !== 0) {
        this.state = 114;
        this.statement();
        this.state = 119;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 120;
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
      this.state = 122;
      this.match(fplusParser.ID);
      this.state = 127;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 51) {
        this.state = 123;
        this.match(fplusParser.COMMA);
        this.state = 124;
        this.match(fplusParser.ID);
        this.state = 129;
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
      this.state = 130;
      this.match(fplusParser.LBRACE);
      this.state = 147;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 3082815488) !== 0 || (_la - 43 & ~0x1f) === 0 && (1 << _la - 43 & 7173) !== 0) {
        this.state = 133;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 9, this._ctx);
        switch (la_) {
          case 1:
            this.state = 131;
            this.exprList();
            break;
          case 2:
            this.state = 132;
            this.keyValuePair();
            break;
        }
        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 51) {
          this.state = 135;
          this.match(fplusParser.COMMA);
          this.state = 138;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 10, this._ctx);
          switch (la_) {
            case 1:
              this.state = 136;
              this.exprList();
              break;
            case 2:
              this.state = 137;
              this.keyValuePair();
              break;
          }
          this.state = 144;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 150;
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
      this.state = 152;
      this.match(fplusParser.ID);
      this.state = 153;
      this.match(fplusParser.T__0);
      this.state = 154;
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
      this.state = 156;
      this.match(fplusParser.LOCAL);
      this.state = 157;
      this.match(fplusParser.ID);
      this.state = 158;
      this.match(fplusParser.T__0);
      this.state = 159;
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
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 161;
      _la = this._input.LA(1);
      if (!(_la === 22 || _la === 53)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
      this.state = 162;
      this.match(fplusParser.T__0);
      this.state = 163;
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
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 165;
      this.expr();
      this.state = 170;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
      while (_alt != 2 && _alt != _antlr.default.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          this.state = 166;
          this.match(fplusParser.COMMA);
          this.state = 167;
          this.expr();
        }
        this.state = 172;
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
  expr() {
    let localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, fplusParser.RULE_expr);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 173;
      this.exprLogical();
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
  exprLogical() {
    let localctx = new ExprLogicalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, fplusParser.RULE_exprLogical);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 175;
      this.exprRelational();
      this.state = 180;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 2 || _la === 3) {
        this.state = 176;
        _la = this._input.LA(1);
        if (!(_la === 2 || _la === 3)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 177;
        this.exprRelational();
        this.state = 182;
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
  exprRelational() {
    let localctx = new ExprRelationalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, fplusParser.RULE_exprRelational);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 183;
      this.exprAddSub();
      this.state = 188;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 1008) !== 0) {
        this.state = 184;
        _la = this._input.LA(1);
        if (!((_la & ~0x1f) === 0 && (1 << _la & 1008) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 185;
        this.exprAddSub();
        this.state = 190;
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
  exprAddSub() {
    let localctx = new ExprAddSubContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, fplusParser.RULE_exprAddSub);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 191;
      this.exprMulDiv();
      this.state = 196;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
      while (_alt != 2 && _alt != _antlr.default.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          this.state = 192;
          _la = this._input.LA(1);
          if (!(_la === 10 || _la === 11)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 193;
          this.exprMulDiv();
        }
        this.state = 198;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
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
  exprMulDiv() {
    let localctx = new ExprMulDivContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, fplusParser.RULE_exprMulDiv);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 199;
      this.exprUnary();
      this.state = 204;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 1044480) !== 0) {
        this.state = 200;
        _la = this._input.LA(1);
        if (!((_la & ~0x1f) === 0 && (1 << _la & 1044480) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 201;
        this.exprUnary();
        this.state = 206;
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
  exprUnary() {
    let localctx = new ExprUnaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, fplusParser.RULE_exprUnary);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 208;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 11 || _la === 31) {
        this.state = 207;
        _la = this._input.LA(1);
        if (!(_la === 11 || _la === 31)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
      this.state = 210;
      this.exprPrimary();
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
  exprPrimary() {
    let localctx = new ExprPrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, fplusParser.RULE_exprPrimary);
    try {
      this.state = 225;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 19, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 212;
          this.match(fplusParser.STRING);
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 213;
          this.match(fplusParser.INTEGER);
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 214;
          this.match(fplusParser.FLOAT);
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 215;
          this.match(fplusParser.BOOLEAN);
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          this.state = 216;
          this.match(fplusParser.NIL);
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          this.state = 217;
          this.match(fplusParser.ID);
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          this.state = 218;
          this.functionCall();
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          this.state = 219;
          this.tableAccess();
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          this.state = 220;
          this.variableAccess();
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          this.state = 221;
          this.tableDeclaration();
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          this.state = 222;
          this.parens();
          break;
        case 12:
          this.enterOuterAlt(localctx, 12);
          this.state = 223;
          this.inlineJsExpr();
          break;
        case 13:
          this.enterOuterAlt(localctx, 13);
          this.state = 224;
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
    this.enterRule(localctx, 36, fplusParser.RULE_functionCall);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 230;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 53:
          this.state = 227;
          this.match(fplusParser.ID);
          break;
        case 28:
          this.state = 228;
          this.anonymousFunctionDeclaration();
          break;
        case 29:
          this.state = 229;
          this.loadstring();
          break;
        default:
          throw new _antlr.default.error.NoViableAltException(this);
      }
      this.state = 232;
      this.match(fplusParser.LPAREN);
      this.state = 234;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la & ~0x1f) === 0 && (1 << _la & 3082815488) !== 0 || (_la - 43 & ~0x1f) === 0 && (1 << _la - 43 & 7173) !== 0) {
        this.state = 233;
        this.exprList();
      }
      this.state = 236;
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
    this.enterRule(localctx, 38, fplusParser.RULE_tableAccess);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 240;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 53:
          this.state = 238;
          this.match(fplusParser.ID);
          break;
        case 45:
          this.state = 239;
          this.tableDeclaration();
          break;
        default:
          throw new _antlr.default.error.NoViableAltException(this);
      }
      this.state = 248;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 49:
          this.state = 242;
          this.match(fplusParser.DOT);
          this.state = 243;
          this.match(fplusParser.ID);
          break;
        case 47:
          this.state = 244;
          this.match(fplusParser.LSQUARE);
          this.state = 245;
          this.expr();
          this.state = 246;
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
    this.enterRule(localctx, 40, fplusParser.RULE_variableAccess);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 250;
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
    this.enterRule(localctx, 42, fplusParser.RULE_parens);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 252;
      this.match(fplusParser.LPAREN);
      this.state = 253;
      this.expr();
      this.state = 254;
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
    this.enterRule(localctx, 44, fplusParser.RULE_loadstring);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 256;
      this.match(fplusParser.LOADSTRING);
      this.state = 257;
      this.match(fplusParser.LPAREN);
      this.state = 258;
      this.expr();
      this.state = 259;
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
    this.enterRule(localctx, 46, fplusParser.RULE_inlineJsExpr);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 261;
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
    this.enterRule(localctx, 48, fplusParser.RULE_javaScriptEmbed);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 263;
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
    this.enterRule(localctx, 50, fplusParser.RULE_ifStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 265;
      this.match(fplusParser.IF);
      this.state = 266;
      this.expr();
      this.state = 267;
      this.match(fplusParser.THEN);
      this.state = 271;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 3217033216) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 14691665) !== 0) {
        this.state = 268;
        this.statement();
        this.state = 273;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 275;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 25, this._ctx);
      if (la_ === 1) {
        this.state = 274;
        this.match(fplusParser.END);
      }
      this.state = 283;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 35) {
        this.state = 277;
        this.elseIfStatement();
        this.state = 279;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 26, this._ctx);
        if (la_ === 1) {
          this.state = 278;
          this.match(fplusParser.END);
        }
        this.state = 285;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 290;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 34) {
        this.state = 286;
        this.elseStatement();
        this.state = 288;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 28, this._ctx);
        if (la_ === 1) {
          this.state = 287;
          this.match(fplusParser.END);
        }
      }
      this.state = 292;
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
    this.enterRule(localctx, 52, fplusParser.RULE_whileStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 294;
      this.match(fplusParser.WHILE);
      this.state = 295;
      this.expr();
      this.state = 296;
      this.match(fplusParser.DO);
      this.state = 300;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 3217033216) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 14691665) !== 0) {
        this.state = 297;
        this.statement();
        this.state = 302;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 303;
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
    this.enterRule(localctx, 54, fplusParser.RULE_forStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 305;
      this.match(fplusParser.FOR);
      this.state = 306;
      this.match(fplusParser.ID);
      this.state = 307;
      this.match(fplusParser.IN);
      this.state = 308;
      this.expr();
      this.state = 309;
      this.match(fplusParser.DO);
      this.state = 313;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 3217033216) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 14691665) !== 0) {
        this.state = 310;
        this.statement();
        this.state = 315;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 316;
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
    this.enterRule(localctx, 56, fplusParser.RULE_breakStatement);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 318;
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
    this.enterRule(localctx, 58, fplusParser.RULE_elseIfStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 320;
      this.match(fplusParser.ELSEIF);
      this.state = 321;
      this.expr();
      this.state = 322;
      this.match(fplusParser.THEN);
      this.state = 326;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 3217033216) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 14691665) !== 0) {
        this.state = 323;
        this.statement();
        this.state = 328;
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
    this.enterRule(localctx, 60, fplusParser.RULE_elseStatement);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 329;
      this.match(fplusParser.ELSE);
      this.state = 333;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((_la & ~0x1f) === 0 && (1 << _la & 3217033216) !== 0 || (_la - 32 & ~0x1f) === 0 && (1 << _la - 32 & 14691665) !== 0) {
        this.state = 330;
        this.statement();
        this.state = 335;
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
fplusParser.COMMENT = 20;
fplusParser.MLCOMMENT = 21;
fplusParser.STRING = 22;
fplusParser.INTEGER = 23;
fplusParser.FLOAT = 24;
fplusParser.BOOLEAN = 25;
fplusParser.NIL = 26;
fplusParser.PRINT = 27;
fplusParser.FUNCTION = 28;
fplusParser.LOADSTRING = 29;
fplusParser.END = 30;
fplusParser.NOT = 31;
fplusParser.IF = 32;
fplusParser.THEN = 33;
fplusParser.ELSE = 34;
fplusParser.ELSEIF = 35;
fplusParser.WHILE = 36;
fplusParser.DO = 37;
fplusParser.FOR = 38;
fplusParser.IN = 39;
fplusParser.LOCAL = 40;
fplusParser.LET = 41;
fplusParser.BREAK = 42;
fplusParser.LPAREN = 43;
fplusParser.RPAREN = 44;
fplusParser.LBRACE = 45;
fplusParser.RBRACE = 46;
fplusParser.LSQUARE = 47;
fplusParser.RSQUARE = 48;
fplusParser.DOT = 49;
fplusParser.COLON = 50;
fplusParser.COMMA = 51;
fplusParser.SEMICOLON = 52;
fplusParser.ID = 53;
fplusParser.INLINE_JS_EXPR = 54;
fplusParser.JAVASCRIPT_EMBED = 55;
fplusParser.WS = 56;
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
fplusParser.RULE_exprLogical = 12;
fplusParser.RULE_exprRelational = 13;
fplusParser.RULE_exprAddSub = 14;
fplusParser.RULE_exprMulDiv = 15;
fplusParser.RULE_exprUnary = 16;
fplusParser.RULE_exprPrimary = 17;
fplusParser.RULE_functionCall = 18;
fplusParser.RULE_tableAccess = 19;
fplusParser.RULE_variableAccess = 20;
fplusParser.RULE_parens = 21;
fplusParser.RULE_loadstring = 22;
fplusParser.RULE_inlineJsExpr = 23;
fplusParser.RULE_javaScriptEmbed = 24;
fplusParser.RULE_ifStatement = 25;
fplusParser.RULE_whileStatement = 26;
fplusParser.RULE_forStatement = 27;
fplusParser.RULE_breakStatement = 28;
fplusParser.RULE_elseIfStatement = 29;
fplusParser.RULE_elseStatement = 30;
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
  exprLogical() {
    return this.getTypedRuleContext(ExprLogicalContext, 0);
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
class ExprLogicalContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_exprLogical;
  }
  exprRelational = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ExprRelationalContext);
    } else {
      return this.getTypedRuleContext(ExprRelationalContext, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterExprLogical(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitExprLogical(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitExprLogical(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ExprRelationalContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_exprRelational;
  }
  exprAddSub = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ExprAddSubContext);
    } else {
      return this.getTypedRuleContext(ExprAddSubContext, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterExprRelational(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitExprRelational(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitExprRelational(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ExprAddSubContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_exprAddSub;
  }
  exprMulDiv = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ExprMulDivContext);
    } else {
      return this.getTypedRuleContext(ExprMulDivContext, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterExprAddSub(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitExprAddSub(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitExprAddSub(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ExprMulDivContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_exprMulDiv;
  }
  exprUnary = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ExprUnaryContext);
    } else {
      return this.getTypedRuleContext(ExprUnaryContext, i);
    }
  };
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterExprMulDiv(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitExprMulDiv(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitExprMulDiv(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ExprUnaryContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_exprUnary;
  }
  exprPrimary() {
    return this.getTypedRuleContext(ExprPrimaryContext, 0);
  }
  NOT() {
    return this.getToken(fplusParser.NOT, 0);
  }
  enterRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.enterExprUnary(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitExprUnary(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitExprUnary(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
class ExprPrimaryContext extends _antlr.default.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = fplusParser.RULE_exprPrimary;
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
      listener.enterExprPrimary(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof _fplusListener.default) {
      listener.exitExprPrimary(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof _fplusVisitor.default) {
      return visitor.visitExprPrimary(this);
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
fplusParser.ExprLogicalContext = ExprLogicalContext;
fplusParser.ExprRelationalContext = ExprRelationalContext;
fplusParser.ExprAddSubContext = ExprAddSubContext;
fplusParser.ExprMulDivContext = ExprMulDivContext;
fplusParser.ExprUnaryContext = ExprUnaryContext;
fplusParser.ExprPrimaryContext = ExprPrimaryContext;
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