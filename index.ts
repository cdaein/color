const hsvrgb = require("hsv2rgb");

// REVIEW: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
/**
 * convert normalized HSB color to RGB
 * @param arr [h, s, v] or [h, s, v, a]
 * @returns RGB color array[3 or 4] in 0..255
 */
export function hsv2rgb(arr: number[]): number[];
/**
 * convert normalized HSB color to RGB
 * @param h normalized hue 0..1 (wrapped)
 * @param s normalized saturation 0..1 (clamped)
 * @param v normalized brightness 0..1 (clamped)
 * @returns RGB color array[3] in 0..255
 */
export function hsv2rgb(h: number, s: number, v: number): number[];
/**
 * convert normalized HSB color to RGB
 * @param h normalized hue 0..1 (wrapped)
 * @param s normalized saturation 0..1 (clamped)
 * @param v normalized brightness 0..1 (clamped)
 * @param a alpha 0..1 passed-through
 * @returns RGB color array[4] in 0..255
 */
export function hsv2rgb(h: number, s: number, v: number, a: number): number[];
/**
 * convert normalized HSB color to RGB
 * @param hOrArr normalized hue 0..1 (wrapped)
 * @param s normalized saturation 0..1 (clamped)
 * @param v normalized brightness 0..1 (clamped)
 * @param a alpha 0..1 passed-through
 * @returns RGB color array in 0..255
 */
export function hsv2rgb(hOrArr: any, s?: number, v?: number, a?: number) {
  if (s !== undefined && v !== undefined && a !== undefined) {
    // (h, s, v, a)
    return [...hsvrgb(hOrArr * 360, s, v), a];
  } else if (s !== undefined && v !== undefined) {
    // (h, s, v)
    return [...hsvrgb(hOrArr * 360, s, v)];
  } else if (s === undefined) {
    // ([h, s, v]) or ([h, s, v, a])
    hOrArr[0] *= 360;
    if (hOrArr.length === 3) {
      return [...hsvrgb(...hOrArr)];
    } else if (hOrArr.length === 4) {
      // hsvrgb's 4th argument is NOT alpha but out array
      return [...hsvrgb(...hOrArr.slice(0, 3)), hOrArr[3]];
    }
  }
  throw new Error(
    "hsv2rgb(): doesn't support the type or length of arguments provided"
  );
}
export const hsb2rgb = hsv2rgb;

export function rgb2hsv(arr: number[]): number[];
export function rgb2hsv(r: number, g: number, b: number): number[];
export function rgb2hsv(r: number, g: number, b: number, a: number): number[];
export function rgb2hsv(
  rOrArr: any,
  g?: number,
  b?: number,
  a?: number
): number[] {
  return [];
}

export function hex2rgb() {
  //
}
