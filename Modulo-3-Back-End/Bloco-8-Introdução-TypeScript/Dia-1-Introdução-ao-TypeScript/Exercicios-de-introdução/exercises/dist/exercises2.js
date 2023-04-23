"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCircleArea = exports.getTrapezeArea = exports.getDiamondArea = void 0;
function getDiamondArea(D, d) {
    return d * D / 2;
}
exports.getDiamondArea = getDiamondArea;
function getTrapezeArea(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.getTrapezeArea = getTrapezeArea;
function getCircleArea(radius) {
    return Math.PI * radius ** 2;
}
exports.getCircleArea = getCircleArea;
