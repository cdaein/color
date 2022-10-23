"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hex2rgb = exports.rgb2hsv = exports.hsb2rgb = exports.hsv2rgb = void 0;
const hsvrgb = require("hsv2rgb");
const rgbhsv = require("rgb-hsv");
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
        hOrArr[0] *= 360;
        if (hOrArr.length === 3) {
            // ([h, s, v])
            return [...hsvrgb(...hOrArr)];
        }
        else if (hOrArr.length === 4) {
            // ([h, s, v, a])
            // hsvrgb's 4th argument is NOT alpha but out array
            return [...hsvrgb(...hOrArr.slice(0, 3)), hOrArr[3]];
        }
    }
    throw new Error("hsv2rgb(): doesn't support the type or length of arguments provided");
}
exports.hsv2rgb = hsv2rgb;
exports.hsb2rgb = hsv2rgb;
/**
 * convert RGB color to normalized HSV
 * @param rOrArr red 0..255
 * @param g green 0..255
 * @param b blue 0..255
 * @param a alpha 0..1
 * @returns HSV color array in 0..1
 */
function rgb2hsv(rOrArr, g, b, a) {
    if (g !== undefined && b !== undefined && a !== undefined) {
        // (r, g, b, a)
        const v = rgbhsv(rOrArr, g, b);
        return [v[0] / 360, v[1] / 100, v[2] / 100, a];
    }
    else if (g !== undefined && b !== undefined) {
        // (r, g, b)
        const v = rgbhsv(rOrArr, g, b);
        return [v[0] / 360, v[1] / 100, v[2] / 100];
    }
    else if (g === undefined) {
        if (rOrArr.length === 3) {
            // [(r, g, b)]
            const v = rgbhsv(...rOrArr);
            return [v[0] / 360, v[1] / 100, v[2] / 100];
        }
        else if (rOrArr.length === 4) {
            // [(r, g, b, a)]
            const v = rgbhsv(...rOrArr.slice(0, 3));
            return [v[0] / 360, v[1] / 100, v[2] / 100, rOrArr[3]];
        }
    }
    throw new Error("rgb2hsv(): doesn't support the type or length of arguments provided");
}
exports.rgb2hsv = rgb2hsv;
/**
 * converts hexadecimal color to RGB/RGBA.
 *
 * It also supports shorthand hex color with alpha - ex. #f0ac (last char is alpha)
 * @param hex hex color string. ex. `#f0a`, `#ccfa`, `#ff00cc` or `#aacc99ff`
 * @returns [r, g, b] or [r, g, b, a]
 */
function hex2rgb(hex) {
    let rgb;
    if (hex.length === 7 || hex.length === 9) {
        // #rrggbb or #rrbbggaa
        rgb = hex.substring(1, 9).match(/.{2}/g);
        if (rgb) {
            return rgb.map((val, i) => {
                let newval = parseInt(val, 16);
                if (i === 3)
                    newval /= 255; // normalize alpha channel
                return newval;
            });
        }
    }
    else if (hex.length === 4 || hex.length === 5) {
        // #rgb or #rgba
        rgb = hex.substring(1, 5).match(/.{1}/g);
        if (rgb) {
            return rgb.map((val, i) => {
                let newval = parseInt(val + val, 16); // repeat twice for shorthand hex value
                if (i === 3)
                    newval /= 255;
                return newval;
            });
        }
    }
    throw new Error("hex2rgb(): doesn't support the length or value of string argument provided");
}
exports.hex2rgb = hex2rgb;
//# sourceMappingURL=index.js.map