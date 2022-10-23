/**
 * default data type is array for any color.
 *
 * */
/**
 * convert normalized HSB color to RGB
 * @param arr [h, s, v] or [h, s, v, a]
 */
export declare function hsv2rgb(arr: number[]): number[];
/**
 * convert normalized HSB color to RGB
 * @param h normalized hue 0..1 (wrapped)
 * @param s normalized saturation 0..1 (clamped)
 * @param v normalized brightness 0..1 (clamped)
 */
export declare function hsv2rgb(h: number, s: number, v: number): number[];
/**
 * convert normalized HSB color to RGB
 * @param h normalized hue 0..1 (wrapped)
 * @param s normalized saturation 0..1 (clamped)
 * @param v normalized brightness 0..1 (clamped)
 * @param a alpha 0..1 passed-through
 */
export declare function hsv2rgb(h: number, s: number, v: number, a: number): number[];
export declare const hsb2rgb: typeof hsv2rgb;
//# sourceMappingURL=index.d.ts.map