"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hex2rgb = exports.rgb2hsv = exports.hsb2rgb = exports.hsv2rgb = void 0;
const hsvrgb = require("hsv2rgb");
/**
 * convert normalized HSB color to RGB
 * @param hOrArr normalized hue 0..1 (wrapped)
 * @param s normalized saturation 0..1 (clamped)
 * @param v normalized brightness 0..1 (clamped)
 * @param a alpha 0..1 passed-through
 * @returns RGB color array in 0..255
 */
function hsv2rgb(hOrArr, s, v, a) {
    if (s !== undefined && v !== undefined && a !== undefined) {
        // (h, s, v, a)
        return [...hsvrgb(hOrArr * 360, s, v), a];
    }
    else if (s !== undefined && v !== undefined) {
        // (h, s, v)
        return [...hsvrgb(hOrArr * 360, s, v)];
    }
    else if (s === undefined) {
        // ([h, s, v]) or ([h, s, v, a])
        hOrArr[0] *= 360;
        if (hOrArr.length === 3) {
            return [...hsvrgb(...hOrArr)];
        }
        else if (hOrArr.length === 4) {
            // hsvrgb's 4th argument is NOT alpha but out array
            return [...hsvrgb(...hOrArr.slice(0, 3)), hOrArr[3]];
        }
    }
    throw new Error("hsv2rgb(): doesn't support the type or length of arguments provided");
}
exports.hsv2rgb = hsv2rgb;
exports.hsb2rgb = hsv2rgb;
function rgb2hsv(rOrArr, g, b, a) {
    return [];
}
exports.rgb2hsv = rgb2hsv;
function hex2rgb() {
    //
}
exports.hex2rgb = hex2rgb;
//# sourceMappingURL=index.js.map